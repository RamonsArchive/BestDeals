// facebookscraper.ts
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// First, ensure the required packages are installed
// You'll need to run these commands in your project:
// npm install playwright scrapy-playwright ts-node

// Function to convert ZIP code to coordinates
async function zipToCoordinates(zipCode: string) {
    try {
        // Using a free geocoding API to convert ZIP code to coordinates
        const response = await fetch(`https://api.zippopotam.us/us/${zipCode}`);
        const data = await response.json();

        if (!data || !data.places || data.places.length === 0) {
            throw new Error("Invalid ZIP code or unable to find coordinates");
        }

        const latitude = parseFloat(data.places[0].latitude);
        const longitude = parseFloat(data.places[0].longitude);

        return { latitude, longitude };
    } catch (error) {
        console.error("Error converting ZIP code to coordinates:", (error as any).message);
        // Return default coordinates for Riverside as fallback
        return { latitude: 33.9533, longitude: -117.3961 };
    }
}

// Function to generate coordinate matrix for multiple requests
function generateCoordinateMatrix(centerLat: number, centerLng: number, radiusKm: number, numPoints: number) {
    const coordinates = [];

    // Add center point
    coordinates.push({ latitude: centerLat, longitude: centerLng });

    // Generate points in a circle around the center
    const angleStep = (2 * Math.PI) / (numPoints - 1);

    for (let i = 0; i < numPoints - 1; i++) {
        const angle = i * angleStep;
        // Convert km to degrees (approximate)
        const latOffset = (radiusKm / 111) * Math.cos(angle);
        const lngOffset = (radiusKm / 111) * Math.sin(angle) / Math.cos(centerLat * Math.PI / 180);

        const latitude = centerLat + latOffset;
        const longitude = centerLng + lngOffset;

        coordinates.push({ latitude, longitude });
    }

    return coordinates;
}

interface ListingType {
    title: string;
    price: string;
    location_city: string;
    location_state: string;
    id: string;
    url: string;
    photo_url: string;
    miles: string;
}

// Main function to collect data using Scrapy-Playwright
export async function collectDataFromMultipleLocations(
    path: string = "/",
    query: string = "",
    zip: string = "92507",
    min: string = "0",
    max: string = "1000",
    radius: string = "25"
): Promise<ListingType[]> {
    try {
        console.log(`\nSearching for "${query || 'all items'}" around ZIP code ${zip}...`);
        
        // Set default values if parameters are empty
        const searchQuery = query || "";
        const zipCode = zip || "92507"; // Default to Riverside, CA
        const minPrice = parseInt(min) || 0;
        const maxPrice = parseInt(max) || 1000;
        const searchRadius = parseInt(radius) || 25; // Default radius in km
        
        // Convert ZIP to coordinates
        const { latitude, longitude } = await zipToCoordinates(zipCode);
        console.log(`Using coordinates: Latitude ${latitude}, Longitude ${longitude}`);

        // Generate coordinate matrix for multiple requests (center + 4 points around it)
        const coordinates = generateCoordinateMatrix(latitude, longitude, searchRadius, 5);
        console.log(`Generated ${coordinates.length} locations for search`);
        
        // Create scrapy spider file
        createScrapySpider(searchQuery, coordinates, minPrice, maxPrice);

        // Run the spider and collect results
        console.log("\nStarting Scrapy-Playwright spider...");
        runScrapySpider();

        // Read results from output file
        const results = readResults();
        console.log(`Collected ${results.length} listings`);
        
        return results;
    } catch (error) {
        console.error("Error:", (error as any).message);
        return [];
    }
}

// Function to create the Scrapy spider Python file
function createScrapySpider(
    query: string,
    coordinates: { latitude: number, longitude: number }[],
    minPrice: number,
    maxPrice: number
) {
    const spiderDir = path.join(process.cwd(), 'facebook_spider');
    
    // Create spider directory if it doesn't exist
    if (!fs.existsSync(spiderDir)) {
        fs.mkdirSync(spiderDir, { recursive: true });
    }
    
    // Create __init__.py to make it a proper Python package
    fs.writeFileSync(path.join(spiderDir, '__init__.py'), '');
    
    // Create the spider file
    const spiderCode = `
import scrapy
from scrapy_playwright.page import PageMethod
import json
import re

class FacebookMarketplaceSpider(scrapy.Spider):
    name = 'facebook_marketplace'
    
    def __init__(self, *args, **kwargs):
        super(FacebookMarketplaceSpider, self).__init__(*args, **kwargs)
        self.query = "${query}"
        self.coordinates = ${JSON.stringify(coordinates)}
        self.min_price = ${minPrice}
        self.max_price = ${maxPrice}
        self.results = []
        
    def start_requests(self):
        # Generate requests for each coordinate set
        for i, coord in enumerate(self.coordinates):
            latitude = coord['latitude']
            longitude = coord['longitude']
            
            url = f"https://www.facebook.com/marketplace/category/search/?query={self.query}"
            
            # Using Playwright to handle JavaScript and cookies
            yield scrapy.Request(
                url=url,
                callback=self.parse,
                meta={
                    "playwright": True,
                    "playwright_include_page": True,
                    "playwright_page_methods": [
                        PageMethod("wait_for_selector", "div[role='main']", timeout=30000),
                        # Set location parameters via JavaScript
                        PageMethod("evaluate", f"""
                            window.marketplace_location = {{
                                latitude: {latitude},
                                longitude: {longitude},
                                min_price: {self.min_price}00,
                                max_price: {self.max_price}00
                            }};
                        """),
                        # Add some delay to ensure the page loads
                        PageMethod("wait_for_timeout", 3000)
                    ],
                    "coordinate_idx": i,
                    "latitude": latitude,
                    "longitude": longitude
                }
            )
    
    async def parse(self, response):
        page = response.meta["playwright_page"]
        
        try:
            # Execute JavaScript in the page to extract listings
            listings = await page.evaluate(f"""
                async function extractListings() {{
                    // Intercept GraphQL request responses
                    let listingsData = [];
                    
                    // Scroll down to load more items (infinite scroll simulation)
                    async function scrollDown() {{
                        window.scrollTo(0, document.body.scrollHeight);
                        await new Promise(resolve => setTimeout(resolve, 2000));
                    }}
                    
                    // Scroll a few times to load more content
                    for (let i = 0; i < 3; i++) {{
                        await scrollDown();
                    }}
                    
                    // Extract listing elements
                    const listingElements = document.querySelectorAll('div[data-pagelet="MarketplaceSearch"] > div > div > div');
                    
                    for (const element of listingElements) {{
                        try {{
                            // Try to extract listing details from the element
                            const titleEl = element.querySelector('span[dir="auto"]');
                            const priceEl = element.querySelector('span[dir="auto"] + span');
                            const linkEl = element.querySelector('a[href*="/marketplace/item/"]');
                            const imageEl = element.querySelector('img');
                            
                            if (titleEl && priceEl && linkEl) {{
                                const title = titleEl.textContent;
                                const price = priceEl.textContent;
                                const url = linkEl.href;
                                const id = url.match(/item\\/([0-9]+)/)?.[1] || "";
                                const photo_url = imageEl ? imageEl.src : "";
                                
                                // Location info (if available)
                                const subtitleEls = element.querySelectorAll('span[dir="auto"]');
                                let location = subtitleEls.length > 2 ? subtitleEls[2].textContent : "N/A";
                                let miles = "";
                                
                                // Try to split location and miles
                                if (location.includes('·')) {{
                                    const parts = location.split('·').map(p => p.trim());
                                    location = parts[0];
                                    miles = parts.length > 1 ? parts[1] : "";
                                }}
                                
                                // Split city and state
                                let location_city = location;
                                let location_state = "N/A";
                                
                                if (location.includes(',')) {{
                                    const parts = location.split(',').map(p => p.trim());
                                    location_city = parts[0];
                                    location_state = parts.length > 1 ? parts[1] : "N/A";
                                }}
                                
                                listingsData.push({{
                                    title,
                                    price,
                                    location_city,
                                    location_state,
                                    id,
                                    url,
                                    photo_url,
                                    miles
                                }});
                            }}
                        }} catch (e) {{
                            // Skip this element if there's an error
                            console.error("Error extracting listing:", e);
                        }}
                    }}
                    
                    return listingsData;
                }}
                
                return await extractListings();
            """)
            
            # Add results to our list
            for listing in listings:
                self.results.append(listing)
                yield listing
            
            # Log progress
            coord_idx = response.meta["coordinate_idx"]
            print(f"Processed location {coord_idx + 1}/{len(self.coordinates)} - Found {len(listings)} listings")
            
        finally:
            # Always close the page to avoid resource leaks
            await page.close()
    
    def closed(self, reason):
        # Save all results to a file when spider is closed
        with open('facebook_marketplace_results.json', 'w') as f:
            json.dump(self.results, f)
        print(f"Spider closed: {reason}. Saved {len(self.results)} listings to facebook_marketplace_results.json")
`;

    fs.writeFileSync(path.join(spiderDir, 'facebook_spider.py'), spiderCode);
    
    // Create settings.py
    const settingsCode = `
BOT_NAME = 'facebook_spider'

SPIDER_MODULES = ['facebook_spider']
NEWSPIDER_MODULE = 'facebook_spider'

# User agent
USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36'

# Obey robots.txt rules
ROBOTSTXT_OBEY = False

# Configure maximum concurrent requests
CONCURRENT_REQUESTS = 1

# Configure a delay for requests for the same website (default: 0)
DOWNLOAD_DELAY = 3

# Disable cookies (enabled by default)
COOKIES_ENABLED = True

# Enable Playwright
DOWNLOAD_HANDLERS = {
    "http": "scrapy_playwright.handler.ScrapyPlaywrightDownloadHandler",
    "https": "scrapy_playwright.handler.ScrapyPlaywrightDownloadHandler",
}

TWISTED_REACTOR = "twisted.internet.asyncioreactor.AsyncioSelectorReactor"

# Configure Playwright
PLAYWRIGHT_LAUNCH_OPTIONS = {
    "headless": True,
    "timeout": 60000,
}

# Retry middleware settings
RETRY_ENABLED = True
RETRY_TIMES = 3
RETRY_HTTP_CODES = [500, 502, 503, 504, 408, 429]

# Disable redirects
REDIRECT_ENABLED = False
`;

    fs.writeFileSync(path.join(spiderDir, 'settings.py'), settingsCode);
    
    console.log("Created Scrapy-Playwright spider files");
}

// Function to run the Scrapy spider using Python
function runScrapySpider() {
    try {
        // Execute the spider
        execSync('python -m scrapy crawl facebook_marketplace -s PLAYWRIGHT_BROWSER_TYPE=chromium', {
            cwd: process.cwd(),
            stdio: 'inherit'
        });
    } catch (error) {
        console.error("Error running Scrapy spider:", (error as any).message);
        throw error;
    }
}

// Function to read the results from the output file
function readResults(): ListingType[] {
    try {
        const resultsPath = path.join(process.cwd(), 'facebook_marketplace_results.json');
        
        if (fs.existsSync(resultsPath)) {
            const rawData = fs.readFileSync(resultsPath, 'utf8');
            return JSON.parse(rawData) as ListingType[];
        }
        
        return [];
    } catch (error) {
        console.error("Error reading results:", (error as any).message);
        return [];
    }
}

// Example usage:
// import { collectDataFromMultipleLocations } from './facebookscraper';
// 
// async function main() {
//     const listings = await collectDataFromMultipleLocations(
//         "/",           // path
//         "lexus",       // search query
//         "92507",       // zip code
//         "1000",        // min price
//         "20000",       // max price
//         "25"           // radius in km
//     );
//     
//     console.log(`Found ${listings.length} listings`);
//     console.log(listings.slice(0, 5)); // Show first 5 listings
// }
// 
// main().catch(console.error);
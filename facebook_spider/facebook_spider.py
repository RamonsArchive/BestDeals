
import scrapy
from scrapy_playwright.page import PageMethod
import json
import re

class FacebookMarketplaceSpider(scrapy.Spider):
    name = 'facebook_marketplace'
    
    def __init__(self, *args, **kwargs):
        super(FacebookMarketplaceSpider, self).__init__(*args, **kwargs)
        self.query = ""
        self.coordinates = [{"latitude":33.9761,"longitude":-117.3389},{"latitude":34.201325225225226,"longitude":-117.3389},{"latitude":33.9761,"longitude":-117.06730568308527},{"latitude":33.75087477477478,"longitude":-117.3389},{"latitude":33.9761,"longitude":-117.61049431691472}]
        self.min_price = 0
        self.max_price = 1000
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
                                const id = url.match(/item\/([0-9]+)/)?.[1] || "";
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

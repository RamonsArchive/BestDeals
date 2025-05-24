import requests
import pandas as pd
import json
import time
from datetime import datetime
import os
import mysql.connector
from sqlalchemy import create_engine
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

class FacebookMarketplaceGraphQLScraper:
    def __init__(self):
        """
        Initialize the Facebook Marketplace GraphQL API scraper
        """
        # Base URLs and endpoints
        self.base_url = "https://www.facebook.com"
        self.graphql_endpoint = "https://www.facebook.com/api/graphql/"
        
        # Headers to mimic browser requests
        self.headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            "Accept": "*/*",
            "Accept-Language": "en-US,en;q=0.9",
            "Content-Type": "application/x-www-form-urlencoded",
            "Origin": "https://www.facebook.com",
            "Referer": "https://www.facebook.com/marketplace/",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin"
        }
        
        # Session to maintain cookies
        self.session = requests.Session()
        self.session.headers.update(self.headers)
        
        # Authentication state and credentials
        self.is_authenticated = False
        self.auth_tokens = {}
        
        # Default city
        self.default_city = "san diego"
        
        # Database connection
        self.db_connection = None
        self.engine = None
        
    def connect_to_db(self, host="localhost", user="root", password="0033Fortnite*", database="BestDeals"):
        """Connect to MySQL database"""
        try:
            self.db_connection = mysql.connector.connect(
                host=host,
                user=user, 
                password=password,
                database=database
            )
            # Create sqlalchemy engine
            self.engine = create_engine(f"mysql+mysqlconnector://{user}:{password}@{host}/{database}")
            
            # Create table if not exists
            cursor = self.db_connection.cursor()
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS marketplace_listings (
                id INT AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(255),
                price FLOAT,
                price_string VARCHAR(50),
                location VARCHAR(255),
                image_url TEXT,
                url TEXT,
                listing_id VARCHAR(100),
                seller_id VARCHAR(100),
                condition VARCHAR(50), 
                category VARCHAR(100),
                description TEXT,
                scraped_at DATETIME
            )
            """)
            self.db_connection.commit()
            
            print("Successfully connected to database")
            return True
        except Exception as e:
            print(f"Database connection error: {e}")
            return False
    
    def authenticate(self):
        """
        Authenticate with Facebook
        """
        email = 'molokic228@hotmail.com'
        password = 'Facebook_huy228'
        
        try:
            # First load the Facebook homepage to get initial cookies
            response = self.session.get(self.base_url)
            
            # Extract necessary tokens for login
            lsd_token = self._extract_form_token(response.text, "lsd")
            
            # Prepare login data
            login_data = {
                "email": email,
                "pass": password,
                "lsd": lsd_token,
                "next": "",
                "login_source": "comet_headerless",
                "default_actor": "0",
                "locale": "en_US"
            }
            
            # Submit login form
            login_response = self.session.post(
                "https://www.facebook.com/login/device-based/regular/login/",
                data=login_data
            )
            
            # Check if login was successful by looking for specific redirects or elements
            if "checkpoint" in login_response.url:
                print("Login requires additional verification")
                return False
                
            # Check for successful login by attempting to access the marketplace
            test_response = self.session.get("https://www.facebook.com/marketplace/")
            if "logout.php" in test_response.text:
                print("Authentication successful")
                
                # Extract dtsg token from the page (needed for GraphQL requests)
                self.auth_tokens["fb_dtsg"] = self._extract_dtsg_token(test_response.text)
                self.is_authenticated = True
                return True
            else:
                print("Authentication failed")
                return False
                
        except Exception as e:
            print(f"Authentication error: {e}")
            return False
    
    def _extract_form_token(self, html_content, token_name):
        """Extract a form token from HTML content"""
        import re
        pattern = f'name="{token_name}" value="([^"]+)"'
        match = re.search(pattern, html_content)
        if match:
            return match.group(1)
        return ""
    
    def _extract_dtsg_token(self, html_content):
        """Extract the fb_dtsg token needed for GraphQL requests"""
        import re
        pattern = r'{"token":"([^"]+)","async_get_token":"([^"]+)"}'
        match = re.search(pattern, html_content)
        if match:
            return match.group(1)
            
        # Alternative pattern
        pattern = r'"DTSGInitialData",\[\],{"token":"([^"]+)"}'
        match = re.search(pattern, html_content)
        if match:
            return match.group(1)
            
        # Another common pattern
        pattern = r'name="fb_dtsg" value="([^"]+)"'
        match = re.search(pattern, html_content)
        if match:
            return match.group(1)
            
        return None
    
    def _get_location_id(self, city_name):
        """Get location ID for the specified city using GraphQL"""
        if not self.is_authenticated:
            print("Not authenticated. Please authenticate first.")
            return None
            
        try:
            # GraphQL query for location search
            location_variables = {
                "query": city_name,
                "source": "MARKETPLACE",
                "sessionID": f"search-{int(time.time())}"
            }
            
            location_doc_id = "6601608486635762"  # Document ID for location search API
            
            payload = {
                "variables": json.dumps(location_variables),
                "doc_id": location_doc_id,
                "fb_dtsg": self.auth_tokens.get("fb_dtsg", "")
            }
            
            # Send request
            response = self.session.post(self.graphql_endpoint, data=payload)
            data = response.json()
            
            # Extract location ID from response
            try:
                locations = data.get("data", {}).get("marketplace_location_typeahead", {}).get("edges", [])
                if locations:
                    location_id = locations[0].get("node", {}).get("id")
                    return location_id
            except (KeyError, IndexError) as e:
                print(f"Error extracting location ID: {e}")
                
            return None
            
        except Exception as e:
            print(f"Error getting location ID: {e}")
            return None
    
    def search_marketplace(self, query=None, city=None, max_items=50):
        """
        Search Facebook Marketplace using GraphQL API
        
        Args:
            query (str): Search query
            city (str): City to search in (defaults to San Diego)
            max_items (int): Maximum number of items to fetch
        """
        if not query:
            query = ""  # Empty query will return all items
            
        if not city:
            city = self.default_city
            
        if not self.is_authenticated:
            print("Not authenticated. Attempting authentication...")
            success = self.authenticate()
            if not success:
                print("Authentication failed. Cannot proceed with search.")
                return pd.DataFrame()
        
        try:
            # Get location ID
            location_id = self._get_location_id(city)
            if not location_id:
                print(f"Could not find location ID for city: {city}")
                return pd.DataFrame()
                
            print(f"Using location ID: {location_id} for {city}")
            
            # GraphQL query for marketplace search
            marketplace_variables = {
                "buyLocation": {
                    "latitude": 0,  # These will be ignored since we're using locationID
                    "longitude": 0,
                    "locationID": location_id
                },
                "count": min(max_items, 48),  # Facebook typically returns up to 48 items per request
                "cursor": None,
                "query": query,
                "filter": {
                    "categoryIDArray": [],
                    "saleType": "FIXED_PRICE",  # Can be adjusted as needed
                    "vehicleParams": {},
                    "propertyParams": {}
                }
            }
            
            # Facebook uses specific doc_id for marketplace search API
            doc_id = "4977920365611217"  # This may need updating periodically
            
            payload = {
                "variables": json.dumps(marketplace_variables),
                "doc_id": doc_id,
                "fb_dtsg": self.auth_tokens.get("fb_dtsg", "")
            }
            
            # Send GraphQL request
            response = self.session.post(self.graphql_endpoint, data=payload)
            data = response.json()
            
            # Parse the response
            listings = []
            if "data" in data and "marketplace_search" in data["data"]:
                feed_units = data["data"]["marketplace_search"]["feed_units"]["edges"]
                
                for edge in feed_units:
                    try:
                        node = edge["node"]
                        listing = node.get("listing", {})
                        
                        # Skip non-listing items
                        if not listing:
                            continue
                            
                        # Extract listing ID and create URL
                        listing_id = listing.get("id")
                        url = f"https://www.facebook.com/marketplace/item/{listing_id}/"
                        
                        # Extract price data
                        price_info = listing.get("price_amount", {})
                        price = price_info.get("amount", 0)
                        currency = price_info.get("currency", "USD")
                        formatted_price = f"{currency} {price}"
                        
                        # Extract location
                        location_info = listing.get("location", {})
                        location_name = location_info.get("reverse_geocode", {}).get("city", "")
                        
                        # Extract image URL (primary photo)
                        image_url = None
                        primary_photo = listing.get("primary_listing_photo", {})
                        if primary_photo:
                            image_sets = primary_photo.get("image", {}).get("uri_images", {})
                            # Get highest resolution image
                            for size in ["original", "480", "360", "240", "180"]:
                                if size in image_sets:
                                    image_url = image_sets[size]
                                    break
                        
                        # Extract other details
                        title = listing.get("marketplace_listing_title", "")
                        condition = listing.get("condition", "")
                        seller_id = listing.get("marketplace_listing_seller", {}).get("id", "")
                        category = node.get("category_name", "")
                        description = listing.get("description", "")
                        
                        # Create listing data dictionary
                        listing_data = {
                            "listing_id": listing_id,
                            "title": title,
                            "price": price,
                            "price_string": formatted_price,
                            "location": location_name,
                            "image_url": image_url,
                            "url": url,
                            "seller_id": seller_id,
                            "condition": condition,
                            "category": category,
                            "description": description,
                            "scraped_at": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                        }
                        
                        listings.append(listing_data)
                        
                    except Exception as e:
                        print(f"Error parsing listing: {e}")
                
                print(f"Successfully extracted {len(listings)} listings")
                
            else:
                print("No search results found or unexpected response format")
                
            # Convert to DataFrame
            df = pd.DataFrame(listings)
            
            # Ensure all columns exist
            required_columns = ["title", "price", "price_string", "location", "image_url", "url", 
                               "listing_id", "seller_id", "condition", "category", "description", "scraped_at"]
            
            for column in required_columns:
                if column not in df.columns:
                    df[column] = None
                    
            return df
            
        except Exception as e:
            print(f"Error during marketplace search: {e}")
            return pd.DataFrame()
    
    def write_to_database(self, df, table_name="marketplace_listings"):
        """Write the scraped data to MySQL database"""
        if df.empty:
            print("No data to write to database")
            return False
            
        try:
            # Use SQLAlchemy for easy DataFrame writing
            df.to_sql(table_name, con=self.engine, if_exists='append', index=False)
            print(f"Successfully saved {len(df)} records to database table '{table_name}'")
            return True
        except Exception as e:
            print(f"Database write error: {e}")
            return False
    
    def save_to_csv(self, df, filename=None):
        """Save the DataFrame to a CSV file"""
        if df.empty:
            print("No data to save to CSV")
            return False
            
        if filename is None:
            # Generate filename with timestamp
            timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
            filename = f"facebook_marketplace_{timestamp}.csv"
            
        try:
            df.to_csv(filename, index=False, encoding='utf-8')
            print(f"Data saved to {filename}")
            return True
        except Exception as e:
            print(f"Error saving to CSV: {e}")
            return False
    
    def close(self):
        """Close connections"""
        if self.db_connection:
            try:
                self.db_connection.close()
                print("Database connection closed")
            except:
                pass

    def initialize_with_cookies(self, cookies_dict):
        """
        Initialize session with existing cookies instead of authentication
        """
        # Create a cookiejar from the dictionary
        for cookie_name, cookie_value in cookies_dict.items():
            self.session.cookies.set(cookie_name, cookie_value, domain='.facebook.com')
        
        # Test if cookies are valid by accessing marketplace
        try:
            test_response = self.session.get("https://www.facebook.com/marketplace/")
            
            # Extract dtsg token from the page (needed for GraphQL requests)
            self.auth_tokens["fb_dtsg"] = self._extract_dtsg_token(test_response.text)
            
            if self.auth_tokens["fb_dtsg"]:
                print("Session cookies valid, successfully extracted fb_dtsg token")
                self.is_authenticated = True
                return True
            else:
                print("Could not extract fb_dtsg token, cookies may be invalid")
                return False
        except Exception as e:
            print(f"Error testing session cookies: {e}")
            return False


# Example usage
if __name__ == "__main__":
    # Initialize scraper
    scraper = FacebookMarketplaceGraphQLScraper()
    
    try:
        # Connect to database
        scraper.connect_to_db()

        cookies = {
            "c_user": "61569189908839",
            "xs": "11%3ArSmA7KP8QAWzoQ%3A2%3A1744960514%3A-1%3A3932%3A%3AAcV9tj5gi06xfB3dDxADukOnaL8U4wJ3Z61qUEjMkX8",
            "fr": "1IFvDUgVgyCan1iIH.AWcob5FSQkoXyUOYVxiywc86PWdVU341pye1dW34SZ-N0v2MdRY.BoBKUm..AAA.0.0.BoBKUm.AWcIeHI0hb6gTnqSwbE4JA1kdhg",
            "datr": "R1LiZ_ZKc9Ym86019x4m-fJN"
        }
        
        # Authenticate with Facebook
        if scraper.initialize_with_cookies(cookies):
            # Define search parameters
            search_query = "desk"  # Item to search for
            search_city = "san diego"  # Default city
            
            # Scrape marketplace listings
            results = scraper.search_marketplace(
                query=search_query,
                city=search_city,
                max_items=50
            )
            
            # Save results
            if not results.empty:
                # Save to database
                scraper.write_to_database(results)
                
                # Save to CSV
                filename = f"{search_city.replace(' ', '_')}_{search_query}_{datetime.now().strftime('%Y%m%d')}.csv"
                scraper.save_to_csv(results, filename)
            else:
                print("No results found")
        else:
            print("Authentication failed. Cannot proceed with scraping.")
    
    except Exception as e:
        print(f"An error occurred during scraping: {e}")
    
    finally:
        # Close all connections
        scraper.close()
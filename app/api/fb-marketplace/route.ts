// app/api/fb-marketplace/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import util from 'util';
import mysql from 'mysql2/promise';
import { ProductType } from '@/lib/globalTypes'; // Adjust to your actual types

// Convert exec to Promise-based
const execPromise = util.promisify(exec);

// Function to run the Python scraper
async function runScraper(city: string, query: string): Promise<void> {
  try {
    console.log(`Running scraper for ${city} and query: ${query}`);
    const pythonScript = 'facebook_marketplace_scraper_light.py';
    const command = `python3 ${pythonScript} --city ${city} --query "${query}"`;
    
    const { stdout, stderr } = await execPromise(command);
    
    if (stderr) {
      console.error('Scraper Error:', stderr);
    }
    
    console.log('Scraper Output:', stdout);
  } catch (error) {
    console.error('Failed to run scraper:', error);
    throw new Error('Scraper execution failed');
  }
}

// Function to fetch data from database
async function fetchFromDatabase(city: string, query: string, sortBy?: string): Promise<ProductType[]> {
  // Database connection
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'marketplace_data'
  });

  try {
    // Get latest results from database for this city/query
    const [rows] = await connection.query(
      `SELECT * FROM marketplace_listings 
       WHERE scraped_at >= DATE_SUB(NOW(), INTERVAL 12 HOUR)
       ORDER BY scraped_at DESC`
    );

    // Transform DB results to match ProductType
    const products = (rows as any[]).map(item => ({
      id: item.id,
      price: item.price,
      description: item.title || '', // Using title as description
      location: item.location || '',
      link: item.image_url || 'https://placehold.co/600x400?text=No+Image',
      url: item.url || '',
      deal: '', // Deal field not available in scraped data
      scraped_at: item.scraped_at
    }));

    // Sort results if needed
    if (sortBy) {
      switch (sortBy.toLowerCase()) {
        case 'newest':
          products.sort((a, b) => 
            new Date(b.scraped_at).getTime() - new Date(a.scraped_at).getTime());
          break;
        case 'oldest':
          products.sort((a, b) => 
            new Date(a.scraped_at).getTime() - new Date(b.scraped_at).getTime());
          break;
        case 'lowest price':
          products.sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity));
          break;
        case 'highest price':
          products.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
          break;
      }
    }

    // Add new_price_column field required by ProductType
    const productsWithNewPrice = products.map(product => ({
      ...product,
      new_price_column: null // Set default value for new_price_column
    }));

    return productsWithNewPrice;
  } finally {
    await connection.end();
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const city = searchParams.get('city') || 'seattle';
  const query = searchParams.get('query') || '';
  const sortBy = searchParams.get('sortBy') || '';
  const forceRefresh = searchParams.get('refresh') === 'true';

  try {
    // Only run the scraper if forced or it's been a while since last scrape
    if (forceRefresh) {
      await runScraper(city, query);
      // Add a small delay to ensure DB write completes
      await new Promise(resolve => setTimeout(resolve, 2000));
    }

    // Fetch results from database
    const products = await fetchFromDatabase(city, query, sortBy);

    return NextResponse.json({ products });
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch marketplace listings' },
      { status: 500 }
    );
  }
}
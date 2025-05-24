"use server";
import {prisma} from "./prisma";
import { ProductType } from "./globalTypes";
import { signIn, signOut } from "@/auth";
import { parseServerActionResponse } from "./utils";
import {collectDataFromMultipleLocations} from "./facebookscrap";


// Helper function for client-side sorting when needed


export const fetchProducts = async (userId: string | undefined, query: string, filters: string, zip: string, min: string, max: string, radius: string) => {
    try {
        const face_book_data = await collectDataFromMultipleLocations(query, zip, min, max, radius);
        return face_book_data;
        
    } catch(error) {
        console.error('Error fetching all products:', error);
        return [];
    }
}


export const fetchHeartedProducts = async (userId: string) => {
    try {
        // First get the Prisma user ID
        const user = await prisma.user.findUnique({
            where: { userId: userId },
            select: { id: true }
        });

        if (!user) return [];

        const heartedProducts = await prisma.userHeartedProduct.findMany({
            where: {
                userId: user.id
            },
            include: {
                product: {
                    select: {
                        id: true,
                        price: true,
                        description: true,
                        location: true,
                        link: true,
                        new_price_column: true,
                        deal: true,
                    }
                }
            }
        });

        return heartedProducts.map(hp => ({
            ...hp.product,
            price: hp.product.price ? Number(hp.product.price) : null,
            new_price_column: hp.product.new_price_column ? Number(hp.product.new_price_column) : null,
            description: hp.product.description || '',
            location: hp.product.location || '',
            link: 'https://placehold.co/600x400?text=No+Image',
            deal: hp.product.deal || ''
        }));
    } catch (error) {
        console.error('Error fetching hearted products:', error);
        return [];
    }
};


















/* export const fetchAllProducts = async (sortBy?: string): Promise<ProductType[]> => {
    try {
        const items = await prisma.items6.findMany({
            select: {
                id: true,
                price: true,
                description: true,
                location: true,
                link: true,
                new_price_column: true,
                deal: true,
            }
        });
        
        // Transform items to match ProductType
        const products = items.map(item => ({
            ...item,
            price: item.price ? Number(item.price) : null,
            new_price_column: item.new_price_column ? Number(item.new_price_column) : null,
            description: item.description || '',
            location: item.location || '',
            link: 'https://placehold.co/600x400?text=No+Image',
            deal: item.deal || ''
        }));

        // Sort in memory if needed
        if (sortBy) {
            switch (sortBy.toLowerCase()) {
                case 'newest':
                    return products.sort((a, b) => b.id - a.id);
                case 'oldest':
                    return products.sort((a, b) => a.id - b.id);
                case 'lowest price':
                    return products.sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity));
                case 'highest price':
                    return products.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
                default:
                    return products;
            }
        }
        
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

export const fetchProducts = async (
    userId?: string,
    query?: string, 
    filters?: string, 
    price?: string, 
    zip?: string,
    sortBy?: string
  ): Promise<ProductType[]> => {
    try {
        // Default to San Diego if no location specified
        const location = zip || 'SanDiego';
        const searchQuery = query || 'bikes';
        
        // Run the Python scraper
        const { exec } = require('child_process');
        const { promisify } = require('util');
        const execAsync = promisify(exec);
        
        const pythonPath = '"/Users/ramonm.m/Desktop/Year 2/Projects/bestdeals/bestdeals/lib/lightScrapper.py"'
        const command = `python3 ${pythonPath} --city "${location}" --query "${searchQuery}"`;
        console.log('Running command:', command);
        await execAsync(command);
        
        // Connect to MySQL database
        const mysql = require('mysql2/promise');
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '0033Fortnite*',
            database: 'BestDeals'
        });
        
        // Build query conditions
        const conditions = [];
        const params = [];
        
        if (price) {
            conditions.push('price <= ?');
            params.push(parseFloat(price));
        }
        
        // Parse filter parameters
        const filterArray = filters?.split(",").map(filter => filter.trim().toLowerCase()).filter(Boolean) || [];
        
        // Add filter conditions
        if (filterArray.length > 0) {
            conditions.push('(' + filterArray.map(() => 'title LIKE ?').join(' OR ') + ')');
            params.push(...filterArray.map(f => `%${f}%`));
        }
        
        // Build the WHERE clause
        const whereClause = conditions.length > 0 ? 'WHERE ' + conditions.join(' AND ') : '';
        
        // Fetch products from marketplace_listings table
        const [rows] = await connection.query(
            `SELECT * FROM marketplace_listings 
             ${whereClause}
             ORDER BY scraped_at DESC 
             LIMIT 100`,
            params
        );
        
        // Transform to ProductType
        const products = (rows as any[]).map(item => ({
            id: item.id,
            price: item.price,
            description: item.title || '',
            location: item.location || '',
            link: item.image_url || 'https://placehold.co/600x400?text=No+Image',
            url: item.url || '',
            deal: '',
            new_price_column: null
        }));
        
        // Sort products if needed
        if (sortBy) {
            switch (sortBy.toLowerCase()) {
                case 'newest':
                    products.sort((a, b) => b.id - a.id);
                    break;
                case 'oldest':
                    products.sort((a, b) => a.id - b.id);
                    break;
                case 'lowest price':
                    products.sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity));
                    break;
                case 'highest price':
                    products.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
                    break;
            }
        }
        
        await connection.end();
        return products;
        
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}*/


/* const sortProducts = (products: ProductType[], sortBy?: string): ProductType[] => {
    if (!sortBy) return products;
    
    const sortedProducts = [...products]; // Create a copy to avoid mutating the original
    
    switch (sortBy.toLowerCase()) {
        case 'newest':
            return sortedProducts.sort((a, b) => b.id - a.id);
        case 'oldest':
            return sortedProducts.sort((a, b) => a.id - b.id);
        case 'lowest price':
            return sortedProducts.sort((a, b) => {
                const priceA = a.price ?? Number.MAX_VALUE;
                const priceB = b.price ?? Number.MAX_VALUE;
                return priceA - priceB;
            });
        case 'highest price':
            return sortedProducts.sort((a, b) => {
                const priceA = a.price ?? 0;
                const priceB = b.price ?? 0;
                return priceB - priceA;
            });
        default:
            return sortedProducts;
    }
}; */
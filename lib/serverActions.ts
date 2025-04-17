"use server";
import {prisma} from "./prisma";
import { ProductType } from "./globalTypes";
import { signIn, signOut } from "@/auth";
import { parseServerActionResponse } from "./utils";

export const fetchAllProducts = async (sortBy?: string): Promise<ProductType[]> => {
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
    // If no query and no filters, return all products with sorting
    if (!query && !filters && !price && !zip) {
      return fetchAllProducts(sortBy);
    }
  
    // Parse filter parameters
    const filterArray = filters?.split(",").map(filter => filter.trim().toLowerCase()).filter(Boolean) || [];
    const queryArray = query?.split(",").map(query => query.trim().toLowerCase()).filter(Boolean) || [];
    
    // Extract sortBy from filters if it exists in the filterArray
    let sortOption: string | undefined = sortBy;
    const sortByOptions = ['newest', 'oldest', 'lowest price', 'highest price'];
    const sortByFilter = filterArray.find(f => sortByOptions.includes(f.toLowerCase()));
    if (sortByFilter) {
        sortOption = sortByFilter;
        // Remove sort option from filter array as it's handled separately
        const sortIndex = filterArray.indexOf(sortByFilter);
        if (sortIndex !== -1) {
            filterArray.splice(sortIndex, 1);
        }
    }
    
    // Check if we need to fetch hearted products - only in query
    const includeHearted = queryArray.some(q => q.includes('heart'));
    
    try {
      // Build the where clause for the database query
      const whereConditions = [];
      
      // Add search query conditions - check all in description
      if (queryArray.length > 0) {
        const nonHeartedQueries = queryArray.filter(q => !q.includes('heart'));
        if (nonHeartedQueries.length > 0) {
          whereConditions.push({
            OR: nonHeartedQueries.map(q => ({
              description: {
                contains: q,

              }
            }))
          });
        }
      }
      
      // Add filter conditions for deal type and condition - search in specific fields
      if (filterArray.length > 0) {
        const dealOptions = ['excellent', 'steal', 'good', 'ok', 'f'];
        const conditionOptions = ['new', 'like new', 'fine', 'fair', 'poor'];
        
        const dealFilters = filterArray.filter(f => dealOptions.includes(f.toLowerCase()));
        const conditionFilters = filterArray.filter(f => conditionOptions.includes(f.toLowerCase()));
        const otherFilters = filterArray.filter(f => 
            !dealOptions.includes(f.toLowerCase()) && 
            !conditionOptions.includes(f.toLowerCase()) &&
            !sortByOptions.includes(f.toLowerCase())
        );
        
        // Handle deal filters
        if (dealFilters.length > 0) {
          whereConditions.push({
            OR: dealFilters.map(filter => ({
              deal: {
                contains: filter,

              }
            }))
          });
        }
        
        // Handle condition filters - look for these in the description
        if (conditionFilters.length > 0) {
          whereConditions.push({
            OR: conditionFilters.map(filter => ({
              description: {
                contains: filter,

              }
            }))
          });
        }
        
        // Handle other generic filters
        if (otherFilters.length > 0) {
          whereConditions.push({
            OR: otherFilters.map(filter => ({
              description: {
                contains: filter,

              }
            }))
          });
        }
      }
      
      // Add price condition
      if (price) {
        whereConditions.push({
          price: {
            lte: parseFloat(price)
          }
        });
      }
      
      // Add location/zip condition - check in the location field
      if (zip && zip.length >= 5) {
        whereConditions.push({
          location: {
            contains: zip,
          }
        });
      }
      
      // Construct the final query
      const productsQuery = {
        where: whereConditions.length > 0 ? { AND: whereConditions } : {},
        select: {
          id: true,
          price: true,
          description: true,
          location: true,
          link: true,
          new_price_column: true,
          deal: true,
        }
      };
  
      let products = await prisma.items6.findMany(productsQuery);
      
      // Transform products to match ProductType
      let transformedProducts: ProductType[] = products.map(item => ({
        ...item,
        price: item.price ? Number(item.price) : null,
        new_price_column: item.new_price_column ? Number(item.new_price_column) : null,
        description: item.description || '',
        location: item.location || '',
        link: 'https://placehold.co/600x400?text=No+Image',
        deal: item.deal || ''
      }));
  
      // Sort in memory if needed
      if (sortOption) {
        switch (sortOption.toLowerCase()) {
            case 'newest':
                transformedProducts.sort((a, b) => b.id - a.id);
                break;
            case 'oldest':
                transformedProducts.sort((a, b) => a.id - b.id);
                break;
            case 'lowest price':
                transformedProducts.sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity));
                break;
            case 'highest price':
                transformedProducts.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
                break;
        }
      }
  
      // If user is logged in and hearted is in the query, fetch their hearted products
      if (userId && includeHearted) {

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
        
        // Transform hearted products to match ProductType
        const heartedProductItems: ProductType[] = heartedProducts.map(hp => ({
          ...hp.product,
          price: hp.product.price ? Number(hp.product.price) : null,
          new_price_column: hp.product.new_price_column ? Number(hp.product.new_price_column) : null,
          description: hp.product.description || '',
          location: hp.product.location || '',
          link: 'https://placehold.co/600x400?text=No+Image',
          deal: hp.product.deal || ''
        }));
        
        // If we're ONLY fetching hearted products (only heart query and no other filters)
        if (queryArray.length === 1 && includeHearted && 
            filterArray.length === 0 && !price && !zip) {
          // Apply sorting to hearted products client-side if needed
          if (sortOption) {
            return sortProducts(heartedProductItems, sortOption);
          }
          return heartedProductItems;
        } else {
          // Merge hearted products with filtered products
          const productIds = new Set(transformedProducts.map(p => p.id));
          
          // Add hearted products that aren't already in the results
          heartedProductItems.forEach(product => {
            if (!productIds.has(product.id)) {
              transformedProducts.push(product);
            }
          });
          
          // Apply final sorting if needed (for mixed results)
          if (sortOption) {
            return sortProducts(transformedProducts, sortOption);
          }
        }
      }
      
      return transformedProducts;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  };

// Helper function for client-side sorting when needed
const sortProducts = (products: ProductType[], sortBy?: string): ProductType[] => {
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
};

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
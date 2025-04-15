import {prisma} from "./prisma";
import { ProductType } from "./globalTypes";
import { signIn, signOut } from "next-auth/react";
import { parseServerAction } from "./utils";

export const fetchAllProducts = async (): Promise<ProductType[]> => {
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
        
        // Transform items to include createdAt and handle null values
        const products = items.map(item => ({
            ...item,
            price: item.price ? Number(item.price) : 0,
            new_price_column: item.new_price_column ? Number(item.new_price_column) : 0,
            description: item.description || '',
            location: item.location || '',
            // Use a dummy image if no link is available
            link: 'https://placehold.co/400x300?text=No+Image',
            deal: item.deal || '',
            createdAt: new Date(),
            updatedAt: new Date(),
            reviews: [] // Empty array for now since items6 doesn't have reviews
        }));
        
        console.log('Fetched products:', products); // Debug log
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}


export const hanldeSignIn = async (callbackUrl: string) => {
    try {
        await signIn('google', {callbackUrl});
    } catch (error) {
        console.error('Error signing in:', error);
        return parseServerAction({
            status: 'ERROR',
            error: 'Failed to sign in',
        });
    }
}

export const hanldeSignOut = async () => {
    try {
        await signOut();
    } catch (error) {
        console.error('Error signing out:', error);
        return parseServerAction({
            status: 'ERROR',
            error: 'Failed to sign out',
    })
    }
}
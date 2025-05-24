export type ActionState = {
    status: 'INITIAL' | 'LOADING' | 'SUCCESS' | 'ERROR';
    error: string;
    
}

export interface MarketplaceListing {
    marketplace_listing_title: string;
    listing_price?: {
        formatted_amount: string;
    };
    location: {
        reverse_geocode?: {
            city: string;
            state: string;
        };
    };
    id: string;
    primary_listing_photo: {
        image: {
            uri: string;
        };
    };
    custom_sub_titles_with_rendering_flags: Array<{
        subtitle: string;
    }>;
}

export interface ProductType {
    price?: string;
    location_city?: string;
    location_state?: string;
    id?: string;
    url?: string;
    photo_url?: string;
    miles?: string;
    title?: string;
    price_string?: string;
    image_url?: string;
} 

export type ProductType = {
    id: number;
    price: number;
    description: string;
    location: string;
    link: string;
    new_price_column: number;
    deal: string | null;
    createdAt: Date;
    updatedAt: Date;
    reviews: {
        rating: number;
        comment: string | null;
        user: {
            firstName: string;
            lastName: string;
            imageUrl: string | null;
        };
    }[];
};

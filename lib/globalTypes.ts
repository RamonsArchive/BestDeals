export type ProductType = {
    id: number;
    price: number | null;
    description: string;
    location: string;
    link: string;
    new_price_column: number | null;
    deal: string | null;
};

export type ActionState = {
    status: 'INITIAL' | 'LOADING' | 'SUCCESS' | 'ERROR';
    error: string;
    
}

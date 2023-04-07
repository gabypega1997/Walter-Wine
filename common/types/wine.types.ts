export type Wine = {
    id?: string;
    title: string;
    imageUrl: string;
    description: string;
    price: number;
    rating: number;
};

export type CartItem = {
    quantity?: number;
} & Wine;

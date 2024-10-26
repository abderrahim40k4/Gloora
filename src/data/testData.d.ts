interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    inStock: boolean;
    rating: number;
}
interface Category {
    id: number;
    name: string;
}
interface Review {
    productId: number;
    userName: string;
    rating: number;
    comment: string;
    date: string;
}
interface ContactInfo {
    city: string;
    feedback: string;
    phoneNumbers: string[];
    email: string;
}
interface cartInfo {
    id: number;
    name: string;
    price: number;
    category: string;
    inStock: boolean;
    rating: number;
    quntity: number;
}
export declare const products: Product[];
export declare const cart: cartInfo[];
export declare const categories: Category[];
export declare const reviews: Review[];
export declare const glooraContact: ContactInfo[];
export {};

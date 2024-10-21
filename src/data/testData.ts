// Product Interface
interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    inStock: boolean;
    rating: number;
  }
  
  // Category Interface
  interface Category {
    id: number;
    name: string;
  }
  
  // Review Interface
  interface Review {
    productId: number;
    userName: string;
    rating: number;
    comment: string;
    date: string;
  }

  // testData.ts

// Sample product data
export const products: Product[] = [
    {
      id: 1,
      name: "Anti-Aging Cream",
      price: 29.99,
      category: "Skin Care",
      inStock: true,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Hydrating Serum",
      price: 19.99,
      category: "Skin Care",
      inStock: false,
      rating: 4.0,
    },
    {
      id: 3,
      name: "Vitamin C Serum",
      price: 24.99,
      category: "Skin Care",
      inStock: true,
      rating: 4.8,
    },
    {
      id: 1,
      name: "Anti-Aging Cream",
      price: 29.99,
      category: "Skin Care",
      inStock: true,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Hydrating Serum",
      price: 19.99,
      category: "Skin Care",
      inStock: false,
      rating: 4.0,
    },
    {
      id: 3,
      name: "Vitamin C Serum",
      price: 24.99,
      category: "Skin Care",
      inStock: true,
      rating: 4.8,
    },
    {
      id: 1,
      name: "Anti-Aging Cream",
      price: 29.99,
      category: "Skin Care",
      inStock: true,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Hydrating Serum",
      price: 19.99,
      category: "Skin Care",
      inStock: false,
      rating: 4.0,
    },
    {
      id: 3,
      name: "Vitamin C Serum",
      price: 24.99,
      category: "Skin Care",
      inStock: true,
      rating: 4.8,
    },
  ];
  
  // Sample category data
  export const categories: Category[] = [
    {
      id: 1,
      name: "Skin Care",
    },
    {
      id: 2,
      name: "Hair Care",
    },
    {
      id: 3,
      name: "Makeup",
    },
  ];
  
  // Sample review data
  export const reviews: Review[] = [
    {
      productId: 1,
      userName: "Alice Smith",
      rating: 5,
      comment: "Amazing product! My skin feels so soft and rejuvenated.",
      date: "2023-10-01",
    },
    {
      productId: 2,
      userName: "John Doe",
      rating: 4,
      comment: "Good product, but it takes time to show results.",
      date: "2023-09-25",
    },
    {
      productId: 3,
      userName: "Sarah Johnson",
      rating: 5,
      comment: "Best Vitamin C serum I’ve used so far!",
      date: "2023-09-18",
    },
  ];
  
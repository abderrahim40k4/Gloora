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
    quntity:number
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
  export const cart:cartInfo[] = [
    {
        id: 1,
        name: "Hydrating Serum",
        price: 19.99,
        category: "Skin Care",
        inStock: false,
        rating: 4.0,
        quntity:0,
      },
      {
        id: 3,
        name: "Vitamin C Serum",
        price: 24.99,
        category: "Skin Care",
        inStock: true,
        rating: 4.8,
        quntity:0,
      },
  ]
  
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
      comment: "I've been using Gloora skincare products for the past six months, and the transformation in my skin has been incredible!.",
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


  export const glooraContact: ContactInfo[] = [
    {
        city: "New York",
        feedback: "I've been using Gloora skincare products for the past six months, and the transformation in my skin has been incredible!",
        phoneNumbers: ["+3566789-789", "+4564767-667"],
        email: "support@gloora.com"
    },
    {
        city: "Morocco",
        feedback: "I've been using Gloora skincare products for the past six months, and the transformation in my skin has been incredible!",
        phoneNumbers: ["+21256768-889", "+21288765-099"],
        email: "support@gloora.com"
    }
]
  
import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/testData'; // Import your test data
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const ProductDetails = () => {
    const { id } = useParams<{ id: string }>(); // Extract the product ID from the URL
    const product = products.find(p => p.id === parseInt(id)); // Find the product by ID
    if (!product) {
        return <p>Product not found!</p>;
      }
  return (
    <div>
        <NavBar/>
    <h1>{product.name}</h1>
    <p>Price: ${product.price}</p>
    <p>Category: {product.category}</p>
    <p>Rating: {product.rating}</p>
    <p>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
    <Footer/>
  </div>
  )
}

export default ProductDetails
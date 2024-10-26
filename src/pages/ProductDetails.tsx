import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { products } from '../data/testData'; // Import your test data
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';


import ProductDetaile from '@/components/shop/productDetaile';
import Titles from '@/components/Titles';


const ProductDetails = () => {
 
    return (
        <div className='w-full mx-auto'>
            <NavBar />
            <ProductDetaile/>
           
            <div className="container flex flex-col justify-center items-center w-full">

                <Titles content={"Related Products"} text={false} />
                {/* <Product/> */}
            </div>

            <Footer />
        </div>
    )
}

export default ProductDetails
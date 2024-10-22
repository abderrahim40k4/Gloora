import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/testData'; // Import your test data
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';


import Sack from "../assets/icons/sackShop.svg"
import Sackwhite from "../assets/icons/sackWhite.svg"
import Heart from "../assets/icons/heartShop.svg"
import Product from "../assets/images/product.png"

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProductDetails = () => {
    const { id } = useParams<{ id: string }>(); // Extract the product ID from the URL
    const product = products.find(p => p.id === parseInt(id)); // Find the product by ID
    const [conter, setCounter] = useState(1)
    if (!product) {
        return <p>Product not found!</p>;
    }
    return (
        <div>
            <NavBar />
            <div className='lg:p-10 px-5 py-8 m-auto lg:py-5 mt-12 container'>
                <div className="w-full flex md:flex-row flex-col justify-start gap-24 items-center">
                    <div className="w-full md:w-auto p-8 bg-softGray rounded-[67px]">
                        <div className='w-full inline-flex justify-between items-center'>
                            <div className='inline-flex justify-center items-center gap-1'>
                                <Button variant={"outline"} className="w-11 h-11 rounded-full border border-baseColor bg-white  p-0">
                                    <img src={Heart} alt="" />
                                </Button>
                                <Button variant={"outline"} className="w-11 h-11 rounded-full border border-baseColor bg-white  p-0">
                                    <img src={Sack} alt="" />
                                </Button>
                            </div>
                            <Badge variant={"default"} className="px-4 py-2 rounded-full bg-black text-white font-Neue text-sm font-light">-19%</Badge>
                        </div>
                        <div>
                            <img src={Product} alt="" className='md:my-12 my-4 w-full' />
                        </div>
                    </div>
                    <div className='w-3/4 md:w-1/4 gap-4 flex items-start flex-col justify-evenly py-12'>

                        <div className='w-full inline-flex flex-col gap-1'>
                            <p className='text-sm font-Averia font-normal text-baseColor'>{product.category}</p>
                            <div className="flex flex-row justify-between items-center w-full">
                                <h1 className='font-Neue font-medium text-lg '>{product.name}</h1>
                                <Badge variant={"default"} className="px-4 py-1 rounded-full bg-[#8FF30C] text-white font-Neue text-sm font-light">IN STOCK</Badge>
                            </div>
                            <p className='text-xs font-Neue text-black/50 font-light'>Ref: 00GBM12</p>
                        </div>


                        <div className='flex flex-row gap-2 items-end w-full mt-4'>
                            <p className='text-xl md:text-2xl font-medium font-Neue text-baseColor'>${product.price}</p>
                            <p className='text-sm md:text-lg font-medium font-Neue text-black/50'>${product.price}</p>

                        </div>
                        <div className='font-Averia font-medium text-lg md:text-3xl text-black/50 w-full'>
                            {/* product description*/}
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
                        </div>

                        <div className='mt-4 w-full flex md:flex-row flex-col justify-evenly items-center gap-12'>
                            <Button variant={"default"} size={"lg"} className='flex flex-row justify-evenly items-center border-2 border-baseColor rounded-full text-baseColor py-7 px-6 gap-5 text-lg font-Neue font-medium md:w-1/2 w-full'>
                                <span className='' onClick={() => { setCounter(conter - 1) }}>-</span>
                                <span>{conter}</span>
                                <span className='' onClick={() => { setCounter(conter + 1) }}>+</span>

                            </Button>
                            <Button variant={"default"} className='flex flex-row justify-evenly items-center bg-baseColor rounded-full text-white py-7 px-6 gap-5 relative  border-2 border-baseColor md:w-2/3 w-full'>
                                <span className='text-lg font-Averia font-medium'>Buy Now</span>
                                <img src={Sackwhite} alt="" className='text-white w-7' color='#fff' />

                            </Button>


                        </div>


                        <p>Rating: {product.rating}</p>
                        <p>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default ProductDetails
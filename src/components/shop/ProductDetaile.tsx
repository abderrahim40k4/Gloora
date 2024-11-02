
import { Link, useParams } from 'react-router-dom'



import Sack from "../../assets/icons/sackShop.svg"
import Sackwhite from "../../assets/icons/sackWhite.svg"
import Heart from "../../assets/icons/heartShop.svg"
import Productim from "../../assets/images/product.png"
import smalImage from "../../assets/images/productImage.png"

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Reviews from '@/components/shop/Reviews';
import { products } from '@/data/testData';
import { useState } from 'react';

const ProductDetaile = () => {
    const params = useParams<{ id: string }>();

    const productId = params.id ? parseInt(params.id) : null;
    
    const product = productId !== null ? products.find(p => p.id === productId) : undefined; // Find the product by ID
    const [conter, setCounter] = useState(1)


    if (!product) {
        return <p>Product not found!</p>;
    }
    return (
        <div className='w-full'>
            <div className='lg:p-10 px-5 py-4 m-auto lg:py-5 mt-12 container'>
                <div className="w-full flex md:flex-row flex-col justify-start md:gap-24 gap-12 items-center">
                    <div className=''>
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
                                <img src={Productim} alt="" className='md:my-12 my-4 w-full' />
                            </div>
                        </div>
                        <div className='w-full flex flex-row justify-start items-center gap-4 mt-6'>
                            <div className='w-auto p-2 border-b-4 border-baseColor rounded-full bg-softGray'>
                                <img src={smalImage} alt="" />
                            </div>
                            <div className='w-auto p-2 border-b-4 border-baseColor rounded-full bg-softGray'>
                                <img src={smalImage} alt="" />
                            </div>
                            <div className='w-auto p-2 border-b-4 border-baseColor rounded-full bg-softGray'>
                                <img src={smalImage} alt="" />
                            </div>
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

                        <div className='mt-4 w-full flex md:flex-row flex-col justify-evenly items-center gap-6'>
                            <Button variant={"default"} size={"lg"} className='flex flex-row justify-evenly items-center border-2 border-baseColor rounded-full text-baseColor py-7 px-6 gap-5 text-lg font-Neue font-medium md:w-1/2 w-full'>
                                <span className='' onClick={() => { setCounter(conter - 1) }}>-</span>
                                <span>{conter}</span>
                                <span className='' onClick={() => { setCounter(conter + 1) }}>+</span>

                            </Button>
                            <Link to={"/chekout"} className='md:w-1/2 w-2/3'>
                                <Button variant={"default"} size={"lg"} className='flex flex-row justify-center items-center bg-baseColor rounded-full text-white py-7 gap-1   border-2 border-baseColor  w-full relative'>
                                    <span className='text-lg font-Averia font-medium'>Buy Now</span>
                                    <img src={Sackwhite} alt="" className='text-white w-7' color='#fff' />
                                </Button></Link>
                        </div>
                    </div>
                </div>

                <div className='w-full h-auto flex md:flex-row flex-col justify-between items-start md:gap-12 gap-6 my-12'>
                    <div className='md:w-1/2 w-full  h-full rounded-[60px] bg-softGray md:p-8 p-6 mb-8'>
                        <div className='w-fuu l flex flex-row justify-start items-center gap-4 mb-8'>
                            <Button className='font-Neue bg-black text-white rounded-full uppercase text-sm font-normal'>DESCRIPTION</Button>
                            <Button className='font-Neue bg-[#E7E7E7] text-white rounded-full uppercase text-sm font-normal'>ADDITIONAL INFOS</Button>
                        </div>
                        <p className='text-black font-Neue font-medium md:text-lg text-sm'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores omnis eius voluptates quaerat laborum fuga porro itaque suscipit tempore consequatur atque, nihil veniam ex ratione impedit. Unde ratione a minus?
                        </p>
                    </div>
                    <Reviews />
                </div>
            </div></div>
    )
}

export default ProductDetaile
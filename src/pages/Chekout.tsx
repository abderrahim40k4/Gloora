import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import Titles from '@/components/Titles'
import { Badge } from '@/components/ui/badge'
import React from 'react'

const Chekout = () => {
    return (
        <div>
            <NavBar />
            <div className='container my-4'>
                <Titles content={"Checkout Your Oder"} text={false} />
                <div className="w-full flex flex-row justify-center gap-4 items-center">
                    <Badge className='px-6 py-4 rounded-full bg-baseColor text-white font-Neue font-medium text-lg relative'>
                        <span className='w-6 h-6 rounded-full bg-[#8FF30C] absolute -top-0.5 -right-0.5 inline-flex justify-center items-center'>
                            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 7.83333L6.375 12L16 2" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </span>
                        Select Product</Badge>
                    <svg width="88" height="6" viewBox="0 0 88 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M81.8333 3C81.8333 4.47276 83.0272 5.66667 84.5 5.66667C85.9728 5.66667 87.1667 4.47276 87.1667 3C87.1667 1.52724 85.9728 0.333333 84.5 0.333333C83.0272 0.333333 81.8333 1.52724 81.8333 3ZM0 3.5H84.5V2.5H0V3.5Z" fill="#F3A17C" />
                    </svg>

                    <Badge className='px-6 py-4 rounded-full bg-none border border-baseColor text-black font-Neue font-medium text-lg relative'>
                        <span className='w-6 h-6 rounded-full bg-[#EAFFCF] absolute -top-0.5 -right-0.5 inline-flex justify-center items-center'>
                            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 7.83333L6.375 12L16 2" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </span>
                        Select Product</Badge>
                    <svg width="88" height="6" viewBox="0 0 88 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M81.8333 3C81.8333 4.47276 83.0272 5.66667 84.5 5.66667C85.9728 5.66667 87.1667 4.47276 87.1667 3C87.1667 1.52724 85.9728 0.333333 84.5 0.333333C83.0272 0.333333 81.8333 1.52724 81.8333 3ZM0 3.5H84.5V2.5H0V3.5Z" fill="#F1F1F1" />
                    </svg>

                    <Badge className='px-6 py-4 rounded-full bg-none border border-[#E3DDDD] relative text-[#E3DDDD] font-Neue font-medium text-lg'>
                        <span className='w-6 h-6 rounded-full bg-[#EAFFCF] absolute -top-0.5 -right-0.5 inline-flex justify-center items-center'>
                            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 7.83333L6.375 12L16 2" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </span>
                        Select Product</Badge>
                </div>



            </div>
            <Footer />
        </div>
    )
}

export default Chekout
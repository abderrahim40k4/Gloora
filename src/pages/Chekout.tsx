import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import Titles from '@/components/Titles'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import React from 'react'

const Chekout = () => {
    return (
        <div>
            <NavBar />
            <div className='container my-4'>
                <Titles content={"Checkout Your Oder"} text={false} />
                <div className="w-full flex flex-row justify-center md:gap-4 gap-0 items-center p-4">
                    <Badge className='md:px-6 md:py-4 px-2 py-1 rounded-full bg-baseColor text-white font-Neue font-medium md:text-lg text-xs relative '>
                        <span className='md:w-6 md:h-6 w-3 h-3 rounded-full bg-[#8FF30C] absolute -top-0.5 -right-0.5 inline-flex justify-center items-center'>
                            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 7.83333L6.375 12L16 2" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </span>
                        Select Product</Badge>
                    <svg width="88" height="6" viewBox="0 0 88 6" fill="none" xmlns="http://www.w3.org/2000/svg" className='md:w-[88px] w-8'>
                        <path d="M81.8333 3C81.8333 4.47276 83.0272 5.66667 84.5 5.66667C85.9728 5.66667 87.1667 4.47276 87.1667 3C87.1667 1.52724 85.9728 0.333333 84.5 0.333333C83.0272 0.333333 81.8333 1.52724 81.8333 3ZM0 3.5H84.5V2.5H0V3.5Z" fill="#F3A17C" />
                    </svg>

                    <Badge className='md:px-6 md:py-4 px-2 py- rounded-full bg-none border border-baseColor text-black font-Neue font-medium md:text-lg text-xs relative'>
                        <span className='md:w-6 md:h-6 w-3 h-3 rounded-full bg-[#EAFFCF] absolute -top-0.5 -right-0.5 inline-flex justify-center items-center'>
                            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 7.83333L6.375 12L16 2" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </span>
                        Select Product</Badge>
                    <svg width="88" height="6" viewBox="0 0 88 6" fill="none" xmlns="http://www.w3.org/2000/svg" className='md:w-[88px] w-8'>
                        <path d="M81.8333 3C81.8333 4.47276 83.0272 5.66667 84.5 5.66667C85.9728 5.66667 87.1667 4.47276 87.1667 3C87.1667 1.52724 85.9728 0.333333 84.5 0.333333C83.0272 0.333333 81.8333 1.52724 81.8333 3ZM0 3.5H84.5V2.5H0V3.5Z" fill="#F1F1F1" />
                    </svg>

                    <Badge className='md:px-6 md:py-4 px-2 py- rounded-full bg-none border border-[#E3DDDD] relative text-[#E3DDDD] font-Neue font-medium md:text-lg text-xs'>
                        <span className='md:w-6 md:h-6 w-3 h-3 rounded-full bg-[#EAFFCF] absolute -top-0.5 -right-0.5 inline-flex justify-center items-center'>
                            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg" className=''>
                                <path d="M2 7.83333L6.375 12L16 2" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </span>
                        Add Infos</Badge>
                </div>

                <div className="w-full flex md:flex-row flex-col md:gap-12 gap-6 justify-center items-start">
                    <div className="md:w-1/2 w-full p-8 flex flex-col">
                        <h1 className='md:text-2xl text-xl font-Neue font-medium text-black mb-8'>Delivery Information</h1>
                        <div className='w-full bg-softGray rounded-[60px] p-4'>
                            <form action="  " className='md:p-12 p-6 rounded-[60px] grid md:grid-cols-2 grid-cols-1 gap-6'>
                                <div className='col-span-1 w-full'>
                                    <label htmlFor="" className='my-3 font-Neue font-medium text-sm text-black'>Full Name</label>
                                    <Input type="email" placeholder="Laila Rssi" className='w-full rounded-full border border-[#E0E0E0] text-black placeholder:text-[#E0E0E0] relative mt-3'/>
                                </div>
                                <div className='col-span-1 w-full'>
                                    <label htmlFor="" className='my-3 font-Neue font-medium text-sm text-black'>Phone Number</label>
                                    <Input type="phone" placeholder="+3367868-988" className='w-full rounded-full border border-[#E0E0E0] text-black placeholder:text-[#E0E0E0] relative  mt-3'/>
                                </div>
                                <div className='col-span-1 w-full'>
                                    <label htmlFor="" className='my-3 font-Neue font-medium text-sm text-black'>Email</label>
                                    <Input type="email" placeholder="lailarssi@gmail.com" className='w-full rounded-full border border-[#E0E0E0] text-black placeholder:text-[#E0E0E0] relative  mt-3'/>
                                </div>
                                <div className='col-span-1 w-full'>
                                    <label htmlFor="" className='my-3 font-Neue font-medium text-sm text-black'>Country</label>
                                    <Input type="text" placeholder="French" className='w-full  rounded-full border border-[#E0E0E0] text-black placeholder:text-[#E0E0E0] relative  mt-3'/>
                                </div>
                                <div className='col-span-1 w-full'>
                                    <label htmlFor="" className='my-3 font-Neue font-medium text-sm text-black'>City</label>
                                    <Input type="text" placeholder="Saint-Denis" className='w-full  rounded-full border border-[#E0E0E0] text-black placeholder:text-[#E0E0E0] relative  mt-3'/>
                                </div>
                                <div className='col-span-1 w-full'>
                                    <label htmlFor="" className='my-3 font-Neue font-medium text-sm text-black'>State</label>
                                    <Input type="text" placeholder="L'ile de France" className='w-full  rounded-full border border-[#E0E0E0] text-black placeholder:text-[#E0E0E0] relative  mt-3'/>
                                </div>
                                
                                <div className='col-span-1 w-full'>
                                    <label htmlFor="" className='my-3 font-Neue font-medium text-sm text-black'>Adress</label>
                                    <Input type="address" placeholder="N12 Avenue Fountin Imm 12 P34" className='w-full  rounded-full border border-[#E0E0E0] text-black placeholder:text-[#E0E0E0] relative  mt-3'/>
                                </div>
                                <div className='col-span-1 w-full'>
                                    <label htmlFor="" className='my-3 font-Neue font-medium text-sm text-black'>Zip</label>
                                    <Input type="number" placeholder="93200" className='w-full rounded-full border border-[#E0E0E0] text-black placeholder:text-[#E0E0E0] relative  mt-3'/>
                                </div>
                            </form>
                            

                        </div>

                        
                    </div>
                    <div className='w-1/2'>tesyt</div>
                </div>



            </div>
            <Footer />
        </div>
    )
}

export default Chekout
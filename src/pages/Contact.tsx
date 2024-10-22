import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import Titles from '@/components/Titles'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { glooraContact } from '@/data/testData'
import React from 'react'


const Contact = () => {

return (
    <div className='mx-auto'>
        <NavBar />
        <div className='w-full my-8 inline-flex justify-center items-center '>
            <div className='w-1/3 my-8'>
                <Titles content='Contact Us' text={true} desc='Transform Your Skin Elegantly with Our Luxurious and Effective Skincare' />
            </div>


        </div>

        <div className="w-full flex md:flex-row flex-col md:gap-12 gap-6 justify-center items-start">
            <div className="md:w-1/2 w-full p-8 flex flex-col ">
                <div className='w-full bg-softGray rounded-[60px] p-4'>
                    <form action="  " className='md:p-12 p-6 rounded-[60px] grid md:grid-cols-2 grid-cols-1 gap-6'>
                        <div className='col-span-1 w-full'>
                            <label htmlFor="" className='my-3 font-Neue font-medium text-sm text-black'>Full Name</label>
                            <Input type="email" placeholder="Laila Rssi" className='w-full rounded-full border border-[#E0E0E0] text-black placeholder:text-[#E0E0E0] relative mt-3' />
                        </div>
                        <div className='col-span-1 w-full'>
                            <label htmlFor="" className='my-3 font-Neue font-medium text-sm text-black'>Phone Number</label>
                            <Input type="phone" placeholder="+3367868-988" className='w-full rounded-full border border-[#E0E0E0] text-black placeholder:text-[#E0E0E0] relative  mt-3' />
                        </div>
                        <div className='col-span-1 md:col-span-2 w-full'>
                            <label htmlFor="" className='my-3 font-Neue font-medium text-sm text-black'>Subject</label>
                            <Input type="email" placeholder="lailarssi@gmail.com" className='w-full rounded-full border border-[#E0E0E0] text-black placeholder:text-[#E0E0E0] relative  mt-3' />
                        </div>
                        <div className='col-span-1 md:col-span-2 w-full'>
                            <label htmlFor="" className='my-3 font-Neue font-medium text-sm text-black'>Message</label>

                            <Textarea placeholder="Message" className='w-full  rounded-3xl border border-[#E0E0E0] text-black placeholder:text-[#E0E0E0] relative  mt-3 h-32' />
                        </div>

                    </form>



                </div>
                <Button size={"default"} className='rounded-full bg-baseColor my-4 w-1/4 py-2 text-white font-Neue font-medium text-lg'>Send Message</Button>
            </div>
            <div className='md:w-1/2 w-full p-8'>
                <div className='w-full border-2 border-softGray p-8 rounded-3xl'>
                        {
                            glooraContact.map((info, index)=>(
                                <div key={index}>
                                    <h1>{info.city}</h1>
                                    <p>{info.feedback}</p>
                                    {
                                        info.phoneNumbers.map((element)=>(
                                            <p>{element}</p>
                                        ))
                                    }
                                    <p>{info.email}</p>
                                </div>
                            ))
                        }
                </div>
            </div>

        </div>
        <Footer />
    </div>
)
}

export default Contact
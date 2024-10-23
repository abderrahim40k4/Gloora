import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import React from 'react'

import imag from "../assets/images/handCrim.png"

const About = () => {
  return (
    <div>
      <NavBar />
      <div className='w-full lg:p-10 px-5 py-8 m-auto lg:py-5 inline-flex justify-center items-center flex-col'>
        <div className="w-full bg-about-bg bg-center bg-cover bg-no-repeat  lg:h-[518px] h-80 rounded-[60px] inline-flex justify-center items-center flex-col gap-3">
          <p className='md:text-xl text-lg font-medium font-Neue text-white'>About Us.</p>
          <p className='md:text-6xl text-2xl font-medium font-Averia text-white'>We Are Gloora Cosmetic</p>
        </div>



        <div className='container md:w-5/6 w-full my-12 md:my-24 flex flex-col gap-12 md:gap-24 '>
          <div className='w-full flex flex-col md:flex-row md:justify-between justify-center items-center gap-8'>
            <div className='w-full md:w-1/2 flex flex-col  gap-4'>
              <p className='font-Neue text-sm md:text-lg font-medium text-baseColor'>Who we are ?</p>
              <p className='font-Averia text-xl md:text-3xl text-black font-medium w-3/4 md:w-1/2'>Transform Your Skin Elegantly with Our Luxurious and Effective Skincare</p>
              <p className='font-Neue text-lg md:text-xl text-[#B1B1B1] font-medium w-3/4 md:w-2/3'>I've been using Gloora skincare products for the past six months, and the transformation in my skin has been incredible!</p>

            </div>
            <div className='rounded-full bg-baseColor/20 border border-baseColor inline-flex justify-center items-center md:p-6 p-3'>
              <img src={imag} alt="" className='w-48 md:w-full' />

            </div>
          </div>

        </div>
        <div className="container md:w-5/6 w-full inline-flex flex-row justify-evenly items-start">
          <div className='flex flex-col items-center md:gap-6 gap-2 justify-center w-1/4'>
              <p className='font-Neue text-4xl md:text-[100px]  font-medium text-black w-full text-center'>+19</p>
              <p className='font-Neue font-medium text-sm md:text-xl text-baseColor w-full text-center'>Countries</p>
          </div>
          <div className='flex flex-col items-center md:gap-6 gap-2 justify-center w-1/4'>
              <p className='font-Neue text-4xl md:text-[100px]  font-medium text-black w-full text-center'>+10</p>
              <p className='font-Neue font-medium text-sm md:text-xl text-baseColor w-full text-center'>Products</p>
          </div>
          <div className='flex flex-col items-center md:gap-6 gap-2 justify-center md:w-1/4 w-1/3'>
              <p className='font-Neue text-4xl md:text-[100px]  font-medium text-black w-full text-center'>+30K</p>
              <p className='font-Neue font-medium text-sm md:text-xl text-baseColor w-full text-center'>Customers Reviews</p>
          </div>
        

        </div>


      </div>
      <Footer />
    </div>
  )
}

export default About
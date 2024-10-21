import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import React from 'react'

const About = () => {
  return (
    <div>
        <NavBar/>
        <div className='w-full lg:p-10 px-5 py-8 m-auto lg:py-5'>
            <div className="w-full bg-about-bg bg-center bg-cover bg-no-repeat  lg:h-[518px] h-80 rounded-[60px] inline-flex justify-center items-center flex-col gap-3">
                <p className='md:text-xl text-lg font-medium font-Neue text-white'>About Us.</p>
                <p className='md:text-6xl text-3xl font-medium font-Averia text-white'>We Are Gloora Cosmetic</p>
            </div>
            
            
        </div>
        <Footer/>
    </div>
  )
}

export default About
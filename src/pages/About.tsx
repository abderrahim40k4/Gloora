import Footer from '@/components/Footer'

import imag from "../assets/images/handCrim.png"
import imagb from "../assets/images/about2.png"
import imagCrim from "../assets/images/crime.png"
import Feedback from '@/components/Home/Fedback'
import Titles from '@/components/Titles'
import NavBar from '@/components/NavBar'

const About = () => {
  return (
    <div>
      <NavBar />
      <div className='w-full lg:p-10 px-5 py-8 m-auto lg:py-5 inline-flex justify-center items-center flex-col'>
        <div className="w-full bg-about-bg bg-center bg-cover bg-no-repeat  lg:h-[518px] h-80 rounded-[60px] inline-flex justify-center items-center flex-col gap-3">
          <p className='md:text-xl text-lg font-medium font-Neue text-white'>About Us.</p>
          <p className='md:text-6xl text-2xl font-medium font-Averia text-white'>We Are Gloora Cosmetic</p>
        </div>


        {/* how we are swction */}
        <div className='container md:w-5/6 w-full my-12 md:my-24 flex flex-col gap-12 md:gap-24 '>
         {/* how we are content */}
          <div className='w-full flex flex-col md:flex-row md:justify-between justify-center items-center gap-8'>
            <div className='w-full md:w-1/2 flex flex-col  gap-4'>
              <p className='font-Neue text-sm md:text-lg font-medium text-baseColor'>Who we are ?</p>
              <p className='font-Averia text-xl md:text-3xl text-black font-medium w-3/4 md:w-1/2'>Transform Your Skin Elegantly with Our Luxurious and Effective Skincare</p>
              <p className='font-Neue text-lg md:text-xl text-[#B1B1B1] font-medium w-3/4 md:w-2/3'>I've been using Gloora skincare products for the past six months, and the transformation in my skin has been incredible!</p>
            </div>
             {/* how we are hero imag */}
            <div className='rounded-full bg-baseColor/20 border border-baseColor inline-flex justify-center items-center md:p-6 p-3'>
              <img src={imag} alt="" className='w-48 md:w-full' />

            </div>
          </div>
        </div>

        {/* numbers about gloora section*/}
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



          <div className='container md:w-5/6 w-full inline-flex flex-col justify-evenly items-center my-12'>
            <div className='md:w-[85rem] h-96 w-full md:h-[64rem] bg-baseColor/20 border border-baseColor rounded-full inline-flex justify-center items-center'>
                <div className='md:w-[81rem] w-11/12 h-[91%] md:h-[60rem] bg-about-mid-bg bg-cover bg-cenetr rounded-full inline-flex justify-center items-center '>
                      <div className='md:w-1/2 w-2/3 h-2/3 md:h-[42med] bg-baseColor/70 rounded-3xl p-4 md:p-8 flex flex-col'>
                          <div className='w-full md:h-40 rounded-full bg-about-mid-bg bg-cover inline-flex justify-center items-center'>
                            <div className='md:w-2/3 w-4/5 flex justify-center items-center flex-col gap-4'>
                              <p className='font-Averia font-normal md:text-xl text-lg text-white'>You will have
                              a natural face by</p>
                              <p className='font-Averia md:text-[90px] text-3xl text-white'>
                              89%
                              </p>
                            </div>

                          </div>
                            <div className='md:mt-6 mt-2 flex flex-col justify-center items-center text-center text-white md:gap-4'>
                                <p className='text-white font-Neue font-medium text-lg md:text-xl'>That Why Gloora</p>
                                <p className='md:w-2/3 w-full font-Neue text-sm md:text-lg'>unique formulations combine the finest natural ingredients with advanced science to nourish, rejuvenate, and protect your skin, giving you a radiant, healthy glow.</p>
                            </div>
                      </div>
                </div>
            </div>

          </div>







        {/* way as section */}
        <div className='container md:w-5/6 w-full my-12 md:my-24 flex flex-col gap-12 md:gap-24 '>
          <div className='w-full flex flex-col-reverse md:flex-row-reverse md:justify-between justify-center items-center gap-8'>
            <div className='w-full md:w-1/2 flex flex-col  gap-4'>
              <p className='font-Neue text-sm md:text-lg font-medium text-baseColor'>Why you have choose our products ?</p>
              <p className='font-Averia text-xl md:text-3xl text-black font-medium w-3/4 md:w-1/2'>Transform Your Skin Elegantly with Our</p>
              <div className='w-full flex flex-col '>
                <p className='font-Averia text-sm md:text-lg font-normal text-baseColor inline-flex items-center gap-4 my-2 mt-12'>
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.538 24.4625C14.535 24.9542 18.1892 21.9863 18.6999 17.8335C19.2106 13.6809 14.4553 9.67867 16.1827 4.1665C7.63429 5.40502 4.68802 12.2939 4.22565 16.0534C3.71494 20.2061 6.54109 23.9711 10.538 24.4625Z" stroke="#F18453" stroke-width="1.5" stroke-linejoin="round" />
                    <path d="M14.5827 41.6665C10.573 31.9253 9.93668 23.3209 10.6926 16.6665" stroke="#F18453" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M19.808 36.8086C22.2558 41.7921 28.1679 43.1665 33.0131 39.8781C37.8583 36.5898 38.6204 27.4788 45.8333 24.3023C38.1363 15.776 28.5356 18.8541 24.1492 21.8311C19.3039 25.1194 17.3603 31.825 19.808 36.8086Z" stroke="#F18453" stroke-width="1.5" stroke-linejoin="round" />
                    <path d="M12.5 45.8332C17.4537 37.3007 23.4675 32.1457 29.1667 29.1665" stroke="#F18453" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                  100% Natural Products
                </p>
                <p className='font-Averia text-sm md:text-lg font-normal text-baseColor inline-flex items-center gap-4 my-2 '>
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.16602 6.25C8.04887 6.25 9.99029 6.25 11.5217 6.88433C13.5636 7.73013 15.1859 9.3524 16.0317 11.3943C16.666 12.9257 16.666 14.8671 16.666 18.75C12.7832 18.75 10.8417 18.75 9.31033 18.1157C7.26841 17.2699 5.64614 15.6476 4.80035 13.6057C4.16602 12.0743 4.16602 10.1329 4.16602 6.25Z" stroke="#F18453" stroke-width="1.5" stroke-linejoin="round" />
                    <path d="M24.9993 10.4165C22.4108 10.4165 21.1164 10.4165 20.0956 10.8394C18.7343 11.4033 17.6528 12.4848 17.0889 13.846C16.666 14.867 16.666 16.1613 16.666 18.7498C19.2546 18.7498 20.5489 18.7498 21.5698 18.3269C22.931 17.7631 24.0127 16.6816 24.5764 15.3203C24.9993 14.2994 24.9993 13.0051 24.9993 10.4165Z" stroke="#F18453" stroke-width="1.5" stroke-linejoin="round" />
                    <path d="M16.666 18.75V29.1667" stroke="#F18453" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M24.9994 29.1665H4.16602" stroke="#F18453" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M24.9994 35.4165H4.16602" stroke="#F18453" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M24.9994 41.6665H4.16602" stroke="#F18453" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M33.334 38.5487C33.334 35.9337 35.5282 33.3493 37.0682 31.8577C37.9046 31.0474 39.18 31.0474 40.0165 31.8577C41.5565 33.3493 43.7507 35.9337 43.7507 38.5487C43.7507 41.1127 41.7784 43.7499 38.5423 43.7499C35.3063 43.7499 33.334 41.1127 33.334 38.5487Z" stroke="#F18453" stroke-width="1.5" />
                  </svg>


                  100% Natural Oil
                </p>
                <p className='font-Averia text-sm md:text-lg font-normal text-baseColor inline-flex items-center gap-4 my-2'>
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M45.8327 24.9998C45.8327 36.5057 36.5052 45.8332 24.9994 45.8332C13.4934 45.8332 4.16602 36.5057 4.16602 24.9998M17.7077 5.47819C19.9771 4.63015 22.4341 4.1665 24.9994 4.1665C27.5646 4.1665 30.0216 4.63015 32.291 5.47819" stroke="#F18453" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15.6638 11.3191L16.7636 13.5371C16.9136 13.8458 17.3136 14.1419 17.651 14.1987L19.6446 14.5326C20.9194 14.7468 21.2194 15.6794 20.3008 16.5993L18.7509 18.1619C18.4884 18.4266 18.3447 18.937 18.4259 19.3024L18.8697 21.2367C19.2196 22.768 18.4135 23.3603 17.0699 22.5601L15.2013 21.4448C14.8638 21.2432 14.3077 21.2432 13.9639 21.4448L12.0954 22.5601C10.758 23.3603 9.94563 22.7617 10.2956 21.2367L10.7393 19.3024C10.8205 18.937 10.6768 18.4266 10.4143 18.1619L8.86451 16.5993C7.95211 15.6794 8.24582 14.7468 9.5207 14.5326L11.5142 14.1987C11.8454 14.1419 12.2454 13.8458 12.3954 13.5371L13.4953 11.3191C14.0952 10.1156 15.0701 10.1156 15.6638 11.3191Z" stroke="#F18453" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M36.4958 11.3191L37.5956 13.5371C37.7456 13.8458 38.1456 14.1419 38.4831 14.1987L40.4766 14.5326C41.7514 14.7468 42.0514 15.6794 41.1327 16.5993L39.5829 18.1619C39.3204 18.4266 39.1766 18.937 39.2579 19.3024L39.7016 21.2367C40.0516 22.768 39.2454 23.3603 37.9018 22.5601L36.0333 21.4448C35.6958 21.2432 35.1397 21.2432 34.796 21.4448L32.9274 22.5601C31.5902 23.3603 30.7777 22.7617 31.1277 21.2367L31.5714 19.3024C31.6524 18.937 31.5089 18.4266 31.2464 18.1619L29.6966 16.5993C28.7841 15.6794 29.0779 14.7468 30.3527 14.5326L32.3462 14.1987C32.6774 14.1419 33.0774 13.8458 33.2274 13.5371L34.3272 11.3191C34.9272 10.1156 35.902 10.1156 36.4958 11.3191Z" stroke="#F18453" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M16.666 31.25C18.5663 33.78 21.5916 35.4167 24.9993 35.4167C28.4071 35.4167 31.4325 33.78 33.3327 31.25" stroke="#F18453" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>


                  100% Client Satisfaction
                </p>
              </div>


            </div>
            <div className='rounded-full bg-baseColor/20 border border-baseColor inline-flex justify-center items-center md:p-6 p-3'>
              <img src={imagCrim} alt="" className='w-48 md:w-full' />

            </div>
          </div>

        </div>



      {/* gradint section */}
        <div className=' md:w-5/6 w-full my-12 md:my-24 flex flex-col gap-12 md:gap-24'>
          <div className='w-full flex flex-col md:flex-row md:justify-between justify-center items-center gap-8'>
            <div className='w-full md:w-1/2 flex flex-col  gap-4'>
              <p className='font-Neue text-sm md:text-lg font-medium text-baseColor'>Ingredients ?</p>
              <p className='font-Averia text-xl md:text-3xl text-black font-medium w-3/4 md:w-1/2'>Transform Your Skin Elegantly with Our Luxurious and Effective Skincare</p>

              <ul className='md:list-decimal list-inside font-Neue font-medium text-lg md:text-xl text-[#B1B1B1]'>
                <li><p className='font-Neue text-lg md:text-lg text-[#B1B1B1] font-medium w-full md:w-2/3 inline-flex flex-row'>I've been using Gloora skincare products</p></li>
                <li><p className='font-Neue text-lg md:text-lg text-[#B1B1B1] font-medium w-3/4 md:w-2/3'>for the past six months, and the </p></li>
                <li><p className='font-Neue text-lg md:text-lg text-[#B1B1B1] font-medium w-3/4 md:w-2/3'>transformation in my skin</p></li>
                <li><p className='font-Neue text-lg md:text-lg text-[#B1B1B1] font-medium w-3/4 md:w-2/3'>has been incredible!</p></li>
              </ul>

            </div>
            <div className='rounded-full bg-baseColor/20 border border-baseColor inline-flex justify-center items-center md:p-6 p-3'>
              <img src={imagb} alt="" className='w-48 md:w-full' />

            </div>
          </div>

        </div>


      </div>


      <Titles content={"Customer Feedback."} text={false} />
      <Feedback/>
      <Footer />
    </div>
  )
}

export default About
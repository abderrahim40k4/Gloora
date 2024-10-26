import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import ProductDetaile from '@/components/shop/ProductDetaile'

const Offers = () => {
    return (
        <div className=''>
            <NavBar />
            <div className='lg:p-10 px-3 py-4 m-auto lg:py-5 relative overflow-hidden flex flex-col gap-6 md:gap-12'>
                <div className='w-full md:h-[670px] h-96 bg-hero-pattern bg-cover bg-center  rounded-3xl md:p-24 p-6 flex flex-end text-end justify-end items-end'>
                    <img src="" alt="" />
                    <p className='w-full bottom-4 font-Neue font-medium md:text-6xl text-2xl text-white left-4  '>
                        Get -50% Off
                    </p>
                </div>
                <div className='w-full flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12'>
                    <div className='md:w-2/3 w-full bg-softGray h-80 md:h-[600px] rounded-3xl'></div>
                    <div className='md:w-1/3 w-full bg-softGray h-80 md:h-[600px] rounded-3xl'></div>
                </div>

            </div>
            <div>
                <ProductDetaile/>

            </div>
            <div className='lg:p-10 px-3 py-4 m-auto lg:py-5 relative overflow-hidden flex flex-col gap-6 md:gap-12'>
                <div className='w-full flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12'>
                    <div className='md:w-2/3 w-full bg-softGray h-80 md:h-[600px] rounded-3xl'></div>
                    <div className='md:w-1/3 w-full bg-softGray h-80 md:h-[600px] rounded-3xl'></div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Offers
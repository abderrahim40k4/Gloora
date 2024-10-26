


import Product from "../components/Home/Product"
import Category from "../components/Home/Category"
import Titles from "../components/Titles"
import About from "../components/Home/About"
import Fedback from "../components/Home/Fedback"
import Offers from "../components/Home/Offers"
import Hero from "../assets/videos/video.mp4"
import whitePerv from "../assets/icons/whitePervArr.svg"
import whiteNext from "../assets/icons/whiteNextArr.svg"


// Import Swiper React components


const Home = () => {


    return (
        <div className="mt-5">
            <div className="relative h-screen p-8 w-full overflow-hidden rounded-[10%]">
                <video
                    className="absolute top-0 px-10 rounded-[10%] left-0 w-full h-full object-cover z-10"
                    src={Hero}
                    autoPlay
                    loop
                    muted
                />
                <div className="absolute z-50 w-full h-full flex flex-col p-8 md:p-24">
                <div className="w-1/2 md:w-1/2 h-1/2 flex flex-col justify-evenly items-start">
                <div className="flex flex-col gap-12">
                <p className="w-full font-Neue text-2xl md:text-7xl font-bold text-white my-2 md:my-4">Unlock Your Skin's 
                Natural Beauty</p>
                <p className="text-xl md:text-5xl font-Averia text-white font-normal">Discover the Secret to Flawless Skin</p>
                </div>

                </div>
                <div className="w-full h-1/2 flex flex-row justify-between items-end">
                    <div className="w-1/2 flex flex-row justify-start items-center gap-2 md:gap-6">
                        <img src={whitePerv} alt="" className="w-[40px] md:w-[64px]" />
                        <img src={whiteNext} alt="" className="w-[40px] md:w-[64px]" />
                    </div>
                    <div className="">
                        
                    </div>
                </div>
                </div>
            </div>

            <div className=" w-full inline-flex justify-center items-center flex-col ">
                <Titles content={"Gloora Product."} text={false} />

                {/* prodct sectin */}
                <Product />
                <Titles content={"Product Categories."} text={true} desc="Transform Your Skin Elegantly with Our Luxurious and Effective Skincare" />
                <Category />
                <About />
                <Titles content={"Customer Feedback."} text={false} />
                <Fedback />
                <Titles content={"Gloora Offers.."} text={true} desc="Transform Your Skin Elegantly with Our Luxurious and Effective Skincare" />
                <Offers />
            </div>
        </div>
    )
}

export default Home
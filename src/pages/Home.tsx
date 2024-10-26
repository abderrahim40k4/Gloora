import Category from "../components/Home/Category"
import Titles from "../components/Titles"
import About from "../components/Home/About"
import Fedback from "../components/Home/Fedback"
import Offers from "../components/Home/Offers"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

import Hero from "../assets/videos/video.mp4"
import whitePerv from "../assets/icons/whitePervArr.svg"
import whiteNext from "../assets/icons/whiteNextArr.svg"
import whiteSack from "../assets/icons/sackWhite.svg"
import offerImage from "../assets/images/offerfifty.png"
import Product from "@/components/Home/Product"

// Import Swiper React components


const Home = () => {


    return (
        <div className="mt-5">
            {/* hero section */}
            <div className="relative h-auto md:p-8 p-2 w-full overflow-hidden md:rounded-[10%] rounded-3xl">
                <video
                    className="absolute top-0 md:px-10 px-2 md:rounded-[10%] rounded-3xl left-0 w-full h-full object-cover z-10"
                    src={Hero}
                    autoPlay
                    loop
                    muted
                />
                <div className="relative z-10 w-full h-full flex md:flex-row flex-col p-8 md:p-24 md:items-end items-center justify-between gap-12">
                    <div className="w-full md:w-1/2 h-full flex flex-col justify-evenly items-start md:gap-44 gap-12 my-4">
                        <div className="flex flex-col md:gap-12 gap-4  my-12">
                            <p className="w-full font-Neue text-2xl md:text-7xl font-bold text-white my-1 md:my-4">Unlock Your Skin's
                                Natural Beauty</p>
                            <p className="text-xl md:text-5xl font-Averia text-white font-normal">Discover the Secret to Flawless Skin</p>
                        </div>
                        <div className="w-1/2 flex flex-row justify-start items-center gap-2 md:gap-6">
                            <img src={whitePerv} alt="" className="w-[40px] md:w-[64px]" />
                            <img src={whiteNext} alt="" className="w-[40px] md:w-[64px]" />
                        </div>

                    </div>
                    <div className="w-full h-full flex flex-row justify-end gap-4 items-end relative mb-16 md:mb-4">
                        <div className="h-1/2  flex flex-col justify-center gap-4 items-end">
                            <div className="w-full flex flex-row md:justify-between justify-start gap-4">
                                <Button className="bg-black text-white rounded-full font-Averia" variant={"default"} size={"sm"}>Skin Care</Button>
                                <Button className="text-black bg-white rounded-full font-Averia" variant={"default"} size={"sm"}>Face Care</Button>
                                <Link to={"/products"}><Button className="bg-baseColor text-white rounded-full font-Neue md:flex hidden" variant={"default"} size={"sm"}>
                                    <span>Buy Now</span>
                                    <img src={whiteSack} alt="" className="w-12 md:w-5 " />
                                </Button></Link>
                            </div>
                            <div className="w-full p-2 md:p-4 rounded-3xl bg-white">
                                <div className="">
                                    <p className="w-full text-black text-xl md:text-4xl font-Neue font-medium">Get -50% Off </p>
                                    <p className="font-Averia font-normal italic text-baseColor text-sm md:text-xl">
                                        Gloora Pack
                                    </p>
                                </div>
                                <div className="w-full md:p-4 p-2 ">
                                    <img src={offerImage} alt="" className=" " />
                                    <Link to={"/products"}><Button className="bg-baseColor text-white rounded-full font-Neue md:hidden relative mt-4 md:m-6" variant={"default"} size={"sm"}>
                                        <span>Buy Now</span>
                                        <img src={whiteSack} alt="" className="w-5 md:w-12 " />
                                    </Button></Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end of hro section */}

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
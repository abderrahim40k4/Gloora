
import Hero from "../assets/images/imageHero.png"
import Sack from "../assets/icons/sackShop.svg"
import Heart from "../assets/icons/heartShop.svg"
import Eye from "../assets/icons/eyeShop.svg"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import Product from "./Home/Product"
import Category from "./Home/Category"
import Titles from "./Titles"


// Import Swiper React components


const Home = () => {


    return (
        <div className="lg:px-10 px-5  m-auto mt-5">
            <div className="w-full relative h-screen ">
                <div className="w-full md:h-full  overflow-hidden md:rounded-lg  rounded-none absolute z-10">
                    <img src={Hero} alt="" className='w-full h-screen' />
                </div>
                <div className='w-full flex md:flex-row flex-col justify-between items-end z-50 absolute'>
                    <div>test</div>
                    <div>test</div>
                </div>
            </div>

            <div className=" w-full px-5 lg:px-10 my-10">
                <Titles content={"Gloora Product."} text={false}/>

                {/* prodct sectin */}
                <Product />
                <Titles content={"Product Categories."} text={true} desc="Transform Your Skin Elegantly with Our Luxurious and Effective Skincare"/>
                <Category />
            </div>
        </div>
    )
}

export default Home
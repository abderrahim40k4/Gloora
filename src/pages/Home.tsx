
import Hero from "../assets/images/imageHero.png"

import Product from "../components/Home/Product"
import Category from "../components/Home/Category"
import Titles from "../components/Titles"
import About from "../components/Home/About"
import Fedback from "../components/Home/Fedback"
import Offers from "../components/Home/Offers"


// Import Swiper React components


const Home = () => {


    return (
        <div className="mt-5">
            <div className="w-full h-screen ">
                <div className="w-full md:h-full  overflow-hidden md:rounded-lg  rounded-none absolute z-10">
                    <img src={Hero} alt="" className='w-full h-screen' />
                </div>
                <div className='w-full flex md:flex-row flex-col justify-between items-end z-50 absolute'>
                    <div>test</div>
                    <div>test</div>
                </div>
            </div>

            <div className=" w-full inline-flex justify-center items-center flex-col ">
                <Titles content={"Gloora Product."} text={false}/>

                {/* prodct sectin */}
                <Product />
                <Titles content={"Product Categories."} text={true} desc="Transform Your Skin Elegantly with Our Luxurious and Effective Skincare"/>
                <Category />
                <About/>
                <Titles content={"Customer Feedback."} text={false} />
                <Fedback/>
                <Titles content={"Gloora Offers.."} text={true} desc="Transform Your Skin Elegantly with Our Luxurious and Effective Skincare"/>
                <Offers/>
            </div>
        </div>
    )
}

export default Home
import Sack from "../../assets/icons/sackShop.svg"
import Heart from "../../assets/icons/heartShop.svg"
import Eye from "../../assets/icons/eyeShop.svg"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Badge } from ".././ui/badge"
import { Button } from ".././ui/button"

import ProdctIm from "../../assets/images/prodact.png"
import { useState } from "react"
import { Link } from "react-router-dom"


type productsType = {
    id: number,
    title: string,
    category: string,
    prix: number,
    discount: number,
    selected: boolean,

}


const Product = () => {

    const prodacts: productsType[] = [
        {
            id: 1,
            title: "Gloora Bag for Meakup",
            category: "ACCESSORIES",
            prix: 30,
            discount: 19,
            selected: true,
        },
        {
            id: 2,
            title: "Gloora Bag for Meakup",
            category: "ACCESSORIES",
            prix: 30,
            discount: 19,
            selected: false,
        },
        {
            id: 3,
            title: "Gloora Bag for Meakup",
            category: "ACCESSORIES",
            prix: 30,
            discount: 19,
            selected: false,
        },
        {
            id: 4,
            title: "Gloora Bag for Meakup",
            category: "ACCESSORIES",
            prix: 30,
            discount: 19,
            selected: false,
        },
        {
            id: 5,
            title: "Gloora Bag for Meakup",
            category: "ACCESSORIES",
            prix: 30,
            discount: 19,
            selected: false,
        },
        {
            id: 6,
            title: "Gloora Bag for Meakup",
            category: "ACCESSORIES",
            prix: 30,
            discount: 19,
            selected: false,
        },
    ]

    const [slect, setSelect] = useState(false)

    const handleHover = (item: boolean) => {
        setSelect(true)
        item = slect
        return item
    }
    return (
        <div className="lg:px-10 px-5 py-8 m-auto lg:py-5 ">
            <div className="w-full  flex items-center justify-center">
                <Carousel
                
                    opts={{
                        align: "center",
                        loop: false,
                    }}
                    className="w-80 md:w-full flex justify-center items-center  relative gap-8"
                >
                    <CarouselPrevious className="border-none md:block hidden " />
                    <CarouselContent className="flex gap-8 justify-center items-center  mb-6 w-11/12 relative h-[422px]">
                        {
                            prodacts.map((product, index) => (
                                <CarouselItem className="md-h-[420px] md:basis-1/4 basis-full " key={index} onClick={() => handleHover(product.selected)}>
                                    <div className="w-full h-auto bg-[#FCFCFC] rounded-3xl p-4 flex justify-between items-start flex-col">
                                        <div className="w-full">
                                            <Badge variant={"default"} className="px-4 py-2 rounded-full bg-black text-white font-Neue text-sm font-light">-{product.discount}%</Badge>
                                        </div>
                                        <div className="w-full inline-flex items-center justify-center">
                                            <img src={ProdctIm} alt="" />
                                        </div>
                                        {/* condition actievted */}
                                        {
                                            product.selected ? <div className="w-full flex flex-row gap-2">
                                                <Button variant={"outline"} className="w-11 h-11 rounded-full border border-baseColor bg-white shadow-xl p-0">
                                                    <img src={Heart} alt="" />
                                                </Button>
                                                <Button variant={"outline"} className="w-11 h-11 rounded-full border border-baseColor bg-white shadow-xl p-0">
                                                    <img src={Sack} alt="" />
                                                </Button>
                                                <Button variant={"outline"} className="w-11 h-11 rounded-full border border-baseColor bg-white shadow-xl p-0">
                                                    <img src={Eye} alt="" />
                                                </Button>
                                            </div> : ""
                                        }
                                    </div>
                                    <div className="w-full inline-flex items-start justify-evenly flex-col p-4">
                                        <p className="text-sm font-Averia font-normal text-baseColor uppercase">{product.category}</p>
                                        <Link to={"/products"}><p className="text-lg font-Neue font-medium">{product.title}</p></Link>
                                        <div className="w-full inline-flex gap-4 items-center">
                                            <span className="font-Neue text-lg text-black">{product.prix - product.discount * product.prix / 100}$</span>
                                            <span className="font-Neue text-xc text-black/50 font-light">{product.prix}$</span>
                                        </div>
                                    </div>
                                </CarouselItem>

                            ))
                        }


                    </CarouselContent>
                    <CarouselNext className="border-none md:block hidden" />
                </Carousel>
            </div>
        </div>
    )
}

export default Product
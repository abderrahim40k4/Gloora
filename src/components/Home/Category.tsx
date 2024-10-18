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


type productsType = {
    id:number,
    title:string,
    category:string,
    prix:number,
    discount:number,
    selected:boolean,

} 


const Category = () => {

    const prodacts:productsType[] = [
        {
            id:1,
            title:"Gloora Bag for Meakup",
            category:"ACCESSORIES",
            prix:30,
            discount:19,
            selected:true,
        },
        {
            id:2,
            title:"Gloora Bag for Meakup",
            category:"ACCESSORIES",
            prix:30,
            discount:19,
            selected:false,
        },
        {
            id:3,
            title:"Gloora Bag for Meakup",
            category:"ACCESSORIES",
            prix:30,
            discount:19,
            selected:false,
        },
        {
            id:4,
            title:"Gloora Bag for Meakup",
            category:"ACCESSORIES",
            prix:30,
            discount:19,
            selected:false,
        },
        {
            id:5,
            title:"Gloora Bag for Meakup",
            category:"ACCESSORIES",
            prix:30,
            discount:19,
            selected:false,
        },
        {
            id:6,
            title:"Gloora Bag for Meakup",
            category:"ACCESSORIES",
            prix:30,
            discount:19,
            selected:false,
        },
    ]

    const [slect, setSelect] = useState(false)

    const handleHover = (item:boolean) =>{
        setSelect(true)
        item = slect
        return item
    }
  return (
    <div className="">
    <Carousel
        opts={{
            align:"center",
            loop: false,
        }}
        className=""
    >
        <CarouselContent >
          
           <CarouselItem >test</CarouselItem>

           
        </CarouselContent>
        <CarouselPrevious className="border  border-baseColor md:block hidden" />
        <CarouselNext className="border border-baseColor md:block hidden" />
    </Carousel>
</div>
  )
}

export default Category
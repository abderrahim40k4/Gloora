import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "../ui/button"
import iamges from "../../assets/images/imagAbout.png"

import Arrow from "../../assets/icons/arrow.svg"


type categorysType = {
    id: number,
    title: string,
    desc: string,
    pathImag:string,
    curent:boolean

}


const Category = () => {

    const categorys: categorysType[] = [
        {
            id: 1,
            title: "Gloora Bag for Meakup",
            desc:"Transform Your Skin Elegantly with Our Luxurious and Effective Skincare",
            pathImag:iamges,
            curent:false,
        },
        {
            id: 2,
            title: "Gloora Bag for Meakup",
            desc:"Transform Your Skin Elegantly with Our Luxurious and Effective Skincare",
            pathImag:iamges,
            curent:false,
        },
        {
            id: 3,
            title: "Gloora Bag for Meakup",
            desc:"Transform Your Skin Elegantly with Our Luxurious and Effective Skincare",
            pathImag:iamges,
            curent:false,
        },
        {
            id: 4,
            title: "Gloora Bag for Meakup",
            desc:"Transform Your Skin Elegantly with Our Luxurious and Effective Skincare",
            pathImag:iamges,
            curent:false,
        },
    ]
    return (
        <div className="lg:p-10 px-5 py-8 m-auto lg:py-5 relative w-full">
        <div className="w-full inline-flex flex-row justify-center items-center lg:px-28 px-4 my-6 md:my-12 relative container">
            <Carousel
                opts={{
                    align: "start",
                    loop: false,
                }}
                className="w-full flex md:flex-row flex-col justify-between items-center relative"
            >
                <CarouselContent className="w-full inline-flex justify-evenly items-center relative" >

                    {
                        categorys.map((category, index)=>(
                            <CarouselItem className="basis-full w-full flex  justify-center items-center relative mb-4" key={index}>
                            <div  className=" flex flex-col justify-between gap-6 items-center w-full overflow-hidden ">
                                <div className={`lg:w-[320px] lg:h-[520px] h-[200px] w-[138px] border border-baseColor bg-baseColor/20 rounded-full md:p-3 p-1 inline-flex justify-center items-center `}>

                                <img src={iamges} alt="" className="h-3/4 rotate-12 z-10"/>
                                <img src={category.pathImag} alt="" className="w-full h-full " />
                                <img src={iamges} alt="" className="h-3/4 -rotate-12 z-10"/>
                                </div>
                                <div className="my-6 flex flex-col justify-center items-center gap-4 w-full ">
                                    <p className="font-Neue lg:text-lg text-sm text-baseColor ">{category.title}</p>
                                    <p className="w-full text-center md:text-2xl text-lg font-Averia font-medium text-[#979797] lg:w-1/3 ">{category.desc}</p>
                                </div>
                                
                            <Button size={"lg"} variant={"default"} className="bg-baseColor/40 rounded-full py-7 md:flex hidden"><span className="text-lg font-Averia font-normal">See product category</span> <img src={Arrow} alt="" /></Button>
                            </div>
                        </CarouselItem>
                    
                        ))
                    }


                </CarouselContent>
                <div className="w-full md:absolute flex md:justify-between  justify-center gap-6 items-center h-full">
                <CarouselPrevious className="md:border border-none  border-baseColor w-12 h-12" />
                <CarouselNext className="md:border border-none border-baseColor w-12 h-12" />
                </div>
            </Carousel>
        </div>
        </div>
    )
}

export default Category
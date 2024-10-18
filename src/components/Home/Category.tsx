import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "../ui/button"

import Arrow from "../../assets/icons/arrow.svg"


type categorysType = {
    id: number,
    title: string,
    desc: string,
    curent:boolean

}


const Category = () => {

    const categorys: categorysType[] = [
        {
            id: 1,
            title: "Gloora Bag for Meakup",
            desc:"Transform Your Skin Elegantly with Our Luxurious and Effective Skincare",
            curent:false,
        },
        {
            id: 2,
            title: "Gloora Bag for Meakup",
            desc:"Transform Your Skin Elegantly with Our Luxurious and Effective Skincare",
            curent:false,
        },
        {
            id: 3,
            title: "Gloora Bag for Meakup",
            desc:"Transform Your Skin Elegantly with Our Luxurious and Effective Skincare",
            curent:false,
        },
        {
            id: 4,
            title: "Gloora Bag for Meakup",
            desc:"Transform Your Skin Elegantly with Our Luxurious and Effective Skincare",
            curent:false,
        },
    ]
    return (
        <div className="w-full inline-flex flex-row justify-center items-center lg:px-28 px-4 my-6 md:my-12 ">
            <Carousel
                opts={{
                    align: "center",
                    loop: false,
                }}
                className="w-full"
            >
                <CarouselContent className="w-full inline-flex justify-evenly items-center" >

                    {
                        categorys.map((category, key)=>(
                            <CarouselItem className="basis-full w-full" key={category.id}>
                            <div  className=" flex flex-col justify-between gap-6 items-center w-full ">
                                <div className={`w-[320px] h-[520px] border border-baseColor bg-baseColor/50 rounded-full`}></div>
                                <div className="my-6 flex flex-col justify-center items-center gap-4 w-full">
                                    <p className="font-Neue text-lg text-baseColor ">{category.title}</p>
                                    <p className="w-full text-center text-2xl font-Averia font-medium text-[#979797] lg:w-1/3 ">{category.desc}</p>
                                </div>
                                
                            <Button size={"lg"} variant={"default"} className="bg-baseColor/40 rounded-full py-7"><span className="text-lg font-Averia font-normal">See product category</span> <img src={Arrow} alt="" /></Button>
                            </div>
                        </CarouselItem>
                        ))
                    }


                </CarouselContent>
                <CarouselPrevious className="border  border-baseColor md:block hidden" />
                <CarouselNext className="border border-baseColor md:block hidden" />
            </Carousel>
        </div>
    )
}

export default Category
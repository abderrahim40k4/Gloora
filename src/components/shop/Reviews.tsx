
import { Button } from "../ui/button"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { reviews } from '@/data/testData'

const Reviews = () => {
    return (
        <div className='md:w-1/2 w-full rounded-[60px] bg-softGray md:p-8 p-6 mb-4'>
            <div className='w-full flex flex-row justify-between items-center mb-0'>
                <Button className='font-Neue bg-black text-white rounded-full uppercase text-sm font-normal'>REVIEWS</Button>
            </div>



            <div>
                <Carousel>
                    <div className="w-full inline-flex justify-end items-center gap-3">
                        <CarouselPrevious className="border-baseColor bg-none" />
                        <CarouselNext className="border-baseColor bg-none" />
                    </div>
                    <CarouselContent>
                        {
                            reviews.map((reviw, index) => (
                                <CarouselItem key={index} className="relative flex flex-col gap-3 ">
                                    <div className="w-ful flex flex-row justify-start gap-4 md:gap-4 items-center">
                                        <div className="w-20 h-28 rounded-full bg-white">
                                            <img src={reviw.userName} alt="" />
                                        </div>
                                        <div className="w-auto flex flex-col justify-evenly items-start">
                                            <p className="font-Neue font-medium md:text-2xl text-lg text-black">{reviw.userName}</p>
                                            <p>{reviw.date}</p>
                                        </div>
                                    </div>
                                    <div className="w-full font-Neue text-black md:text-xl text-sm font-medium md:pb-4 pb-4">{reviw.comment}</div>
                                </CarouselItem>
                            ))
                        }
                    </CarouselContent>
                </Carousel>


            </div>

        </div>
    )
}

export default Reviews
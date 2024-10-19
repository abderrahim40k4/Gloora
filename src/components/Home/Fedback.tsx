'use client'

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

interface FeedbackItem {
    image: string
    name: string
    role: string
    content: string
}

export default function Feedback() {

    const items: FeedbackItem[] = [
        {
            image: "/placeholder.svg?height=200&width=200",
            name: "Laila Rssi",
            role: "Founder Of RSS Studio",
            content: "This product has revolutionized our workflow. Highly recommended!"
        },
        {
            image: "/placeholder.svg?height=200&width=200",
            name: "Jane Smith",
            role: "Designer",
            content: "I've been using Gloora skincare products for the past six months, and the transformation in my skin has been incredible! My complexion is brighter, smoother, and more radiant than ever before. The natural ingredients and advanced formulations really make a difference."
        },
        {
            image: "/placeholder.svg?height=200&width=200",
            name: "Mike Johnson",
            role: "Developer",
            content: "The API documentation is comprehensive and the support team is very responsive."
        },
    ]

    return (
        <div className="w-full px-4 py-3 bg-background">
            <Carousel className="mx-auto my-4 relative inline-flex flex-col justify-center items-center">
                <CarouselContent className="inline-flex items-center justify-center" >
                    {items.map((item, index) => (
                        <CarouselItem key={index} className="relative md:pt-5 lg:pt-6 flex flex-col justify-between items-center border-none">
                            <Card className="h-full border-none shadow-none w-2/3">
                                <CardContent className="flex flex-col md:flex-row items-center justify-center gap-10 p-6 h-full w-full">
                                    <div className=" mb-4 md:mb-0 bg-softGray md:h-64 h-[160px] md:w-32 w-[120px] lg:mx-8 rounded-full">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="w-full md:w-2/3 text-center md:text-left flex flex-col items-start">
                                        <h3 className="text-3xl font-medium font-Neue ">{item.name}</h3>
                                        <p className="text-sm text-[#979797] font-Neue font-normal mb-2">{item.role}</p>
                                        <p className="text-base font-Neue font-medium ">{item.content}</p>
                                        <div className="flex justify-center mt-8 space-x-4">
                                            <CarouselPrevious className="relative top-auto right-auto left-auto bottom-auto border-baseColor" />
                                            <CarouselNext className="relative top-auto right-auto left-auto bottom-auto  border-baseColor" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                        </CarouselItem>

                    ))}

                </CarouselContent>
            </Carousel>
        </div>
    )
}
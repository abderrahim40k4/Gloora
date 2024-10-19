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
      content: "The user interface is intuitive and the features are exactly what we needed." 
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
      <Carousel className="mx-auto my-4">
        <CarouselContent className="inline-flex items-center justify-center" >
          {items.map((item, index) => (
            <CarouselItem key={index} className="relative md:pt-5 lg:pt-6 flex flex-col justify-between items-center border-none">
                <Card className="h-full border-none">
                  <CardContent className="flex flex-col md:flex-row items-center justify-between p-6 h-full w-full">
                    <div className="md:w-1/3 mb-4 md:mb-0 bg-softGray h-64 w-32 lg:mx-8 rounded-full">
                    <img src={item.image} alt="" />
                    </div>
                    <div className="w-full md:w-2/3 text-center md:text-left">
                      <h3 className="text-3xl font-medium font-Neue ">{item.name}</h3>
                      <p className="text-sm text-[#979797] font-Neue font-normal mb-2">{item.role}</p>
                      <p className="text-base font-Neue font-normal">{item.content}</p>
                    </div>
                  </CardContent>
                </Card>
                
            </CarouselItem>
            
          ))}
          
        </CarouselContent>
        <div className="flex justify-center mt-8 space-x-4">
                <CarouselPrevious className="relative top-auto right-auto left-auto bottom-auto border-baseColor" />
                <CarouselNext className="relative top-auto right-auto left-auto bottom-auto  border-baseColor" />
        </div>
      </Carousel>
    </div>
  )
}
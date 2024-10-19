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
      name: "John Doe",
      role: "CEO",
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
    <div className="w-full px-4 py-12 bg-background">
      <Carousel className="max-w-6xl mx-auto">
        <CarouselContent className="inline-flex items-center justify-center" >
          {items.map((item, index) => (
            <CarouselItem key={index} className="relative pt-8 md:pt-10 lg:pt-12 flex flex-col justify-between items-start">
                <Card className="h-full">
                  <CardContent className="flex flex-col md:flex-row items-center justify-between p-6 h-full w-full">
                    <div className="w-full md:w-1/3 mb-4 md:mb-0">
                    </div>
                    <div className="w-full md:w-2/3 text-center md:text-left">
                      <h3 className="text-2xl font-semibold">{item.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{item.role}</p>
                      <p className="text-base">{item.content}</p>
                    </div>
                  </CardContent>
                </Card>
                
            </CarouselItem>
            
          ))}
          
        </CarouselContent>
        <div className="flex justify-center mt-8 space-x-4">
                <CarouselPrevious className="relative top-auto right-auto left-auto bottom-auto" />
                <CarouselNext className="relative top-auto right-auto left-auto bottom-auto" />
        </div>
      </Carousel>
    </div>
  )
}
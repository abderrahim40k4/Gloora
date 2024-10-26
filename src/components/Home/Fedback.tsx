
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface FeedbackItem {
  image: string;
  name: string;
  role: string;
  content: string;
}

export default function Feedback() {
  const items: FeedbackItem[] = [
    {
      image: "/placeholder.svg?height=200&width=200",
      name: "Laila Rssi",
      role: "Founder Of RSS Studio",
      content: "This product has revolutionized our workflow. Highly recommended!",
    },
    {
      image: "/placeholder.svg?height=200&width=200",
      name: "Jane Smith",
      role: "Designer",
      content:
        "I've been using Gloora skincare products for the past six months, and the transformation in my skin has been incredible! My complexion is brighter, smoother, and more radiant than ever before. The natural ingredients and advanced formulations really make a difference.",
    },
    {
      image: "/placeholder.svg?height=200&width=200",
      name: "Mike Johnson",
      role: "Developer",
      content: "The API documentation is comprehensive and the support team is very responsive.",
    },
  ];

  return (
    <div className="w-full px-4 py-3 mb-12 relative">
            <Carousel className="mx-auto my-4 w-full">
                <CarouselContent className="w-full">
                    {items.map((item, index) => (
                        <CarouselItem key={index} className="pt-4 sm:pt-6 flex flex-col justify-between items-center">
                            <Card className="border-none shadow-none w-full sm:w-11/12 md:w-5/6 lg:w-2/3 mx-auto">
                                <CardContent className="flex flex-col items-center justify-center p-4 sm:p-6 h-full w-full">
                                    <div className="mb-4 bg-softGray  rounded-full overflow-hidden inline-flex justify-center items-center">
                                        <img
                                            src={item.image}
                                            alt={`${item.name}'s profile`}
                               
                                            className="w-40 h-56 object-cover"
                                        />
                                    </div>
                                    <div className="w-full text-center flex flex-col items-center">
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-medium font-Neue">{item.name}</h3>
                                        <p className="text-xs sm:text-sm text-[#979797] font-Neue font-normal mb-2">{item.role}</p>
                                        <p className="text-sm sm:text-base font-Neue font-medium max-w-prose">{item.content}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="flex justify-center mt-4 space-x-4">
                    <CarouselPrevious className="relative border-baseColor" />
                    <CarouselNext className="relative border-baseColor" />
                </div>
            </Carousel>
        </div>
  );
}

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel";
export default function Feedback() {
    const items = [
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
            content: "I've been using Gloora skincare products for the past six months, and the transformation in my skin has been incredible! My complexion is brighter, smoother, and more radiant than ever before. The natural ingredients and advanced formulations really make a difference.",
        },
        {
            image: "/placeholder.svg?height=200&width=200",
            name: "Mike Johnson",
            role: "Developer",
            content: "The API documentation is comprehensive and the support team is very responsive.",
        },
    ];
    return (_jsx("div", { className: "w-full px-4 py-3 mb-12 relative", children: _jsxs(Carousel, { className: "mx-auto my-4 w-full", children: [_jsx(CarouselContent, { className: "w-full", children: items.map((item, index) => (_jsx(CarouselItem, { className: "pt-4 sm:pt-6 flex flex-col justify-between items-center", children: _jsx(Card, { className: "border-none shadow-none w-full sm:w-11/12 md:w-5/6 lg:w-2/3 mx-auto", children: _jsxs(CardContent, { className: "flex flex-col items-center justify-center p-4 sm:p-6 h-full w-full", children: [_jsx("div", { className: "mb-4 bg-softGray  rounded-full overflow-hidden inline-flex justify-center items-center", children: _jsx("img", { src: item.image, alt: `${item.name}'s profile`, className: "w-40 h-56 object-cover" }) }), _jsxs("div", { className: "w-full text-center flex flex-col items-center", children: [_jsx("h3", { className: "text-xl sm:text-2xl md:text-3xl font-medium font-Neue", children: item.name }), _jsx("p", { className: "text-xs sm:text-sm text-[#979797] font-Neue font-normal mb-2", children: item.role }), _jsx("p", { className: "text-sm sm:text-base font-Neue font-medium max-w-prose", children: item.content })] })] }) }) }, index))) }), _jsxs("div", { className: "flex justify-center mt-4 space-x-4", children: [_jsx(CarouselPrevious, { className: "relative border-baseColor" }), _jsx(CarouselNext, { className: "relative border-baseColor" })] })] }) }));
}

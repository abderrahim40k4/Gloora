import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel";
import { Button } from "../ui/button";
import Arrow from "../../assets/icons/arrow.svg";
const Category = () => {
    const categorys = [
        {
            id: 1,
            title: "Gloora Bag for Meakup",
            desc: "Transform Your Skin Elegantly with Our Luxurious and Effective Skincare",
            curent: false,
        },
        {
            id: 2,
            title: "Gloora Bag for Meakup",
            desc: "Transform Your Skin Elegantly with Our Luxurious and Effective Skincare",
            curent: false,
        },
        {
            id: 3,
            title: "Gloora Bag for Meakup",
            desc: "Transform Your Skin Elegantly with Our Luxurious and Effective Skincare",
            curent: false,
        },
        {
            id: 4,
            title: "Gloora Bag for Meakup",
            desc: "Transform Your Skin Elegantly with Our Luxurious and Effective Skincare",
            curent: false,
        },
    ];
    return (_jsx("div", { className: "lg:p-10 px-5 py-8 m-auto lg:py-5 relative w-full", children: _jsx("div", { className: "w-full inline-flex flex-row justify-center items-center lg:px-28 px-4 my-6 md:my-12 relative container", children: _jsxs(Carousel, { opts: {
                    align: "center",
                    loop: false,
                }, className: "w-full inline-flex justify-between items-center relative", children: [_jsx(CarouselContent, { className: "w-full inline-flex justify-evenly items-center relative", children: categorys.map((category, index) => (_jsx(CarouselItem, { className: "basis-full w-full flex  justify-center items-center relative", children: _jsxs("div", { className: " flex flex-col justify-between gap-6 items-center w-full ", children: [_jsx("div", { className: `lg:w-[320px] w-full lg:h-[520px] h-auto border border-baseColor bg-baseColor/50 rounded-full` }), _jsxs("div", { className: "my-6 flex flex-col justify-center items-center gap-4 w-full", children: [_jsx("p", { className: "font-Neue lg:text-lg text-sm text-baseColor ", children: category.title }), _jsx("p", { className: "w-full text-center md:text-2xl text-lg font-Averia font-medium text-[#979797] lg:w-1/3 ", children: category.desc })] }), _jsxs(Button, { size: "lg", variant: "default", className: "bg-baseColor/40 rounded-full py-7", children: [_jsx("span", { className: "text-lg font-Averia font-normal", children: "See product category" }), " ", _jsx("img", { src: Arrow, alt: "" })] })] }) }, index))) }), _jsxs("div", { className: "w-full absolute flex justify-between items-center h-full", children: [_jsx(CarouselPrevious, { className: "border  border-baseColor md:block hidden" }), _jsx(CarouselNext, { className: "border border-baseColor md:block hidden" })] })] }) }) }));
};
export default Category;

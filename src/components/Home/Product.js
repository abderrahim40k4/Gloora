import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Sack from "../../assets/icons/sackShop.svg";
import Heart from "../../assets/icons/heartShop.svg";
import Eye from "../../assets/icons/eyeShop.svg";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel";
import { Badge } from ".././ui/badge";
import { Button } from ".././ui/button";
import ProdctIm from "../../assets/images/prodact.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const Product = () => {
    const prodacts = [
        {
            id: 1,
            title: "Gloora Bag for Meakup",
            category: "ACCESSORIES",
            prix: 30,
            discount: 19,
            selected: true,
        },
        {
            id: 2,
            title: "Gloora Bag for Meakup",
            category: "ACCESSORIES",
            prix: 30,
            discount: 19,
            selected: false,
        },
        {
            id: 3,
            title: "Gloora Bag for Meakup",
            category: "ACCESSORIES",
            prix: 30,
            discount: 19,
            selected: false,
        },
        {
            id: 4,
            title: "Gloora Bag for Meakup",
            category: "ACCESSORIES",
            prix: 30,
            discount: 19,
            selected: false,
        },
        {
            id: 5,
            title: "Gloora Bag for Meakup",
            category: "ACCESSORIES",
            prix: 30,
            discount: 19,
            selected: false,
        },
        {
            id: 6,
            title: "Gloora Bag for Meakup",
            category: "ACCESSORIES",
            prix: 30,
            discount: 19,
            selected: false,
        },
    ];
    const [slect, setSelect] = useState(false);
    const handleHover = (item) => {
        setSelect(true);
        item = slect;
        return item;
    };
    return (_jsx("div", { className: "lg:px-10 px-5 py-8 m-auto lg:py-5 ", children: _jsx("div", { className: "w-full  flex items-center justify-center", children: _jsxs(Carousel, { opts: {
                    align: "center",
                    loop: false,
                }, className: "w-96 md:w-full flex justify-center items-center  relative gap-8", children: [_jsx(CarouselPrevious, { className: "border-none md:block hidden " }), _jsx(CarouselContent, { className: "flex gap-8 justify-center items-center  mb-6 w-11/12 relative h-[422px]", children: prodacts.map((product, index) => (_jsxs(CarouselItem, { className: "md-h-[420px] md:basis-1/4 basis-full ", onClick: () => handleHover(product.selected), children: [_jsxs("div", { className: "w-full h-auto bg-[#F7F7F7] rounded-3xl p-4 flex justify-between items-start flex-col", children: [_jsx("div", { className: "w-full", children: _jsxs(Badge, { variant: "default", className: "px-4 py-2 rounded-full bg-black text-white font-Neue text-sm font-light", children: ["-", product.discount, "%"] }) }), _jsx("div", { className: "w-full inline-flex items-center justify-center", children: _jsx("img", { src: ProdctIm, alt: "" }) }), product.selected ? _jsxs("div", { className: "w-full flex flex-row gap-2", children: [_jsx(Button, { variant: "outline", className: "w-11 h-11 rounded-full border border-baseColor bg-white shadow-xl p-0", children: _jsx("img", { src: Heart, alt: "" }) }), _jsx(Button, { variant: "outline", className: "w-11 h-11 rounded-full border border-baseColor bg-white shadow-xl p-0", children: _jsx("img", { src: Sack, alt: "" }) }), _jsx(Button, { variant: "outline", className: "w-11 h-11 rounded-full border border-baseColor bg-white shadow-xl p-0", children: _jsx("img", { src: Eye, alt: "" }) })] }) : ""] }), _jsxs("div", { className: "w-full inline-flex items-start justify-evenly flex-col p-4", children: [_jsx("p", { className: "text-sm font-Averia font-normal text-baseColor uppercase", children: product.category }), _jsx(Link, { to: "/products", children: _jsx("p", { className: "text-lg font-Neue font-medium", children: product.title }) }), _jsxs("div", { className: "w-full inline-flex gap-4 items-center", children: [_jsxs("span", { className: "font-Neue text-lg text-black", children: [product.prix - product.discount * product.prix / 100, "$"] }), _jsxs("span", { className: "font-Neue text-xc text-black/50 font-light", children: [product.prix, "$"] })] })] })] }, index))) }), _jsx(CarouselNext, { className: "border-none md:block hidden" })] }) }) }));
};
export default Product;

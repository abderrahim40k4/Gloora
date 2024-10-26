import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Checkbox } from "@/components/ui/checkbox";
import { categories, products } from '@/data/testData';
import { Slider } from "@/components/ui/slider";
import Sack from "../../assets/icons/sackShop.svg";
import Heart from "../../assets/icons/heartShop.svg";
import Eye from "../../assets/icons/eyeShop.svg";
import ProdctIm from "../../assets/images/prodact.png";
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { useState } from "react";
import Pagintion from "./Pagintion";
const ProdactsList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postePearPage, setPostesPearPage] = useState(6);
    const lastPostIndex = currentPage * postePearPage;
    const firstPosteIndex = lastPostIndex - postePearPage;
    const curentPost = products.slice(firstPosteIndex, lastPostIndex);
    return (_jsxs("div", { className: "w-full", children: [_jsxs("div", { className: 'w-full md:px-12 px-3 flex md:flex-row flex-col md:gap-12 gap-8  mt-4', children: [_jsxs("div", { className: 'md:w-1/3 w-full py-12 h-screen md:px-8 px-4  flex flex-col gap-12 bg-softGray rounded-[50px]', children: [_jsxs("div", { className: '', children: [_jsx("p", { className: 'font-Neue font-medium text-lg mb-6', children: "Product Categories" }), categories.map((category, index) => (_jsxs("div", { className: 'w-full inline-flex flex-row gap-4 items-center', children: [_jsx(Checkbox, { className: 'rounded-full' }), _jsx("span", { children: category.name })] }, index)))] }), _jsxs("div", { className: "", children: [_jsx("p", { className: 'font-Neue font-medium text-lg mb-6', children: "Filter by price" }), _jsx(Slider, { defaultValue: [33], max: 100, step: 1 })] }), _jsxs("div", { className: "", children: [_jsx("p", { className: 'font-Neue font-medium text-lg mb-6', children: "Filter by promotions" }), _jsx(Slider, { defaultValue: [33], max: 100, step: 1 })] })] }), _jsx("div", { className: "w-full h-auto rounded-[50px] grid md:grid-cols-3 grid-cols-1 grid-rows-2  gap-6 ", children: curentPost.map((product, index) => (_jsxs("div", { className: "w-full col-span-1 row-span-1", children: [_jsxs("div", { className: "w-full h-80 bg-[#F7F7F7] rounded-3xl p-4 flex justify-between items-start flex-col", children: [_jsx("div", { className: "w-full", children: _jsx(Badge, { variant: "default", className: "px-4 py-2 rounded-full bg-black text-white font-Neue text-sm font-light", children: "-19%" }) }), _jsx("div", { className: "w-full inline-flex items-center justify-center", children: _jsx("img", { src: ProdctIm, alt: "" }) }), _jsxs("div", { className: "w-full flex flex-row gap-2", children: [_jsx(Button, { variant: "outline", className: "w-11 h-11 rounded-full border border-baseColor bg-white shadow-xl p-0", children: _jsx("img", { src: Heart, alt: "" }) }), _jsx(Button, { variant: "outline", className: "w-11 h-11 rounded-full border border-baseColor bg-white shadow-xl p-0", children: _jsx("img", { src: Sack, alt: "" }) }), _jsx(Button, { variant: "outline", className: "w-11 h-11 rounded-full border border-baseColor bg-white shadow-xl p-0", children: _jsx("img", { src: Eye, alt: "" }) })] })] }), _jsxs("div", { className: "w-full inline-flex items-start justify-evenly flex-col p-4", children: [_jsx("p", { className: "text-sm font-Averia font-normal text-baseColor uppercase", children: product.category }), _jsx(Link, { to: `/products/${product.id}`, children: _jsx("p", { className: "text-lg font-Neue font-medium", children: product.name }) }), _jsxs("div", { className: "w-full inline-flex gap-4 items-center", children: [_jsxs("span", { className: "font-Neue text-lg text-black", children: [product.price, "$"] }), _jsxs("span", { className: "font-Neue text-xc text-black/50 font-light", children: [product.price, "$"] })] })] })] }, index))) })] }), _jsx("div", { className: "w-full", children: _jsx(Pagintion, { postesPerPage: postePearPage, totalPostes: products.length, currentPage: currentPage, setCurrentPage: setCurrentPage }) })] }));
};
export default ProdactsList;

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import ProdactsList from '@/components/shop/ProdactsList';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';
const Products = () => {
    return (_jsxs("div", { children: [_jsx(NavBar, {}), _jsxs("div", { className: 'w-full lg:p-10 px-5 py-8 m-auto lg:py-5', children: [_jsx("div", { className: "w-full bg-product-bg bg-center bg-cover bg-no-repeat lg:h-[518px] h-80 rounded-[60px] inline-flex justify-center items-center flex-col gap-3" }), _jsx("div", { className: "w-full mt-6", children: _jsxs("div", { className: "w-full inline-flex justify-between items-center container md:px-12 px-3", children: [_jsx("div", { className: 'font-Neue font-medium text-sm md:text-xl text-baseColor', children: "All Gloora Products." }), _jsx("div", { children: _jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { children: _jsxs(Button, { className: 'border-2 hover:border-baseColor border-softGray md:px-6 md:py-4 mx-3  text-sm rounded-full font-Neue ', children: ["Sort by Latest ", _jsx(ChevronDown, { className: 'text-baseColor text-lg', size: 32 })] }) }), _jsx(DropdownMenuContent, { children: _jsx(DropdownMenuItem, { children: "option" }) })] }) })] }) }), _jsx("div", { className: 'w-full inline-flex justify-center items-center', children: _jsx(ProdactsList, {}) })] }), _jsx(Footer, {})] }));
};
export default Products;

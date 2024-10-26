import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from './ui/button';
import Arrow from "../assets/icons/arrowNews.svg";
import Logo from "../assets/images/footerLogo.svg";
import { Link } from 'react-router-dom';
const Footer = () => {
    const links = [
        {
            title: "Company",
            routes: [
                {
                    name: "Home",
                    path: '/',
                },
                {
                    name: "About Us",
                    path: '/about',
                },
                {
                    name: "Contact Us",
                    path: '/contact',
                },
            ]
        },
        {
            title: "Product",
            routes: [
                {
                    name: "Best Sellers",
                    path: '/',
                },
                {
                    name: "Anti Aging",
                    path: '/',
                },
                {
                    name: "Skin Care",
                    path: '/',
                },
            ]
        },
        {
            title: "Legal",
            routes: [
                {
                    name: "Privacy Policy",
                    path: '/',
                },
                {
                    name: "F&Q",
                    path: '/',
                },
                {
                    name: "Terms Of Conditions",
                    path: '/',
                },
            ]
        }
    ];
    return (_jsx("div", { className: "w-full bg-footer-bg bg-center bg-cover lg:h-[982px] py-12 mt-10 inline-flex justify-center items-center", children: _jsxs("div", { className: 'w-5/6 h-4/6 rounded-3xl  bg-baseColor bg-clip-padding backdrop-filter backdrop-blur-[10px] bg-opacity-50 lg:px-12 px-6', children: [_jsx("div", { className: 'w-full py-12 mx-auto', children: _jsx("p", { className: 'w-full text-center text-white font-Neue font-medium text-3xl', children: "Get offers and news" }) }), _jsx("div", { className: ' w-full inline-flex justify-center items-center ', children: _jsxs("div", { className: "relative md:w-1/3 w-full py-6 rounded-full ", dir: 'rtl', children: [_jsx("div", { className: '', dir: 'ltr', children: _jsx("input", { type: "text", id: "email-address-icon", className: " bg-white text-black/20 text-start inset-y-0 -start-0 rounded-full md:py-5 py-4 md:text-sm text-xs focus:ring-blue-500 focus:border-blue-500 block w-full md:ps-10 ps-5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", placeholder: "your email@example.com" }) }), _jsx("div", { className: "absolute inset-y-0 start-0 flex items-center md:ps-3.5 ps-2 pointer-events-none py-4", children: _jsx(Button, { className: 'bg-baseColor rounded-full md:pl-12 pl-2 py-1 ', children: _jsx("img", { src: Arrow, alt: "", className: '' }) }) })] }) }), _jsxs("div", { className: 'grid lg:grid-cols-4 grid-cols-1 py-12', children: [_jsx("div", { className: 'col-span-1', children: _jsx("img", { src: Logo, alt: "", className: 'text-white mb-8' }) }), links.map((link, index) => (_jsxs("div", { className: 'grid-cols-1 mb-6', children: [_jsx("p", { className: 'md:mb-8 mb-2 text-2xl text-white font-Averia font-bold', children: link.title }), link.routes.map((route, index) => (_jsx("div", { className: 'my-1 font-Neue font-normal text-lg text-white', children: _jsx(Link, { to: route.path, children: route.name }) }, index)))] }, index)))] })] }) }));
};
export default Footer;

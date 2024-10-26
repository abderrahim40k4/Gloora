import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ProductDetaile from '../components/shop/ProductDetaile';
import Titles from '@/components/Titles';
import Product from '@/components/Home/Product';
const ProductDetails = () => {
    return (_jsxs("div", { className: 'w-full mx-auto', children: [_jsx(NavBar, {}), _jsx(ProductDetaile, {}), _jsxs("div", { className: " flex flex-col justify-center items-center w-full", children: [_jsx(Titles, { content: "Related Products", text: false }), _jsx(Product, {})] }), _jsx(Footer, {})] }));
};
export default ProductDetails;

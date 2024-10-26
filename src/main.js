import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import App from './App';
import './index.css';
import NotFoundPage from './components/NotFoundPage';
import Products from './pages/Products';
import About from './pages/About';
import ProductDetails from './pages/ProductDetails';
import Chekout from './pages/Chekout';
import Contact from './pages/Contact';
import Offers from './pages/Offers';
const router = createBrowserRouter([
    {
        path: "/",
        element: _jsx(App, {}),
        errorElement: _jsx(NotFoundPage, {})
    },
    {
        path: "/products",
        element: _jsx(Products, {}),
        errorElement: _jsx(NotFoundPage, {})
    },
    {
        path: "/products/:id", // Dynamic route for product detail
        element: _jsx(ProductDetails, {}), // Add ProductDetail component
        errorElement: _jsx(NotFoundPage, {})
    },
    {
        path: "/about",
        element: _jsx(About, {}),
        errorElement: _jsx(NotFoundPage, {})
    },
    {
        path: "/chekout",
        element: _jsx(Chekout, {}),
        errorElement: _jsx(NotFoundPage, {})
    },
    {
        path: "/contact",
        element: _jsx(Contact, {}),
        errorElement: _jsx(NotFoundPage, {})
    },
    {
        path: "/offers/:id",
        element: _jsx(Offers, {}),
        errorElement: _jsx(NotFoundPage, {})
    },
]);
createRoot(document.getElementById('root')).render(_jsx(StrictMode, { children: _jsx(RouterProvider, { router: router }) }));

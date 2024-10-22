import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx'
import './index.css'
import NotFoundPage from './components/NotFoundPage.tsx';
import Products from './pages/Products.tsx';
import About from './pages/About.tsx';
import ProductDetails from './pages/ProductDetails.tsx';
import Chekout from './pages/Chekout.tsx';
import Contact from './pages/Contact.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<NotFoundPage/>
  },
  {
    path: "/products",
    element: <Products/>,
    errorElement:<NotFoundPage/>
  },
  {
    path: "/products/:id", // Dynamic route for product detail
    element: <ProductDetails/>, // Add ProductDetail component
    errorElement:<NotFoundPage/>
  },
  {
    path: "/about",
    element: <About/>,
    errorElement:<NotFoundPage/>
  },
  {
    path: "/chekout",
    element: <Chekout/>,
    errorElement:<NotFoundPage/>
  },
  {
    path: "/contact",
    element: <Contact/>,
    errorElement:<NotFoundPage/>
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

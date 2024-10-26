import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import './index.css'
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
  {
    path: "/offers/:id",
    element: <Offers/>,
    errorElement:<NotFoundPage/>
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

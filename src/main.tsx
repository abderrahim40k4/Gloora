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
    path: "/about",
    element: <About/>,
    errorElement:<NotFoundPage/>
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

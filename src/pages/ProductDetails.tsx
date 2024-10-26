import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';


import ProductDetaile from '@/components/shop/ProductDetaile';
import Titles from '@/components/Titles';
import Product from '@/components/Home/Product';


const ProductDetails = () => {
 
    return (
        <div className='w-full mx-auto'>
            <NavBar />
            <ProductDetaile/>
           
            <div className=" flex flex-col justify-center items-center w-full">

                <Titles content={"Related Products"} text={false} />
                <Product/>
            </div>

            <Footer />
        </div>
    )
}

export default ProductDetails
import { Checkbox } from "@/components/ui/checkbox"
import { categories, products } from '@/data/testData'
import { Slider } from "@/components/ui/slider"

import Sack from "../../assets/icons/sackShop.svg"
import Heart from "../../assets/icons/heartShop.svg"
import Eye from "../../assets/icons/eyeShop.svg"
import ProdctIm from "../../assets/images/prodact.png"


import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { useState } from "react"
import Pagintion from "./Pagintion"




const ProdactsList = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [postePearPage, setPostesPearPage] = useState(6)
 

  const lastPostIndex = currentPage * postePearPage;
  const firstPosteIndex = lastPostIndex - postePearPage;
  
  const curentPost = products.slice(firstPosteIndex, lastPostIndex)

  return (
    <div className="w-full">
      <div className='w-full md:px-12 px-3 flex md:flex-row flex-col md:gap-12 gap-8  mt-4'>
        <div className='md:w-1/3 w-full py-12 md:h-screen md:px-8 px-4  flex flex-col gap-12 bg-softGray rounded-[50px]'>
          <div className=''>
            <p className='font-Neue font-medium text-lg mb-6'>Product Categories</p>
            {
              categories.map((category, index) => (
                <div key={index} className='w-full inline-flex flex-row gap-4 items-center'>
                  <Checkbox className='rounded-full' />
                  <span>{category.name}</span>
                </div>
              ))
            }
          </div>

          <div className="">
            <p className='font-Neue font-medium text-lg mb-6'>Filter by price</p>
            <Slider defaultValue={[33]} max={100} step={1} />

          </div>
          <div className="">
            <p className='font-Neue font-medium text-lg mb-6'>Filter by promotions</p>
            <Slider defaultValue={[33]} max={100} step={1} />

          </div>
        </div>

        <div className="w-full h-auto rounded-[50px] grid md:grid-cols-3 grid-cols-1 grid-rows-2  gap-6 ">
          {
            curentPost.map((product, index) => (
              <div className="w-full col-span-1 row-span-1" key={index}>
                <div className="w-full h-80 bg-[#F7F7F7] rounded-3xl p-4 flex justify-between items-start flex-col">
                  <div className="w-full">
                    <Badge variant={"default"} className="px-4 py-2 rounded-full bg-black text-white font-Neue text-sm font-light">-19%</Badge>
                  </div>
                  <div className="w-full inline-flex items-center justify-center">
                    <img src={ProdctIm} alt="" />
                  </div>
                  {/* condition actievted */}
                  <div className="w-full flex flex-row gap-2">
                    <Button variant={"outline"} className="w-11 h-11 rounded-full border border-baseColor bg-white shadow-xl p-0">
                      <img src={Heart} alt="" />
                    </Button>
                    <Button variant={"outline"} className="w-11 h-11 rounded-full border border-baseColor bg-white shadow-xl p-0">
                      <img src={Sack} alt="" />
                    </Button>
                    <Button variant={"outline"} className="w-11 h-11 rounded-full border border-baseColor bg-white shadow-xl p-0">
                      <img src={Eye} alt="" />
                    </Button>
                  </div>

                </div>
                <div className="w-full inline-flex items-start justify-evenly flex-col p-4">
                  <p className="text-sm font-Averia font-normal text-baseColor uppercase">{product.category}</p>
                  <Link to={`/products/${product.id}`}><p className="text-lg font-Neue font-medium">{product.name}</p></Link>
                  <div className="w-full inline-flex gap-4 items-center">
                    <span className="font-Neue text-lg text-black">{product.price}$</span>
                    <span className="font-Neue text-xc text-black/50 font-light">{product.price}$</span>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="w-full">
        <Pagintion postesPerPage={postePearPage} totalPostes={products.length} currentPage={currentPage} setCurrentPage={setCurrentPage} />

      </div>
    </div>
  )
}

export default ProdactsList
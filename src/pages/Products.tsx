import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import ProdactsList from '@/components/shop/ProdactsList'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react'

const Products = () => {
  return (
    <div>
      <NavBar />
      <div className='w-full lg:p-10 px-5 py-8 m-auto lg:py-5'>
        <div className="w-full bg-product-bg bg-center bg-cover bg-no-repeat lg:h-[518px] h-80 rounded-[60px] inline-flex justify-center items-center flex-col gap-3">
        </div>
        <div className="w-full mt-6">
          <div className="w-full inline-flex justify-between items-center container md:px-12 px-3">
            <div className='font-Neue font-medium text-sm md:text-xl text-baseColor'>All Gloora Products.</div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button className='border-2 hover:border-baseColor border-softGray md:px-6 md:py-4 mx-3  text-sm rounded-full font-Neue ' >Sort by Latest <ChevronDown className='text-baseColor text-lg' size={32}/></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                      <DropdownMenuItem>option</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        <div className='w-full inline-flex justify-center items-center'>
            <ProdactsList/>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Products
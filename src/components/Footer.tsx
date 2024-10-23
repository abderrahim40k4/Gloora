import { Button } from './ui/button'
import Arrow from "../assets/icons/arrowNews.svg"
import Logo from "../assets/images/footerLogo.svg" 
import { Link } from 'react-router-dom'

interface LinkRoute {
    name: string;
    path: string;
  }
  
  interface LinkGroup {
    title: string;
    routes: LinkRoute[];
  }

const Footer = () => {
const links: LinkGroup[] = [
    {
        title:"Company",
        routes:[
            {
                name:"Home",
                path:'/',
            },
            {
                name:"About Us",
                path:'',
            },
            {
                name:"Contact Us",
                path:'/',
            },
        ]
    },
    {
        title:"Product",
        routes:[
            {
                name:"Best Sellers",
                path:'/',
            },
            {
                name:"Anti Aging",
                path:'/',
            },
            {
                name:"Skin Care",
                path:'/',
            },
        ]
    },
    {
        title:"Legal",
        routes:[
            {
                name:"Privacy Policy",
                path:'/',
            },
            {
                name:"F&Q",
                path:'/',
            },
            {
                name:"Terms Of Conditions",
                path:'/',
            },
        ]
    }
]

    return (
        <div className="w-full bg-footer-bg bg-center bg-cover lg:h-[982px] py-12 mt-10 inline-flex justify-center items-center">
            <div className='w-5/6 h-4/6 rounded-3xl  bg-baseColor bg-clip-padding backdrop-filter backdrop-blur-[10px] bg-opacity-50 lg:px-12 px-6'>
                <div className='w-full py-12 mx-auto'>
                    <p className='w-full text-center text-white font-Neue font-medium text-3xl'>Get offers and news</p>
                </div>
                <div className=' w-full inline-flex justify-center items-center '>
                        <div className="relative md:w-1/3 w-full py-6 rounded-full " dir='rtl'>
                           <div className='' dir='ltr'>
                           <input type="text" id="email-address-icon" className=" bg-white text-black/20 text-start inset-y-0 -start-0 rounded-full md:py-5 py-4 md:text-sm text-xs focus:ring-blue-500 focus:border-blue-500 block w-full md:ps-10 ps-5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your email@example.com" />
                           </div>
                            <div className="absolute inset-y-0 start-0 flex items-center md:ps-3.5 ps-2 pointer-events-none py-4">
                                <Button className='bg-baseColor rounded-full md:pl-12 pl-2 py-1 '><img src={Arrow} alt="" className='' /></Button>
                            </div>
                        </div>
                </div>

                <div className='grid lg:grid-cols-4 grid-cols-1 py-12'>
                    <div className='col-span-1'>
                        <img src={Logo} alt="" className='text-white mb-8'/>
                    </div>
                        {
                            links.map((link, index) =>(
                                <div className='grid-cols-1 mb-6' key={index}>
                                         <p className='md:mb-8 mb-2 text-2xl text-white font-Averia font-bold'>{link.title}</p>
                                         {
                                            link.routes.map((route, index)=>(
                                                <div key={index} className='my-1 font-Neue font-normal text-lg text-white'>
                                                    <Link to={route.path}>{route.name}</Link>
                                                </div>
                                            ))
                                         }
                                </div>
                            ))
                        }

                </div>
            </div>
        </div>
    )
}

export default Footer
import Logo from "../assets/images/Logo.svg"
import Sack from '../assets/icons/Sack.svg'
import Heart from '../assets/icons/Heart.svg'
import Menu from "../assets/icons/menuBar.svg"

import { Link, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import { useState } from "react"

type listTypes = {
    id: number,
    title: string,
    link: string,
    active: boolean

}
const NavBar = () => {
    const navigate = useNavigate()
    const list: listTypes[] = [
        {
            id: 1,
            title: "Home",
            link: "/",
            active: true
        },
        {
            id: 2,
            title: "Products",
            link: "/products",
            active: false
        },
        {
            id: 3,
            title: "About us",
            link: "/about",
            active: false
        }
    ]

    const [handllMenu, setHandelMenu] = useState(false)
    return (
        <div className="">
            <div className='lg:p-10 px-3 py-4 m-auto lg:py-5 relative overflow-hidden'>

                <div className="w-full flex flex-row justify-between items-center">
                    <div className=''>
                        <img src={Logo} alt="" className='lg:h-auto h-[37px]' />
                    </div>
                    <div className={`h-full`}>
                        <ul className="hidden lg:flex justify-evenly gap-16 bg-softGray px-14 py-4 rounded-full h-full font-Averia font-normal text-lg">
                            {
                                list.map((item) => (
                                    <li key={item.id} className={`${item.active ? 'text-baseColor' : 'text-black'}`}><Link to={item.link} onClick={() => { item.active != item.active }}>{item.title}</Link></li>

                                ))
                            }
                        </ul>
                    </div>
                    <div className=' flex flex-row justify-evenly gap-6 items-center'>

                        <Button variant={"ghost"} size={"icon"} className="md:block block "><img src={Sack} alt="" /></Button>
                        <Button variant={"ghost"} size={"icon"} className="md:hidden block  "><img src={Menu} alt="" onClick={() => { setHandelMenu(!handllMenu) }} /></Button>
                        <Button variant={"ghost"} size={"icon"} className="lg:block hidden"><img src={Heart} alt="" /></Button>
                        <Button variant={"outline"} className="font-normal lg:text-lg text-base lg:px-10 lg:py-6 px-5 py-3 rounded-full hidden md:flex" onClick={() => { navigate("/contact") }}>Contact</Button>

                    </div>

                </div>

                {/* menu mobail */}

                <div className={`w-full h-aouto md:hidden ${handllMenu === true ? "flex" : "hidden"} flex-col justify-start items-start gap-2  bg-[#c16d46] mt-4 rounded-3xl  left-0 py-4 px-4 text-white`}>
                    <div className="w-full flex flex-row justify-between items-center">
                        <p className="font-Neue text-sm font-medium">Complet your order</p>
                        <svg width="42" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="4" width="58" height="58" rx="29" fill="black" />
                            <path d="M22.625 27.3333V25.0151C22.625 21.601 25.4792 18.8333 29 18.8333C32.5208 18.8333 35.375 21.601 35.375 25.0151V27.3333" stroke="white" stroke-width="2.5" />
                            <path d="M31.6659 26.625H26.3347C20.8258 26.625 18.6948 28.0246 17.1713 33.3362C15.7991 38.1204 15.113 40.5124 15.8303 42.3676C16.2696 43.5036 17.0496 44.4887 18.0714 45.1981C21.7674 47.7639 36.0645 47.8811 39.9292 45.1981C40.951 44.4887 41.7311 43.5036 42.1704 42.3676C42.8876 40.5124 42.2015 38.1204 40.8294 33.3362C39.3665 28.2361 37.403 26.625 31.6659 26.625Z" stroke="white" stroke-width="2.5" />
                            <path d="M27.583 31.5834H30.4163" stroke="white" stroke-width="2.5" stroke-linecap="round" />
                            <circle cx="47.5" cy="14.5" r="14.5" fill="#F18453" />
                            <path d="M44.6157 15.1606V14.2974C44.6157 12.9416 44.4442 11.8846 44.1011 11.1265C43.758 10.3683 43.3208 9.98926 42.7896 9.98926H42.6899C42.5184 9.98926 42.3164 10.064 42.084 10.2134C41.8571 10.3628 41.6606 10.6118 41.4946 10.9604C41.1405 11.702 40.9634 12.6898 40.9634 13.9238V14.7788C40.9634 16.0129 41.1405 17.0394 41.4946 17.8584C41.8488 18.6719 42.3109 19.0814 42.8809 19.0869C43.4564 19.0869 43.888 18.7134 44.1758 17.9663C44.4691 17.2192 44.6157 16.284 44.6157 15.1606ZM43.0967 8.81885C43.6611 8.81885 44.1979 8.95719 44.707 9.23389C45.7585 9.80387 46.4779 10.7668 46.8652 12.1226C47.07 12.8309 47.1724 13.5807 47.1724 14.3721V14.7207C47.1724 14.7373 47.1724 14.7539 47.1724 14.7705C47.1724 15.4844 47.0645 16.201 46.8486 16.9204C46.4502 18.2596 45.7363 19.2197 44.707 19.8008C44.1481 20.1162 43.5947 20.2739 43.0469 20.2739H42.7065C42.2251 20.2739 41.7381 20.1605 41.2456 19.9336C40.7586 19.7012 40.3215 19.3359 39.9341 18.8379C39.5522 18.3343 39.2534 17.7256 39.0376 17.0117C38.8273 16.2923 38.7222 15.5812 38.7222 14.8784V14.1895C38.7222 14.1729 38.7222 14.1562 38.7222 14.1396C38.7222 13.5143 38.8245 12.8558 39.0293 12.1641C39.4277 10.7972 40.1195 9.83984 41.1045 9.29199C41.6634 8.97656 42.214 8.81885 42.7563 8.81885H43.0967ZM49.1812 19.834C49.0317 19.7288 48.957 19.5241 48.957 19.2197C48.957 18.9154 49.112 18.5667 49.4219 18.1738C49.5215 18.0521 50.0389 17.4932 50.9741 16.4971C51.9093 15.4954 52.5264 14.7733 52.8252 14.3306C53.3952 13.4894 53.6802 12.6842 53.6802 11.915C53.6802 11.4668 53.5446 11.0877 53.2734 10.7778C53.0023 10.4679 52.6066 10.313 52.0864 10.313C51.6935 10.313 51.2536 10.6312 50.7666 11.2676C50.2796 11.904 49.9282 12.2222 49.7124 12.2222C49.4966 12.2222 49.3306 12.1309 49.2144 11.9482C49.1037 11.7601 49.0483 11.5526 49.0483 11.3257C49.0483 10.717 49.3997 10.1497 50.1025 9.62402C50.8053 9.09831 51.6742 8.83545 52.709 8.83545H52.9746C52.9857 8.83545 52.9995 8.83545 53.0161 8.83545C53.4146 8.83545 53.8213 8.91569 54.2363 9.07617C55.4759 9.54102 56.0957 10.5011 56.0957 11.9565C56.0957 12.6925 55.7747 13.4811 55.1328 14.3223C54.7897 14.7705 54.1146 15.4678 53.1074 16.4141C52.1003 17.3548 51.5967 17.8944 51.5967 18.0327C51.5967 18.1711 51.9453 18.2402 52.6426 18.2402C53.3398 18.2402 53.8545 18.2043 54.1865 18.1323C54.5241 18.0604 54.8672 17.8861 55.2158 17.6094C55.5645 17.3327 55.8384 17.1943 56.0376 17.1943C56.3198 17.1943 56.4609 17.4378 56.4609 17.9248C56.4609 18.8711 56.2977 19.4854 55.9712 19.7676C55.7886 19.9225 55.2214 20 54.2695 20H54.0039L53.73 19.9917H53.1904L50.7334 19.9419C50.6117 19.9419 50.4318 19.9474 50.1938 19.9585L49.6792 19.9834C49.5021 19.9834 49.3361 19.9336 49.1812 19.834Z" fill="white" />
                        </svg>

                    </div>

                    <div className="w-full">
                        <ul className=" lg:flex flex-col justify-evenly gap-4">
                            {
                                list.map((item) => (
                                    <li key={item.id} className="text-white font-Averia text-2xl"><Link to={item.link} onClick={() => { }}>{item.title}</Link></li>

                                ))
                            }
                        </ul>
                    </div>


                    <div className=" w-full flex flex-row justify-between items-center mt-4">
                        <Button className="bg-white text-baseColor font-Averia rounded-full relative text-sm px-6" onClick={() => { navigate("/contact") }}>
                            Contact Us
                        </Button>
                        <div className="w-14 h-14 inline-flex justify-center items-center rounded-full bg-baseColor relative">
                            <div className="absolute rounded-full w-4 h-4 bg-white -top-0.5 -left-0.5">

                            </div>
                            <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg" className=" relative">
                                <path d="M26.5717 2.65838C22.7726 0.328078 19.4569 1.26716 17.4651 2.76302C16.6482 3.37636 16.2399 3.68303 15.9997 3.68303C15.7594 3.68303 15.3511 3.37636 14.5343 2.76302C12.5425 1.26716 9.22672 0.328078 5.42771 2.65838C0.441939 5.71667 -0.686222 15.8061 10.814 24.3182C13.0044 25.9394 14.0996 26.75 15.9997 26.75C17.8997 26.75 18.9949 25.9394 21.1854 24.3182C32.6856 15.8061 31.5574 5.71667 26.5717 2.65838Z" stroke="white" stroke-width="2.5" stroke-linecap="round" />
                            </svg>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
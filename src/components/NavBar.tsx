import React from 'react'
import Logo from "../assets/images/Logo.svg"
import Sack from '../assets/icons/Sack.svg'
import Heart from '../assets/icons/Heart.svg'

import { Link } from 'react-router-dom'
import { Button } from './ui/button'

type listTypes = {
    id:number,
    title:string,
    link:string,
    active:boolean

}
const NavBar = () => {
    const list:listTypes[] =[
        {
            id:1,
            title:"Home",
            link:"/",
            active:true
        },
        {
            id:2,
            title:"Products",
            link:"/",
            active:false
        },
        {
            id:3,
            title:"About us",
            link:"/",
            active:false
        }
    ]
  return (
    <div className="w-full flex flex-row justify-between items-center"> 
        <div className=''>
            <img src={Logo} alt="" className='lg:h-auto h-[37px]' />
        </div>
        <div className={`h-full`}>
            <ul className="hidden lg:flex justify-evenly gap-16 bg-softGray px-16 py-5 rounded-full h-full font-Averia font-normal text-lg">
                {
                    list.map((item)=>(
                        <li key={item.id} className={`${item.active? 'text-baseColor':'text-black'}`}><Link to={item.link}>{item.title}</Link></li>

                    ))
                }
            </ul>
        </div>
        <div className='  lg:flex justify-evenly gap-6 items-center'>
            <div></div>
            
            <Button className='' variant={"ghost"} size={"icon"} className="lg:block hidden "><img src={Sack} alt="" /></Button>
            <Button className='' variant={"ghost"} size={"icon"} className="lg:block hidden"><img src={Heart} alt="" /></Button>
            <Button className='' variant={"outline"} size={"lg"} className="font-normal text-lg " >Contact</Button>
        </div>
    </div>
  )
}

export default NavBar
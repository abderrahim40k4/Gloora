import NextArr from "../../assets/icons/next.svg"
import PervArr from "../../assets/icons/prev.svg"
import { Button } from "../ui/button"

const Pagintion = ({totalPostes, postesPerPage, currentPage, setCurrentPage} : { totalPostes:number, postesPerPage:number, currentPage:number, setCurrentPage:any }) => {
    let pages = []
    for (let i = 0; i <= Math.ceil(totalPostes/postesPerPage); i++) {
        pages.push(i)
        
    }
  return (
    <div className='w-full inline-flex justify-end items-center gap-8'>
      <span className="text-[#CACACA] font-Neue font-medium text-lg"> Page 0{currentPage}</span>
        <Button className="w-12 h-12 border border-baseColor p-1 rounded-full" size={"icon"} onClick={()=>{currentPage >0 ?setCurrentPage(currentPage--) : setCurrentPage(1)}}><img src={PervArr} alt=""/></Button>
        <Button className=" w-12 h-12  border border-baseColor p-1 rounded-full" size={"icon"} onClick={()=>{setCurrentPage(currentPage++)}}><img src={NextArr} alt="" /></Button>
      
        

    </div>
  )
}

export default Pagintion
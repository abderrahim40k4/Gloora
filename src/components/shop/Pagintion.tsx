import NextArr from "../../assets/icons/next.svg"
import PervArr from "../../assets/icons/prev.svg"
import { Button } from "../ui/button"

const Pagintion = ({totalPostes, postesPerPage, currentPage, setCurrentPage} : { totalPostes:number, postesPerPage:number, currentPage:number, setCurrentPage:any }) => {
    let pages = []
    for (let i = 0; i <= Math.ceil(totalPostes/postesPerPage); i++) {
        pages.push(i)
        
    }
  return (
    <div className='w-full inline-flex justify-end items-end'>
        {currentPage}
      <img src={PervArr} alt="" onClick={()=>{setCurrentPage(currentPage--)}}/>
        <img src={NextArr} alt="" onClick={()=>{setCurrentPage(currentPage++)}}/>

    </div>
  )
}

export default Pagintion
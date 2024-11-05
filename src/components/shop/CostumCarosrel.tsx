import  { useState } from 'react';
interface Review {
    productId: number;
    userName: string;
    rating: number;
    comment: string;
    date: string;
  }
const CostumCarosrel = ({reviws}:{reviws:Review[]}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % reviws.length);
    };
  
    const handlePrevious = () => {
      setActiveIndex((prevIndex) => (prevIndex - 1 + reviws.length) % reviws.length);
    };

  return (
    <div className='w-full'>

    </div>
  )
}

export default CostumCarosrel
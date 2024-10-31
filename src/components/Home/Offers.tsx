
import { Button } from '../ui/button';
import Arrow from "../../assets/icons/inlinArrow.svg"
import imgPoduct from "../../assets/images/bg-small.png"
import productOffer from "../../assets/images/bg-big.png"


interface SpecialOffer {
  id: number;
  title?: string;
  description?: string;
  discountPercentage?: number;
}

const Offers = () => {
  const specialOffers: SpecialOffer[] = [
    {
      id: 1,
      title: "50% Off on All Shoes",
      description: "Get 50% discount on all our shoe collection for a limited time.",
      discountPercentage: 50,
    },
    {
      id: 2,
      title: "30% Discount on Electronics",
      description: "Save big on all electronic items with a 30% discount.",
    },
    {
      id: 3,
      title: "30% Discount on Electronics",
      description: "Save big on all electronic items with a 30% discount.",
      discountPercentage: 30,
    },
    {
      id: 4,
      title: "30% Discount on Electronics",
      description: "Save big on all electronic items with a 30% discount.",
      discountPercentage: 30,
    }
  ];

  return (
    <div className="lg:p-10 px-5 py-8 m-auto lg:py-5 w-full">
      <div className='w-full flex flex-col justify-center items-center gap-4 md:gap-4 lg:gap-6'>
        <div className='w-full relative flex flex-col justify-between items-center overflow-hidden  md:p-8 p-4 rounded-[42px] md:rounded-[62px] h-[415px] md:h-[625px]'>
          <img src={productOffer} alt="" className='absolute object-cover z-10 w-full h-full' />
          <div className="relative w-full h-full flex flex-col justify-between pt-3 md:pt-8 z-50">
            <div className='w-full inline-flex justify-end items-end'>
              <Button className='w-12  md:w-20 p-1' size={"icon"}><img src={Arrow} alt="w-24 h-24 md:w-32 md:h-32" /></Button>
            </div>
            <div className='w-full inline-flex justify-start items-start'>
              <p className='w-full text-white font-Averia text-2xl lg:text-5xl md:text-3xl font-medium'>
                {
                  specialOffers[0].title
                }</p>
            </div>

          </div>
        </div>
        <div className='w-full flex flex-col md:flex-row justify-between items-end gap-6'>
          <div className='w-full md:w-1/3  h-[379px] md:h-[438px]  relative flex flex-col justify-between items-center overflow-hidden  md:p-6 p-4 rounded-[42px] md:rounded-[62px]'>
            <img src={productOffer} alt="" className='absolute object-cover z-10 w-full h-full' />
            <div className="relative w-full h-full flex flex-col justify-between z-50 pt-3 md:pt-4">
              <div className='w-full inline-flex justify-end items-end'>
                <Button className='w-12  md:w-20 p-1' size={"icon"}><img src={Arrow} alt="w-24 h-24 md:w-32 md:h-32" /></Button>
              </div>
              <div className='w-full inline-flex justify-start items-start'>
                <p className='w-full text-white font-Neue text-2xl lg:text-5xl md:text-3xl font-medium'>
                  {
                    specialOffers[1].title
                  }</p>
              </div>

            </div>
          </div>

          <div className='w-full md:w-1/3  h-[379px]    flex flex-col justify-between items-center overflow-hidden  md:px-6 px-4 rounded-[42px] md:rounded-[62px] gap-6'>
          <div className='w-full flex flex-col justify-center items-center md:items-start '>
            <p className='w-full md:text-start text-center text-3xl md:text-4xl font-Neue font-medium text-black'>
            Get -50% Off 
            </p>
            <p className='w-full md:text-start text-center text-xl md:text-2xl font-Averia font-normal italic text-baseColor'>
            Gloora Pack
            </p>

          </div>

          <div className='w-full h-full flex justify-center items-center relative'>
          <img src={imgPoduct} alt="" className='absolute object-cover z-10  h-full rounded-3xl' />
          <div className="relative w-full h-full pt-4 flex flex-col justify-between z-50">
              <div className='w-full inline-flex justify-end items-end'>
                <Button className='w-12  md:w-20 p-1 relative' size={"icon"}><img src={Arrow} alt="w-24 h-24 md:w-32 md:h-32" /></Button>
              </div>
            </div>
          </div>

          </div>


          <div className='w-full md:w-1/3  h-[527px] md:h-[438px]  relative flex flex-col justify-between items-center overflow-hidden md:p-6 p-4 rounded-[42px] md:rounded-[62px]'>
            <img src={productOffer} alt="" className='absolute object-cover z-10 w-full h-full' />
            <div className="relative w-full h-full pt-8 flex flex-col justify-between z-50">
              <div className='w-full flex  justify-end items-end'>
                <Button className='w-12  md:w-20 p-1 relative m-0' size={"icon"}><img src={Arrow} alt="w-24 h-24 md:w-32 md:h-32 m-0" /></Button>
              </div>
              <div className='w-full inline-flex justify-start items-start'>
                <p className='w-full text-white font-Neue text-2xl lg:text-5xl md:text-3xl font-medium'>
                  {
                    specialOffers[2].title
                  }</p>
              </div>

            </div>
          </div>


         

        </div>

      </div>
    </div>
  );
}

export default Offers;

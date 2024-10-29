
import { Button } from '../ui/button';
import Arrow from "../../assets/icons/inlinArrow.svg"
import imgPoduct from "../../assets/images/bg-small.png"

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
      <div className="grid md:grid-cols-3 grid-cols-1 w-full md:gap-12 gap-6 self-stretch content-between">
        {
          specialOffers.map((offer, index) => (
            <div
              key={index}
              className={`${index === 0 ? "md:col-span-3 h-96 md:h-96 bg-hero-pattern bg-cover bg-center bg-softGray" : "md:h-[420px] hover:bg-baseColor/40  bg-softGray h-96"} col-span-1 rounded-3xl relative md:p-4 p-2  cursor-pointer h-96 ${index === 2 ? "flex flex-col justify-start gap-0 items-center p-0 " : ""}`}
            >
              {/* You can include the content of the offer here */}
              <div className='w-full inline-flex justify-end items-end right-2 absolute'><Button size={"icon"} variant={"ghost"} className='w-12 h-12'><img src={Arrow} className="w-full " alt="" /></Button></div>
              {
                index === 2 ? <div>
                    <div className='relative w-full h-full md:justify-between justify-between items-center md:items-start md:gap-3 gap-4 flex flex-col py-4'>
                      <div className=''>
                        <p className='font-Neue font-medium text-black text-lg md:text-2xl'>{offer.title}</p>
                        <p className='w-full font-Neue text-baseColor text-sm md:text-xl text-center md:text-start font-normal'>Gloora Pack</p>
                      </div>
                        <img src={imgPoduct} alt="" className='mt-1'/>
                    </div>
                </div>: <div className='w-full relative h-full md: mt-3'>
                    <p className='w-11/12 bottom-4 font-Neue font-medium md:text-5xl text-2xl text-white md:left-4 left-1 absolute '>

                        {offer.title}
                    </p>
                </div>
              }
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Offers;

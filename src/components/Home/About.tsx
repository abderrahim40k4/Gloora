import Background from "../../assets/images/aboutUsbg.png"

const About = () => {
  return (
    
    <div className=" inline-flex justify-center items-center relative overflow-hidden h-[898px] md:h-[1025px] w-full">
        <img src={Background} alt="" className='object-cover h-full z-10   absolute w-full' />
        <div className='md:w-2/4 w-4/5 md:h-[37rem] h-[400px] bg-baseColor/75 rounded-3xl  md:pt-8 pb-12 md:px-8 px-4 flex flex-col md:gap-8  md:justify-start justify-start gap-6 pt-4 md:items-start  relative z-50'>
            <div className="w-full bg-opacity-10 bg-white md:h-64 h-[135px] rounded-3xl"></div>
            <div className='w-full flex flex-col md:flex-row justify-between items-center px-2'>
                <p className='font-Neue font-medium text-white text-lg md:text-2xl'>Why Gloora</p>
                <p className='font-Averia font-medium text-3xl md:text-6xl text-white'>89%</p>
            </div>
            <div className='text-white font-Neue text-sm md:text-2xl md:w-3/4 w-full text-center md:text-start'>
                unique formulations combine the finest natural ingredients with advanced science to nourish, rejuvenate, and protect your skin, giving you a radiant, healthy glow.
            </div>
        </div>
    </div>
  )
}

export default About
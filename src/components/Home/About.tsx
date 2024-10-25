import Background from "../../assets/images/aboutUsbg.png"

const About = () => {
  return (
    
    <div className="w-full inline-flex justify-center items-center ">
        <img src={Background} alt="" className='w-full object-fill static md:h-auto h-[900px]' />
        <div className='z-50 absolute md:w-2/4 w-4/5 h-[37rem] bg-baseColor/75 rounded-3xl p-6 flex flex-col gap-8'>
            <div className="w-full bg-opacity-10 bg-white h-64 rounded-xl"></div>
            <div className='w-full inline-flex justify-between items-center px-2'>
                <p className='font-Neue font-medium text-white text-lg md:text-2xl'>Why Gloora</p>
                <p className='font-Averia font-medium text-3xl md:text-6xl text-white'>89%</p>
            </div>
            <div className='px-2 text-white font-Neue text-lg md:text-xl w-3/4'>
                unique formulations combine the finest natural ingredients with advanced science to nourish, rejuvenate, and protect your skin, giving you a radiant, healthy glow.
            </div>
        </div>
    </div>
  )
}

export default About
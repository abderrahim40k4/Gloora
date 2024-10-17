import Hero from "../assets/images/imageHero.png"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const Home = () => {
    const swiper = useSwiper();
  return (
    <div className="lg:px-10 px-5  m-auto mt-5">
    <div className="w-full relative h-screen ">
        <div className="w-full md:h-full  overflow-hidden md:rounded-lg  rounded-none absolute z-10">
            <img src={Hero} alt="" className='w-full h-screen'/>
        </div>
        <div className='w-full flex md:flex-row flex-col justify-between items-end z-50 absolute'>
            <div>test</div>
            <div>test</div>
        </div>
    </div>

    <div className="">
    <Swiper navigation={false} modules={[Navigation]} className="text-baseColor" slidesPerView={4}>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      <button onClick={() => swiper.slideNext()}>Slide to the next slide</button>
      </Swiper>
    </div>
    </div>
  )
}

export default Home
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";


const CustomSwiper = () => {
  return (
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        modules={[Autoplay, Pagination]}
        className="mySwiper text-white w-[60%] h-64 bg-blue-400"
        >
        <SwiperSlide className='text-red-500 h-64 bg-blue'>Slide 1</SwiperSlide>
        <SwiperSlide className='text-red-500'>Slide 2</SwiperSlide>
        
      </Swiper>
  )
}

export default CustomSwiper
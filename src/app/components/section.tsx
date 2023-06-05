"use client";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { createContext } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Section() {
    return (
        <>
            <div className="h-screen w-screen max-w-[1920px] max-h-[1080px]"></div>
            <div className="w-screen h-screen main relative z-40 p-20">
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                className='w-[1005] h-[100%]'
                >
                <SwiperSlide>
                    <div className="w-100 h-100"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-100 h-100"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-100 h-100"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-100 h-100"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-100 h-100"></div>
                </SwiperSlide>

            </Swiper>

            </div>
        </>
    )
  };


  
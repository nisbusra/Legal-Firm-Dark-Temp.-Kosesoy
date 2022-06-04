import React from 'react';
import NextLink from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

const Slider = () => {
  return (
    <div className="bg-[#1a2451]">
      <div className="mt-16">
        <h1 className="text-4xl font-[martel] font-bold text-white text-center ">
          Blog
        </h1>
        <div className="mx-10">
          <p className="flex justify-around text-base text-white text-center my-4 font-[montserrat] font-light">
            Güncel içeriklerle gelişmeleri yakından takip ediyoruz.
          </p>
        </div>
      </div>

      <div className="py-8 px-8 mx-auto overflow-hidden">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper max-w-[1000px] max-h-[500px]"
        >
          <SwiperSlide>
            <img src="/images/booksinshelfs.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/booksonshelves.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/booksandstatue.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="flex justify-center items-center mt-10">
        <span className="text-white bg-[#Ffbd4a] opacity-50 hover:opacity-100 p-2 rounded-lg bg-opacity-75 ring-1 hover:ring-[#fff] ring-offset-[#1a2451]">
          <NextLink href="/blog">
            <a>
              <button>Tümünü okumak için...</button>
            </a>
          </NextLink>
        </span>
      </div>
    </div>
  );
};

export default Slider;

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { MdOutlineStar } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import TestimonalsData from "../data/TestimonialsData";
import { useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";

export default function TestimonialsCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col gap-8 w-full items-center justify-center overflow-hidden pt-4 px-4 lg:pb-4">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        spaceBetween={24}
        slidesPerView={1}
        loop
        modules={[Pagination]}
        className="w-full pb-10"
      >
        {TestimonalsData.map((review) => {
          return (
            <SwiperSlide>
              <div className="flex flex-col items-center justify-center text-center gap-8 lg:flex-row lg:items-stretch xl:gap-20">
                <figure className="w-full max-w-[320px] h-90 sm:h-100 md:h-110 lg:120 lg:w-80 shrink-0">
                  <img
                    src={review.image}
                    alt=""
                    className="w-full h-full rounded-3xl object-cover object-center"
                  />
                </figure>

                {/* Testimonial Info */}
                <div className="flex flex-col gap-8 justify-start lg:w-1/2 py-2 text-center lg:text-start lg:items-start w-full">
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-[#FFC107]">
                    <MdOutlineStar className="text-4xl" />
                    <MdOutlineStar className="text-4xl" />
                    <MdOutlineStar className="text-4xl" />
                    <MdOutlineStar className="text-4xl" />
                    <MdOutlineStar className="text-4xl" />
                  </div>
                  <p>{review.description}</p>
                  <h2 className="font-heading text-[40px] md:text-[50px] leading-14">
                    {review.name}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between w-full">
        {/* Left & Right */}
        <div className="flex gap-2 bg-[#EEC5C5] rounded-full p-1">
          <div
            onClick={() => swiperRef.current?.slidePrev()}
            className="bg-[#923232] p-2 rounded-full cursor-pointer hover:bg-[#712626] transition-colors duration-300"
          >
            <FaArrowLeft className="text-2xl  text-[#FFFFFF]" />
          </div>
          <div
            onClick={() => swiperRef.current?.slideNext()}
            className="bg-[#923232] p-2 rounded-full cursor-pointer hover:bg-[#712626] transition-colors duration-300"
          >
            <FaArrowRight className="text-2xl  text-[#FFFFFF]" />
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center gap-2.5 bg-[#EEC5C5] px-3 py-2 rounded-full">
          {TestimonalsData.map((_, i) => (
            <button
              key={i}
              onClick={() => swiperRef.current?.slideTo(i)}
              className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-6 bg-[#AC0404]" : "w-2 bg-[#AB7070]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { IoIosStar } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialsCarousel() {
  return (
    <div className="flex gap-8 w-full items-center justify-center overflow-hidden pt-4 px-4 pb-16 lg:pb-4">
      <Swiper
        spaceBetween={24}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="w-full pb-10"
        style={
          {
            background: "transparent",
            overflow: "visible",
            "--swiper-pagination-bottom": "-56px",
            "--swiper-pagination-color": "#000",
          } as React.CSSProperties
        }
        breakpoints={{
          300: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        <SwiperSlide>
          <div className="bg-white px-6 py-8 rounded-2xl flex flex-col gap-8 items-center text-center shadow-[2px_2px_22.2px_rgba(0,0,0,0.05)]">
            {/* Rating Star */}
            <div className="flex gap-1 text-[24px] text-[#F19D00]">
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
            </div>

            {/* Rating Paragraph */}
            <p>
              “Great instructor! Very patient and helped me pass first time. Highly recommended.”
            </p>

            {/* Rating Author */}
            <p>- Liam K.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white px-6 py-8 rounded-2xl flex flex-col gap-8 items-center text-center shadow-[2px_2px_22.2px_rgba(0,0,0,0.05)]">
            {/* Rating Star */}
            <div className="flex gap-1 text-[24px] text-[#F19D00]">
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
            </div>

            {/* Rating Paragraph */}
            <p>
              “Great instructor! Very patient and helped me pass first time. Highly recommended.”
            </p>

            {/* Rating Author */}
            <p>- Liam K.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white px-6 py-8 rounded-2xl flex flex-col gap-8 items-center text-center shadow-[2px_2px_22.2px_rgba(0,0,0,0.05)]">
            {/* Rating Star */}
            <div className="flex gap-1 text-[24px] text-[#F19D00]">
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
            </div>

            {/* Rating Paragraph */}
            <p>
              “Great instructor! Very patient and helped me pass first time. Highly recommended.”
            </p>

            {/* Rating Author */}
            <p>- Liam K.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

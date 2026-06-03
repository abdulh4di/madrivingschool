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
        <SwiperSlide className="h-auto!">
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="h-full bg-white px-6 py-8 rounded-2xl flex flex-col justify-between gap-8 items-center text-center shadow-[2px_2px_22.2px_rgba(0,0,0,0.05)]"
          >
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
              "Alhamdulillah very good instructor.Within a very short time lesson I passed my
              driving test with 2 minor.thank you"
            </p>

            {/* Rating Author */}
            <p>- Rozi Y.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-auto!">
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="h-full bg-white px-6 py-8 rounded-2xl flex flex-col justify-between gap-8 items-center text-center shadow-[2px_2px_22.2px_rgba(0,0,0,0.05)]"
          >
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
              "Alhamdulillah while taking my driving lesson Your advice makes me more confident to
              pass my driving test.Now its been seven month i am driving without any points on my
              driving licence."
            </p>

            {/* Rating Author */}
            <p>- Saifur R.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-auto!">
          <div
            data-aos="zoom-in"
            data-aos-delay="600"
            className="h-full bg-white px-6 py-8 rounded-2xl flex flex-col justify-between gap-8 items-center text-center shadow-[2px_2px_22.2px_rgba(0,0,0,0.05)]"
          >
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
              "Mohammed is a lovely, gentle, and patient instructor. Thanks to his calm teaching
              style, I passed first time and now feel confident driving independently."
            </p>

            {/* Rating Author */}
            <p>- Christina Brown.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

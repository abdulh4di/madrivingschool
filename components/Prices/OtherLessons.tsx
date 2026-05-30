import React from "react";
import { GoChecklist } from "react-icons/go";
import { PiRoadHorizon } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";

export default function OtherLessons() {
  return (
    <div className="w-full py-6 md:py-20">
      <div className="max-w-7xl mx-auto px-5 flex flex-col gap-8">
        <h2 className="font-heading text-[40px] leading-12 text-center md:text-[50px] md:leadinh-15">
          Other Lesson Options
        </h2>

        <div className="flex flex-col gap-8 lg:flex-row items-center lg:items-stretch">
          <div className="bg-[#F5E1DE] rounded-2xl flex items-center gap-8 px-4 py-4 h-45 flex-1 w-full max-w-120 lg:max-w-none">
            <span>
              <PiRoadHorizon className="text-7xl text-[#AC0404]" />
            </span>
            <div className="flex flex-col gap-4">
              <h3 className="text-[18px] font-bold uppercase">Motorway Lessons</h3>
              <p>For learners or passed drivers who want extra motorway confidence. </p>
            </div>
          </div>
          <div className="bg-[#F5E1DE] rounded-2xl flex items-center gap-8 px-4 py-4 h-45 flex-1 w-full max-w-120 lg:max-w-none">
            <span>
              <SlCalender className="text-7xl text-[#AC0404]" />
            </span>
            <div className="flex flex-col gap-4">
              <h3 className="text-[18px] font-bold uppercase">Intensive Lessons</h3>
              <p>Focused lessons for learners who want faster progress.</p>
            </div>
          </div>
          <div className="bg-[#F5E1DE] rounded-2xl flex items-center gap-8 px-4 py-4 h-45 flex-1 w-full max-w-120 lg:max-w-none">
            <span>
              <GoChecklist className="text-7xl text-[#AC0404]" />
            </span>
            <div className="flex flex-col gap-4">
              <h3 className="text-[18px] font-bold uppercase">Mock test preperation</h3>
              <p>Practice test routes, manoeuvrers and independent driving.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
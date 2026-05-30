import React from "react";
import { FiUsers } from "react-icons/fi";
import { TbChecklist, TbManualGearboxFilled } from "react-icons/tb";

export default function Benefits() {
  return (
    <div className="w-full py-6 md:py-20">
      <div className="max-w-7xl mx-auto px-5 flex flex-col gap-8">
        <h2 className="font-heading text-[40px] leading-12 text-center md:text-[50px] md:leadinh-15">
          Why Learn With MA Driving School?
        </h2>

        <div className="flex flex-wrap gap-8 items-center justify-center">
          {/* Benefit 1 */}
          <div className="bg-[#FFFFFF] flex flex-col items-center gap-8 px-4 py-8 rounded-xl shadow-[2px_2px_22.2px_rgba(0,0,0,0.25)] w-full sm:w-90">
            <FiUsers className="text-7xl bg-[#F5E1DE] text-[#AC0404] rounded-full p-2" />
            <h2 className="font-heading text-[32px] text-center">Patient Teaching</h2>
            <p className="text-center font-medium">
              Calm, supportive lessons that help nervous learners feel more comfortable behind the
              wheel.
            </p>
          </div>
          <div className="bg-[#FFFFFF] flex flex-col items-center gap-8 px-4 py-8 rounded-xl shadow-[2px_2px_22.2px_rgba(0,0,0,0.25)] w-full sm:w-90">
            <TbManualGearboxFilled className="text-7xl bg-[#F5E1DE] text-[#AC0404] rounded-full p-3" />
            <h2 className="font-heading text-[32px] text-center">Manual Lessons</h2>
            <p className="text-center font-medium">
              Focused manual driving lessons covering clutch control, gears, manoeuvrers and road
              awareness.
            </p>
          </div>
          <div className="bg-[#FFFFFF] flex flex-col items-center gap-8 px-4 py-8 rounded-xl shadow-[2px_2px_22.2px_rgba(0,0,0,0.25)] w-full sm:w-90">
            <TbChecklist className="text-7xl bg-[#F5E1DE] text-[#AC0404] rounded-full p-3" />
            <h2 className="font-heading text-[32px] text-center">Test Preparation</h2>
            <p className="text-center font-medium">
              Structured support to help you build confidence and prepare properly for your driving
              test.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
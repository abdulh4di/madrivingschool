import { MdCheckCircleOutline } from "react-icons/md";
import { PiCoinsLight, PiUserLight, PiUsersThreeLight } from "react-icons/pi";
import { TbSteeringWheelFilled } from "react-icons/tb";

export default function Header() {
  return (
    <div className="relative z-10 w-full pt-30 mb-10 md:pt-40">
      <div className="max-w-7xl mx-auto px-5 flex flex-col items-center gap-8">
        <h2 className="font-heading text-[40px] leading-12 text-center md:text-[50px] md:leadinh-15">
          Choose the Right Lesson Package
        </h2>

        {/* Price Cards */}
        <div className="w-full flex flex-wrap justify-center gap-14 md:gap-8">
          {/* Best Value Price Card */}
          <div className="flex flex-col w-full max-w-90 order-first lg:order-2">
            <div className="flex justify-center gap-2 h-24 text-[#6D6666] bg-[#E0E0E0] rounded-t-4xl py-1">
              <PiCoinsLight className="text-7xl" />
              <span className="font-heading text-[32px] uppercase">Best Value</span>
            </div>
            {/* Card overlaps the banner */}
            <div className="relative z-10 -mt-6 bg-[#FFFFFF] w-full rounded-4xl shadow-[2px_2px_22.2px_rgba(0,0,0,0.15)] px-8 py-6 flex flex-col items-center gap-8">
              {/* Price Card Top Sectiom */}
              <div className="flex flex-col items-center gap-2">
                <PiUsersThreeLight className="text-7xl bg-[#F5E1DE] text-[#AC0404] rounded-full p-2" />
                <h2 className="font-heading text-[32px] text-center">Block Booking</h2>
                <div className="flex gap-2 items-baseline justify-end">
                  <span className="text-[#AC0404] font-heading text-[32px] text-center">£380</span>
                  <span className="font-heading text-[24px] text-center">for 10 hours</span>
                </div>
                <p className="text-center font-medium">Best Value option</p>
              </div>

              {/* Price Card Middle Section */}
              <div className="flex flex-col gap-2 w-full">
                <PriceFeatures text="10 hours driving lessons" />
                <PriceFeatures text="Save when booking in advance" />
                <PriceFeatures text="Progress tracking" />
                <PriceFeatures text="Test preparation support" />
                <PriceFeatures text="Build confidence with regular practice" />
                <PriceFeatures text="Clear structure from lesson to lesson" />
                <PriceFeatures text="Flexible scheduling" />
                <PriceFeatures text="Consistent progress" />
              </div>

              {/* Button */}
              <span className="bg-[#980000] w-70 text-white px-8 py-3 rounded-4xl hover:bg-[#760000] transition-colors duration-300 cursor-pointer">
                <a href="" className="uppercase font-semibold flex justify-center">
                  Book Block Lessons
                </a>
              </span>
            </div>
          </div>

          {/* Price Card 2 */}
          <div className="flex flex-col w-full max-w-90 order-2 lg:order-1 md:mt-19">
            <div className="relative bg-[#FFFFFF] w-full rounded-4xl shadow-[2px_2px_22.2px_rgba(0,0,0,0.15)] px-8 py-6 flex flex-col items-center gap-8">
              {/* Price Card Top Sectiom */}
              <div className="flex flex-col items-center gap-2">
                <PiUserLight className="text-7xl bg-[#F5E1DE] text-[#AC0404] rounded-full p-2" />
                <h2 className="font-heading text-[32px] text-center">Single Lesson</h2>
                <div className="flex gap-2 items-baseline justify-end">
                  <span className="text-[#AC0404] font-heading text-[32px] text-center">£40</span>
                  <span className="font-heading text-[24px] text-center">per hour</span>
                </div>
                <p className="text-center font-medium">Best for flexible learning</p>
              </div>

              {/* Price Card Middle Section */}
              <div className="flex flex-col gap-2 w-full">
                <PriceFeatures text="60 minute driving lesson" />
                <PriceFeatures text="1-to-1 driving lesson" />
                <PriceFeatures text="Patient instruction" />
                <PriceFeatures text="Progress feedback" />
              </div>

              {/* Button */}
              <span className="bg-[#980000] w-70 text-white px-8 py-3 rounded-4xl hover:bg-[#760000] transition-colors duration-300 cursor-pointer">
                <a href="" className="uppercase font-semibold flex justify-center">
                  Book a Lesson Today
                </a>
              </span>
            </div>
          </div>

          {/* Price Card 3 */}
          <div className="flex flex-col w-full max-w-90 order-3 md:mt-19">
            <div className="relative bg-[#FFFFFF] w-full rounded-4xl shadow-[2px_2px_22.2px_rgba(0,0,0,0.15)] px-8 py-6 flex flex-col items-center gap-8">
              {/* Price Card Top Sectiom */}
              <div className="flex flex-col items-center gap-2">
                <TbSteeringWheelFilled className="text-7xl bg-[#F5E1DE] text-[#AC0404] rounded-full p-2" />
                <h2 className="font-heading text-[32px] text-center">Refresher Lesson</h2>
                <div className="flex gap-2 items-baseline justify-end">
                  <span className="text-[#AC0404] font-heading text-[32px] text-center">£40</span>
                  <span className="font-heading text-[24px] text-center">for 10 hours</span>
                </div>
                <p className="text-center font-medium">Best for building confidence</p>
              </div>

              {/* Price Card Middle Section */}
              <div className="flex flex-col gap-2 w-full">
                <PriceFeatures text="60 minute driving lesson" />
                <PriceFeatures text="Motorway or city driving" />
                <PriceFeatures text="Confidence building" />
                <PriceFeatures text="Calm, supportive guidance" />
              </div>

              {/* Button */}
              <span className="bg-[#980000] w-70 text-white px-8 py-3 rounded-4xl hover:bg-[#760000] transition-colors duration-300 cursor-pointer">
                <a href="" className="uppercase font-semibold flex justify-center">
                  Enquire Now
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface PriceFeaturesProps {
  text: string;
}

function PriceFeatures({ text }: PriceFeaturesProps) {
  return (
    <div className="flex items-center gap-4">
      <MdCheckCircleOutline className="text-[#AC0404] text-xl" />
      <span className="font-medium">{text}</span>
    </div>
  );
}

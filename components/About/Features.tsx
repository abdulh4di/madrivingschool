import { MdCheckCircleOutline } from "react-icons/md";

export default function Features() {
  return (
    <div className="w-full py-6 md:py-20">
      <div className="max-w-7xl mx-auto px-5 flex flex-col gap-8">
        <h2 className="font-heading text-[40px] leading-16 text-center md:text-[50px]">
          What I Can Help With
        </h2>
        <p className="text-center">
          Lessons are tailored to your needs so you can learn at a pace that works for you and
          become a safe, confident driver.
        </p>
        <div className="flex flex-wrap sm:justify-center gap-2 sm:gap-8 lg:gap-16 xl:gap-40">
          {/* Features 1 */}
          <div className="flex flex-col gap-2">
            <Feature text="Beginner Driving Lessons" />
            <Feature text="Manual Driving Lessons" />
            <Feature text="Refresher Lessons" />
            <Feature text="Nervous Drivers" />
          </div>
          {/* Features 2 */}
          <div className="flex flex-col gap-2">
            <Feature text="Test Preperation" />
            <Feature text="Mock Test Practice" />
            <Feature text="Manouvers" />
            <Feature text="Junctions & Roundabouts" />
          </div>
          {/* Features 2 */}
          <div className="flex flex-col gap-2">
            <Feature text="Hill Starts" />
            <Feature text="Dual Carriageways" />
            <Feature text="Motorway Confidence" />
            <Feature text="Safe Driving Habits" />
          </div>
        </div>
      </div>
    </div>
  );
}

interface FeatureProps {
  text: string;
}

function Feature({ text }: FeatureProps) {
  return (
    <div className="flex items-center gap-4">
      <MdCheckCircleOutline className="text-[#AC0404] text-xl" />
      <span className="font-medium">{text}</span>
    </div>
  );
}

// xs: 390px
// sm: 640px
// md: 768px
// lg: 1024px
// xl: 1280px

// Container
// className="w-full py-20"

// Row
// className="max-w-7xl mx-auto px-5"

// Container & Row
{
  /* <div className="w-full py-6 md:py-20">
  <div className="max-w-7xl mx-auto px-5">

  </div>
</div> */
}

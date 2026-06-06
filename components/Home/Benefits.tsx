import Link from "next/link";

export default function Benefits() {
  return (
    <section>
      <div className="w-full py-6 md:py-20">
        <div className="max-w-7xl mx-auto px-5 flex flex-col items-center gap-8 lg:flex-row">
          <div className="flex flex-col gap-8 items-center justify-center text-center lg:text-start lg:justify-start lg:items-start md:px-4 lg:w-[50%]">
            <h3 data-aos="zoom-in" className="text-[16px] font-bold uppercase">
              Driving Lessons Built Around You
            </h3>
            <h2
              data-aos="zoom-in"
              data-aos-delay="200"
              className="font-heading text-[40px] md:text-[50px] leading-14"
            >
              Patient, Structured Lessons That Help You Drive With Confidence
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-[16px] leading-5 md:max-w-140"
            >
              Every lesson is tailored to your ability, confidence and goals, helping you build safe
              driving habits and make steady progress at your own pace.
            </p>
            <span
              data-aos="fade-up"
              data-aos-delay="400"
              className="bg-[#980000] text-white px-8 py-4 rounded-4xl hover:bg-[#760000] transition-colors duration-300 cursor-pointer"
            >
              <Link href="/prices" className="uppercase font-semibold flex justify-center">
                Explore Lesson Packages
              </Link>
            </span>
          </div>

          <div className="flex flex-col gap-8 w-full max-w-120 lg:max-w-none lg:w-[50%] lg:gap-14">
            <figure
              data-aos="zoom-in"
              data-aos-delay="400"
              className="rounded-2xl overflow-hidden w-full h-40 sm:h-50 lg:h-62 shadow-[2px_2px_22.2px_rgba(0,0,0,0.25)]"
            >
              <img
                src="/assets/Benefits1-mobile.png"
                alt=""
                className="w-full h-full object-cover object-center lg:hidden"
              />
              <img
                src="/assets/Benefits1-desktop.png"
                alt=""
                className="hidden w-full h-full object-cover object-center lg:block"
              />
            </figure>

            <div className="flex flex-col gap-8 max-w-120 lg:max-w-none lg:flex-row lg:gap-14">
              <figure
                data-aos="zoom-in"
                data-aos-delay="400"
                className="rounded-2xl overflow-hidden w-full h-40 sm:h-50 lg:h-62 shadow-[2px_2px_22.2px_rgba(0,0,0,0.25)]"
              >
                <img
                  src="/assets/Benefits2-mobile.png"
                  alt=""
                  className="w-full h-full object-cover object-center lg:hidden"
                />
                <img
                  src="/assets/Benefits2-desktop.png"
                  alt=""
                  className="hidden w-full h-full object-cover object-center lg:block"
                />
              </figure>
              <figure
                data-aos="zoom-in"
                data-aos-delay="400"
                className="rounded-2xl overflow-hidden w-full h-40 sm:h-50 lg:h-62 shadow-[2px_2px_22.2px_rgba(0,0,0,0.25)]"
              >
                <img
                  src="/assets/Benefits3-mobile.png"
                  alt=""
                  className="w-full h-full object-cover object-center lg:hidden"
                />
                <img
                  src="/assets/Benefits3-desktop.png"
                  alt=""
                  className="hidden w-full h-full object-cover object-center lg:block"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

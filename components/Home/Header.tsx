import Link from "next/link";

export default function Header() {
  return (
    <header className="relative">
      <div className="w-full py-8 pt-30 md:pt-40">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex flex-col gap-10 md:flex-row">
            {/* Left Content */}
            <div
              data-aos="fade-up"
                data-aos-delay="950"
              className="flex flex-col items-center justify-center gap-10 bg-white rounded-2xl shadow-[2px_2px_22.2px_rgba(0,0,0,0.25)] px-8 py-12 md:w-1/2 md:items-start"
            >
              <h3 className="text-[16px] font-bold uppercase">MA Driving School</h3>
              <h1 className="font-heading text-[60px] text-center leading-17 md:text-start">
                Learn to Drive <br className="hidden lg:block" /> with Confidence
              </h1>
              <p className="text-[16px] text-center leading-5 md:text-start">
                Calm and supportive driving lessons designed to help you feel confident, improve
                safely and get test-ready at your own pace.
              </p>
              <Link
                href="/contact"
                className="uppercase font-semibold flex justify-center bg-[#980000] text-white px-8 py-4 rounded-4xl md:w-62.5 md:px-4 hover:bg-[#760000] transition-colors duration-300 cursor-pointer"
              >
                Start Learning Today
              </Link>
            </div>

            <figure
              data-aos="fade-up"
              data-aos-delay="1050"
              className="md:w-1/2 h-87.5 sm:h-112.5 md:h-140 overflow-hidden rounded-2xl shadow-[2px_2px_22.2px_rgba(0,0,0,0.25)] relative"
            >
              <img
                src="/assets/Header.png"
                alt=""
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
            </figure>
          </div>
        </div>
      </div>
    </header>
  );
}

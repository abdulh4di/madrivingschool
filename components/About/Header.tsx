import Link from "next/link";

export default function Header() {
  return (
    <header className="relative h-187.5 bg-[linear-gradient(120deg,rgba(230,160,168,0.79)_0%,rgba(253,236,239,0.765216)_25%,rgba(243,243,243,0.79)_50%,rgba(253,236,239,0.765216)_75%,rgba(230,160,168,0.79)_100%)] bg-size-[200%_200%] animate-gradient">
      <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-linear-to-b from-transparent to-[#F3F3F3]" />
      <div className="relative z-10 w-full pt-30 md:pt-60">
        <div className="max-w-7xl mx-auto px-5 flex flex-col items-center gap-8">
          <h3 data-aos="fade-up" data-aos-delay="0" className="text-[16px] font-bold uppercase">About me</h3>
          <h2 data-aos="fade-up" data-aos-delay="100" className="font-heading text-[40px] leading-12 text-center md:text-[50px] md:leading-15">
            Hi, I'm Mohammed Ali <br /> Owner of MA Driving School
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-[16px] text-center leading-5 max-w-100 md:max-w-180">
            I'm a patient and professional driving instructor offering manual driving lessons for
            learners who want to build confidence, improve safely and prepare of their test.
          </p>
          <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col gap-4 items-center justify-center w-full sm:flex-row">
            <span className="bg-[#980000] w-50 text-white px-8 py-3 rounded-4xl hover:bg-[#760000] transition-colors duration-300 cursor-pointer">
              <Link href="/contact" className="uppercase font-semibold flex justify-center">
                Book a lesson
              </Link>
            </span>
            <span className="bg-black w-50 text-white px-8 py-3 rounded-4xl hover:bg-[#1c1c1c] transition-colors duration-300 cursor-pointer">
              <Link href="/prices" className="uppercase font-semibold flex justify-center">
                View Prices
              </Link>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
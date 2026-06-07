import TestimonialsCarousel from "./TestimonialsCarousel";

export default function Header() {
  return (
    <header className="w-full py-8 pt-30 md:pt-40 lg:mb-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col items-center justify-center gap-8 bg-white rounded-2xl shadow-[2px_2px_22.2px_rgba(0,0,0,0.25)] px-4 py-12">
          <h2 data-aos="fade-up" className="font-heading text-center text-[40px] md:text-[50px] leading-14">
            What My <br className="sm:hidden"/>Learners Say
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-[16px] text-center leading-5 lg:w-[60%]">
            Hear from learners who have built confidence, improved their driving skills and passed
            their test with patient, supportive lessons.
          </p>
          <div data-aos="fade-up" data-aos-delay="200" className="w-full">
            <TestimonialsCarousel />
          </div>
        </div>
      </div>
    </header>
  );
}
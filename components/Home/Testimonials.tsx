import TestimonialsCarousel from "./TestimonialsCarousel";

export default function Testimonials() {
  return (
    <section className="pb-20">
      <div className="w-full py-6 md:py-20">
        <div className="max-w-7xl mx-auto px-5 flex flex-col items-center gap-8">
          <h2 data-aos="zoom-in" className="font-heading text-[40px] text-center md:text-[50px] leading-14">
            What My Learners Say
          </h2>
          <TestimonialsCarousel />
          <span  data-aos="fade-up"
            data-aos-delay="650"className="bg-[#980000] text-white px-8 py-4 rounded-4xl hover:bg-[#760000] transition-colors duration-300 cursor-pointer">
            <a href="/reviews" className="uppercase font-semibold flex justify-center">
              View more reviews
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}

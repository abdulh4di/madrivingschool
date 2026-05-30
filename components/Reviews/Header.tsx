import TestimonialsCarousel from "./TestimonialsCarousel";

export default function Header() {
  return (
    <header className="w-full py-8 pt-30 md:pt-40 lg:mb-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col items-center justify-center gap-8 bg-white rounded-2xl shadow-[2px_2px_22.2px_rgba(0,0,0,0.25)] px-8 py-12 ">
          <h2 className="font-heading text-center text-[40px] md:text-[50px] leading-14">
            What My Learners Say
          </h2>
          <p className="text-[16px] text-center leading-5 lg:w-[60%]">
            Hear from learners who have built confidence, improved their driving skills and passed
            their test with patient, supportive lessons.
          </p>
          <TestimonialsCarousel />
        </div>
      </div>
    </header>
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

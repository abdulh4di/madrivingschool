export default function Stats() {
  return (
    <section>
      <div className="w-full py-6 md:py-20">
        <div className="max-w-7xl mx-auto px-5 flex flex-col gap-8 md:items-center">
          <h2 data-aos="fade-up" className="font-heading text-[40px] text-center md:text-[50px]">
            MA Driving School in Numbers
          </h2>

          <div className="flex flex-col gap-8 md:flex-row md:gap-10 md:text-center xl:gap-30">
            <div className="px-2 py-2">
              <h2
                data-aos="fade-up"
                data-aos-delay="150"
                className="font-heading text-[50px] md:text-[50px]"
              >
                150+
              </h2>
              <p data-aos="fade-up" data-aos-delay="200">
                Learners Taught With Confidence
              </p>
            </div>
            <div className="px-2 py-2">
              <h2
                data-aos="fade-up"
                data-aos-delay="500"
                className="font-heading text-[50px] md:text-[50px]"
              >
                95%
              </h2>
              <p data-aos="fade-up" data-aos-delay="550">
                Pass Rate Across Learners
              </p>
            </div>
            <div className="px-2 py-2">
              <h2
                data-aos="fade-up"
                data-aos-delay="700"
                className="font-heading text-[50px] md:text-[50px]"
              >
                2+
              </h2>
              <p data-aos="fade-up" data-aos-delay="750">
                Years of Professional Driving Instruction
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

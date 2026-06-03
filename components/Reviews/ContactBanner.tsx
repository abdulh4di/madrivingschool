export default function ContactBanner() {
  return (
    <section>
      <div className="w-full py-6 md:py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="bg-[linear-gradient(360deg,rgba(230,160,168,0.9)_1.91%,rgba(253,236,239,0.765216)_80.91%,rgba(243,243,243,0.79)_101.91%)] rounded-2xl flex flex-col items-center justify-center gap-8 py-12 px-4 lg:py-16 xl:py-20">
            <h2
              data-aos="fade-up"
              className="font-heading text-[40px] text-center md:text-[50px] leading-14"
            >
              See What Our Learners Say
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-[16px] leading-5 text-center"
            >
              Read genuine Google reviews from learners who built confidence and passed with MA
              Driving School.
            </p>
            <span
              data-aos="fade-up"
              data-aos-delay="200"
              className="bg-black text-white px-8 py-4 rounded-4xl hover:bg-[#1c1c1c] transition-colors duration-300 cursor-pointer"
            >
              <a
                href="https://www.google.com/maps/place/MA+Driving+School/@55.0024427,-1.7394143,12z/data=!3m1!4b1!4m6!3m5!1s0xf7f44245e6e5:0x251cd8c4e0f6b21c!8m2!3d55.0023722!4d-1.6568434!16s%2Fg%2F11zb51929d?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase font-semibold flex justify-center"
              >
                View Google Reviews
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

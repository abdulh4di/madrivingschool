import Link from "next/link";

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
            <Link
              href="https://www.google.com/maps/place/MA+DRIVING+SCHOOL/data=!4m8!3m7!1s0x685d86dc3be8e537:0xadeded00a67591ea!8m2!3d55.0264442!4d-1.635553!9m1!1b1!16s%2Fg%2F11z6rn8jnp"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay="200"
              className="bg-black text-white px-8 py-4 rounded-4xl hover:bg-[#1c1c1c] transition-colors duration-300 cursor-pointer uppercase font-semibold flex justify-center"
            >
              View Google Reviews
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

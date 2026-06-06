
export default function Area() {
  return (
    <div className="w-full py-6 md:py-20">
      <div className="max-w-7xl mx-auto px-5 flex flex-col gap-8 items-center">
        <h2
          data-aos="zoom-in"
          className="font-heading text-[40px] text-center md:text-[50px] leading-14"
        >
          Driving Lesson Areas
        </h2>
        <p
          data-aos="zoom-in"
          data-aos-delay="200"
          className="text-[16px] flex flex-col items-center text-center gap-4 leading-5 max-w-60 md:max-w-140"
        >
          Professional driving lessons available across
          <span className="flex">
            <span className="font-bold border-r border-[#000000] px-2">Newcastle</span>
            <span className="font-bold border-r border-[#000000] px-2">Blyth</span>
    
            <span className="font-bold border-r border-[#000000] px-2">Gateshead</span>
          </span>
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] bg-white px-6 py-8 rounded-2xl flex flex-col gap-6 items-center text-center shadow-[2px_2px_22.2px_rgba(0,0,0,0.15)]"
          >
            <figure className="w-full h-56">
              <img
                src="/assets/ncl.png"
                alt="Newcastle driving lesson area"
                className="w-full h-full object-cover rounded-lg"
              />
            </figure>

            <h2 className="font-heading text-[32px] text-center">Newcastle</h2>

            <p>Driving lessons across Newcastle and nearby surrounding areas.</p>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] bg-white px-6 py-8 rounded-2xl flex flex-col gap-6 items-center text-center shadow-[2px_2px_22.2px_rgba(0,0,0,0.15)]"
          >
            <figure className="w-full h-56">
              <img
                src="/assets/blyth.jpg"
                alt="Blyth driving lesson area"
                className="w-full h-full object-cover rounded-lg"
              />
            </figure>

            <h2 className="font-heading text-[32px] text-center">Blyth</h2>

            <p>Manual driving lessons available for learners based in Blyth.</p>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-delay="500"
            className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] bg-white px-6 py-8 rounded-2xl flex flex-col gap-6 items-center text-center shadow-[2px_2px_22.2px_rgba(0,0,0,0.15)]"
          >
            <figure className="w-full h-56">
              <img
                src="/assets/gateshead.jpg"
                alt="Gateshead driving lesson area"
                className="w-full h-full object-cover rounded-lg"
              />
            </figure>

            <h2 className="font-heading text-[32px] text-center">Gateshead</h2>

            <p>Lessons available throughout Gateshead and local nearby routes.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
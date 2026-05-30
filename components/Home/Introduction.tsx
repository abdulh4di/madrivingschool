export default function Introduction() {
  return (
    <section>
        <div className="w-full py-6 md:py-20">
        <div className="max-w-7xl mx-auto px-5">
          <figure className="rounded-2xl overflow-hidden h-175 md:h-150 relative shadow-[2px_2px_22.2px_rgba(0,0,0,0.25)]">
            <img
              src="/assets/Intro-mobile.png"
              alt=""
              className="w-full h-full object-cover object-center md:hidden"
            />
            <img
              src="/assets/Intro-desktop.png"
              alt=""
              className="w-full h-full object-cover object-center hidden md:block"
            />
          <div className="absolute inset-0 flex flex-col items-center justify-start pt-12 px-4 gap-4">
            <h3 className="text-[16px] font-bold uppercase text-center">Introduction to driving</h3>
            <h2 className="font-heading text-[40px] text-center md:text-[50px]">MA Driving School’s Mission</h2>
              <p className="text-[16px] text-center leading-5 max-w-100 md:max-w-140">
              At MA Driving School, I help learners build confidence, stay safe on the road and prepare for their driving test with calm, patient and professional lessons tailored to their ability.
            </p>
            <span className="bg-[#980000] text-white px-8 py-4 rounded-4xl hover:bg-[#760000] transition-colors duration-300 cursor-pointer">
                <a href="" className="uppercase font-semibold flex justify-center">
                  Book your first lesson
                </a>
              </span>
          </div>
          </figure>

        </div>
      </div>
    </section>
  );
}
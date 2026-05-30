export default function ContactBanner() {
  return (
    <section>
      <div className="w-full py-6 md:py-20">
        <div className="max-w-7xl mx-auto px-5 ">
          <div className="bg-[linear-gradient(360deg,rgba(230,160,168,0.9)_1.91%,rgba(253,236,239,0.765216)_80.91%,rgba(243,243,243,0.79)_101.91%)] rounded-2xl flex flex-col items-center justify-center gap-8 py-12 px-4 lg:py-16 xl:py-20">
            <h2 className="font-heading text-[40px] text-center md:text-[50px] leading-14">
              Ready to start driving today?
            </h2>
            <p className="text-[16px] leading-5 text-center">
              Book your first lesson with MA Driving School and start building confidence behind the
              wheel.
            </p>
            <span className="bg-black text-white px-8 py-4 rounded-4xl hover:bg-[#1c1c1c] transition-colors duration-300 cursor-pointer">
              <a href="" className="uppercase font-semibold flex justify-center">
                Book Your First Lesson
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

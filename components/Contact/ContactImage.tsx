export default function ContactImage() {
  return (
    <section>
      <div className="w-full py-6 md:py-20">
        <div className="max-w-7xl mx-auto px-5">
          <figure data-aos="fade-up">
            <img
              src="/assets/ContactImage-desktop.png"
              alt=""
              className="h-full w-full object-cover object-center rounded-3xl hidden sm:block"
            />
            <img
              src="/assets/ContactImage-mobile.png"
              alt=""
              className="h-full w-full object-cover object-center rounded-3xl shadow-[2px_2px_22.2px_rgba(0,0,0,0.25)] sm:hidden"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
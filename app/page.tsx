import Benefits from "../components/Home/Benefits";
import ContactBanner from "../components/Home/ContactBanner";
import Footer from "../components/Footer";
import Header from "../components/Home/Header";
import Introduction from "../components/Home/Introduction";
import Nav from "../components/Nav";
import Stats from "../components/Home/Stats";
import Testimonials from "../components/Home/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Introduction />
      <Stats />
      <Benefits />
      <Testimonials />
      <ContactBanner />
    </>
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

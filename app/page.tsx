import Area from "../components/Home/Area";
import Benefits from "../components/Home/Benefits";
import ContactBanner from "../components/Home/ContactBanner";
import Header from "../components/Home/Header";
import Introduction from "../components/Home/Introduction";
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
      <Area />
      <ContactBanner />
    </>
  );
}

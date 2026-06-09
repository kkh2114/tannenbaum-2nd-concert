import { WatercolorFilter } from "@/components/ui/Watercolor";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Nav from "@/components/ui/Nav";
import Hero from "@/components/sections/Hero";
import ConcertInfo from "@/components/sections/ConcertInfo";
import Greetings from "@/components/sections/Greetings";
import Members from "@/components/sections/Members";
import Profiles from "@/components/sections/Profiles";
import Program from "@/components/sections/Program";
import PastVideo from "@/components/sections/PastVideo";
import Closing from "@/components/sections/Closing";
import Participate from "@/components/sections/Participate";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <WatercolorFilter />
      <SmoothScroll />
      <Nav />
      <main className="relative w-full overflow-x-hidden">
        <Hero />
        <ConcertInfo />
        <Greetings />
        <Members />
        <PastVideo />
        <Profiles />
        <Program />
        <Closing />
        <Participate />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

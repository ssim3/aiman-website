import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Media from "@/components/Media";
import Accolades from "@/components/Accolades";
import MyApproach from "@/components/MyApproach";
import Reviews from "@/components/Reviews";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 mb-20">
      <Hero />
      <About />
      <MyApproach />
      <Services />
      <Reviews />
      <Accolades />
      <Media />
    </div>
  );
}

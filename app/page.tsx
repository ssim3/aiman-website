import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Accolades from "@/components/Accolades";
import MyApproach from "@/components/MyApproach";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 mb-20">
      <Hero />
      <About />
      <MyApproach />
      <Timeline />
      <Services />
      <Accolades />
      <Testimonials />
    </div>
  );
}

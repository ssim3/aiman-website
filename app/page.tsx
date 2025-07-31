import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Accolades from "@/components/Accolades";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 mb-20">
      <Hero />
      <About />
      <Services />
      <Accolades />
      <Testimonials />
    </div>
  );
}

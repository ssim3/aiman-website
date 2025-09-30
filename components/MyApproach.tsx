import React from "react";
import Image from "next/image";
import SectionHeading from "./ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, FileCheck, Users } from "lucide-react";

const MyApproach = () => {
  const steps = [
    {
      number: "1",
      icon: Shield,
      title: "Secure Foundation",
      description: "Assess your current situation and goals",
    },
    {
      number: "2",
      icon: TrendingUp,
      title: "Analyze Opportunities",
      description: "Identify the best market opportunities",
    },
    {
      number: "3",
      icon: FileCheck,
      title: "Future-proof Planning",
      description: "Create a strategic roadmap for your goals",
    },
    {
      number: "4",
      icon: Users,
      title: "Execute Together",
      description: "Implement your property strategy with confidence",
    },
  ];

  return (
    <div className="relative flex flex-col p-10 gap-10 max-w-7xl mx-auto">
      <SectionHeading
        topOne="top-40"
        topTwo="top-30"
        rightOne="right-20"
        rightTwo="left-20"
        title={`My Method, The <span class="text-[var(--primary)]">S.A.F.E</span> Approach`}
        description="Find out how I work to best serve your needs."
      />

      {/* Image and Paragraph Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 max-w-5xl mx-auto mb-20">
        <div className="aspect-[16/9]">
          <Image
            className="rounded-xl"
            src="/approach2.png"
            height={500}
            width={500}
            alt="Aiman Image"
          />
        </div>
        <div className="lg:w-2/3">
          <p className="text-lg">
            Every property decision has a purpose. My signature S.A.F.E.
            approach ensures every move is clear, confident, and aligned with
            your long-term goals — helping you protect your lifestyle and move
            closer to early, comfortable retirement in HDBs, Condos, or private
            properties.
          </p>
        </div>
      </div>

      {/* Steps Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {steps.map((step, index) => (
          <div
            key={index}
            className="text-center group cursor-pointer transition-all duration-300"
          >
            <div className="relative mb-4 p-6 bg-white rounded-2xl shadow-lg hover:bg-[var(--primary)] hover:text-white transition-all duration-300 group-hover:shadow-2xl">
              <div className="w-20 h-20 bg-gradient-trust rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all duration-300">
                <step.icon className="w-8 h-8 text-foreground group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold group-hover:bg-white group-hover:text-[var(--primary)] transition-colors duration-300">
                {step.number}
              </div>

              <h3 className="text-lg font-semibold mb-2 duration-300">
                {step.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-white/90 transition-colors duration-300 text-sm">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* How It Works Section */}
      <div className="bg-muted rounded-2xl p-8 mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
          How It Works
        </h3>
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-4 h-4 bg-[var(--primary)] text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5 flex-shrink-0">
              •
            </div>
            <p className="text-muted-foreground text-left">
              A structured, proven framework to guide your property decisions.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-4 h-4 bg-[var(--primary)] text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5 flex-shrink-0">
              •
            </div>
            <p className="text-muted-foreground text-left">
              Designed to help you avoid costly mistakes and maximize
              opportunities.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-4 h-4 bg-[var(--primary)] text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5 flex-shrink-0">
              •
            </div>
            <p className="text-muted-foreground text-left">
              Focuses on clarity, confidence, and long-term planning.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-4 h-4 bg-[var(--primary)] text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5 flex-shrink-0">
              •
            </div>
            <p className="text-muted-foreground text-left">
              Works for first-time buyers, upgraders, and investors alike.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#consultation" className="inline-flex">
          <Button size="lg" className="w-full sm:w-auto">
            Book a Consultation
          </Button>
        </a>
        <a href="#guide" className="inline-flex">
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            Download My Free Guide
          </Button>
        </a>
      </div>
    </div>
  );
};

export default MyApproach;

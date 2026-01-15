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
    <div className="p-0 sm:p-10 bg-[#f4f8ff] rounded-2xl">
      <div className="relative flex flex-col p-10 max-w-7xl mx-auto">
        <SectionHeading
          topOne="top-40"
          topTwo="top-30"
          rightOne="right-20"
          rightTwo="left-20"
          title={`A Clear, Proven Property Strategy —<br /> The <span class="text-[var(--primary)]">S.A.F.E</span> Approach`}
          description="Find out how I ensure every transaction is S.A.F.E."
        />

        <div>
          {/* Image and Paragraph Section */}
          <div className="flex flex-col lg:flex-row justify-center items-center gap-10 max-w-5xl mx-auto mb-20">
            <div>
              <Image
                className="rounded-xl"
                src="/safe.jpg"
                height={500}
                width={500}
                alt="Aiman Image"
              />
            </div>
            <div className="lg:w-2/3">
              <p className="text-lg">
                <b className="text-xl">
                  Every property decision should move you closer to your{" "}
                  <span className="text-primary">long-term goals.</span>
                </b>
                <br />
                <br />
                My signature S.A.F.E. approach ensures every move is clear,
                confident, and strategic — whether you're buying your first HDB,
                upgrading to a condo, or planning for early retirement through
                property.
              </p>
            </div>
          </div>

          {/* Steps Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
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
          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              How It Works
            </h3>
            <ul className="space-y-4 max-w-2xl mx-auto text-center text-lg text-muted-foreground">
              <li className="flex gap-2 justify-center">
                <span className="font-bold text-primary">·</span>A structured,
                proven framework to guide your property decisions.
              </li>
              <li className="flex gap-2 justify-center">
                <span className="font-bold text-primary">·</span>
                Designed to help you avoid costly mistakes and maximize
                opportunities.
              </li>
              <li className="flex gap-2 justify-center">
                <span className="font-bold text-primary">·</span>
                Focuses on clarity, confidence, and long-term planning.
              </li>
              <li className="flex gap-2 justify-center">
                <span className="font-bold text-primary">·</span>
                Works for first-time buyers, upgraders, and investors alike.
              </li>
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-15">
            <a href="https://calendly.com/agentaimanroza/first-time-buyer-hdb?month=2025-08">
              <button className="group flex cursor-pointer gap-4 items-center bg-black hover:scale-105 duration-300 text-white px-6 py-4 rounded-2xl font-semibold transition-all transform">
                Book a Free Consultation
              </button>
            </a>
            <a href="">
              <button className="group flex cursor-pointer gap-4 items-center bg-primary hover:scale-105 duration-300 text-white px-6 py-4 rounded-2xl font-semibold transition-all transform">
                Request for my FREE Guide
              </button>
            </a>
          </div>
        </div>


      </div>
    </div>
  );
};

export default MyApproach;

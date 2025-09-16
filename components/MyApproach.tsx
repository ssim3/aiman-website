import React from "react";
import ApproachCard from "./ui/ApproachCard";
import Bouncyballs from "./ui/bouncyballs";
import SectionHeading from "./ui/SectionHeading";

import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, FileCheck, Users } from "lucide-react";

const MyApproach = () => {

  const steps = [
    {
      number: "1",
      icon: Shield,
      title: "Secure Foundation",
      description: "Assess your current situation and goals"
    },
    {
      number: "2",
      icon: TrendingUp,
      title: "Analyze Opportunities",
      description: "Identify the best market opportunities"
    },
    {
      number: "3",
      icon: FileCheck,
      title: "Future-proof Planning",
      description: "Create a strategic roadmap for your goals"
    },
    {
      number: "4",
      icon: Users,
      title: "Execute Together",
      description: "Implement your property strategy with confidence"
    }
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
      <p className="text-lg max-w-5xl m-auto mb-20">
        Every property decision has a purpose. My signature S.A.F.E. approach
        ensures every move is clear, confident, and aligned with your long-term
        goals — helping you protect your lifestyle and move closer to early,
        comfortable retirement in HDBs, Condos, or private properties.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {steps.map((step, index) => (
          <div key={index} className="text-center group">
            <div className="relative mb-4">
              <div className="w-20 h-20 bg-gradient-trust rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-hero transition-all duration-300">
                <step.icon className="w-8 h-8 text-foreground" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                {step.number}
              </div>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
            <p className="text-muted-foreground text-sm">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-muted rounded-2xl p-8 mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-4 text-center">How It Works</h3>
        <div className="space-y-3 text-center max-w-2xl mx-auto">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-trust-gold rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-muted-foreground">A structured, proven framework to guide your property decisions.</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-trust-gold rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-muted-foreground">Designed to help you avoid costly mistakes and maximize opportunities.</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-trust-gold rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-muted-foreground">Focuses on clarity, confidence, and long-term planning.</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-trust-gold rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-muted-foreground">Works for first-time buyers, upgraders, and investors alike.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg">
          Book a Consultation
        </Button>
        <Button variant="outline" size="lg">
          Download My Free Guide
        </Button>
      </div>
    </div>
  );
};

export default MyApproach;




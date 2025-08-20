"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import Bouncyballs from './ui/bouncyballs';

interface TimelineStep {
    id: number;
    title: string;
    description: string;
    details: string;
}

const steps: TimelineStep[] = [
    {
        id: 1,
        title: "Free Consultation",
        description: "Understanding your goals, timeline, and budget in a no-pressure conversation.",
        details: "We'll start with a comprehensive discussion about your property goals, whether you're buying, selling, or both. I'll understand your timeline, budget constraints, and specific requirements. This initial consultation is completely free and helps me create a tailored strategy just for you."
    },
    {
        id: 2,
        title: "Strategy Planning",
        description: "Home valuation, market analysis, and creating a customized action plan.",
        details: "Using real market data and my extensive local knowledge, I'll provide an accurate property valuation and comprehensive market analysis. We'll develop a strategic plan that includes pricing recommendations, timing considerations, and a clear roadmap to achieve your goals."
    },
    {
        id: 3,
        title: "Marketing & Negotiation",
        description: "Professional marketing, viewings coordination, and expert negotiation.",
        details: "I'll handle all aspects of marketing your property or finding your ideal home. This includes professional photography, listing optimization, coordinating viewings, and leveraging my negotiation expertise to secure the best possible outcome for you."
    },
    {
        id: 4,
        title: "Close & Celebrate",
        description: "Smooth transaction completion plus ongoing post-sale support.",
        details: "I'll guide you through every step of the closing process, ensuring all paperwork is handled correctly and timelines are met. Even after closing, I provide ongoing support and remain available for any questions or future property needs."
    }
];

export default function Timeline() {
    const [activeStep, setActiveStep] = useState(1);
    const currentStep = steps.find(step => step.id === activeStep) || steps[0];

    return (
        <div className="relative flex flex-col p-10 gap-20 max-w-7xl mx-auto">
            {/* Title */}
            <Bouncyballs
                top="top-40"
                right="right-10"
                width="w-8"
                height="h-8"
                color="bg-[var(--primary)]"
            />
            <Bouncyballs
                top="top-20"
                right="left-10"
                width="w-6"
                height="h-6"
                color="bg-[var(--primary)]"
            />
            <div className='text-center my-20 flex flex-col gap-5'>
                <h2 className='text-5xl text-[var(--secondary)] font-bold'>Your Property Journey With Me</h2>
                <p>Find out how I work to best serve your needs.</p>
            </div>

            {/* Main Content Area */}
            <div className="bg-card rounded-lg shadow-card p-8 mb-12 flex flex-col justify-center">
                <div className='flex flex-col gap-10'>
                    <div className='flex gap-5 items-center'>
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-white font-bold text-xl">
                            {currentStep.id}
                        </div>
                        <h3 className="text-3xl font-bold">{currentStep.title}</h3>
                    </div>

                    <p className="text-lg text-muted-foreground">
                        {currentStep.description}
                    </p>

                    <p className="text-base text-muted-foreground/80 leading-relaxed mx-auto">
                        {currentStep.details}
                    </p>
                </div>
            </div>

            {/* Interactive Timeline */}
            <div className="relative">
                {/* Full-bleed lines spanning the viewport */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-1 z-0">
                    <div className="absolute inset-0 rounded-2xl bg-border"></div>
                    <div
                        className="absolute top-0 left-0 h-1 rounded-2xl bg-gradient-to-r from-primary to-primary/80 transition-all duration-500 ease-out"
                        style={{ width: `${((activeStep) / (steps.length)) * 100}vw` }}
                    ></div>
                </div>

                {/* Timeline Points */}
                <div className="relative flex justify-between items-center">
                    {steps.map((step) => (
                        <div key={step.id} className='flex flex-col gap-2 items-center'>
                            <button
                                onClick={() => setActiveStep(step.id)}
                                className={cn(
                                    "relative w-12 h-12 rounded-full border-4 flex items-center justify-center font-bold text-sm transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-primary/20 z-10",
                                    activeStep === step.id
                                        ? "bg-primary border-primary text-white shadow-lg scale-110"
                                        : "bg-background border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
                                )}
                                aria-label={`Step ${step.id}: ${step.title}`}
                            >
                                {step.id}
                            </button>
                            <div className="flex-1 flex justify-center">
                                <p className={cn(
                                    "text-sm font-medium transition-colors duration-300 text-center",
                                    activeStep === step.id
                                        ? "text-primary"
                                        : "text-muted-foreground"
                                )}>
                                    {step.title}
                                </p>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
}
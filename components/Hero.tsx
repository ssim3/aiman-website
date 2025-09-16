"use client";

import Image from "next/image";
import Bouncyballs from "./ui/bouncyballs";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Set initial states
    gsap.set(
      [
        titleRef.current,
        descriptionRef.current,
        buttonRef.current,
        imageRef.current,
      ],
      {
        opacity: 0,
        y: 50,
      },
    );

    // Animate elements in sequence
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
    })
      .to(
        descriptionRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4",
      )
      .to(
        buttonRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        },
        "-=0.2",
      )
      .to(
        imageRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6",
      );
  }, []);

  return (
    <section className="min-h-screen overflow-hidden relative max-sm:bg-[var(--secondary)]">
      <div className="absolute inset-0 -z-10 max-sm:hidden">
        <svg
          viewBox="0 0 1440 800"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#233B95" />
              <stop offset="100%" stopColor="#5E87F2" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#gradient)" />
          <path
            fill="white"
            d="M0,650 Q360,800 720,650 T1440,720 L1440,800 L0,800 Z"
          />
        </svg>
      </div>

      <div className="max-w-7xl m-auto px-10 py-20 relative z-10 mt-24">
        <div className="flex flex-col-reverse sm:flex-row justify-between gap-12 items-center min-h-[70vh]">
          <div className="flex-1 text-white space-y-6">
            <h1
              ref={titleRef}
              className="text-5xl font-bold leading-tight font-poppins"
            >
              Your Property, Your S.A.F.E Haven—
              <span className="block text-[var(--primary)]">
                Today and for the Future.
              </span>
            </h1>

            <p ref={descriptionRef} className="text-lg text-blue-100 max-w-lg">
              Aiman Roza — Top 1% Malay Property Agent in Singapore, trusted by
              hundreds of families in HDB and Condo transactions.
            </p>

            <div ref={buttonRef} className="flex gap-5 ">
              <a href="https://calendly.com/agentaimanroza/first-time-buyer-hdb?month=2025-08">
                <button className="group flex cursor-pointer gap-4 items-center bg-black hover:scale-105 duration-300 text-white px-6 py-4 rounded-2xl font-semibold transition-all transform">
                  Plan My Property Move
                </button>
              </a>
            </div>
          </div>
          {/* Bouncing balls */}
          <div
            ref={imageRef}
            className="flex-1 flex relative justify-center lg:justify-end"
          >
            <Image
              src="/Hero.png"
              width={600}
              height={600}
              alt="Aiman Roza Hero"
            />
            <Bouncyballs
              top="-top-4"
              right="-right-4"
              width="w-8"
              height="h-8"
              color="bg-[var(--primary)]"
            />
            <Bouncyballs
              top="-bottom-4"
              right="-left-4"
              width="w-6"
              height="h-6"
              color="bg-[var(--primary)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

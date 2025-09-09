import React from "react";
import Image from "next/image";

const WHATSAPP_LINK = "https://wa.me/60123456789"; // Replace with Aiman's actual WhatsApp number
const IMAGE_URL = "/aimn.jpg"; // Replace with actual image path or use a placeholder

const CallToAction = () => {
  return (
    <section className="w-full flex items-center justify-center bg-gradient-to-br from-[#3C5DCB] to-[#2F4DBA]">
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12 px-6 py-16">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <Image
            src={IMAGE_URL}
            width={800}
            height={450}
            objectFit="cover"
            alt="Aiman Roza"
            className="aspect-[16/9] rounded-xl shadow-lg object-cover"
          />
        </div>
        {/* Text and Button */}
        <div className="w-full md:w-1/2 flex flex-col gap-5 text-white items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl font-bold">
            #HAVE <span className="text-[var(--primary)]">IMAN</span> IN{" "}
            <span className="text-[var(--primary)]">AIMAN</span>.
          </h1>
          <p className="text-lg text-gray-200">
            Ready to find your dream home or need expert real estate advice?
            Contact Aiman today and experience the difference.
          </p>
          <a href="https://calendly.com/agentaimanroza/first-time-buyer-hdb?month=2025-08">
            <button className="group flex cursor-pointer gap-4 items-center bg-black hover:scale-105 duration-300 text-white px-6 py-4 rounded-2xl font-semibold transition-all transform">
              Book a Free Consultation
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

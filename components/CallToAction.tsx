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
          <p className="text-lg md:text-xl max-w-xl">
            Ready to find your dream home or need expert real estate advice?
            Contact Aiman today and experience the difference.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-3 items-center mt-5 bg-green-500 text-white font-semibold px-8 py-4 rounded-full text-lg shadow transition hover:scale-105"
          >
            <Image
              src="https://img.icons8.com/?size=100&id=16712&format=png&color=FFFFFF"
              width={35}
              height={30}
              alt="Whatsapp Icon"
            />
            Contact on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

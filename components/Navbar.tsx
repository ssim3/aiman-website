"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Accolades", href: "#accolades" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="absolute top-0 left-0 right-0 px-10 z-50">
      <div className="mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div>
            <Image
              src="/aimanlogo.png"
              alt="Aiman Roza"
              width={100}
              height={100}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-40">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white font-medium transition-colors duration-200"
              >
                {item.label}
                <span className="max-w-0 h-2.5 group-hover:max-w-full transition-all duration-300 bg-white"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white hover:text-blue-600 font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

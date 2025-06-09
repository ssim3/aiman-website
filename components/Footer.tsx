import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import CallToAction from "./CallToAction";

const Footer = () => {
  const quickLinks = [
    { label: "About Me", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  const contactInfo = [
    { label: "About Me", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
    <CallToAction />
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl px-10 mx-auto">
        <div className="flex flex-col sm:flex-row gap-16 justify-between items-start">
          {/* Brand Section */}
          <div className="flex flex-col gap-2 max-w-lg">
            <Image
              src="/aimanlogo.png"
              width={200}
              height={150}
              alt="Aiman Roza Logo"
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted real estate partner, committed to turning your
              property goals into reality with expertise and dedication.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 font-poppins">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 font-poppins">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">aiman@realestate.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">
                  123 Main St, City, State 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 font-poppins">
            © 2025 Agent Aiman Roza. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;

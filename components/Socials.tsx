import React from "react";
import { Instagram, Facebook, Linkedin, Twitter, Youtube, Mail } from "lucide-react";

const Socials = () => {
  const socialLinks = [
    {
      name: "Instagram",
      handle: "@yourbusiness",
      url: "https://instagram.com/yourbusiness",
      icon: Instagram,
      color: "hover:bg-pink-600",
    },
    {
      name: "Facebook",
      handle: "YourBusiness",
      url: "https://facebook.com/yourbusiness",
      icon: Facebook,
      color: "hover:bg-blue-600",
    },
    {
      name: "LinkedIn",
      handle: "Your Business",
      url: "https://linkedin.com/company/yourbusiness",
      icon: Linkedin,
      color: "hover:bg-blue-700",
    },
    {
      name: "Twitter",
      handle: "@yourbusiness",
      url: "https://twitter.com/yourbusiness",
      icon: Twitter,
      color: "hover:bg-sky-500",
    },
    {
      name: "YouTube",
      handle: "YourBusiness",
      url: "https://youtube.com/@yourbusiness",
      icon: Youtube,
      color: "hover:bg-red-600",
    },
    {
      name: "Email",
      handle: "hello@yourbusiness.com",
      url: "mailto:hello@yourbusiness.com",
      icon: Mail,
      color: "hover:bg-gray-700",
    },
  ];

  return (
    <section className="w-full flex items-center justify-center bg-gradient-to-br from-red-400 to-[var(--primary)]">
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12 px-6 py-16">
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold text-white mb-4">
            Connect With Me
          </h2>
          <p className="text-white/90 text-lg max-w-md">
            Follow me on social media for updates, tips, and exclusive content
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/20 ${social.color} group`}
              >
                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-red-500" />
                </div>
                <span className="text-white font-semibold text-sm mb-1">
                  {social.name}
                </span>
                <span className="text-white/80 text-xs">
                  {social.handle}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Socials;

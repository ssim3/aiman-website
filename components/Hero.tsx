import Image from 'next/image';

const Hero = () => {
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
              <stop offset="0%" stopColor="#597CE4" />
              <stop offset="100%" stopColor="#4169E2" />
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
          <div className="flex-1 text-white space-y-6 animate-fade-in">
            <h1 className="text-5xl font-bold leading-tight font-poppins">
              Making Your Dream Home a Reality—
              <span className="block">Every Time.</span>
            </h1>

            <p className="text-lg text-blue-100 max-w-lg">
              Professional real estate agent with over 10 years of experience
              helping families find their perfect home.
            </p>

            <button className="flex bg-[var(--primary)]  text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105">
              👋 Contact
            </button>
          </div>

          <div className="flex-1 flex relative justify-center lg:justify-end">
              <Image src="/Hero.png" width={600} height={600} alt="Aiman Roza Hero" />
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-bounce delay-75"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
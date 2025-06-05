import { Award, Users, Clock, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const About = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Happy Clients",
      color: "text-blue-600"
    },
    {
      icon: Award,
      number: "10+",
      label: "Years Experience",
      color: "text-green-600"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Full Service",
      color: "text-purple-600"
    },
    {
      icon: TrendingUp,
      number: "98%",
      label: "Success Rate",
      color: "text-red-600"
    }
  ];

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between gap-24 items-center">
          {/* Right - Content */}
          <div className="flex-3 flex flex-col gap-5">
            <div className='border-l-2 p-10 flex flex-col gap-5'>
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--secondary)] mb-4 font-poppins">
                Hi! I'm Aiman
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                A dedicated real estate professional with a passion for helping people 
                find their perfect home. With over a decade of experience in the local 
                market, I've built my reputation on trust, expertise, and exceptional 
                customer service.
              </p>
              <p className="text-lg leading-relaxed">
                My approach is simple: listen to your needs, understand your dreams and 
                work tirelessly to make them reality. Whether you're a first time buyer, 
                looking to upgrade, or seeking your property, I'm here to guide you through 
                every step of the process.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white p-5 flex flex-col gap-2 justify-center items-center rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className='flex gap-5'>
                    <stat.icon className={`h-8 w-8 text-[var(--primary)]`} />
                    <div className="text-2xl font-bold text-gray-800 font-poppins">
                      {stat.number}
                    </div>
                  </div>
                  <div className="text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Left - Agent Photo */}
          <div className="relative flex-2">
            <Image src="/agent.png" width={500} height={600} alt="Agent Aiman Roza" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
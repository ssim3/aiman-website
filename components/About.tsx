import { Users, Clock, TrendingUp, Star } from "lucide-react";
import Image from "next/image";

const About = () => {
  const stats = [
    {
      icon: Users,
      number: "150+",
      label: "Transactions",
      color: "text-blue-600",
    },
    {
      icon: Clock,
      number: "4+",
      label: "Years",
      color: "text-green-600",
    },
    {
      icon: Star,
      number: "100%",
      label: "5 Star Reviews",
      color: "text-purple-600",
    },
  ];

  return (
    <section id="about">
      <div className="max-w-7xl mx-auto p-10">
        <div className="flex justify-between gap-24 items-center">
          {/* Right - Content */}
          <div className="flex-3 flex flex-col gap-5">
            <div className="border-l-5 p-10 flex flex-col gap-5">
              <h2 className="text-4xl font-bold text-[var(--secondary)] mb-4 font-poppins">
                Hello! I'm Aiman Roza 😊
              </h2>
              <p className="text-lg leading-relaxed">
                I help families turn their homes into S.A.F.E havens — and their
                property moves into stepping stones toward early, comfortable
                retirement.
              </p>
              <p className="text-lg leading-relaxed">
                When I was young, my family once struggled to pay our mortgage.
                I remember assisting my parents with the payments, only to see
                the balance barely reduced. That's when I realized how little
                most people truly understand about property — and how easily
                small mistakes can cost a lot.
              </p>
              <p className="text-lg leading-relaxed">
                That experience stayed with me and inspired me to empower
                others. In the past 4 years, I've been fortunate to guide
                hundreds of families through Singapore's HDB and Condo market,
                helping them make smart property decisions that protect their
                family, lifestyle, and future.
              </p>
              <p className="text-lg leading-relaxed">
                Every client has benefited from my signature{" "}
                <b className="text-[var(--primary)]">
                  <i>S.A.F.E.</i>
                </b>{" "}
                approach, designed to make property decisions clear, confident,
                and aligned with long-term goals — helping them move closer to
                the life they want and YOU could be next.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="flex gap-10 justify-between items-center">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="w-full bg-white p-5 flex flex-col gap-2 justify-center items-center rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex gap-5">
                    <stat.icon className={`h-8 w-8 text-[var(--primary)]`} />
                    <div className="text-2xl font-bold text-gray-800 font-poppins">
                      {stat.number}
                    </div>
                  </div>
                  <div className="text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Agent Photo */}
          <div className="relative flex-2 max-lg:hidden">
            <Image
              src="/agent.png"
              width={500}
              height={600}
              alt="Agent Aiman Roza"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

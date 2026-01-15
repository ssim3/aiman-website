import Image from "next/image";

const About = () => {
  return (
    <section id="about">
      <div className="max-w-7xl mx-auto p-10">
        <div className="flex-1 flex flex-col-reverse lg:flex-row justify-between gap-16 items-center">
          {/* Left - Content */}
          <div className="flex flex-col gap-5">
            <div className="sm:border-l-5 p-0 sm:p-10 flex flex-col gap-5">
              <h2 className="text-2xl sm:text-4xl font-bold text-secondary mb-4 font-poppins">
                Hello! I'm Aiman Roza <span aria-label="smiling face">😊</span>
              </h2>
              <p className="text-md sm:text-lg leading-relaxed">
                I help families turn their homes into S.A.F.E havens — and their
                property moves into stepping stones toward early, comfortable
                retirement.
              </p>
              <p className="text-md sm:text-lg leading-relaxed">
                When I was young, my family once struggled to pay our mortgage.
                I remember assisting my parents with the payments, only to see
                the balance barely reduced. That's when I realized how little
                most people truly understand about property — and how easily
                small mistakes can cost a lot.
              </p>
              <p className="text-md sm:text-lg leading-relaxed">
                That experience stayed with me and inspired me to empower
                others. In the past 4 years, I've been fortunate to guide
                hundreds of families through Singapore's HDB and Condo market,
                helping them make smart property decisions that protect their
                family, lifestyle, and future.
              </p>
              <p className="text-md sm:text-lg leading-relaxed">
                Every client has benefited from my signature{" "}
                <b className="text-primary">
                  <i>S.A.F.E.</i>
                </b>{" "}
                approach, designed to make property decisions clear, confident,
                and aligned with long-term goals — helping them move closer to
                the life they want and YOU could be next.
              </p>
            </div>
          </div>

          {/* Right - Agent Photo */}
          <div className="shrink-0">
            <Image
              src="/data.jpg"
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

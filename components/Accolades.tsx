"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";

const Accolades = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    console.log(current);
    console.log(count);
  }, [current]);

  const accolades = [
    {
      id: 1,
      title: "Top Producer 2023",
      organization: "Real Estate Board",
      image: "Award Photo 1",
    },
    {
      id: 2,
      title: "Excellence in Service",
      organization: "National Realty Association",
      image: "Award Photo 2",
    },
    {
      id: 3,
      title: "Client Choice Award",
      organization: "Metropolitan Real Estate",
      image: "Award Photo 3",
    },
    {
      id: 4,
      title: "Million Dollar Club",
      organization: "Premier Realty Group",
      image: "Award Photo 4",
    },
    {
      id: 5,
      title: "Community Service Award",
      organization: "Local Chamber of Commerce",
      image: "Award Photo 5",
    },
  ];

  return (
    <section id="accolades" className="p-10">
      <div className="flex flex-col gap-10 max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[var(--secondary)] mb-4 font-poppins">
            Awards & Accolades
          </h2>
          <p className="text-gray-600">
            Recognition for excellence in real estate service and community
            commitment
          </p>
        </div>

        <div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setApi}
          >
            <CarouselContent className="items-center">
              {accolades.map((accolade) => (
                <CarouselItem
                  key={accolade.id}
                  className="max-w-full md:basis-1/2 lg:basis-1/3"
                >
                  <div className="group">
                    {/* Award Image Placeholder */}
                    <div
                      className={`max-w-full h-120 ${current + 1 === accolade.id || (current === count && accolade.id === 1) ? `lg:h-150` : `h-120`}  bg-gray-200 rounded-xl flex items-center justify-center mb-6 transition-all`}
                    >
                      <span className="text-gray-500 text-sm font-poppins">
                        {accolade.image}
                      </span>
                    </div>

                    {/* Award Details */}
                    <div className="text-center">
                      <h3 className="text-[var(--primary)] text-xl mb-2 font-poppins group-hover:font-bold transition-all duration-500 group-hover:scale-105">
                        {accolade.title}
                      </h3>
                      <p className="text-gray-600 font-medium">
                        {accolade.organization}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
          <div className="flex justify-center mt-10 items-center gap-2 transition-all">
            {Array.from(Array(count), (e, i) => {
              if (i + 1 === current) {
                return (
                  <span key={i} className="rounded-full bg-gray-500 p-1"></span>
                );
              }
              return (
                <span key={i} className="rounded-full bg-gray-300 p-1"></span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accolades;

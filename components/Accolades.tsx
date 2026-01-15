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
import SectionHeading from "./ui/SectionHeading";

const Accolades = () => {
  const [apiTop, setApiTop] = useState<CarouselApi>();
  const [apiBottom, setApiBottom] = useState<CarouselApi>();

  const [currentTop, setCurrentTop] = useState(0);
  const [currentBottom, setCurrentBottom] = useState(0);

  const [countTop, setCountTop] = useState(0);
  const [countBottom, setCountBottom] = useState(0);

  const accoladesTop = [
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
      title: "Excellence in Service",
      organization: "National Realty Association",
      image: "Award Photo 2",
    },
    {
      id: 5,
      title: "Client Choice Award",
      organization: "Metropolitan Real Estate",
      image: "Award Photo 3",
    },
  ];

  const accoladesBottom = [
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
    {
      id: 6,
      title: "Million Dollar Club",
      organization: "Premier Realty Group",
      image: "Award Photo 4",
    },
    {
      id: 7,
      title: "Community Service Award",
      organization: "Local Chamber of Commerce",
      image: "Award Photo 5",
    },
  ];

  // top carousel listener
  useEffect(() => {
    if (!apiTop) return;

    setCountTop(apiTop.scrollSnapList().length);
    setCurrentTop(apiTop.selectedScrollSnap() + 1);

    apiTop.on("select", () => setCurrentTop(apiTop.selectedScrollSnap() + 1));
  }, [apiTop]);

  // bottom carousel listener
  useEffect(() => {
    if (!apiBottom) return;

    setCountBottom(apiBottom.scrollSnapList().length);
    setCurrentBottom(apiBottom.selectedScrollSnap() + 1);

    apiBottom.on("select", () =>
      setCurrentBottom(apiBottom.selectedScrollSnap() + 1),
    );
  }, [apiBottom]);

  const renderCarousel = (
    list: any,
    apiSetter: any,
    current: any,
    count: any,
  ) => (
    <Carousel opts={{ align: "start", loop: true }} setApi={apiSetter}>
      <CarouselContent className="items-center">
        {list.map((accolade: any, index: number) => (
          <CarouselItem
            key={accolade.id}
            className="max-w-full md:basis-1/2 lg:basis-1/3"
          >
            <div className="group">
              <div
                className={`max-w-full ${
                  current === index ? "h-72 shadow-2xl" : "h-60 shadow-lg"
                } bg-gray-200 rounded-xl flex items-center justify-center mb-6 transition-all ease-in duration-500`}
              >
                <span className="text-gray-500 text-sm font-poppins">
                  {accolade.image}
                </span>
              </div>

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
  );

  return (
    <section id="accolades" className="p-10">
      <div className="relative flex flex-col gap-16 max-w-7xl mx-auto">
        <SectionHeading
          topOne="top-10"
          topTwo="top-30"
          rightOne="right-20"
          rightTwo="left-20"
          title="Accolades and Awards"
          margin="my-10"
          height="h-6"
          width="w-6"
          description="Recognition for excellence in real estate service and community commitment"
        />

        {/* Top Row */}
        {renderCarousel(accoladesTop, setApiTop, currentTop, countTop)}

        {/* Bottom Row */}
        {renderCarousel(
          accoladesBottom,
          setApiBottom,
          currentBottom,
          countBottom,
        )}
      </div>
    </section>
  );
};

export default Accolades;

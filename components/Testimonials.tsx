"use client";

import { Star, Youtube } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";

import { useState, useEffect } from "react";
import Image from "next/image";

const Testimonials = () => {
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

  const testimonials = [
    {
      id: 1,
      name: "Emily MacKenzie",
      role: "Happy new buyer",
      review:
        "Aiman made our home buying experience seamless and stress-free. His expertise and dedication were evident throughout the entire process.",
      videoThumbnail: "Video Thumbnail 1",
      youtubeId: "dQw4w9WgXcQ", // placeholder YouTube ID
    },
    {
      id: 2,
      name: "John Smith",
      role: "Satisfied seller",
      review:
        "Outstanding service! Aiman helped us sell our home quickly and for the best price. Highly recommend his professional approach.",
      videoThumbnail: "Video Thumbnail 2",
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      role: "Investment buyer",
      review:
        "Incredible knowledge of the market. Aiman found us the perfect investment property and guided us through every step.",
      videoThumbnail: "Video Thumbnail 3",
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      id: 4,
      name: "Michael Brown",
      role: "First-time buyer",
      review:
        "As first-time buyers, we were nervous, but Aiman made everything so easy to understand. Couldn't be happier!",
      videoThumbnail: "Video Thumbnail 4",
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      id: 5,
      name: "Lisa Davis",
      role: "Luxury home buyer",
      review:
        "Exceptional attention to detail and personalized service. Aiman truly understands luxury real estate.",
      videoThumbnail: "Video Thumbnail 5",
      youtubeId: "dQw4w9WgXcQ",
    },
  ];

  return (
    <section id="testimonials" className="p-10">
      <div className="flex flex-col gap-10 max-w-7xl mx-auto">
        <div>
          <h2 className="text-4xl font-bold text-[var(--secondary)] mb-4 font-poppins">
            Client Success Stories
          </h2>
          <p className="text-gray-600">
            Hear from satisfied clients who trusted me with their real estate
            journey
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
            <CarouselContent className="max-w-full">
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="max-w-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <div className="group cursor-pointer">
                    {/* Video Thumbnail Container */}
                    <div className="relative aspect-[9/16] rounded-2xl overflow-hidden transition-all duration-300">
                      {/* Thumbnail */}
                      <div className="absolute inset-0 bg-gradient-to-b from-gray-600 to-gray-800 flex items-center justify-center">
                        <span className="text-white text-sm font-poppins"></span>
                      </div>

                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="rounded-full p-4 group-hover:bg-[var(--primary)]/30 group-hover:scale-105 transition-colors">
                          <Youtube className="h-8 w-8 text-white group-hover:text-[var(--primary)]" />
                        </div>
                      </div>

                      {/* Review Overlay at Bottom */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col gap-2">
                        {/* Stars */}
                        <div className="flex mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-3 w-3 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>

                        {/* Review Text */}
                        <p className="text-white text-xs mb-2 line-clamp-3">
                          "{testimonial.review}"
                        </p>

                        {/* Client Info */}
                        <div className="flex gap-2 items-center">
                          <Image
                            src="/agent.png"
                            width={40}
                            height={40}
                            alt={testimonial.name}
                            className="aspect-square rounded-full object-cover"
                          />
                          <div className="text-white">
                            <p className="font-semibold text-sm">
                              {testimonial.name}
                            </p>
                            <p className="text-xs">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

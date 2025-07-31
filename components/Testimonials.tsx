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
            Latest Media
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
                  <div>
                    <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@aiman.roza/video/7532481578925051154" data-video-id="7532481578925051154"> <section> <a target="_blank" title="@aiman.roza" href="https://www.tiktok.com/@aiman.roza?refer=embed">@aiman.roza</a> Why is your house still not sold? What is happening? <a title="resale" target="_blank" href="https://www.tiktok.com/tag/resale?refer=embed">#resale</a> <a title="hdb" target="_blank" href="https://www.tiktok.com/tag/hdb?refer=embed">#hdb</a> <a title="bto" target="_blank" href="https://www.tiktok.com/tag/bto?refer=embed">#bto</a> <a title="fyp" target="_blank" href="https://www.tiktok.com/tag/fyp?refer=embed">#fyp</a> <a target="_blank" title="♬ original sound  - aiman.roza" href="https://www.tiktok.com/music/original-sound-aimanroza-7532481612085332753?refer=embed">♬ original sound  - aiman.roza</a> </section> </blockquote> 
                    <script async src="https://www.tiktok.com/embed.js"></script>
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

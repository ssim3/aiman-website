"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import SectionHeading from "./ui/SectionHeading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

type Review = {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  text: string;
};

type TestimonialVideo = {
  id: string;
  title: string;
  youtubeId: string;
};

// Add your YouTube video IDs here
const testimonialVideos: TestimonialVideo[] = [
  {
    id: "1",
    title: "Client Testimonial 1",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
  },
  {
    id: "2",
    title: "Client Testimonial 2",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
  },
  {
    id: "3",
    title: "Client Testimonial 3",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
  },
  {
    id: "4",
    title: "Client Testimonial 4",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
  },
];

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data.reviews.slice(0, 20)));
  }, []);

  return (
    <div className="relative max-w-7xl px-10 m-auto">
      <SectionHeading
        topOne="top-10"
        topTwo="top-30"
        rightOne="right-20"
        rightTwo="left-20"
        title="Don't Hear It From Me. <br/> Hear it from over 1000+ Happy Clients."
        height="h-0"
        width="w-0"
        description=""
      />

      {/* Video Testimonials Carousel */}
      <div className="mb-10">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent>
            {testimonialVideos.map((video) => (
              <CarouselItem key={video.id}>
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="cursor-pointer group relative">
                      <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform">
                        <Image
                          src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                          alt={video.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <svg
                              className="w-8 h-8 text-white ml-1"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <p className="text-center mt-3 font-medium text-gray-700">
                        {video.title}
                      </p>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="w-full p-0">
                    <div className="aspect-video w-full">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Google Reviews Section */}
      <div className="flex flex-col items-center gap-6">
        <div className="max-md:flex-col flex justify-center gap-6">
          {reviews.slice(0, 3).map((review, idx) => (
            <div
              key={idx}
              className="break-inside-avoid rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 border transiton-all duration-700 border-gray-200 p-4 bg-white"
            >
              <div className="flex items-center gap-4 mb-2">
                <Image
                  height={50}
                  width={50}
                  src={review.profile_photo_url}
                  alt={review.author_name}
                  className="rounded-full"
                />
                <div className="flex flex-col items-start">
                  <span className="text-lg">{review.author_name}</span>
                  <div className="flex -ml-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 ${
                          i < review.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.678a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.124 2.27a1 1 0 00-.364 1.118l1.2 3.678c.3.922-.755 1.688-1.54 1.118L10 13.348l-3.124 2.27c-.785.57-1.84-.196-1.54-1.118l1.2-3.678a1 1 0 00-.364-1.118L3.048 9.105c-.783-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.2-3.678z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-500">{review.text.slice(0, 200)} ...</p>
            </div>
          ))}
        </div>
        <div className="max-md:flex-col flex justify-center gap-6 max-sm:hidden">
          {reviews.slice(3, 5).map((review, idx) => (
            <div
              key={idx}
              className="break-inside-avoid rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 border transiton-all duration-700 border-gray-200 p-4 bg-white"
            >
              <div className="flex items-center gap-4 mb-2">
                <Image
                  height={50}
                  width={50}
                  src={review.profile_photo_url}
                  alt={review.author_name}
                  className="rounded-full"
                />
                <div className="flex flex-col items-start">
                  <span className="text-lg">{review.author_name}</span>
                  <div className="flex -ml-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 ${
                          i < review.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.678a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.124 2.27a1 1 0 00-.364 1.118l1.2 3.678c.3.922-.755 1.688-1.54 1.118L10 13.348l-3.124 2.27c-.785.57-1.84-.196-1.54-1.118l1.2-3.678a1 1 0 00-.364-1.118L3.048 9.105c-.783-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.2-3.678z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-500">{review.text.slice(0, 200)} ...</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

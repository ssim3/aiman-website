"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import SectionHeading from "./ui/SectionHeading";

type Review = {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  text: string;
};

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);

  console.log(reviews);

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data.reviews.slice(0, 20))); // limit to 20 reviews
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
      <div className="columns-1 sm:columns-2 lg:columns-3  space-x-4 space-y-6">
        {reviews.map((review, idx) => (
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
                        i < review.rating ? "text-yellow-400" : "text-gray-300"
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
  );
}

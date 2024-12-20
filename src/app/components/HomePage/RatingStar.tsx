"use client"
import { useState } from "react";

interface StarRatingProps {
  rating: number; // Initial rating value (1-5)
  totalStars?: number; // Total number of stars (default: 5)
}

export default function StarRating({ rating, totalStars = 5 }: StarRatingProps) {
  const [currentRating, setCurrentRating] = useState(rating);

  return (
    <div className="flex items-center">
      {Array.from({ length: totalStars }, (_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            onClick={() => setCurrentRating(starValue)} // Update rating on click
            className={`cursor-pointer text-3xl ${
              starValue <= currentRating ? "text-color_1 " : "text-gray-300"
            }`}
          >
            ★
          </span>
        );
      })}
    </div>
  );
}

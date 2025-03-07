"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Danh sách ảnh mẫu - trong thực tế sẽ lấy từ API
const images = [
  "/images/properties/Luxury.webp",
  "/images/properties/Luxury.webp",
  "/images/properties/Luxury.webp",
  "/images/properties/Luxury.webp",
  "/images/properties/Luxury.webp",
];

export function PropertyGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextImage = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <Image
          src={images[activeIndex]}
          alt="Bất động sản"
          fill
          className="object-cover"
        />
        {/* Navigation buttons */}
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full bg-white/70 hover:bg-white/90"
            onClick={prevImage}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full bg-white/70 hover:bg-white/90"
            onClick={nextImage}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next</span>
          </Button>
        </div>
        {/* Virtual tour/360 button */}
        <Button
          variant="outline"
          className="absolute bottom-4 right-4 bg-white/70 hover:bg-white/90"
        >
          <Expand className="mr-2 h-4 w-4" />
          Xem 360°
        </Button>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-5 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            className={cn(
              "relative aspect-video overflow-hidden rounded-md",
              index === activeIndex && "ring-2 ring-primary ring-offset-2"
            )}
            onClick={() => setActiveIndex(index)}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

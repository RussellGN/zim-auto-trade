"use client";

import { CustomImageProps } from "@/lib/types";
import { useState } from "react";
import { Images } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type propTypes = {
  images: CustomImageProps[];
  alt: string;
  compact?: boolean;
  imgsClassname?: string;
};

export default function ImageCollage({
  images,
  alt,
  compact,
  imgsClassname,
}: propTypes) {
  const [imageOnView, setImageOnView] = useState(images[0]);

  return (
    <div>
      <div className="relative">
        <Image
          src={imageOnView.src}
          alt={imageOnView.alt || alt}
          width={800}
          height={450}
          className={`aspect-video w-full ${compact ? "rounded-s-2xl" : "rounded-2xl"} bg-gray-700 object-cover`}
        />
        <div className="absolute left-0 top-0 m-0.5 flex items-center gap-2 rounded rounded-ee-xl rounded-ss-2xl bg-black/50 px-2 py-1 text-sm text-white backdrop-blur">
          <Images size={18} />
          {images.length + 1}
        </div>
      </div>

      {!compact && (
        <div className="flex items-center gap-2 overflow-x-auto p-2">
          {images.map((img, index) => (
            <Image
              onClick={() => setImageOnView(img)}
              key={index}
              src={img.src}
              alt={img.alt || alt}
              width={800}
              height={450}
              className={cn(
                `aspect-video h-[7rem] cursor-pointer rounded-lg border-4 bg-gray-700 object-cover hover:border-primary-default ${imageOnView.src === img.src ? "border-primary-default" : "border-transparent"}`,
                imgsClassname,
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}

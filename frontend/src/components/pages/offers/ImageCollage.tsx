"use client";

import { CustomImageProps } from "@/lib/types";
import { useEffect, useState } from "react";
import { Images } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { iconSize } from "@/lib/constants";

type propTypes = {
  images: CustomImageProps[];
  alt: string;
  compact?: boolean;
  imgsClassname?: string;
  imgsContainerMaxWidth?: string;
};

export default function ImageCollage({
  images,
  alt,
  compact,
  imgsClassname,
  imgsContainerMaxWidth = "100%",
}: propTypes) {
  const [imageOnView, setImageOnView] = useState({ img: images[0], pos: 0 });

  useEffect(() => {
    setImageOnView({ img: images[0], pos: 0 });
  }, [images]);

  return (
    <div>
      <div className="relative">
        <Image
          src={imageOnView.img.src}
          alt={imageOnView.img.alt || alt}
          width={800}
          height={450}
          className={`aspect-video w-full ${compact ? "rounded-t-xl md:rounded-s-2xl md:rounded-t-none" : "rounded-2xl"} bg-gray-700 object-cover`}
        />
        <div className="absolute left-0 top-0 m-0.5 flex items-center gap-2 rounded rounded-ee-lg rounded-ss-lg bg-black/50 px-2 py-1 text-sm text-white backdrop-blur md:rounded-ee-xl md:rounded-ss-2xl">
          <Images size={iconSize} />
          {`${imageOnView.pos + 1}/${images.length}`}
        </div>
      </div>

      {!compact && (
        <div
          className={`mx-auto flex max-w-[${imgsContainerMaxWidth}] items-center gap-1 overflow-x-auto p-1`}
        >
          {images.map((img, index) => (
            <Image
              onClick={() => setImageOnView({ img, pos: index })}
              key={index}
              src={img.src}
              alt={img.alt || alt}
              width={800}
              height={450}
              className={cn(
                `aspect-video h-[7rem] w-auto cursor-pointer rounded-lg border-2 bg-gray-700 object-cover hover:border-primary-light ${imageOnView.img.src === img.src ? "border-primary-light" : "border-transparent"}`,
                imgsClassname
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}

import { placeholderImage } from "@/lib/constants";
import { ImageSrc } from "@/lib/types";
import { Images } from "lucide-react";
import Image from "next/image";

type propTypes = {
  coverImage: { src: ImageSrc | undefined; alt?: string };
  images: { src: ImageSrc; alt?: string }[];
  alt: string;
  compact?: boolean;
};

export default function ImageCollage({
  coverImage,
  images,
  alt,
  compact,
}: propTypes) {
  return (
    <div>
      <div className="relative">
        <Image
          src={coverImage.src || placeholderImage}
          alt={coverImage.alt || alt}
          width={800}
          height={450}
          className="h-auto w-full rounded-s-2xl bg-black object-cover"
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
              src={img.src}
              alt={img.alt || alt}
              key={index}
              className="aspect-video w-[5rem] bg-black object-cover"
            />
          ))}
        </div>
      )}
    </div>
  );
}

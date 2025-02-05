"use client";

import { Button } from "@/components/ui/button";
import useDisplayPhoto from "@/hooks/component-hooks/useDisplayPhoto";
import { placeholderImage } from "@/lib/constants";
import { ListerInterface } from "@/lib/interfaces";
import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

type propTypes = {
  className?: string;
  imgClassName?: string;
  lister: ListerInterface;
  standalone?: boolean;
};

export default function DisplayPhoto({
  standalone,
  className,
  imgClassName,
  lister,
}: propTypes) {
  const { imgPreviewSrc, onImageChange } = useDisplayPhoto(standalone);

  return (
    <div className={cn("relative mb-10", className)}>
      <Image
        src={imgPreviewSrc || lister.image || placeholderImage}
        alt={lister.name}
        width={160}
        height={90}
        className={cn(
          "aspect-square w-full rounded-lg border bg-slate-800 object-cover shadow-sm",
          imgClassName,
        )}
      />
      <Button
        size="icon"
        className="absolute bottom-0 right-0 z-10 -translate-x-1/4 translate-y-1/4 rounded-full border-4 border-[whitesmoke] bg-slate-800 text-white shadow-lg"
      >
        <ImageIcon />
      </Button>
      <input
        type="file"
        title="change image"
        className="display_photo_input absolute bottom-0 right-0 z-10 h-9 w-9 -translate-x-1/4 translate-y-1/4 cursor-pointer rounded-full opacity-0"
        accept="image/jpg, image/jpeg, image/png"
        onChange={onImageChange}
      />
    </div>
  );
}

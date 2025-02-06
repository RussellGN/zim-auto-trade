"use client";

import { Button } from "@/components/ui/button";
import useChangeablePhoto from "@/hooks/component-hooks/useChangeablePhoto";
import { placeholderImage } from "@/lib/constants";
import { ListerInterface } from "@/lib/interfaces";
import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

type propTypes = {
  className?: string;
  imgClassName?: string;
  lister?: ListerInterface;
  standalone?: boolean;
  name?: string;
};

export default function ChangeablePhoto({
  standalone,
  className,
  imgClassName,
  lister,
  name,
}: propTypes) {
  const { inputRef, imgPreviewSrc, handleClick, onImageChange } = useChangeablePhoto(standalone);

  return (
    <div className={cn("relative mb-10", className)}>
      <Image
        src={imgPreviewSrc || lister?.image || placeholderImage}
        alt={lister?.name || name || "selected image"}
        width={160}
        height={90}
        className={cn(
          "aspect-square w-full rounded-lg border bg-slate-800 object-cover shadow-sm",
          imgClassName
        )}
      />
      <Button
        onClick={handleClick}
        type="button"
        size="icon"
        className="absolute bottom-0 right-0 z-10 -translate-x-1/4 translate-y-1/4 rounded-full border-4 border-[whitesmoke] bg-slate-800 text-white shadow-lg"
      >
        <ImageIcon />
      </Button>
      <input
        type="file"
        title="change image"
        ref={inputRef}
        hidden
        accept="image/jpg, image/jpeg, image/png"
        name={name || "changeable_photo"}
        onChange={onImageChange}
      />
    </div>
  );
}

import React, { useState } from "react";

export default function useDisplayPhoto(standalone: boolean | undefined) {
  const [imgPreviewSrc, setImgPreviewSrc] = useState<string | undefined>(
    undefined,
  );

  function onImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.length ? e.target.files[0] : undefined;
    if (!file) return;

    const url = URL.createObjectURL(file);
    setImgPreviewSrc(url);

    if (standalone) {
      // TODO updateImage
      console.log("updateImage");
    }
  }

  return { imgPreviewSrc, onImageChange };
}

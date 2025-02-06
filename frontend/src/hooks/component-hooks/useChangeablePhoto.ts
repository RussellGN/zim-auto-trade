import { useRef, useState } from "react";

export default function useChangeablePhoto(standalone: boolean | undefined) {
  const [imgPreviewSrc, setImgPreviewSrc] = useState<string | undefined>(undefined);
  const inputRef = useRef<HTMLInputElement | null>(null);

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

  function handleClick() {
    inputRef.current?.click();
  }

  return { inputRef, imgPreviewSrc, handleClick, onImageChange };
}

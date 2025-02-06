import { placeholderImg16x9 } from "@/lib/constants";
import { useState } from "react";
import { useToast } from "@/hooks/general/use-toast";

export default function useNewListing() {
  const [images, setImages] = useState([
    { src: placeholderImg16x9 },
    { src: placeholderImg16x9 },
    { src: placeholderImg16x9 },
    { src: placeholderImg16x9 },
    { src: placeholderImg16x9 },
    { src: placeholderImg16x9 },
  ]);

  const { toast } = useToast();

  function onImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    const length = files?.length;
    if (!length) return;
    if (length < 6) {
      toast({
        title: "Error previewing images",
        description: `A minimum of 6 images is required, you selected ${length}`,
        className: "bg-white shadow-lg",
      });
      return;
    }
    if (length > 30) {
      toast({
        title: "Error previewing images",
        description: `A maximum of 30 images is allowed, you selected ${length}`,
        className: "bg-white shadow-lg",
      });
      return;
    }

    const newImages = [];
    for (const file of files) {
      const url = URL.createObjectURL(file);
      newImages.push({ src: url });
    }
    setImages(newImages);
  }

  return { images, onImageChange };
}

import { placeholderImg16x9 } from "@/lib/constants";
import { FormEvent, useState } from "react";
import { useToast } from "@/hooks/general/use-toast";
import { ListingInterface } from "@/lib/interfaces";
import { ImageSrc } from "@/lib/types";

export default function useListingModal(listing?: ListingInterface) {
  const [images, setImages] = useState(
    listing?.images.length
      ? [listing.coverImage, ...listing.images].map((i) => ({ src: i }))
      : [
          { src: placeholderImg16x9 },
          { src: placeholderImg16x9 },
          { src: placeholderImg16x9 },
          { src: placeholderImg16x9 },
          { src: placeholderImg16x9 },
          { src: placeholderImg16x9 },
        ]
  );

  const { toast } = useToast();

  function onImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    const length = files?.length;
    if (!length) return;
    if (length < 6) {
      toast({
        title: "Error previewing images",
        description: `A minimum of 6 images is required, you selected ${length}`,
        variant: "destructive",
      });
      return;
    }
    if (length > 30) {
      toast({
        title: "Error previewing images",
        description: `A maximum of 30 images is allowed, you selected ${length}`,
        variant: "destructive",
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

  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: { [k: string]: FormDataEntryValue | FormDataEntryValue[] | ImageSrc[] } =
      Object.fromEntries(formData);
    data["images"] = (formData.getAll("images")[0] as File).size
      ? formData.getAll("images")
      : images.map((i) => i.src);
    console.log({ formData, data });
  }

  function resetImages() {
    setImages(
      listing?.images.length
        ? [listing.coverImage, ...listing.images].map((i) => ({ src: i }))
        : [
            { src: placeholderImg16x9 },
            { src: placeholderImg16x9 },
            { src: placeholderImg16x9 },
            { src: placeholderImg16x9 },
            { src: placeholderImg16x9 },
            { src: placeholderImg16x9 },
          ]
    );
  }

  const isEditing = !!listing;

  return { images, isEditing, resetImages, submitHandler, onImageChange };
}

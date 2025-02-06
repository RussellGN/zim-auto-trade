"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { DialogDescription } from "@radix-ui/react-dialog";
import useNewListing from "@/hooks/component-hooks/useNewListing";
import ImageCollage from "../offers/ImageCollage";
import FieldSet from "@/components/general/FieldSet";
import { Input } from "@/components/ui/input";

export default function NewListing() {
  const { images, onImageChange } = useNewListing();

  return (
    <Dialog defaultOpen>
      <DialogTrigger asChild>
        <Button className="bg-primary-default text-white" title="new listing">
          New Listing
          <Plus size={18} />
        </Button>
      </DialogTrigger>

      <DialogContent className={`bg-white sm:max-w-fit`}>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            New Listing <Plus size={18} />
          </DialogTitle>

          <DialogDescription>Create a new vahicle listing</DialogDescription>
        </DialogHeader>

        <form>
          <div className="grid w-[80vw] grid-cols-12 items-start justify-between gap-3">
            <FieldSet
              legend="Images"
              className="col-span-4"
              description="Upload a minimum of 6 images of your vehicle. You can upload up to 30 images and preview them before continuing. The first image becomes the cover image."
            >
              <Input
                onChange={onImageChange}
                required
                multiple
                min={6}
                max={30}
                name="images"
                accept="image/jpg, image/jpeg, image/png"
                type="file"
                className="bg-slate-50"
              />

              <ImageCollage
                alt="image preview"
                images={images}
                imgsClassname="h-[3rem]"
                imgsContainerMaxWidth="320px"
              />
            </FieldSet>

            <FieldSet legend="General Info" className="col-span-4"></FieldSet>

            <FieldSet legend="Extra Info" className="col-span-4"></FieldSet>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

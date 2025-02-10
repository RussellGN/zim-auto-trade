"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ArrowRight,
  Bookmark,
  Boxes,
  Calendar1,
  CircleDollarSign,
  Edit,
  GaugeCircle,
  Info,
  MapPin,
  Plus,
  Shield,
  ShieldEllipsis,
} from "lucide-react";
import { DialogDescription } from "@radix-ui/react-dialog";
import FieldSet from "@/components/general/FieldSet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "@/lib/constants";
import { Textarea } from "@/components/ui/textarea";
import { ListingInterface } from "@/lib/interfaces";
import useListingModal from "@/hooks/component-hooks/useListingModal";
import { ReactNode } from "react";
import ImageCollage from "../pages/offers/ImageCollage";
import FeaturesSelector from "../pages/dashboard/FeaturesSelector";

type propTypes = {
  listing?: ListingInterface;
  trigger: ReactNode;
};

export default function ListingModal({ listing, trigger }: propTypes) {
  const { images, isEditing, resetImages, submitHandler, onImageChange } = useListingModal(listing);

  return (
    <Dialog onOpenChange={resetImages}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className={`bg-white sm:max-w-fit`}>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {isEditing ? (
              <>
                Edit Listing <Edit size={18} />
              </>
            ) : (
              <>
                New Listing <Plus size={18} />
              </>
            )}
          </DialogTitle>

          <DialogDescription>
            {isEditing ? "Edit listing" : "Create a new vahicle listing"}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={submitHandler}>
          <div className="grid w-[80vw] grid-cols-12 justify-between gap-3 py-5">
            <FieldSet
              legend="Images"
              className="col-span-4"
              description="Upload a minimum of 6 images of your vehicle. You can upload up to 30 images and preview them before continuing. The first image becomes the cover image."
            >
              <Input
                onChange={onImageChange}
                required={!isEditing}
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

            <FieldSet legend="General Info" className="col-span-4">
              <div className="mb-1 flex items-center justify-between gap-4">
                <Label className="flex items-center gap-1" htmlFor="make">
                  <Shield size={16} /> Make
                </Label>

                <Input
                  className="max-w-[65%] bg-[whitesmoke]"
                  id="make"
                  name="make"
                  defaultValue={listing?.make}
                  maxLength={30}
                  placeholder="e.g Nissan"
                  required
                />
              </div>

              <div className="mb-1 flex items-center justify-between gap-4">
                <Label className="flex items-center gap-1" htmlFor="model">
                  <ShieldEllipsis size={16} /> Model
                </Label>

                <Input
                  className="max-w-[65%] bg-[whitesmoke]"
                  id="model"
                  name="model"
                  defaultValue={listing?.model}
                  maxLength={30}
                  placeholder="e.g X-Trail"
                  required
                />
              </div>

              <div className="mb-1 flex items-center justify-between gap-4">
                <Label className="flex items-center gap-1" htmlFor="year">
                  <Calendar1 size={16} /> Year
                </Label>

                <Input
                  className="max-w-[65%] bg-[whitesmoke]"
                  id="year"
                  type="number"
                  step={1}
                  max={new Date().getFullYear()}
                  min={1900}
                  name="year"
                  defaultValue={listing?.year}
                  placeholder="year released"
                  required
                />
              </div>

              <div className="mb-1 flex items-center justify-between gap-4">
                <Label className="flex items-center gap-1" htmlFor="category">
                  <Boxes size={16} /> Category
                </Label>

                <Select defaultValue={listing?.category} required={!isEditing} name="category">
                  <SelectTrigger className="max-w-[65%] bg-[whitesmoke] transition-all">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>

                  <SelectContent className="mt-3 rounded-2xl bg-white">
                    {categories.map((category) => (
                      <SelectItem key={category.name} value={category.name} className="capitalize">
                        <div className="flex items-center gap-2">
                          {category.icon}
                          {category.name}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="mb-1 flex items-center justify-between gap-4">
                <Label className="flex items-center gap-1" htmlFor="price">
                  <CircleDollarSign size={16} /> Price
                </Label>

                <Input
                  className="max-w-[65%] bg-[whitesmoke]"
                  id="price"
                  type="number"
                  step={1}
                  max={100000000}
                  min={0}
                  name="price"
                  defaultValue={listing?.price}
                  placeholder="price in USD"
                  required
                />
              </div>

              <div className="mb-1 flex items-center justify-between gap-4">
                <Label className="flex items-center gap-1" htmlFor="mileage">
                  <GaugeCircle size={16} /> Mileage
                </Label>

                <Input
                  className="max-w-[65%] bg-[whitesmoke]"
                  id="mileage"
                  type="number"
                  step={1}
                  max={100000000}
                  min={0}
                  name="mileage"
                  defaultValue={listing?.mileage}
                  placeholder="mileage in Kilometers"
                  required
                />
              </div>

              <div className="mb-1 flex items-center justify-between gap-4">
                <Label className="flex items-center gap-1" htmlFor="location">
                  <MapPin size={16} /> Location
                </Label>

                <Input
                  className="max-w-[65%] bg-[whitesmoke]"
                  id="location"
                  name="location"
                  defaultValue={listing?.location}
                  maxLength={30}
                  placeholder="city/town, street"
                  required
                />
              </div>
            </FieldSet>

            <FieldSet legend="Further Info" className="col-span-4">
              <div className="mb-1">
                <Label className="mb-3 flex items-center gap-1" htmlFor="description">
                  <Info size={16} /> Description
                </Label>

                <Textarea
                  className="w-full bg-[whitesmoke]"
                  rows={8}
                  id="description"
                  name="description"
                  defaultValue={listing?.description}
                  placeholder="give more details about the car"
                  minLength={10}
                  maxLength={800}
                  required
                />
              </div>

              <div>
                <FeaturesSelector defaultFeatures={listing?.features.join(";")} />
              </div>
            </FieldSet>
          </div>

          <div className="m-5 text-right">
            {!isEditing && (
              <Button type="button" className="bottom-3 mr-3 border-slate-500" variant="outline">
                Save As Draft <Bookmark />
              </Button>
            )}

            <Button type="submit" className="bg-primary-default text-white">
              {isEditing ? "Save Changes" : "Create Listing"} <ArrowRight />
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

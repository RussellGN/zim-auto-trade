"use client";

import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Edit2, Info, MapPin, UserCircle, Users } from "lucide-react";
import { ListerInterface } from "@/lib/interfaces";
import { FormEvent, useState } from "react";
import { iconSize, listerOptions, modalDialogSizes } from "@/lib/constants";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import ChangeablePhoto from "./ChangeablePhoto";
import FieldSet from "@/components/general/FieldSet";
import ContentModal from "@/components/general/ContentModal";

type proptypes = {
  isEditing?: boolean;
  lister: ListerInterface;
};

export default function ProfileSetup({ lister }: proptypes) {
  const [isEditing, setIsEditing] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <ContentModal
      trigger={
        <Button
          onClick={() => setIsEditing(true)}
          variant="outline"
          className="border-black bg-secondary-default"
        >
          <span className="hidden md:inline">Edit Profile</span>
          <Edit2 />
        </Button>
      }
      title={isEditing ? "Edit Profile" : "Profile Setup"}
      description={isEditing ? "Make changes to your profile" : "Lets setup your profile"}
      size={modalDialogSizes.md}
    >
      <form onSubmit={onSubmit}>
        <div className="mb-8 grid grid-cols-5 items-center gap-4 px-3">
          <div className="col-span-2">
            <ChangeablePhoto lister={lister} name="display_photo" className="m-0" />
          </div>

          <p className="col-span-3 text-sm md:text-base">
            Choose a clear and professional photo that represents you or your dealership (1x1 aspect
            ratio)
          </p>
        </div>

        <FieldSet legend="Details">
          <div className="mb-1 flex items-center justify-between gap-3 md:gap-4">
            <Label className="flex items-center gap-1.5" htmlFor="name">
              <UserCircle size={iconSize} /> Name
            </Label>

            <Input
              className="max-w-[65%] bg-[whitesmoke]"
              id="name"
              name="name"
              defaultValue={lister.name}
              maxLength={30}
              required
            />
          </div>

          <div className="mb-1 flex items-center justify-between gap-3 md:gap-4">
            <Label className="flex items-center gap-1.5" htmlFor="type">
              <Users size={iconSize} /> Type
            </Label>

            <Select name="type" defaultValue={lister.type}>
              <SelectTrigger className="max-w-[65%] bg-[whitesmoke] transition-all">
                <SelectValue placeholder="Type" />
              </SelectTrigger>

              <SelectContent className="mt-2 rounded-xl bg-white">
                {listerOptions.map((option) => (
                  <SelectItem key={option} value={option} className="capitalize">
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="mb-1 flex items-center justify-between gap-3 md:gap-4">
            <Label className="flex items-center gap-1.5" htmlFor="location">
              <MapPin size={iconSize} /> Location
            </Label>

            <Input
              className="w-full max-w-[65%] bg-[whitesmoke]"
              id="location"
              name="location"
              defaultValue={lister.location}
              maxLength={30}
              required
            />
          </div>

          <div>
            <Label className="mb-3 flex items-center gap-1.5" htmlFor="description">
              <Info size={iconSize} /> Description
            </Label>

            <Textarea
              className="w-full rounded bg-[whitesmoke] p-1.5"
              rows={4}
              id="description"
              name="description"
              defaultValue={lister.description}
              maxLength={500}
              required
            />
          </div>
        </FieldSet>

        <div className="mt-5 px-5 text-right">
          <DialogClose asChild>
            <Button type="submit" variant="outline" className="border-black bg-secondary-default">
              Save
            </Button>
          </DialogClose>
        </div>
      </form>
    </ContentModal>
  );
}

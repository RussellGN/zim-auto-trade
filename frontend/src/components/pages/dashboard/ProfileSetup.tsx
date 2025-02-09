"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Edit2, Info, MapPin, UserCircle, Users } from "lucide-react";
import { ListerInterface } from "@/lib/interfaces";
import { useState } from "react";
import { listerOptions, modalDialogSizes } from "@/lib/constants";
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

type proptypes = {
  isEditing?: boolean;
  lister: ListerInterface;
};

export default function ProfileSetup({ lister }: proptypes) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Dialog>
      <DialogTrigger onClick={() => setIsEditing(true)} asChild>
        <Button variant="outline" className="border border-slate-700 bg-white">
          Edit Profile
          <Edit2 />
        </Button>
      </DialogTrigger>

      <DialogContent className={`bg-white sm:max-w-[${modalDialogSizes.md}]`}>
        <DialogHeader>
          <DialogTitle>{isEditing ? "Edit Profile" : "Profile Setup"}</DialogTitle>

          <DialogDescription>
            {isEditing ? "Make changes to your profile" : "Lets setup your profile"}
          </DialogDescription>
        </DialogHeader>

        <form
          className="my-5"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="flex items-center justify-between gap-5 px-3">
            <ChangeablePhoto lister={lister} name="display_photo" imgClassName="w-[10rem]" />

            <div className="flex items-start gap-2">
              <div>
                <Info size={18} className="text-info-dark" />
              </div>
              <p className="-mt-1.5 max-w-[20rem] text-slate-700">
                Choose a clear and professional photo that represents you or your dealership (1x1
                aspect ratio)
              </p>
            </div>
          </div>

          <FieldSet legend="Details">
            <div className="mb-2 flex items-center justify-between gap-4">
              <Label className="flex items-center gap-2 ps-3" htmlFor="name">
                <UserCircle size={18} /> Name
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

            <div className="mb-2 flex items-center justify-between gap-4">
              <Label className="flex items-center gap-2 ps-3" htmlFor="type">
                <Users size={18} /> Type
              </Label>

              <Select name="type" defaultValue={lister.type}>
                <SelectTrigger className="max-w-[65%] bg-[whitesmoke] transition-all">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>

                <SelectContent className="mt-3 rounded-2xl bg-white">
                  {listerOptions.map((option) => (
                    <SelectItem key={option} value={option} className="capitalize">
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="mb-2 flex items-center justify-between gap-4">
              <Label className="flex items-center gap-2 ps-3" htmlFor="location">
                <MapPin size={18} /> Location
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

            <div className="mb-2">
              <Label className="mb-3 flex items-center gap-2 ps-3" htmlFor="description">
                <Info size={18} /> Description
              </Label>

              <Textarea
                className="w-full bg-[whitesmoke]"
                rows={3}
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
              <Button type="submit" className="bg-primary-default text-white">
                Save
              </Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

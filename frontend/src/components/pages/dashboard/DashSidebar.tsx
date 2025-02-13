import { ListerInterface } from "@/lib/interfaces";
import { MapPin, UserCircle, Users } from "lucide-react";
import ProfileSetup from "./ProfileSetup";
import ChangeablePhoto from "./ChangeablePhoto";
import { iconSize } from "@/lib/constants";

export default function DashSidebar({ lister }: { lister: ListerInterface }) {
  return (
    <aside className="top-0 px-5 pt-10 md:sticky md:py-10">
      <div className="hidden md:block">
        <ChangeablePhoto lister={lister} name="display_photo" standalone />
      </div>

      <div className="flex items-center gap-5 md:block">
        <div className="w-[30%] md:hidden">
          <ChangeablePhoto className="mb-0" lister={lister} name="display_photo" standalone />
        </div>

        <div className="flex flex-1 flex-col gap-2 md:mb-10 md:gap-4">
          <div className="flex items-center gap-2">
            <UserCircle size={iconSize} />
            {lister.name}
          </div>

          <div className="flex items-center gap-2">
            <Users size={iconSize} />
            {lister.type}
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={iconSize} />
            {lister.location}
          </div>

          <p className="hidden max-w-prose md:block">{lister.description}</p>
        </div>
      </div>

      <p className="my-5 max-w-prose md:hidden">{lister.description}</p>

      <div className="hidden md:block">
        <ProfileSetup lister={lister} />
      </div>
    </aside>
  );
}

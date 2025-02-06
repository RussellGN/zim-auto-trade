import { ListerInterface } from "@/lib/interfaces";
import { MapPin, UserCircle, Users } from "lucide-react";
import ProfileSetup from "./ProfileSetup";
import ChangeablePhoto from "./ChangeablePhoto";

export default function DashSidebar({ lister }: { lister: ListerInterface }) {
  return (
    <aside className="sticky top-0 px-5 py-10">
      <ChangeablePhoto lister={lister} name="display_photo" standalone />

      <div className="mb-10 flex flex-1 flex-col gap-4">
        <div className="flex items-center gap-2">
          <UserCircle size={18} />
          {lister.name}
        </div>

        <div className="flex items-center gap-2">
          <Users size={18} />
          {lister.type}
        </div>

        <div className="flex items-center gap-2">
          <MapPin size={18} />
          {lister.location}
        </div>

        <p className="max-w-prose">{lister.description}</p>
      </div>

      <div>
        <ProfileSetup lister={lister} />
      </div>
    </aside>
  );
}

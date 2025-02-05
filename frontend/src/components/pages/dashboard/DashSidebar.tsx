import { Button } from "@/components/ui/button";
import { placeholderImage } from "@/lib/constants";
import { ListerInterface } from "@/lib/interfaces";
import {
  Edit2,
  ImageIcon,
  MapPin,
  User,
  UserCircle,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DashSidebar({ lister }: { lister: ListerInterface }) {
  return (
    <aside className="sticky top-0 h-[85vh] overflow-y-auto border-b-8 px-5 py-10">
      <div className="relative mb-10">
        <Image
          src={lister.image || placeholderImage}
          alt={lister.name}
          width={160}
          height={90}
          className="h-[10rem] w-full rounded-lg border bg-slate-800 object-cover shadow-sm"
        />
        <Button
          size="icon"
          className="absolute bottom-0 right-0 z-10 -translate-x-1/4 translate-y-1/4 rounded-full border-4 border-[whitesmoke] bg-slate-800 text-white shadow-lg"
        >
          <ImageIcon />
        </Button>
      </div>

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
        <Button
          asChild
          variant="outline"
          className="border border-slate-700 bg-white"
        >
          <Link href="/dashboard/edit-profile">
            Edit Profile
            <Edit2 />
          </Link>
        </Button>
      </div>
    </aside>
  );
}

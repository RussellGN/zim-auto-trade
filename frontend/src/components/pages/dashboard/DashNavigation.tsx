import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import Link from "next/link";
import NewListing from "./NewListing";
import Notifications from "./Notifications";
import LogoutBtn from "./LogoutBtn";
import { iconSize } from "@/lib/constants";
import { ListerInterface } from "@/lib/interfaces";
import ProfileSetup from "./ProfileSetup";

type propTypes = {
  lister: ListerInterface;
};

export default function DashNavigation({ lister }: propTypes) {
  return (
    <div className="flex items-center justify-between gap-3 md:pt-10">
      <div className="flex items-center gap-3">
        <div className="md:hidden">
          <ProfileSetup lister={lister} />
        </div>

        <Notifications />

        <Button asChild className="border-black bg-secondary-default" variant="outline">
          <Link href="/dashboard/settings">
            <span className="hidden md:inline">Settings</span>
            <Settings size={iconSize} />
          </Link>
        </Button>

        <LogoutBtn />
      </div>

      <NewListing />
    </div>
  );
}

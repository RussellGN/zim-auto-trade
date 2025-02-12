import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import Link from "next/link";
import NewListing from "./NewListing";
import Notifications from "./Notifications";
import LogoutBtn from "./LogoutBtn";
import { iconSize } from "@/lib/constants";

export default function DashNavigation() {
  return (
    <div className="flex items-center justify-between gap-3 pt-10">
      <div className="flex items-center gap-3">
        <Notifications />

        <Button asChild className="border-black bg-secondary-default" variant="outline">
          <Link href="/dashboard/settings">
            Settings
            <Settings size={iconSize} />
          </Link>
        </Button>

        <LogoutBtn />
      </div>

      <NewListing />
    </div>
  );
}

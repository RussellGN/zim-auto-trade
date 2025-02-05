import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

export default function Notifications() {
  return (
    <>
      <Button className="border-slate-700 bg-white" variant="outline">
        Notifications
        <Bell size={18} />
      </Button>
    </>
  );
}

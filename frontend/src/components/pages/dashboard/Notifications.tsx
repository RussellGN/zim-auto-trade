import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Bell } from "lucide-react";
import { iconSize, modalDialogSizes } from "@/lib/constants";
import { DialogDescription } from "@radix-ui/react-dialog";
import { getNotificationsAction } from "@/actions";
import Notification from "./Notification";

export default async function Notifications() {
  const notifications = await getNotificationsAction();
  const unread = notifications.filter((n) => n.read).length;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="border-slate-700 bg-white" variant="outline">
          Notifications
          <Bell size={iconSize} />
        </Button>
      </DialogTrigger>

      <DialogContent className={`bg-white sm:max-w-[${modalDialogSizes.md}]`}>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <span className="text-primary-default">{unread}</span>
            Notifications <Bell size={iconSize} />
          </DialogTitle>

          <DialogDescription>See whats been happening</DialogDescription>
        </DialogHeader>

        <div className="my-5 h-[30rem] overflow-y-auto border-2">
          {notifications.map((notification) => (
            <Notification notification={notification} key={notification.id} />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

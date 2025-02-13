import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import { iconSize, modalDialogSizes } from "@/lib/constants";
import { getNotificationsAction } from "@/actions";
import Notification from "./Notification";
import ContentModal from "@/components/general/ContentModal";

export default async function Notifications() {
  const notifications = await getNotificationsAction();
  const unread = notifications.filter((n) => n.read).length;

  return (
    <ContentModal
      trigger={
        <Button className="border-black bg-secondary-default" variant="outline">
          <span className="hidden md:inline">Notifications</span>
          <Bell size={iconSize} />
        </Button>
      }
      title={
        <>
          <span className="text-primary-default">{unread}</span>
          Notifications
        </>
      }
      description="See whats been happening"
      icon={<Bell size={iconSize} />}
      size={modalDialogSizes.md}
    >
      <div>
        {notifications.map((notification) => (
          <Notification notification={notification} key={notification.id} />
        ))}
      </div>
    </ContentModal>
  );
}

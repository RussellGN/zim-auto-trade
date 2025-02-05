import ExpandableText from "@/components/general/ExpandableText";
import { NotificationInterface } from "@/lib/interfaces";
import { getTimeElapsedSince } from "@/lib/utils";
import { Clock3 } from "lucide-react";

type propTypes = {
  notification: NotificationInterface;
};

export default function Notification({ notification }: propTypes) {
  return (
    <div
      className={`border-b-2 px-3 py-1 ${notification.read ? "bg-slate-50" : ""}`}
    >
      <div>
        <div className="flex items-center justify-between">
          <div className="font-semibold capitalize">{notification.title}</div>

          <div className="flex items-center gap-3">
            {notification.read && (
              <div className="size-3 rounded-full bg-primary-light"></div>
            )}
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Clock3 size={15} />
              {getTimeElapsedSince(notification.timestamp)}
            </div>
          </div>
        </div>

        <ExpandableText className="p-0.5">{notification.body}</ExpandableText>
      </div>
    </div>
  );
}

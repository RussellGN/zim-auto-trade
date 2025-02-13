import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { modalDialogSize } from "@/lib/types";
import { ReactNode } from "react";

type propTypes = {
  trigger: ReactNode;
  children: ReactNode;
  size?: modalDialogSize;
  title: string;
  description?: string;
  icon?: ReactNode;
};

export default function ContentModal({
  children,
  trigger,
  size,
  title,
  description,
  icon,
}: propTypes) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent
        className={`max-h-[85vh] w-[95%] overflow-y-auto rounded-xl bg-white sm:w-fit md:rounded-lg sm:max-w-${size ? `[${size}]` : "fit"}`}
      >
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 capitalize">
            {title}
            {icon && icon}
          </DialogTitle>

          <DialogDescription className="text-left">{description}</DialogDescription>
        </DialogHeader>

        <div className="my-5">{children}</div>
      </DialogContent>
    </Dialog>
  );
}

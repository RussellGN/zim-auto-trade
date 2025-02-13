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
  title: ReactNode;
  description?: string;
  icon?: ReactNode;
  onOpenChange?: (b: boolean) => void;
};

export default function ContentModal({
  children,
  trigger,
  size,
  title,
  description,
  icon,
  onOpenChange,
}: propTypes) {
  return (
    <Dialog onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent
        className={`max-h-[80vh] w-[93%] overflow-y-auto rounded-lg bg-white px-0 ${size ? `sm:max-w-[${size}]` : "sm:max-w-fit"}`}
      >
        <DialogHeader className="px-5 text-left">
          <DialogTitle className="flex items-center gap-2 capitalize">
            {title}
            {icon && icon}
          </DialogTitle>

          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <div className="my-5 px-5">{children}</div>
      </DialogContent>
    </Dialog>
  );
}

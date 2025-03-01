import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { modalDialogSize } from "@/lib/types";
import { ReactNode } from "react";
import { Button } from "../ui/button";
import { modalDialogSizes } from "@/lib/constants";

type propTypes = {
  children: ReactNode;
  size?: modalDialogSize;
  title: string;
  description?: string;
  icon?: ReactNode;
  message: string;
  proceedText?: string;
  cancelText?: string;
  proceedClassName?: string;
  cancelClassName?: string;
  onProceed?: () => void;
  onCancel?: () => void;
  showCancel?: boolean;
};

export default function CustomModal({
  children: trigger,
  size,
  title,
  description,
  icon,
  message,
  proceedText,
  cancelText,
  cancelClassName,
  proceedClassName,
  onCancel,
  onProceed,
  showCancel,
}: propTypes) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent
        className={`max-h-[85vh] w-[95%] overflow-y-auto rounded-xl bg-white sm:w-full md:rounded-lg sm:max-w-[${size || modalDialogSizes.sm}]`}
      >
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 capitalize">
            {title}
            {icon && icon}
          </DialogTitle>

          <DialogDescription hidden={!description}>{description || message}</DialogDescription>
        </DialogHeader>

        <div className="my-5">
          <p className="max-w-prose">{message}</p>
        </div>

        <DialogFooter className="mt-3 flex-row justify-end gap-2">
          {(showCancel || onCancel) && (
            <DialogClose asChild>
              <Button variant="outline" onClick={onCancel} className={cancelClassName}>
                {cancelText || "Cancel"}
              </Button>
            </DialogClose>
          )}

          {onProceed && (
            <DialogClose asChild>
              <Button variant="outline" onClick={onProceed} className={proceedClassName}>
                {proceedText || "Ok"}
              </Button>
            </DialogClose>
          )}

          {!(onProceed || onCancel) && (
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

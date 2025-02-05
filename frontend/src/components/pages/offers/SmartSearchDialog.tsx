import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search } from "lucide-react";
import SmartSearchForm from "../landing-page/SmartSearchForm";
import { modalDialogSizes } from "@/lib/constants";

export function SmartSearchDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full bg-primary-default text-white">
          Smart Search <Search />
        </Button>
      </DialogTrigger>

      <DialogContent className={`bg-white sm:max-w-[${modalDialogSizes.sm}]`}>
        <DialogHeader>
          <DialogTitle>Smart Search</DialogTitle>
          <DialogDescription>
            Search for the exact vehicle you need!
          </DialogDescription>
        </DialogHeader>

        <div className="my-5">
          <SmartSearchForm noTitle />
        </div>
      </DialogContent>
    </Dialog>
  );
}

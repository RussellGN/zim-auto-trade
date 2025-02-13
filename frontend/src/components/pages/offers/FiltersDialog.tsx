import { Button } from "@/components/ui/button";
import { iconSize } from "@/lib/constants";
import { Filter } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import Sidebar from "./Sidebar";

export default function FiltersDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" type="button">
          <Filter size={iconSize} />
        </Button>
      </DialogTrigger>

      <DialogContent className="h-[90vh] w-screen overflow-y-scroll bg-white px-0">
        <DialogHeader className="px-5">
          <DialogTitle className="flex items-center gap-2 capitalize">
            Filters <Filter size={iconSize} />
          </DialogTitle>

          <DialogDescription className="text-left">Filter the listings shown</DialogDescription>
        </DialogHeader>

        <div className="">
          <Sidebar />
        </div>
      </DialogContent>
    </Dialog>
  );
}

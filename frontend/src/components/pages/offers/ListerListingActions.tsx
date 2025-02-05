import { Button } from "@/components/ui/button";
import { ListingInterface } from "@/lib/interfaces";
import { Edit2, EyeOff, Trash2 } from "lucide-react";

type propTypes = {
  listing: ListingInterface;
};

export default function ListerListingActions({ listing }: propTypes) {
  return (
    <div className="flex items-center gap-2">
      <Button
        size="icon"
        title="edit listing"
        variant="outline"
        className="rounded-full border-slate-500"
      >
        <Edit2 size={18} />
      </Button>

      <Button
        size="icon"
        title="delist listing"
        variant="outline"
        className="rounded-full border-slate-500"
      >
        <EyeOff size={18} />
      </Button>

      <Button
        size="icon"
        title="delete listing"
        variant="outline"
        className="rounded-full border-danger-default text-danger-default"
      >
        <Trash2 size={18} />
      </Button>
    </div>
  );
}

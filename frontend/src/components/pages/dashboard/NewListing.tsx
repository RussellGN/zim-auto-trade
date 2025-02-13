import ListingModal from "@/components/general/ListingModal";
import { Button } from "@/components/ui/button";
import { iconSize } from "@/lib/constants";
import { Plus } from "lucide-react";

export default function NewListing() {
  return (
    <ListingModal
      trigger={
        <Button className="bg-primary-default text-white" title="new listing">
          <span>
            New <span className="hidden md:inline">Listing</span>
          </span>
          <Plus size={iconSize} />
        </Button>
      }
    />
  );
}

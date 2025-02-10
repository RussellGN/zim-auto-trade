import ListingModal from "@/components/general/ListingModal";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function NewListing() {
  return (
    <ListingModal
      trigger={
        <Button className="bg-primary-default text-white" title="new listing">
          New Listing
          <Plus size={18} />
        </Button>
      }
    />
  );
}

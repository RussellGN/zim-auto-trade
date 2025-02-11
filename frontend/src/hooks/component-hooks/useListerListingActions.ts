import { deleteListingAction, delistListingAction } from "@/actions";
import { ListingInterface } from "@/lib/interfaces";
import { toast } from "../general/use-toast";

export default function useListerListingActions(listing: ListingInterface) {
  function deleteListing() {
    deleteListingAction(listing.id)
      .then(() =>
        toast({
          title: "Listing Deleted Successfully",
          description: `${listing.year} ${listing.make} ${listing.model} was deleted`,
          variant: "destructive",
        })
      )
      .catch((err) =>
        toast({
          title: "Error",
          description: `${listing.year} ${listing.make} ${listing.model} could not be deleted: ${err}`,
          variant: "destructive",
        })
      );
  }

  function delistListing() {
    delistListingAction(listing.id)
      .then(() =>
        toast({
          title: "Listing Delisted Successfully",
          description: `${listing.year} ${listing.make} ${listing.model} was delisted`,
          variant: "destructive",
        })
      )
      .catch((err) =>
        toast({
          title: "Error",
          description: `${listing.year} ${listing.make} ${listing.model} could not be delisted: ${err}`,
          variant: "destructive",
        })
      );
  }

  return { delistListing, deleteListing };
}

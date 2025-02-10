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
          className: "bg-white shadow-lg",
        })
      )
      .catch((err) =>
        toast({
          title: "Error",
          description: `${listing.year} ${listing.make} ${listing.model} could not be deleted: ${err}`,
          className: "bg-white shadow-lg",
        })
      );
  }

  function delistListing() {
    delistListingAction(listing.id)
      .then(() =>
        toast({
          title: "Listing Delisted Successfully",
          description: `${listing.year} ${listing.make} ${listing.model} was delisted`,
          className: "bg-white shadow-lg",
        })
      )
      .catch((err) =>
        toast({
          title: "Error",
          description: `${listing.year} ${listing.make} ${listing.model} could not be delisted: ${err}`,
          className: "bg-white shadow-lg",
        })
      );
  }

  return { delistListing, deleteListing };
}

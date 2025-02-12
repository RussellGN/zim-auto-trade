"use client";

import CustomModal from "@/components/general/CustomModal";
import { Button } from "@/components/ui/button";
import useListerListingActions from "@/hooks/component-hooks/useListerListingActions";
import { ListingInterface } from "@/lib/interfaces";
import { Edit2, EyeOff, Trash2 } from "lucide-react";
import ListingModal from "./ListingModal";
import { iconSize } from "@/lib/constants";

type propTypes = {
  listing: ListingInterface;
  compact?: boolean;
};

export default function ListerListingActions({ listing, compact }: propTypes) {
  const { deleteListing, delistListing } = useListerListingActions(listing);

  return (
    <div className="flex items-center gap-2">
      <ListingModal
        listing={listing}
        trigger={
          <Button
            title="edit listing"
            size={compact ? "icon" : "default"}
            variant="outline"
            className={`${compact ? "rounded-full" : ""} border-slate-500`}
          >
            {!compact && "Edit"}
            <Edit2 size={iconSize} />
          </Button>
        }
      />

      <CustomModal
        title="Delist Listing"
        message={`Are you sure want to delist '${`${listing.year} ${listing.make} ${listing.model}`}'? It will no longer be visible on Zim Auto Trade, but will not be deleted and can be re-listed anytime by clicking 'Re-list'.`}
        onProceed={delistListing}
        proceedText="Delist"
        proceedClassName="bg-danger-default text-white"
        showCancel
        cancelClassName="border-black bg-secondary-default"
      >
        <Button
          title="delist listing"
          size={compact ? "icon" : "default"}
          variant="outline"
          className={`${compact ? "rounded-full" : ""} border-slate-500`}
        >
          {!compact && "Delist"}
          <EyeOff size={iconSize} />
        </Button>
      </CustomModal>

      <CustomModal
        title="Delete Listing"
        message={`Are you sure want to delete '${`${listing.year} ${listing.make} ${listing.model}`}'? This cannot be undone.`}
        onProceed={deleteListing}
        proceedText="Delete"
        proceedClassName="bg-danger-default text-white"
        showCancel
        cancelClassName="border-black bg-secondary-default"
      >
        <Button
          title="delete listing"
          size={compact ? "icon" : "default"}
          variant="outline"
          className={`${compact ? "rounded-full" : ""} border-danger-default text-danger-default`}
        >
          {!compact && "Delete"}
          <Trash2 size={iconSize} />
        </Button>
      </CustomModal>
    </div>
  );
}

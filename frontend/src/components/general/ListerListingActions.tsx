"use client";

import CustomModal from "@/components/general/CustomModal";
import { Button } from "@/components/ui/button";
import useListerListingActions from "@/hooks/component-hooks/useListerListingActions";
import { ListingInterface } from "@/lib/interfaces";
import { Edit2, EyeOff, Trash2 } from "lucide-react";

type propTypes = {
  listing: ListingInterface;
  compact?: boolean;
};

export default function ListerListingActions({ listing, compact }: propTypes) {
  const { deleteListing, delistListing } = useListerListingActions(listing);

  return (
    <div className="flex items-center gap-2">
      <Button
        title="edit listing"
        size={compact ? "icon" : "default"}
        variant="outline"
        className={`${compact ? "rounded-full" : ""} border-slate-500`}
      >
        {!compact && "Edit"}
        <Edit2 size={18} />
      </Button>

      <CustomModal
        title="Delist Listing"
        message={`Are you sure want to delist '${listing.name}'? It will no longer be visible on Zim Auto Trade, but will not be deleted and can be re-listed anytime by clicking 'Re-list'.`}
        onProceed={delistListing}
        proceedText="Delist"
        showCancel
        cancelClassName="bg-primary-default text-white"
      >
        <Button
          title="delist listing"
          size={compact ? "icon" : "default"}
          variant="outline"
          className={`${compact ? "rounded-full" : ""} border-slate-500`}
        >
          {!compact && "Delist"}
          <EyeOff size={18} />
        </Button>
      </CustomModal>

      <CustomModal
        title="Delete Listing"
        message={`Are you sure want to delete '${listing.name}'? This cannot be undone.`}
        onProceed={deleteListing}
        proceedText="Delete"
        proceedClassName="bg-danger-default text-white"
        showCancel
        cancelClassName="bg-primary-default text-white"
      >
        <Button
          title="delete listing"
          size={compact ? "icon" : "default"}
          variant="outline"
          className={`${compact ? "rounded-full" : ""} border-danger-default text-danger-default`}
        >
          {!compact && "Delete"}
          <Trash2 size={18} />
        </Button>
      </CustomModal>
    </div>
  );
}

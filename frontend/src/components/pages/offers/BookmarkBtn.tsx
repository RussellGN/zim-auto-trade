"use client";

import { checkIsBookmarkedAction, toggleBookmarkListingAction } from "@/actions";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/general/use-toast";
import { ID } from "@/lib/types";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { useEffect, useState } from "react";

export default function BookmarkBtn({ id }: { id: ID }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  function toggleBookmarkListing() {
    toggleBookmarkListingAction(id)
      .then(() => setIsBookmarked((prev) => !prev))
      .catch(() =>
        toast({
          title: "Could not toggle bookmark",
          className: "bg-white shadow-lg",
        })
      );
  }

  useEffect(() => {
    checkIsBookmarkedAction(id)
      .then((res) => setIsBookmarked(res))
      .catch(() =>
        toast({
          title: "Could not toggle bookmark",
          className: "bg-white shadow-lg",
        })
      );
  }, [id]);

  return (
    <Button
      variant="outline"
      title={isBookmarked ? "un-bookmark listing" : "bookamrk listing"}
      onClick={toggleBookmarkListing}
      className={isBookmarked ? "border-primary-default text-primary-default" : "border-slate-600"}
    >
      {isBookmarked ? (
        <>
          Bookmarked <BookmarkCheck size={18} />
        </>
      ) : (
        <>
          Bookmark <Bookmark size={18} />
        </>
      )}
    </Button>
  );
}

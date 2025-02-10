"use client";

import { checkIsBookmarkedAction, toggleBookmarkListingAction } from "@/actions";
import { Button } from "@/components/ui/button";
import { ID } from "@/lib/types";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { useEffect, useState } from "react";

export default function BookmarkBtn({ id }: { id: ID }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  function toggleBookmarkListing() {
    toggleBookmarkListingAction(id).then(() => setIsBookmarked((prev) => !prev));
  }

  useEffect(() => {
    checkIsBookmarkedAction(id).then((res) => setIsBookmarked(res));
  }, []);

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

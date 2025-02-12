"use client";

import { Button } from "@/components/ui/button";
import { iconSize } from "@/lib/constants";
import { Bookmark } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ListingTabs() {
  const params = useSearchParams();
  const currenttab = params.get("tab");

  return (
    <div className="flex items-center justify-center gap-3">
      <Button
        variant="outline"
        size="sm"
        className={
          currenttab === "saved" ? "border-black" : "border-black bg-primary-default text-white"
        }
        asChild
      >
        <Link href={{ query: { tab: "your-listings" } }}>Your Listings</Link>
      </Button>

      <Button
        variant="outline"
        size="sm"
        className={
          currenttab === "saved" ? "border-black bg-primary-default text-white" : "border-black"
        }
        asChild
      >
        <Link replace href={{ query: { tab: "saved" } }}>
          Bookmarked
          <Bookmark size={iconSize} />
        </Link>
      </Button>
    </div>
  );
}

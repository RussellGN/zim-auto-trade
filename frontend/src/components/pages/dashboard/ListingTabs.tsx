"use client";

import { Button } from "@/components/ui/button";
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
        className={currenttab === "saved" ? "border-slate-600" : "bg-slate-600 text-white"}
        asChild
      >
        <Link href={{ query: { tab: "your-listings" } }}>Your Listings</Link>
      </Button>

      <Button
        variant="outline"
        size="sm"
        className={currenttab === "saved" ? "bg-slate-600 text-white" : "border-slate-600"}
        asChild
      >
        <Link replace href={{ query: { tab: "saved" } }}>
          Bookmarked
          <Bookmark size={18} />
        </Link>
      </Button>
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  return (
    <Button
      variant="outline"
      size="icon"
      title="back to top"
      className="rounded-full border-black bg-secondary-default text-black shadow hover:bg-secondary-dark"
      onClick={() => {
        if (typeof window !== "undefined") {
          window.scrollTo({ left: 0, top: 0 });
        }
      }}
    >
      <ArrowUp />
    </Button>
  );
}

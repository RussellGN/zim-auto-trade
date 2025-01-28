"use client";

import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  return (
    <Button
      size="icon"
      title="back to top"
      className="rounded-full bg-primary-default text-white shadow hover:bg-primary-dark"
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

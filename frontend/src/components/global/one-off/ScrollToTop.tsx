"use client";

import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  return (
    <Button
      size="icon"
      title="back to top"
      className="bg-primary-default hover:bg-primary-dark rounded-full text-white shadow"
      onClick={() => window.scrollTo({ left: 0, top: 0 })}
    >
      <ArrowUp />
    </Button>
  );
}

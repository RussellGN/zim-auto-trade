"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { truncate } from "lodash";

type propTypes = {
  children: string;
  showChars?: number;
  className?: string;
};

export default function ExpandableText({ children, showChars = 20, className }: propTypes) {
  const [isExpanded, setIsExpanded] = useState(false);

  function viewNotification() {
    console.log("mark as viewed"); // TODO
    setIsExpanded((prev) => !prev);
  }

  return (
    <p className={className}>
      {isExpanded ? children : truncate(children, { length: showChars })}

      <br />
      <Button
        variant="link"
        onClick={viewNotification}
        className="flex items-center gap-1 p-0 text-primary-default"
      >
        {isExpanded ? "close" : "view"}
        <ChevronDown className={`transition-all ${isExpanded ? "rotate-180" : ""}`} />
      </Button>
    </p>
  );
}

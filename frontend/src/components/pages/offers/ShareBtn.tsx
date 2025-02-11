"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/general/use-toast";
import { iconSize } from "@/lib/constants";
import { CheckCircle, Share } from "lucide-react";
import { useState } from "react";

export default function ShareBtn({ shareLink }: { shareLink?: string }) {
  const [copied, setCopied] = useState(false);

  function copyToClipboard() {
    navigator.clipboard
      .writeText(shareLink || location.href)
      .then(() => setCopied(true))
      .catch((err) =>
        toast({
          title: "Could not copy to clipboard",
          description: `Failed to copy share link: ${err}`,
          variant: "destructive",
        })
      );
  }

  return (
    <Button
      onClick={copyToClipboard}
      variant="outline"
      title="copy to clipboard"
      className={copied ? "border-primary-default text-primary-default" : "border-slate-600"}
    >
      {copied ? (
        <>
          Copied <CheckCircle size={iconSize} />
        </>
      ) : (
        <>
          Share <Share size={iconSize} />
        </>
      )}
    </Button>
  );
}

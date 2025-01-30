import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center gap-3">
      <h2>This page does not exist</h2>
      <Button className="bg-primary-default text-white">
        Homepage <Home size={18} />
      </Button>
    </div>
  );
}

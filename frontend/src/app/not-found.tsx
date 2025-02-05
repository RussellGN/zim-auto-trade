import BackBtn from "@/components/layout/BackBtn";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="relative flex h-[80vh] flex-col items-center justify-center gap-3">
      <div className="absolute left-0 top-0 m-5">
        <BackBtn />
      </div>

      <h2>This page does not exist</h2>

      <Button asChild className="bg-primary-default text-white">
        <Link href="/">
          Homepage <Home size={18} />
        </Link>
      </Button>
    </div>
  );
}

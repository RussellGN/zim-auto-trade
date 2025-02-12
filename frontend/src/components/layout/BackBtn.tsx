"use client";

import { Undo2 } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function BackBtn() {
  const router = useRouter();
  const goBack = () => router.back();

  return (
    <Button
      onClick={goBack}
      title="go back"
      size="icon"
      variant="outline"
      className="rounded-full border-black bg-secondary-default"
    >
      <Undo2 />
    </Button>
  );
}

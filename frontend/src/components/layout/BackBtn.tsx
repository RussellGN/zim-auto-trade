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
      className="rounded-full bg-primary-default text-white"
    >
      <Undo2 />
    </Button>
  );
}

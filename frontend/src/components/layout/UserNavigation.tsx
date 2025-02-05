import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { sampleLister } from "@/lib/constants";
import Link from "next/link";
import React from "react";

export default function UserNavigation() {
  return (
    <Link
      href={`/dashboard`}
      className="group flex items-center gap-3 font-semibold text-primary-default transition-all hover:text-primary-light"
    >
      <span className="hidden sm:inline">{sampleLister.name}</span>
      <Avatar className="border-4 border-primary-default bg-primary-light transition-all group-hover:border-primary-light">
        <AvatarImage src={sampleLister.image} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </Link>
  );
}

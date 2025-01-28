import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import React from "react";

export default function UserNavigation() {
  const user = {
    name: "Russell Gundani",
    slug: "russell-gundani-1",
    image: "https://github.com/shadcn.png",
  };

  return (
    <Link
      href={`/dashboard/${user.slug}`}
      className="text-primary-default hover:text-primary-light group flex items-center gap-3 font-semibold transition-all"
    >
      <span className="hidden sm:inline">{user.name}</span>
      <Avatar className="bg-primary-light border-primary-default group-hover:border-primary-light border-4 transition-all">
        <AvatarImage src={user.image} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </Link>
  );
}

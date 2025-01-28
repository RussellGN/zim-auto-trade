"use client";

import { navLinks } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNavigation from "./MobileNavigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <>
      <nav className="order-1 flex items-center gap-3 sm:order-2 md:hidden">
        <MobileNavigation pathname={pathname} />
      </nav>

      <nav className="order-1 hidden items-center gap-3 sm:order-2 md:flex">
        {navLinks.map((navLink) => (
          <Link
            key={navLink.href}
            className={`border-b font-semibold capitalize text-primary-default transition-all hover:text-primary-light ${
              pathname === navLink.href
                ? "border-primary-default hover:border-primary-light"
                : "border-transparent"
            }`}
            href={navLink.href}
          >
            {navLink.label}
          </Link>
        ))}
      </nav>
    </>
  );
}

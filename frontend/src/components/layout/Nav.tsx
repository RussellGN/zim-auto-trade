"use client";

import { navLinks } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNavigation from "./MobileNavigation";
import useIsMobile from "@/hooks/useIsMobile";

export default function Nav() {
  const pathname = usePathname();
  const isMobile = useIsMobile();

  return (
    <nav className="order-1 flex items-center gap-3 sm:order-2">
      {isMobile ? (
        <MobileNavigation pathname={pathname} />
      ) : (
        navLinks.map((navLink) => (
          <Link
            key={navLink.href}
            className={`text-primary-default hover:text-primary-light border-b font-semibold capitalize transition-all ${
              pathname === navLink.href
                ? "border-primary-default hover:border-primary-light"
                : "border-transparent"
            }`}
            href={navLink.href}
          >
            {navLink.label}
          </Link>
        ))
      )}
    </nav>
  );
}

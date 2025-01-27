import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { navLinks } from "@/lib/constants";
import { Menu } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";

export default function MobileNavigation({ pathname }: { pathname: string }) {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild className="md:hidden">
        <Button size="icon" className="border shadow">
          <Menu />
        </Button>
      </DrawerTrigger>

      <DrawerContent className="border-primary-default h-full w-3/4 rounded-none rounded-ee-lg rounded-se-lg bg-white">
        <DrawerHeader className="flex flex-col-reverse">
          <Logo />
          <DrawerTitle className="p-5">Navigation Menu</DrawerTitle>
        </DrawerHeader>

        <div className="flex flex-col gap-3 p-5">
          {navLinks.map((navLink) => (
            <Link
              key={navLink.href}
              className={`text-primary-default hover:text-primary-light w-fit border-b font-semibold capitalize transition-all ${
                pathname === navLink.href
                  ? "border-primary-default hover:border-primary-light"
                  : "border-transparent"
              }`}
              href={navLink.href}
            >
              {navLink.label}
            </Link>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
}

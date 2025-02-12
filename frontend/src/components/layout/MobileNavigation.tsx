import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
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

      <DrawerContent className="h-full w-3/4 rounded-none rounded-ee-lg rounded-se-lg border-primary-default bg-white">
        <DrawerHeader className="flex flex-col">
          <div className="px-4">
            <DrawerClose asChild>
              <Logo />
            </DrawerClose>
          </div>
          <DrawerTitle className="p-5">Navigation Menu</DrawerTitle>
        </DrawerHeader>

        <div className="flex flex-col gap-3 p-5">
          {navLinks.map((navLink) => (
            <DrawerClose key={navLink.href} asChild>
              <Link
                className={`w-fit border-b font-semibold capitalize text-primary-default transition-all hover:text-primary-light ${
                  pathname === navLink.href
                    ? "border-primary-default hover:border-primary-light"
                    : "border-transparent"
                }`}
                href={navLink.href}
              >
                {navLink.label}
              </Link>
            </DrawerClose>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
}

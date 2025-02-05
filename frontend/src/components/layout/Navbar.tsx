import Nav from "./Nav";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import UserNavigation from "./UserNavigation";
import Logo from "./Logo";

export default function Navbar() {
  const isAuthenticated = true;

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-primary-default bg-white px-3 py-2 shadow-lg">
      <div className="mx-auto flex max-w-screen-xl justify-between">
        <Logo />

        <Nav />

        <div className="order-3 flex items-center gap-3">
          {isAuthenticated ? (
            <UserNavigation />
          ) : (
            <>
              <Button className="bg-primary-default text-white" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button
                className="hidden bg-primary-light text-white sm:inline"
                asChild
              >
                <Link href="/signup">Signup</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

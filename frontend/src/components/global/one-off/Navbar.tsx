import Nav from "./Nav";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import UserNavigation from "./UserNavigation";
import Logo from "./Logo";

export default function Navbar() {
  const isAuthenticated = false;

  return (
    <header className="m-2 rounded-md border bg-white px-3 py-2 shadow-md sm:m-3">
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
                className="bg-primary-light hidden text-white sm:inline-block"
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

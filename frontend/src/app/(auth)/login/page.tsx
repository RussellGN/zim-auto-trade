import AuthProviders from "@/components/pages/auth/AuthProviders";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { iconSize } from "@/lib/constants";
import { Label } from "@radix-ui/react-label";
import { Lock, UserCircle } from "lucide-react";
import Link from "next/link";

export default function page() {
  return (
    <form>
      <h2 className="mb-8 text-center text-2xl font-semibold">Login</h2>

      <div className="mb-5 md:mb-4">
        <Label className="flex items-center gap-2 md:mb-2 md:ps-3" htmlFor="email">
          <UserCircle size={iconSize} /> Email
        </Label>
        <Input
          className="w-full border-0 border-b-2"
          name="email"
          type="email"
          placeholder="example@example.com"
          required
        />
      </div>

      <div className="mb-5 md:mb-4">
        <Label className="flex items-center gap-2 md:mb-2 md:ps-3" htmlFor="email">
          <Lock size={iconSize} /> Password
        </Label>
        <Input
          className="w-full border-0 border-b-2"
          name="password"
          minLength={8}
          maxLength={30}
          type="password"
          placeholder="your password"
          required
        />
      </div>

      <div className="mb-4 flex justify-between px-4">
        <Link href="/signup" className="text-right text-sm text-primary-default underline">
          Signup
        </Link>

        <Link href="/forgot-password" className="text-right text-sm text-primary-default underline">
          Forgot password?
        </Link>
      </div>

      <div className="mb-8 flex justify-end">
        <Button type="submit" className="w-full bg-primary-default text-white">
          Login
        </Button>
      </div>

      <div>
        <p className="mb-5 text-center text-sm text-gray-700">Or login with</p>

        <div className="flex items-center justify-center gap-4">
          <AuthProviders />
        </div>
      </div>
    </form>
  );
}

import AuthProviders from "@/components/pages/auth/AuthProviders";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Lock, UserCircle } from "lucide-react";
import Link from "next/link";

export default function page() {
  return (
    <form>
      <h2 className="mb-8 text-center text-2xl font-semibold">Signup</h2>

      <div className="mb-4">
        <Label className="mb-2 flex items-center gap-2 ps-3" htmlFor="email">
          <UserCircle size={18} /> Your Email
        </Label>
        <Input
          className="w-full border-0 border-b-2"
          name="email"
          type="email"
          placeholder="example@example.com"
          required
        />
      </div>

      <div className="mb-4">
        <Label className="mb-2 flex items-center gap-2 ps-3" htmlFor="email">
          <Lock size={18} />
          Enter a Strong Password
        </Label>
        <Input
          className="w-full border-0 border-b-2"
          name="password"
          minLength={8}
          maxLength={30}
          type="password"
          placeholder="8+ characters (numbers & letters), no spaces"
          required
        />
      </div>

      <div className="mb-4 px-4">
        <Link href="/login" className="text-right text-sm text-primary-default underline">
          Login
        </Link>
      </div>

      <div className="mb-8 flex justify-end">
        <Button type="submit" className="w-full bg-primary-default text-white">
          Proceed
        </Button>
      </div>

      <div>
        <p className="mb-5 text-center text-sm text-gray-700">Or signup with</p>

        <div className="flex items-center justify-center gap-4">
          <AuthProviders />
        </div>
      </div>
    </form>
  );
}

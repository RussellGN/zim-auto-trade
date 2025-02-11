"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { iconSize } from "@/lib/constants";
import { Lock, LockKeyholeOpen } from "lucide-react";

export default function AccountSettings() {
  return (
    <div>
      <ol className="flex flex-1 flex-col gap-10 pb-10">
        <li>
          <div>
            <h3 className="mb-4 font-semibold">Change password</h3>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4 flex items-center justify-start gap-4">
                <LockKeyholeOpen size={iconSize} />

                <Input
                  className="max-w-[400px] border-0 border-b-2"
                  name="current_password"
                  minLength={8}
                  maxLength={30}
                  type="password"
                  placeholder="Enter your current password"
                  required
                />
              </div>

              <div className="mb-4 flex items-center justify-start gap-4">
                <Lock size={iconSize} />

                <Input
                  className="max-w-[400px] border-0 border-b-2"
                  name="new_password"
                  minLength={8}
                  maxLength={30}
                  type="password"
                  placeholder="Enter your new password"
                  required
                />
              </div>

              <div>
                <Button
                  size="sm"
                  type="submit"
                  variant="outline"
                  className="border-primary-default text-primary-default"
                >
                  Confirm New Password
                </Button>
              </div>
            </form>
          </div>
        </li>

        <hr />

        <li>
          <div>
            <h3 className="mb-3 font-semibold">Deactivate or delete your account.</h3>
            <p className="mb-4 max-w-prose">
              Deactivating your account will temporarily remove your offers and profile from view on
              the platform, but nothing will be deleted. Your account will be reactivated when you
              log in again.
            </p>

            <div>
              <Button
                size="sm"
                variant="outline"
                className="mr-4 border-danger-default text-danger-default"
              >
                Deactivate Account
              </Button>

              <Button size="sm" className="bg-danger-default text-white">
                Delete Account
              </Button>
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
}

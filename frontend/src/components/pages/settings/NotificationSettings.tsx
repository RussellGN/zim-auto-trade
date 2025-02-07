"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

export default function NotificationSettings() {
  return (
    <div>
      <ol>
        <li>
          <div>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="flex items-center gap-3">
                <Input className="w-fit" defaultChecked name="email" type="checkbox" />
                <Label className="text-nowrap" htmlFor="email">
                  Receive Email Notifications
                </Label>
              </div>

              <div className="mb-4 flex items-center gap-3">
                <Input className="w-fit" defaultChecked name="marketing" type="checkbox" />
                <Label className="text-nowrap" htmlFor="marketing">
                  Receive Marketing Email Updates
                </Label>
              </div>

              <div>
                <Button
                  size="sm"
                  type="submit"
                  variant="outline"
                  className="border-primary-default text-primary-default"
                >
                  Confirm Settings
                </Button>
              </div>
            </form>
          </div>
        </li>
      </ol>
    </div>
  );
}

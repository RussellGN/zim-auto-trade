"use client";

import { logoutAction } from "@/actions";
import CustomModal from "@/components/general/CustomModal";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/general/use-toast";
import { iconSize } from "@/lib/constants";
import { LogOut } from "lucide-react";

export default function LogoutBtn() {
  function logout() {
    logoutAction().catch(() =>
      toast({
        title: "Error logging out",
        variant: "destructive",
      })
    );
  }
  return (
    <CustomModal
      title="Logout"
      message="Are you sure you want to logout"
      icon={<LogOut size={iconSize} />}
      onProceed={logout}
      onCancel={() => {}}
      proceedText="Logout"
      cancelClassName="border-black bg-secondary-default"
      proceedClassName="border-black"
    >
      <Button className="border-black bg-secondary-default" variant="outline">
        <span className="hidden md:inline">Logout</span>
        <LogOut size={iconSize} />
      </Button>
    </CustomModal>
  );
}

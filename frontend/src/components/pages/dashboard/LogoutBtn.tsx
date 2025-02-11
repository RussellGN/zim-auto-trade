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
      cancelClassName="bg-primary-default text-white"
      proceedClassName="border-primary-default text-primary-default"
    >
      <Button className="border-slate-700 bg-white" variant="outline">
        Logout
        <LogOut size={iconSize} />
      </Button>
    </CustomModal>
  );
}

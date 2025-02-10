"use client";

import { logoutAction } from "@/actions";
import CustomModal from "@/components/general/CustomModal";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export default function LogoutBtn() {
  return (
    <CustomModal
      title="Logout"
      message="Are you sure you want to logout"
      icon={<LogOut size={18} />}
      onProceed={logoutAction}
      onCancel={() => {}}
      proceedText="Logout"
      cancelClassName="bg-primary-default text-white"
      proceedClassName="border-primary-default text-primary-default"
    >
      <Button className="border-slate-700 bg-white" variant="outline">
        Logout
        <LogOut size={18} />
      </Button>
    </CustomModal>
  );
}

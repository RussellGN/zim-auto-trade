import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import SmartSearchForm from "../landing-page/SmartSearchForm";
import { modalDialogSizes } from "@/lib/constants";
import ContentModal from "@/components/general/ContentModal";

export function SmartSearchDialog() {
  return (
    <ContentModal
      trigger={
        <Button className="w-full bg-primary-default text-white">
          Smart Search <Search />
        </Button>
      }
      title="Smart Search"
      description="Search for the exact vehicle you need!"
      size={modalDialogSizes.sm}
    >
      <SmartSearchForm noTitle />
    </ContentModal>
  );
}

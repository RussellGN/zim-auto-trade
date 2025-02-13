import { Button } from "@/components/ui/button";
import { iconSize } from "@/lib/constants";
import { Filter } from "lucide-react";
import Sidebar from "./Sidebar";
import ContentModal from "@/components/general/ContentModal";

export default function FiltersDialog() {
  return (
    <ContentModal
      trigger={
        <Button size="icon" type="button">
          <Filter size={iconSize} />
        </Button>
      }
      title="Filters"
      description="Filter the listings shown"
      icon={<Filter size={iconSize} />}
    >
      <Sidebar />
    </ContentModal>
  );
}

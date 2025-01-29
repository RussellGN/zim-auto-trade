import { Button } from "@/components/ui/button";
import { filters } from "@/lib/constants";
import Filter from "./Filter";
import { SmartSearchDialog } from "./SmartSearchDialog";

export default function Sidebar() {
  return (
    <aside className="sticky top-0 h-[75vh] overflow-y-auto px-5 py-10">
      <div className="mb-10 flex items-center justify-between gap-5">
        <h2 className="px-5 text-xl font-bold"> Filters</h2>
        <Button
          variant="outline"
          size="sm"
          className="border-danger-dark bg-white text-danger-dark hover:border-danger-default hover:text-danger-default"
        >
          Reset
        </Button>
      </div>

      <div className="flex flex-1 flex-col gap-4">
        <SmartSearchDialog />

        {filters.map((filter) => (
          <Filter filter={filter} key={filter.name} />
        ))}
      </div>
    </aside>
  );
}

import { Button } from "@/components/ui/button";
import { filters } from "@/lib/constants";
import Filter from "./Filter";
import { SmartSearchDialog } from "./SmartSearchDialog";

export default function Sidebar() {
  return (
    <aside className="top-0 px-5 md:sticky md:h-[85vh] md:overflow-y-auto md:border-b-8 md:py-10">
      <div className="mb-5 flex items-center justify-between gap-5 md:mb-10">
        <h2 className="hidden px-5 text-xl font-bold md:block"> Filters</h2>
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

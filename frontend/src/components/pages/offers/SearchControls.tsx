import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { iconSize, sortOptions } from "@/lib/constants";
import { ArrowUpNarrowWide } from "lucide-react";
import FiltersDialog from "./FiltersDialog";

export default function SearchControls() {
  return (
    <div className="py-5 md:p-10">
      <form className="border-3 flex items-center rounded-xl bg-white shadow-md md:rounded-3xl">
        <div className="md:hidden">
          <FiltersDialog />
        </div>

        <Input
          name="q"
          placeholder="Search..."
          max={30}
          type="search"
          className="flex-grow rounded-none transition-all focus-visible:border-primary-default focus-visible:ring-0 md:rounded-e-none md:rounded-s-3xl md:p-6"
        />

        <Select name="sort">
          <SelectTrigger className="w-[180px] rounded-e-3xl rounded-s-none border-none transition-all focus:ring-0">
            <SelectValue
              placeholder={
                <div className="flex items-center gap-2">
                  <span>
                    Sort <span className="hidden md:inline">By</span>
                  </span>
                  <ArrowUpNarrowWide size={iconSize} />
                </div>
              }
            />
          </SelectTrigger>

          <SelectContent className="mt-3 rounded-2xl bg-white">
            {sortOptions.map((option) => (
              <SelectItem key={option} value={option} className="capitalize">
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </form>
    </div>
  );
}

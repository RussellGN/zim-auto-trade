import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sortOptions } from "@/lib/constants";

export default function SearchControls() {
  return (
    <div className="p-5 md:p-10">
      <form className="border-3 flex items-center rounded-3xl bg-white shadow-md">
        <Input
          name="q"
          placeholder="Search..."
          max={30}
          type="search"
          className="flex-grow rounded-e-none rounded-s-3xl p-6 transition-all focus-visible:border-primary-default focus-visible:ring-0"
        />

        <Select name="sort">
          <SelectTrigger className="w-[180px] rounded-e-3xl rounded-s-none border-none transition-all focus:ring-0">
            <SelectValue placeholder="Sort By" />
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

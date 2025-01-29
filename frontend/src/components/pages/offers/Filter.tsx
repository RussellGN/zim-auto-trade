"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useFilter from "@/hooks/component-hooks/useFilter";
import { ListingFilter } from "@/lib/types";

export default function Filter({ filter }: { filter: ListingFilter }) {
  const { values, expandable, isExpanded, toggleIsExpanded } =
    useFilter(filter);

  return (
    <div className="rounded-xl border bg-white p-5 shadow-lg">
      <h3 className="flex items-center justify-between gap-3 font-semibold capitalize">
        {filter.name}

        <span className="text-primary-dark">{filter.icon}</span>
      </h3>

      <div className="mt-3 max-h-[18rem] overflow-y-auto">
        {filter.type === "radio" && (
          <label className="flex items-center justify-start gap-3">
            <Input
              className="w-fit"
              type={filter.type}
              name={filter.name}
              value="All"
            />
            <span>All</span>
          </label>
        )}

        {values.map((val) => (
          <label key={val} className="flex items-center justify-start gap-3">
            <Input
              className="w-fit"
              type={filter.type}
              name={filter.name}
              value={val}
            />
            <span>{val}</span>
          </label>
        ))}
      </div>

      {expandable && (
        <Button
          onClick={toggleIsExpanded}
          size="sm"
          className="text-primary-default"
        >
          {isExpanded ? "less -" : "more +"}
        </Button>
      )}
    </div>
  );
}

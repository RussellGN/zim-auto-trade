import { ListingFilter } from "@/lib/types";
import { useState } from "react";

export default function useFilter(filter: ListingFilter) {
  const [isExpanded, setIsExpanded] = useState(false);
  const expandable = filter.values.length > 4;
  const values = expandable
    ? isExpanded
      ? filter.values
      : filter.values.slice(0, 4)
    : filter.values;

  const toggleIsExpanded = () => setIsExpanded((prev) => !prev);

  return { values, expandable, isExpanded, toggleIsExpanded };
}

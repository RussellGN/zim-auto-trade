import { clsx, type ClassValue } from "clsx";
import { replace } from "lodash";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatLongNumber(num: number) {
  const formatted = replace(num.toLocaleString("en-US"), /,/g, " ");
  return formatted;
}

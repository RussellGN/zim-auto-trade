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

export function friendlyDate(date: string | Date, format?: "second" | "third") {
  date = new Date(date);
  switch (format) {
    case "second":
      return Intl.DateTimeFormat("en-GB", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }).format(date);
    case "third":
      return Intl.DateTimeFormat("en-GB", {
        month: "numeric",
        day: "2-digit",
        year: "2-digit",
      }).format(date);
    default:
      return Intl.DateTimeFormat("en-GB", {
        month: "short",
        day: "2-digit",
        year: "2-digit",
      }).format(date);
  }
}

export function getTimeElapsedSince(date: Date | string): string {
  const currentDate = new Date();
  const startDate = typeof date === "string" ? new Date(date) : date;

  const elapsedMilliseconds = currentDate.getTime() - startDate.getTime();

  if (elapsedMilliseconds < 1) return "now";

  const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
  const elapsedMinutes = Math.floor(elapsedSeconds / 60);
  const elapsedHours = Math.floor(elapsedMinutes / 60);
  const elapsedDays = Math.floor(elapsedHours / 24);
  const elapsedWeeks = Math.floor(elapsedDays / 7);
  const elapsedMonths = Math.floor(elapsedDays / 30);
  const elapsedYears = Math.floor(elapsedDays / 365);

  if (elapsedYears > 0) {
    return `${elapsedYears} y`;
  } else if (elapsedMonths > 0) {
    return `${elapsedMonths} m`;
  } else if (elapsedWeeks > 0) {
    return `${elapsedWeeks} w`;
  } else if (elapsedDays > 0) {
    return `${elapsedDays} d`;
  } else if (elapsedHours > 0) {
    return `${elapsedHours} hr`;
  } else {
    return `${elapsedMinutes} min`;
  }
}

export function wait(seconds: number) {
  return new Promise((resolve) => setTimeout(resolve, seconds));
}

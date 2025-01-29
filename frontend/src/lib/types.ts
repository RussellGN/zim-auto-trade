import { ReactNode } from "react";

export type ListingFilter = {
  name: string;
  type: "checkbox" | "radio";
  values: string[];
  icon: ReactNode;
};

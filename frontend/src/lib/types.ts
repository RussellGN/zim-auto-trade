import { ReactNode } from "react";

export type ListingFilter = {
  name: string;
  type: "checkbox" | "radio";
  values: string[];
  icon: ReactNode;
};

export type VehicleListingCategory = {
  name: string;
  icon: ReactNode;
};

import { StaticImageData } from "next/image";
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

export type ImageSrc = string | StaticImageData;

export type AccountType =
  | "agent"
  | "dealership"
  | "individual"
  | "company"
  | "other";

export type NotificationType =
  | "new_lead"
  | "price_update"
  | "trade_offer"
  | "message"
  | "system";

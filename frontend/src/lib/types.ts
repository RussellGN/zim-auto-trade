import { LucideIcon } from "lucide-react";
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

export type AccountType = "agent" | "dealership" | "individual" | "company" | "other";

export type NotificationType = "new_lead" | "price_update" | "trade_offer" | "message" | "system";

export type CustomImageProps = {
  src: ImageSrc;
  alt?: string;
};

export type modalDialogSize = "425px" | "700px" | "1000px";

export type ID = number | string;

export type Result<T = undefined> = { successfull: boolean; message?: string; data?: T };

export type SocialMediaProfile = {
  platform: "Facebook" | "X" | "Instagram" | "LinkedIn" | "YouTube" | "WhatsApp";
  url: string;
};

export type ListingCategory = {
  queryValue: string;
  name: string;
  count: number;
  image: string;
  icon: LucideIcon;
};

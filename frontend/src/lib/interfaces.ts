import { StaticImageData } from "next/image";
import { VehicleListingCategory } from "./types";

export interface ListerInterface {
  name: string;
  slug: string;
  description: string;
  location: string;
}

export interface ListingInterface {
  images: (StaticImageData | string)[];
  name: string;
  slug: string;
  category: VehicleListingCategory;
  description: string;
  date: string;
  price: number;
  mileage: number;
  location: string;
  viewCount: number;
  lister: ListerInterface;
}

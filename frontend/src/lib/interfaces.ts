import { ImageSrc, VehicleListingCategory } from "./types";

export interface ListerInterface {
  name: string;
  slug: string;
  description: string;
  location: string;
}

export interface ListingInterface {
  images: ImageSrc[];
  coverImage: ImageSrc;
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

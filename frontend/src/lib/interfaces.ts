import { ImageSrc } from "./types";

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
  category: string;
  description: string;
  date: string;
  price: number;
  features: string[];
  mileage: number;
  location: string;
  viewCount: number;
  lister: ListerInterface;
}

import { AccountType, ImageSrc, NotificationType } from "./types";

export interface ListerInterface {
  type: AccountType;
  name: string;
  slug: string;
  description: string;
  location: string;
  image?: string;
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

export interface NotificationInterface {
  id: string;
  type: NotificationType;
  title: string;
  body: string;
  timestamp: string;
  read: boolean;
  relatedCarSlug?: string;
  senderId?: string;
}

import { AccountType, ID, ImageSrc, NotificationType, SocialMediaProfile } from "./types";

export interface ListerInterface {
  type: AccountType;
  name: string;
  slug: string;
  description: string;
  location: string;
  image?: string;
  email: string;
  phoneNumbers: string[];
  socials?: SocialMediaProfile[];
  website?: string;
}

export interface ListingInterface {
  id: ID;
  images: ImageSrc[];
  coverImage: ImageSrc;
  make: string;
  model: string;
  year: number;
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
  id: ID;
  type: NotificationType;
  title: string;
  body: string;
  timestamp: string;
  read: boolean;
  relatedCarSlug?: string;
  senderId?: string;
}

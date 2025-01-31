import allPossibleVehicleFeatures from "@/sample-data/vehicleFeatures.json";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
import { Potta_One } from "next/font/google";
import { VehicleListingCategory, ListingFilter } from "./types";
import {
  Bike,
  CalendarArrowUp,
  Car,
  Caravan,
  MapPin,
  Tractor,
  Truck,
} from "lucide-react";

export const navLinks = [
  {
    label: "home",
    href: "/",
  },
  {
    label: "offers",
    href: "/offers",
  },
  {
    label: "about",
    href: "/about",
  },
];

export const twConfig = resolveConfig(tailwindConfig);

export const heroHeaderFont = Potta_One({
  subsets: ["latin"],
  weight: "400",
});

export const filters: ListingFilter[] = [
  {
    name: "location",
    type: "checkbox",
    values: [
      "Harare",
      "Bulawayo",
      "Chitungwiza",
      "Mutare",
      "Gweru",
      "Kwekwe",
      "Kadoma",
      "Masvingo",
      "Chinhoyi",
      "Marondera",
      "Bindura",
      "Zvishavane",
      "Victoria Falls",
      "Hwange",
      "Beitbridge",
      "Norton",
      "Chegutu",
      "Redcliff",
      "Rusape",
      "Karoi",
      "Gokwe",
      "Shurugwi",
      "Chipinge",
      "Kariba",
    ],
    icon: <MapPin />,
  },
  {
    name: "upload date",
    type: "radio",
    values: ["this week", "this month", "this year"],
    icon: <CalendarArrowUp />,
  },
];

export const sortOptions = [
  "relevance",
  "date asc",
  "date desc",
  "price asc",
  "price desc",
  "mileage asc",
  "mileage desc",
];

export const categories: VehicleListingCategory[] = [
  {
    name: "car",
    icon: <Car />,
  },
  {
    name: "truck",
    icon: <Truck />,
  },
  {
    name: "motorbike",
    icon: <Bike />,
  },
  {
    name: "earth-mover",
    icon: <Tractor />,
  },
  {
    name: "other",
    icon: <Caravan />,
  },
];

export const placeholderImage = "/graphics/placeholderImage.jpeg";

export const vehicleFeatures = allPossibleVehicleFeatures;

export const authProviders = [
  {
    name: "google",
    logo: "google.svg",
    action: () => {},
  },
  {
    name: "apple",
    logo: "apple.svg",
    action: () => {},
  },
  {
    name: "facebook",
    logo: "facebook.svg",
    action: () => {},
  },
];

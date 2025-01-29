import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
import { Potta_One } from "next/font/google";
import { ListingFilter } from "./types";
import { CalendarArrowUp, MapPin } from "lucide-react";

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

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
import { Potta_One } from "next/font/google";
import { VehicleListingCategory, ListingFilter, AccountType } from "./types";
import {
  Bike,
  CalendarArrowUp,
  Car,
  Caravan,
  MapPin,
  Tractor,
  Truck,
} from "lucide-react";
import { ListerInterface } from "./interfaces";

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

export const vehicleFeatures = [
  "sunroof",
  "backup wheel",
  "spray free",
  "alloy wheels",
  "fog lights",
  "LED headlights",
  "roof rack",
  "tinted windows",
  "side steps",
  "bull bar",
  "winch",
  "rear spoiler",
  "mud flaps",
  "tow bar",
  "hardtop canopy",
  "soft tonneau cover",
  "snorkel",
  "lifted suspension",
  "off-road tires",
  "rear parking sensors",
  "front skid plate",
  "leather interior",
  "heated seats",
  "cooled seats",
  "power-adjustable seats",
  "lumbar support",
  "foldable rear seats",
  "ambient lighting",
  "wood trim",
  "digital instrument cluster",
  "push-start ignition",
  "multi-zone climate control",
  "rear AC vents",
  "panoramic sunroof",
  "heads-up display",
  "ABS",
  "airbags",
  "lane departure warning",
  "blind spot monitoring",
  "adaptive cruise control",
  "collision warning",
  "rear cross-traffic alert",
  "electronic stability control",
  "traction control",
  "hill start assist",
  "roll-over protection",
  "brake assist",
  "reverse camera",
  "360-degree camera",
  "turbocharged engine",
  "hybrid engine",
  "electric drivetrain",
  "4WD",
  "AWD",
  "locking differentials",
  "adaptive suspension",
  "high ground clearance",
  "manual transmission",
  "automatic transmission",
  "CVT",
  "power steering",
  "exhaust brake",
  "touchscreen infotainment system",
  "Apple CarPlay",
  "Android Auto",
];

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

export const sampleLister: ListerInterface = {
  name: "Russell Gundani",
  type: "agent",
  slug: "russell-gundani-1",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut debitis deserunt maxime ipsam, architecto cupiditate at aperiam sit voluptates a.",
  location: "Harare",
  image:
    "https://www.autodeal.com.ph/custom/blog-post/header/how-to-tell-if-youre-dealing-with-a-good-sales-agent-60dd890b1664d.jpg",
};

export const modalDialogSizes = {
  sm: "425px",
  md: "700px",
  lg: "1000px",
};

export const listerOptions: AccountType[] = [
  "agent",
  "dealership",
  "individual",
  "company",
  "other",
];

export const requiredImageInputs = 5;

export const placeholderImg16x9 = "/graphics/placeholderImg16x9.png";

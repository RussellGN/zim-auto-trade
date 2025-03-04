import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
import { Potta_One } from "next/font/google";
import {
  VehicleListingCategory,
  ListingFilter,
  AccountType,
  modalDialogSize,
  ListingCategory,
} from "./types";
import {
  Bell,
  Bike,
  CalendarArrowUp,
  Car,
  Caravan,
  MapPin,
  Tractor,
  Truck,
  UserCircle,
} from "lucide-react";
import { ListerInterface } from "./interfaces";
import AccountSettings from "@/components/pages/settings/AccountSettings";
import NotificationSettings from "@/components/pages/settings/NotificationSettings";
import { ReactNode } from "react";

export const iconSize = 18;

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
  email: "rgund@gmail.com",
  phoneNumbers: ["+263 7655 4453", "+263 7615 4004"],
};

export const modalDialogSizes = {
  sm: "425px" as modalDialogSize,
  md: "700px" as modalDialogSize,
  lg: "1000px" as modalDialogSize,
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

export const settings: {
  title: string;
  description: string;
  content: ReactNode;
  icon: ReactNode;
}[] = [
  {
    title: "Account",
    description: "Manage your account",
    content: <AccountSettings />,
    icon: <UserCircle size={iconSize} />,
  },
  {
    title: "Notifications",
    description: "Manage how you receive notifications",
    content: <NotificationSettings />,
    icon: <Bell size={iconSize} />,
  },
];

export const violationOptions = [
  { value: "fraud", label: "Fraudulent or Scam" },
  { value: "incorrect_info", label: "Incorrect Information" },
  { value: "sold", label: "Already Sold" },
  { value: "duplicate", label: "Duplicate Listing" },
  { value: "spam", label: "Spam or Irrelevant" },
  { value: "offensive", label: "Offensive or Inappropriate Content" },
  { value: "other", label: "Other (explain below)" },
];

export const heroListingCategories: ListingCategory[] = [
  {
    queryValue: "car",
    name: "Family Cars",
    icon: Car,
    count: 42500,
    image: "/vehicles/family-cars.avif",
  },
  {
    queryValue: "truck",
    name: "Work Vehicles",
    icon: Truck,
    count: 2150,
    image: "/vehicles/work-vehicles-1.jpg",
  },
  {
    queryValue: "motorbike",
    name: "Motorbikes",
    icon: Bike,
    count: 800,
    image: "/vehicles/motorbikes.jpg",
  },
];

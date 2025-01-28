import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
import { Potta_One } from "next/font/google";

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

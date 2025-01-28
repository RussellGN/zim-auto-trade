import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

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

import { twConfig } from "@/lib/constants";
import { useEffect, useState } from "react";

export default function useIsMobile() {
  const MOBILE_WIDTH = Number(twConfig.theme.screens.sm.replace("px", ""));
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const resizeFunc = () => setIsMobile(window.innerWidth < MOBILE_WIDTH);
    window.addEventListener("resize", resizeFunc);
    return () => window.removeEventListener("resize", resizeFunc);
  }, [MOBILE_WIDTH]);

  return isMobile;
}

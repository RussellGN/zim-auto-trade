import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logos/4.svg"
      alt="zim auto trade logo"
      width={200}
      height={100}
      className="order-2 w-[150px] sm:order-1"
    />
  );
}

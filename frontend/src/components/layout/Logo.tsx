import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo.svg"
      alt="zim auto trade logo"
      width={200}
      height={100}
      className="w-2rem order-2 w-[150px] sm:order-1 md:w-[200px]"
    />
  );
}

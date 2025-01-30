import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="order-2 inline-block w-[150px] sm:order-1">
      <Image
        src="/logos/4.svg"
        alt="zim auto trade logo"
        width={200}
        height={100}
        className="w-full"
      />
    </Link>
  );
}

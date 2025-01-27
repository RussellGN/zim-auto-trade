import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-1 flex-col items-center justify-center gap-16 p-8">
      <main className="flex flex-grow flex-col items-center justify-center gap-5">
        <Image
          src="/logo.svg"
          alt="Zim Auto Trade logo"
          width={480}
          height={38}
          priority
        />
        <p className="text-gray-700">Coming Soon</p>
      </main>

      <footer>
        <p className="text-gray-700">&copy; All Rights Reserved</p>
      </footer>
    </div>
  );
}

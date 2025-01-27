import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/global/one-off/Navbar";
import Footer from "@/components/global/one-off/Footer";

export const metadata: Metadata = {
  title: "Zim Auto Trade",
  description:
    "Zim Auto Trade is a marketplace connecting buyers and sellers of vehicles nation-wide. Browse new and used cars, trucks etc, with detailed listings, price comparisons, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="mx-auto max-w-screen-xl">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
      <body className="flex min-h-[100.1vh] flex-col bg-[whitesmoke]">
        <div className="w-full">
          <Navbar />
        </div>

        <main className="mt-[3.8rem] w-full flex-grow">{children}</main>

        <div className="w-full">
          <Footer />
        </div>
      </body>
    </html>
  );
}

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-[100.1vh] flex-col bg-[whitesmoke]">
      <div className="w-full">
        <Navbar />
      </div>

      <main className="mt-[3.8rem] w-full flex-grow">{children}</main>

      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

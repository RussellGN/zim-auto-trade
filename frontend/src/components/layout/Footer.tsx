import ScrollToTop from "./ScrollToTop";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between p-5">
        <p className="">&copy; All Rights Reserved</p>

        <ScrollToTop />
      </div>
    </footer>
  );
}

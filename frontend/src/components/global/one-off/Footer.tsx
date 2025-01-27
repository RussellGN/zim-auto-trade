import ScrollToTop from "./ScrollToTop";

export default function Footer() {
  return (
    <footer className="bg-primary-light p-2 py-3 sm:p-5">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between">
        <p className="">&copy; All Rights Reserved</p>

        <ScrollToTop />
      </div>
    </footer>
  );
}

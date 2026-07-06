"use client";

import { useParams } from "next/navigation";

export default function Footer() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-grey bg-white py-8 px-6">
      <div className="2xl:px-0 2xl:max-w-7xl 2xl:mx-auto flex flex-col md:flex-row items-center justify-between gap-y-4 text-xs text-zinc-500">
        <span>
          &copy; {new Date().getFullYear()} DrAA Training & Consultancy
          (TR0343046-X)
        </span>
        <button
          onClick={handleScrollToTop}
          className="hover:text-zinc-500 text-zinc-400 transition-colors cursor-pointer focus:outline-none flex items-center gap-x-1.5"
        >
          <span>{locale === "ms" ? "Kembali ke atas" : "Back to top"}</span>
        </button>
      </div>
    </footer>
  );
}

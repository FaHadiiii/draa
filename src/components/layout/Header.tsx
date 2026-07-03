"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";

const FlagEn = () => (
  <svg
    className="w-4 h-4 shrink-0"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <clipPath id="circle-en-svg">
      <circle cx="15" cy="15" r="14.5" />
    </clipPath>
    <g clipPath="url(#circle-en-svg)">
      <rect width="30" height="30" fill="#012169" />
      <path d="M0 0 L30 30 M30 0 L0 30" stroke="#ffffff" strokeWidth="4.5" />
      <path d="M0 0 L30 30 M30 0 L0 30" stroke="#C8102E" strokeWidth="2.5" />
      <path d="M15 0 V30 M0 15 H30" stroke="#ffffff" strokeWidth="7" />
      <path d="M15 0 V30 M0 15 H30" stroke="#C8102E" strokeWidth="4.5" />
    </g>
    <circle cx="15" cy="15" r="14.5" stroke="#e4e4e7" strokeWidth="1" />
  </svg>
);

const FlagMs = () => (
  <svg
    className="w-4 h-4 shrink-0"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <clipPath id="circle-ms-svg">
      <circle cx="15" cy="15" r="14.5" />
    </clipPath>
    <g clipPath="url(#circle-ms-svg)">
      <rect width="30" height="30" fill="#ffffff" />
      <rect width="30" height="2.14" fill="#cc0000" />
      <rect y="4.28" width="30" height="2.14" fill="#cc0000" />
      <rect y="8.56" width="30" height="2.14" fill="#cc0000" />
      <rect y="12.84" width="30" height="2.14" fill="#cc0000" />
      <rect y="17.12" width="30" height="2.14" fill="#cc0000" />
      <rect y="21.4" width="30" height="2.14" fill="#cc0000" />
      <rect y="25.68" width="30" height="2.14" fill="#cc0000" />
      <rect width="17" height="16" fill="#000066" />
      <path
        d="M 5.5 8 A 4 4 0 1 0 13.5 8 A 3.2 3.2 0 1 1 11.2 5.2 A 4 4 0 0 0 5.5 8 Z"
        fill="#ffcc00"
      />
      <polygon
        points="12.5,8 11.8,7.2 12.8,7.4 12.2,6.6 13.1,6.6 12.6,7.4 13.3,8.2 12.4,8 12.7,8.9 11.8,8.3 11.4,9 11.5,8.1 10.7,8 11.5,7.7"
        fill="#ffcc00"
      />
    </g>
    <circle cx="15" cy="15" r="14.5" stroke="#e4e4e7" strokeWidth="1" />
  </svg>
);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();

  const locale = (params?.locale as string) || "en";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };
    window.addEventListener("scroll", handleScroll);

    const sections = ["about", "catalog", "how-it-works", "faq"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [pathname]);

  const handleLocaleChange = (newLocale: string) => {
    if (!pathname) return;
    const segments = pathname.split("/");
    // segment 1 is the locale code e.g. "en" or "ms"
    if (segments[1] === "en" || segments[1] === "ms") {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    router.push(segments.join("/"));
    setDropdownOpen(false);
    setIsOpen(false);
  };

  const getLink = (anchor: string) => {
    const segments = pathname?.split("/") || [];
    // Check if we are on the homepage: segments length is <= 2 e.g. ["", "en"] or ["", "ms"]
    const isHome =
      segments.length <= 2 || (segments.length === 3 && segments[2] === "");
    return isHome ? anchor : `/${locale}${anchor}`;
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const segments = pathname?.split("/") || [];
    const isHome =
      segments.length <= 2 || (segments.length === 3 && segments[2] === "");
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      router.push(`/${locale}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-grey">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">
        {/* Left Side: Mobile Menu Button (Hamburger) - visible on mobile only */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-zinc-650 hover:text-primary focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Left Navigation Links - desktop only */}
        <nav className="hidden lg:flex items-center gap-x-6 text-sm font-medium text-zinc-650">
          <a
            href={getLink("#about")}
            className={`transition-colors text-xs ${
              activeSection === "about"
                ? "text-primary font-semibold"
                : "text-zinc-500 hover:text-primary"
            }`}
          >
            {locale === "ms" ? "Tentang Kami" : "About Us"}
          </a>
          <a
            href={getLink("#catalog")}
            className={`transition-colors text-xs ${
              activeSection === "catalog"
                ? "text-primary font-semibold"
                : "text-zinc-500 hover:text-primary"
            }`}
          >
            {locale === "ms" ? "Blog & Artikel" : "Blogs & Articles"}
          </a>
          <a
            href={getLink("#how-it-works")}
            className={`transition-colors text-xs ${
              activeSection === "how-it-works"
                ? "text-primary font-semibold"
                : "text-zinc-500 hover:text-primary"
            }`}
          >
            {locale === "ms" ? "Buku" : "Books"}
          </a>
          <a
            href={getLink("#faq")}
            className={`transition-colors text-xs ${
              activeSection === "faq"
                ? "text-primary font-semibold"
                : "text-zinc-500 hover:text-primary"
            }`}
          >
            {locale === "ms" ? "Soalan Lazim" : "FAQs"}
          </a>
        </nav>

        {/* Center Logo - perfectly centered horizontally and vertically */}
        <div className="absolute pl-8 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <Link
            href={`/${locale}`}
            onClick={handleLogoClick}
            className="flex items-center"
          >
            <Image
              src="/draa-solid.svg"
              alt="DrAA Training & Consultancy Logo"
              width={130}
              height={38}
              priority
              className="h-11 w-auto"
            />
          </Link>
        </div>

        {/* Right Navigation Controls */}
        <div className="flex items-center gap-x-4">
          {/* Language Switcher Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-xs font-semibold text-zinc-700 flex items-center gap-x-1.5 focus:outline-none py-1.5 px-2.5 rounded-lg transition-all"
            >
              {locale === "en" ? <FlagEn /> : <FlagMs />}
              <span className="uppercase text-[11px] tracking-wide">
                {locale}
              </span>
              <svg
                className={`w-3 h-3 text-zinc-400 transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {dropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setDropdownOpen(false)}
                />
                <div className="absolute right-0 mt-1.5 w-40 bg-white border border-grey rounded-xl shadow-lg py-1 z-20 animate-in fade-in slide-in-from-top-1 duration-100">
                  <button
                    onClick={() => handleLocaleChange("en")}
                    className={`w-full text-left px-3.5 py-2 text-xs font-medium transition-colors flex items-center justify-between ${
                      locale === "en"
                        ? "text-primary bg-zinc-50"
                        : "text-zinc-650 hover:text-primary hover:bg-zinc-50/50"
                    }`}
                  >
                    <div className="flex items-center gap-x-2">
                      <FlagEn />
                      <span>English</span>
                    </div>
                    {locale === "en" && (
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    )}
                  </button>
                  <button
                    onClick={() => handleLocaleChange("ms")}
                    className={`w-full text-left px-3.5 py-2 text-xs font-medium transition-colors flex items-center justify-between ${
                      locale === "ms"
                        ? "text-primary bg-zinc-50"
                        : "text-zinc-650 hover:text-primary hover:bg-zinc-50/50"
                    }`}
                  >
                    <div className="flex items-center gap-x-2">
                      <FlagMs />
                      <span>Bahasa Melayu</span>
                    </div>
                    {locale === "ms" && (
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    )}
                  </button>
                </div>
              </>
            )}
          </div>

          <Link
            href="/admin"
            className="hidden sm:inline-block text-xs font-semibold text-white bg-primary hover:bg-primary/95 px-4 py-2 rounded-full transition-all"
          >
            {locale === "ms" ? "Hubungi Kami" : "Contact Us"}
          </Link>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-grey bg-white absolute top-16 left-0 w-full shadow-lg z-40">
          <nav className="flex flex-col p-6 gap-y-4 text-sm font-medium text-zinc-650">
            <a
              href={getLink("#about")}
              onClick={() => setIsOpen(false)}
              className={`py-1 border-b border-light-grey/50 transition-colors text-xs ${
                activeSection === "about"
                  ? "text-primary font-semibold"
                  : "text-zinc-500 hover:text-primary"
              }`}
            >
              {locale === "ms" ? "Tentang Kami" : "About Us"}
            </a>
            <a
              href={getLink("#catalog")}
              onClick={() => setIsOpen(false)}
              className={`py-1 border-b border-light-grey/50 transition-colors text-xs ${
                activeSection === "catalog"
                  ? "text-primary font-semibold"
                  : "text-zinc-500 hover:text-primary"
              }`}
            >
              {locale === "ms" ? "Blog & Artikel" : "Blogs & Articles"}
            </a>
            <a
              href={getLink("#how-it-works")}
              onClick={() => setIsOpen(false)}
              className={`py-1 border-b border-light-grey/50 transition-colors text-xs ${
                activeSection === "how-it-works"
                  ? "text-primary font-semibold"
                  : "text-zinc-500 hover:text-primary"
              }`}
            >
              {locale === "ms" ? "Buku" : "Books"}
            </a>
            <a
              href={getLink("#faq")}
              onClick={() => setIsOpen(false)}
              className={`py-1 border-b border-light-grey/50 transition-colors text-xs ${
                activeSection === "faq"
                  ? "text-primary font-semibold"
                  : "text-zinc-500 hover:text-primary"
              }`}
            >
              {locale === "ms" ? "Soalan Lazim" : "FAQs"}
            </a>

            <Link
              href="/admin"
              onClick={() => setIsOpen(false)}
              className="text-center text-xs font-semibold text-white bg-primary hover:bg-primary/95 px-4 py-2.5 rounded-lg mt-2 transition-all"
            >
              {locale === "ms" ? "Hubungi Kami" : "Contact Us"}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

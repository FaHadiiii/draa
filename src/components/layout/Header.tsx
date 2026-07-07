"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
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

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const navItems = [
  { id: "about", label: "About Us" },
  { id: "services", label: "Services" },
  { id: "domain", label: "Domain" },
  { id: "methodology", label: "Methodology" },
  { id: "founder", label: "Consultant" },
  { id: "insights", label: "Insights" },
] as const;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();

  const locale = (params?.locale as string) || "en";

  const translateNav = (id: string, defaultLabel: string) => {
    if (locale !== "ms") return defaultLabel;
    const msDict: Record<string, string> = {
      about: "Tentang Kami",
      services: "Perkhidmatan",
      domain: "Kepakaran",
      methodology: "Metodologi",
      founder: "Konsultan",
      insights: "Artikel",
    };
    return msDict[id] || defaultLabel;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };
    window.addEventListener("scroll", handleScroll);

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

    navItems.forEach(({ id }) => {
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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md">
      <div className="px-6 2xl:px-0 2xl:max-w-7xl 2xl:mx-auto h-16 flex items-center justify-between relative">
        {/* Left Side: Logo & Mobile Menu Toggle */}
        <div className="flex items-center gap-x-4">
          {/* Mobile Menu Button (Hamburger) - visible on mobile only */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-zinc-650 hover:text-primary focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
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
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Center Navigation Links - desktop only */}
        <nav className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center gap-x-6 text-sm font-medium text-zinc-650">
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={getLink(`#${id}`)}
              className={`transition-colors text-xs ${
                activeSection === id
                  ? "text-primary font-medium"
                  : "text-zinc-500 hover:text-primary font-normal"
              }`}
            >
              {translateNav(id, label)}
            </a>
          ))}
        </nav>

        {/* Right Navigation Controls */}
        <div className="flex items-center gap-x-4">
          {/* Language Switcher Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-xs font-medium text-zinc-700 flex items-center gap-x-1.5 focus:outline-none py-1.5 sm:px-2.5 rounded-lg transition-all"
            >
              {locale === "en" ? <FlagEn /> : <FlagMs />}
              <span className="uppercase text-[11px] tracking-wide">
                {locale}
              </span>
              <ChevronDown
                className={`w-3 h-3 text-zinc-400 transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {dropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setDropdownOpen(false)}
                />
                <div className="absolute right-0 mt-1.5 w-40 bg-white border border-grey rounded-lg shadow-lg py-1 z-20 animate-in fade-in slide-in-from-top-1 duration-100">
                  <button
                    onClick={() => handleLocaleChange("en")}
                    className={`w-full text-left px-3.5 py-2 text-xs font-medium transition-colors flex items-center justify-between ${
                      locale === "en"
                        ? "text-primary"
                        : "text-zinc-650 hover:text-primary"
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
                        ? "text-primary"
                        : "text-zinc-650 hover:text-primary"
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
            className="hidden sm:inline-flex items-center gap-x-1.5 text-xs font-medium text-white bg-primary hover:bg-primary/95 px-4 py-2 rounded-full transition-all"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
            <span>{locale === "ms" ? "Hubungi Kami" : "Contact Us"}</span>
          </Link>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-grey bg-white absolute top-16 left-0 w-full shadow-lg z-40">
          <nav className="flex flex-col p-6 gap-y-4 text-sm font-medium text-zinc-650">
            {navItems.map(({ id, label }) => (
              <a
                key={id}
                href={getLink(`#${id}`)}
                onClick={() => setIsOpen(false)}
                className={`py-1 border-b border-light-grey/50 transition-colors text-xs ${
                  activeSection === id
                    ? "text-primary font-medium"
                    : "text-zinc-500 hover:text-primary"
                }`}
              >
                {translateNav(id, label)}
              </a>
            ))}

            <Link
              href="/admin"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-x-1.5 text-xs font-medium text-white bg-primary hover:bg-primary/95 px-4 py-2.5 rounded-lg mt-2 transition-all"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
              <span>{locale === "ms" ? "Hubungi Kami" : "Contact Us"}</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

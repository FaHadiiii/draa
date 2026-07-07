"use client";

import { useParams, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Mail, Landmark, Phone, ChevronUpCircle } from "lucide-react";

const footerDict = {
  en: {
    description:
      "A premier training and consultancy provider specializing in public sector capability building, strategic leadership, policy analysis, and custom-tailored organizational workshops.",
    navigation: "Navigation",
    contact: "Contact & Info",
    email: "Email",
    regNo: "Registration No.",
    rights: "All rights reserved.",
    backToTop: "Back to top",
    contactUs: "Contact Us",
    about: "About Us",
    services: "Services",
    domain: "Domain Expertise",
    methodology: "Methodology",
    consultant: "Consultant",
    insights: "Insights",
  },
  ms: {
    description:
      "Penyedia latihan dan perundingan terkemuka yang pakar dalam pembinaan keupayaan sektor awam, kepimpinan strategik, analisis dasar, dan bengkel organisasi tersuai.",
    navigation: "Navigasi",
    contact: "Hubungi & Maklumat",
    email: "E-mel",
    regNo: "No. Pendaftaran",
    rights: "Hak cipta terpelihara.",
    backToTop: "Kembali ke atas",
    contactUs: "Hubungi Kami",
    about: "Tentang Kami",
    services: "Perkhidmatan",
    domain: "Kepakaran",
    methodology: "Metodologi",
    consultant: "Konsultan",
    insights: "Artikel",
  },
} as const;

export default function Footer() {
  const params = useParams();
  const pathname = usePathname();
  const locale = ((params?.locale as string) || "en") as "en" | "ms";
  const dict = footerDict[locale] || footerDict.en;

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getLink = (anchor: string) => {
    const segments = pathname?.split("/") || [];
    const isHome =
      segments.length <= 2 || (segments.length === 3 && segments[2] === "");
    return isHome ? anchor : `/${locale}${anchor}`;
  };

  const navItems = [
    { id: "about", label: dict.about },
    { id: "services", label: dict.services },
    { id: "domain", label: dict.domain },
    { id: "methodology", label: dict.methodology },
    { id: "founder", label: dict.consultant },
    { id: "insights", label: dict.insights },
  ];

  return (
    <footer className="border-t border-grey bg-white pt-10 pb-12 mt-12">
      <div className="px-6 2xl:px-0 2xl:max-w-7xl 2xl:mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col gap-y-4">
            <Link href={`/${locale}`} className="w-fit">
              <Image
                src="/draa-solid.svg"
                alt="DrAA Training & Consultancy Logo"
                width={120}
                height={35}
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-zinc-500 font-light text-xs leading-relaxed max-w-sm">
              {dict.description}
            </p>
            <div className="flex items-center gap-x-2 text-[11px] text-zinc-400 mt-2">
              <Landmark className="w-3.5 h-3.5" />
              <span>{dict.regNo} TR0343046-X</span>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3 md:col-start-7 flex flex-col gap-y-4">
            <h4 className="text-zinc-800 text-xs font-normal tracking-wider">
              {dict.navigation}
            </h4>
            <ul className="flex flex-col gap-y-2.5">
              {navItems.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={getLink(`#${id}`)}
                    onClick={(e) => {
                      const segments = pathname?.split("/") || [];
                      const isHome =
                        segments.length <= 2 ||
                        (segments.length === 3 && segments[2] === "");
                      if (isHome) {
                        e.preventDefault();
                        const el = document.getElementById(id);
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth" });
                          window.history.pushState(null, "", `#${id}`);
                        }
                      }
                    }}
                    className="text-zinc-500 hover:text-primary transition-colors text-xs font-light"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-3 flex flex-col gap-y-4">
            <h4 className="text-zinc-800 text-xs font-normal tracking-wider">
              {dict.contact}
            </h4>
            <div className="flex flex-col gap-y-3">
              <div className="flex items-center gap-x-2 text-zinc-500 text-xs font-light">
                <Mail className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <a
                  href="mailto:hello@draa.my"
                  className="hover:text-primary transition-colors"
                >
                  hello@draa.my
                </a>
              </div>
              <div className="flex items-center gap-x-2 text-zinc-500 text-xs font-light mt-1">
                <Phone className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <a
                  href="tel:+60192113986"
                  className="hover:text-primary transition-colors"
                >
                  +60 19-211 3986
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-grey pt-6">
        <div className="px-6 2xl:px-0 2xl:max-w-7xl 2xl:mx-auto flex flex-col sm:flex-row items-center justify-between gap-y-4 text-[11px] text-zinc-400 font-light">
          <span>
            &copy; {new Date().getFullYear()} DrAA Training & Consultancy.{" "}
            {dict.rights}
          </span>
          <button
            onClick={handleScrollToTop}
            className="hover:text-zinc-500 text-zinc-400 transition-colors cursor-pointer focus:outline-none flex items-center gap-x-1.5"
          >
            <span>{dict.backToTop}</span>
            <ChevronUpCircle className="w-4 h-4 text-zinc-300" />
          </button>
        </div>
      </div>
    </footer>
  );
}

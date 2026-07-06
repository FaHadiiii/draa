"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Briefcase, ShieldCheck, Landmark } from "lucide-react";

export default function Hero() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";

  const description =
    locale === "ms"
      ? "Perundingan & pembangunan kapasiti strategik untuk organisasi yang inginkan kakitangannya memberi impak, bukan sekadar hadir bengkel."
      : "Professional training, consultancy, and strategic capacity building for organisations that want their people to perform, not just attend a workshop.";

  const primaryBtnText = locale === "ms" ? "Hubungi Kami" : "Get In Touch";
  const secondaryBtnText =
    locale === "ms" ? "Lihat Perkhidmatan" : "View Services";

  const highlights = [
    {
      icon: Briefcase,
      value: "20+",
      label: locale === "ms" ? "Tahun Pengalaman" : "Years Experience",
    },
    {
      icon: ShieldCheck,
      value: "HRD",
      label: locale === "ms" ? "Bertauliah" : "Certified",
    },
    {
      icon: Landmark,
      value: locale === "ms" ? "Sektor Kerajaan" : "Government",
      label: locale === "ms" ? "Sektor Kerajaan" : "Sector Specialist",
    },
  ];

  return (
    <section className="py-6 w-full">
      <div className="w-full sm:h-[calc(100vh-7.5rem)] min-h-[550px] bg-light-grey rounded-xl border border-grey flex flex-col justify-between p-8 sm:p-12 relative overflow-hidden">
        {/* Full-width Background Image & Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Mobile Image (Portrait) */}
          <div className="block lg:hidden relative w-full h-full">
            <Image
              src="/hero-potrait.png"
              alt="Hero background"
              fill
              priority
              className="object-cover"
              sizes="(max-w-1024px) 100vw"
            />
          </div>

          {/* Desktop Image (Landscape) */}
          <div className="hidden lg:block relative w-full h-full">
            <Image
              src="/hero-landscape.png"
              alt="Hero background"
              fill
              priority
              className="object-cover"
              sizes="(min-w-1024px) 100vw"
            />
          </div>

          {/* Gradient Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-light-grey/98 via-light-grey/95 to-light-grey/90 lg:bg-gradient-to-r lg:from-light-grey lg:via-light-grey/85 lg:to-transparent z-10" />
        </div>

        {/* Content Section (Top/Middle) */}
        <div className="relative z-20 flex flex-col justify-center flex-1 max-w-2xl items-center text-center lg:items-start lg:text-start mx-auto lg:mx-0">
          {/* Heading (Text sizing preserved exactly as original) */}
          <div className="flex flex-col text-xl sm:text-3xl font-semibold tracking-tight text-primary max-w-2xl leading-tight items-center text-center lg:items-start lg:text-start">
            <h2>
              {locale === "ms" ? "Membangunkan Insan," : "Developing People,"}
            </h2>
            <h2 className="mt-2 mb-6 text-accent">
              {locale === "ms"
                ? "Mentransformasikan Organisasi."
                : "Transforming Organizations."}
            </h2>
          </div>

          {/* Subheading / Paragraph (Text sizing preserved exactly as original) */}
          <p className="text-sm text-zinc-600 max-w-md font-light">
            {description}
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
            <Link
              href="/admin"
              className="bg-accent text-white hover:bg-accent/95 px-4.5 py-2 text-xs font-medium rounded-lg transition-all inline-flex items-center justify-center shadow-sm"
            >
              {primaryBtnText}
            </Link>
            <Link
              href="#services"
              className="border border-grey text-primary hover:bg-light-grey bg-white/50 backdrop-blur-sm px-4.5 py-2 text-xs font-medium rounded-lg transition-all inline-flex items-center justify-center"
            >
              {secondaryBtnText}
            </Link>
          </div>
        </div>

        {/* Highlight Points (Bottom Left) */}
        <div className="relative z-20 mt-12 pt-6 grid grid-cols-3 gap-3 sm:gap-6 max-w-xl w-full mx-auto lg:mx-0">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="flex sm:flex-row flex-col sm:gap-4 gap-2 sm:items-start items-center"
            >
              <div className="w-8 h-8 rounded-lg bg-zinc-200/50 border border-zinc-400/10 flex items-center justify-center shrink-0 sm:mb-2 mb-0">
                <item.icon className="w-4 h-4 text-accent" />
              </div>
              <div className="flex flex-col sm:items-start items-center">
                <span className="text-xs font-semibold text-primary leading-tight">
                  {item.value}
                </span>
                <span className="text-[10px] sm:text-xs text-zinc-500 font-light mt-0.5 leading-tight">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

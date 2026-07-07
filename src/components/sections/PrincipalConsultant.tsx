"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Award, GraduationCap, Users } from "lucide-react";
import lottie from "lottie-web";

export default function PrincipalConsultant() {
  const params = useParams();
  const locale = ((params?.locale as string) || "en") as "en" | "ms";

  const topArrowRef = useRef<HTMLDivElement>(null);
  const bottomArrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let topAnim: ReturnType<typeof lottie.loadAnimation> | null = null;
    let bottomAnim: ReturnType<typeof lottie.loadAnimation> | null = null;

    if (topArrowRef.current) {
      topAnim = lottie.loadAnimation({
        container: topArrowRef.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
        path: "/arrow.json",
      });
    }

    if (bottomArrowRef.current) {
      bottomAnim = lottie.loadAnimation({
        container: bottomArrowRef.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
        path: "/arrow.json",
      });
    }

    return () => {
      if (topAnim) topAnim.destroy();
      if (bottomAnim) bottomAnim.destroy();
    };
  }, []);

  const title = locale === "ms" ? "Perunding Utama" : "Principal Consultant";

  const quote =
    locale === "ms"
      ? "Saya percaya kepada pembangunan modal insan yang berfikir secara kritis, memimpin dengan integriti, dan menghasilkan impak sebenar. Misi saya adalah untuk membantu organisasi membina keupayaan yang diperlukan untuk berkhidmat dengan lebih baik dan memimpin perubahan."
      : "I believe in developing people who think critically, lead with integrity, and deliver real impact. My mission is to help organisations build the capabilities they need to serve better and lead change.";

  const stats = [
    {
      labelTop: locale === "ms" ? "Doktor Falsafah" : "Doctorate in",
      labelBottom: locale === "ms" ? "Sains Politik" : "Political Science",
      icon: GraduationCap,
    },
    {
      labelTop: "20+ Years",
      labelBottom:
        locale === "ms" ? "Pengalaman Sektor Awam" : "Public Sector Experience",
      icon: Users,
    },
    {
      labelTop: "HRD Corp",
      labelBottom:
        locale === "ms" ? "Jurulatih Bertauliah" : "Certified Trainer",
      icon: Award,
    },
  ];

  return (
    <section
      id="founder"
      className="scroll-mt-20 py-0 pt-6 sm:pt-16 w-full bg-zinc-200/20 sm:mb-16 mb-8 mt-6 sm:mt-12"
    >
      <div className="max-w-7xl mx-auto px-6 2xl:px-0">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] items-center">
          {/* Left Column: Portrait cutout & Arrow Annotations */}
          <div className="relative w-full h-[320px] sm:h-[300px] lg:h-[400px] flex items-center justify-center bg-transparent order-last lg:order-first">
            {/* Portrait cutout */}
            <div className="relative h-full aspect-[3/4] z-10">
              <Image
                src="/draa.png"
                alt="Dr. Azrie Azeh"
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Top-Left Annotation (PhD) */}
            <div className="absolute top-[2%] left-0 sm:left-[15%] z-20 flex flex-col items-center">
              <div className="bg-white border border-zinc-200/60 px-2 py-1.5 rounded-lg text-[9px] font-semibold text-zinc-800 shadow-xs select-none flex items-center gap-2">
                <div className="relative w-6 h-5 shrink-0 flex items-center justify-center">
                  <Image
                    src="/company/um.png"
                    alt="UM Logo"
                    fill
                    sizes="20px"
                    className="object-cover"
                  />
                </div>
                <span>
                  {locale === "ms"
                    ? "PhD dalam Sains Politik"
                    : "PhD in Political Science"}
                </span>
              </div>
              <div className="w-10 h-10 opacity-70 transform rotate-[10deg] pointer-events-none">
                <div ref={topArrowRef} className="w-full h-full" />
              </div>
            </div>

            {/* Bottom-Right Annotation (HRD Corp) */}
            <div className="absolute bottom-[10%] right-[5%] sm:right-[15%] z-20 flex flex-col items-center">
              <div className="bg-white border border-zinc-200/60 px-2 py-1.5 rounded-lg text-[9px] font-semibold text-zinc-800 shadow-xs select-none flex items-center gap-2">
                <div className="relative w-5 h-4 shrink-0 flex items-center justify-center">
                  <Image
                    src="/hrd-logo.png"
                    alt="HRD Corp Logo"
                    fill
                    sizes="20px"
                    className="object-cover"
                  />
                </div>
                <span>
                  {locale === "ms"
                    ? "Jurulatih Bertauliah"
                    : "Certified Trainer"}
                </span>
              </div>
              <div className="w-10 h-10 mt-1 opacity-70 transform rotate-[150deg] scale-y-[-1] pointer-events-none">
                <div ref={bottomArrowRef} className="w-full h-full" />
              </div>
            </div>
          </div>

          {/* Right Column: Title, Name, Credentials, Personal Quote */}
          <div className="flex flex-col justify-center sm:mb-12 mb-6 order-first lg:order-none">
            <div>
              <span className="text-xs font-normal text-accent">{title}</span>
              <h3 className="text-lg font-semibold tracking-tight text-zinc-850 mt-2">
                Dr. Azrie Azeh
              </h3>
              <p className="text-xs text-zinc-400 font-light tracking-wide mt-1.5">
                {locale === "ms" ? "Jurulatih & Pengasas" : "Trainer & Founder"}
              </p>
            </div>

            {/* Credentials Row */}
            <div className="flex flex-wrap items-center gap-x-10 gap-y-8 mt-8 py-5 w-full">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="flex items-center gap-3 shrink-0">
                    <Icon className="w-6 h-6 text-accent shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-[10px] text-zinc-400 font-light leading-none">
                        {stat.labelTop}
                      </span>
                      <span className="text-xs font-semibold text-zinc-700 mt-1">
                        {stat.labelBottom}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Styled Quote Box */}
            <div className="flex gap-3 items-start mt-8">
              <span className="text-accent text-5xl font-serif leading-none select-none opacity-95 shrink-0">
                &ldquo;
              </span>
              <p className="text-zinc-600 text-[13px] font-light leading-relaxed italic mt-2 max-w-xl">
                {quote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

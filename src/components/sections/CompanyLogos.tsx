"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export default function CompanyLogos() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const companies = [
    { name: "Kementerian Pendidikan Malaysia", logo: "/company/kpm.png" },
    { name: "Angkatan Tentera Malaysia", logo: "/company/atm.png" },
    { name: "Majlis Amanah Rakyat", logo: "/company/mara.png" },
    { name: "Universiti Malaya", logo: "/company/um.png" },
  ];

  const label =
    locale === "ms"
      ? "Bekerjasama dengan organisasi merentasi pelbagai sektor"
      : "Worked with organisations across sectors";

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const checkOverflow = () => {
      // Temporarily remove centering layout to calculate the raw, unwrapped width of original logos
      const originalWidth = 4 * 128 + 3 * 64; // 4 logos (128px each) + 3 gaps (gap-16 = 64px) = 704px
      setIsOverflowing(originalWidth > container.clientWidth);
    };

    checkOverflow();

    const resizeObserver = new ResizeObserver(checkOverflow);
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  // Only duplicate logos if we overflow the viewport width
  const displayCompanies = isOverflowing
    ? [...companies, ...companies, ...companies, ...companies]
    : companies;

  return (
    <section className="sm:pb-32 pb-24 pt-14 w-full overflow-hidden">
      {isOverflowing && (
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-25%); }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
      )}

      <div className="flex flex-col items-center w-full">
        <p className="text-xs font-normal text-zinc-400 mb-10 text-center px-4">
          {label}
        </p>

        {/* Mask gradient applied only on overflow */}
        <div
          ref={containerRef}
          className={`w-full overflow-hidden ${
            isOverflowing
              ? "[mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]"
              : "flex justify-center"
          }`}
        >
          <div
            className={`flex items-center gap-16 py-2 ${
              isOverflowing
                ? "w-max animate-marquee"
                : "justify-center flex-wrap px-4"
            }`}
          >
            {displayCompanies.map((company, index) => (
              <div
                key={index}
                className="h-10 w-32 relative flex items-center justify-center shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ease-in-out"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={128}
                  height={40}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

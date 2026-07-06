"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

export default function CompanyLogos() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";

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

  return (
    <section className="sm:pb-32 pb-24 pt-14 w-full">
      <div className="flex flex-col items-center">
        <p className="text-xs font-normal text-zinc-400 mb-14 text-center">
          {label}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:gap-x-16 w-full max-w-4xl px-4">
          {companies.map((company, index) => (
            <div
              key={index}
              className="h-10 w-32 relative flex items-center justify-center opacity-100 transition-all duration-300 ease-in-out"
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={128}
                height={40}
                className="max-h-14 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

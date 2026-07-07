"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function Services() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const services = [
    {
      title: locale === "ms" ? "Program Latihan" : "Training Programmes",
      description:
        locale === "ms"
          ? "Program latihan profesional yang direka untuk membangunkan kepimpinan, komunikasi, integriti kerja, dan prestasi pasukan melalui pendekatan pembelajaran yang praktikal."
          : "Professional training programmes designed to develop leadership, communication, workplace integrity, and team performance through practical learning experiences.",
      image: "/professional_training.png",
    },
    {
      title: locale === "ms" ? "Perundingan" : "Consultancy",
      description:
        locale === "ms"
          ? "Khidmat perundingan strategik untuk membantu organisasi menilai keperluan, memperkukuh hala tuju, dan membina penyelesaian yang sesuai dengan objektif institusi."
          : "Strategic consultancy services to help organisations assess needs, strengthen direction, and build solutions aligned with institutional objectives.",
      image: "/strategic_consultancy.png",
    },
    {
      title: locale === "ms" ? "Bimbingan Eksekutif" : "Executive Coaching",
      description:
        locale === "ms"
          ? "Sesi bimbingan individu dan kumpulan kecil untuk memperkukuh keupayaan kepimpinan, membuat keputusan, komunikasi, dan keyakinan dalam mengurus pasukan."
          : "Individual and small-group coaching sessions to strengthen leadership capability, decision-making, communication, and confidence in managing teams.",
      image: "/leadership_coaching.png",
    },
  ];

  return (
    <section
      id="services"
      ref={containerRef}
      className="scroll-mt-20 py-12 w-full overflow-hidden"
    >
      <div className="grid gap-8 lg:grid-cols-4">
        {/* Left Column: Title & Subtitle */}
        <div
          className={`lg:col-span-1 flex flex-col justify-start transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-[30px]"
          }`}
        >
          <h2 className="text-lg font-semibold tracking-tight text-primary">
            {locale === "ms" ? "Perkhidmatan Ditawarkan" : "Services Offered"}
          </h2>
          <p className="mt-2 text-xs text-zinc-500 max-w-sm leading-relaxed">
            {locale === "ms"
              ? "Membina keupayaan insan dan organisasi ke arah kecemerlangan strategik."
              : "Empowering teams and organisations through education and strategic growth."}
          </p>
        </div>

        {/* Right Column: 3 Services Cards */}
        <div className="lg:col-span-3 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col bg-white rounded-xl border border-grey overflow-hidden group shadow-sm hover:shadow-md transition-all duration-1000 hover:duration-300 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="p-1 pb-0">
                <div className="h-48 relative overflow-hidden rounded-lg bg-zinc-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-w-768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-sm font-medium text-primary group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs font-light text-zinc-500 leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

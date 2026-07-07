"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin on client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Services() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left title animation
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          {
            opacity: 0,
            x: -30,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
              once: true,
            },
          },
        );
      }

      // Staggered cards animation
      const activeCards = cardsRef.current.filter((c) => c !== null);
      if (activeCards.length > 0) {
        gsap.fromTo(
          activeCards,
          {
            y: 80,
          },
          {
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
              once: true,
            },
          },
        );
      }
    }, containerRef);

    return () => ctx.revert();
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
        <div ref={titleRef} className="lg:col-span-1 flex flex-col justify-start">
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
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="flex flex-col bg-white rounded-xl border border-grey overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300"
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

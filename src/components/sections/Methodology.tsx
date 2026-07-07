"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Compass, Layers, Zap, ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin on client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HowWeWork() {
  const params = useParams();
  const locale = ((params?.locale as string) || "en") as "en" | "ms";

  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number | null>(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in container elements on scroll
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            once: true,
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      title: locale === "ms" ? "Discover (Teroka)" : "Discover",
      description:
        locale === "ms"
          ? "Kami bermula dengan memahami cabaran sebenar organisasi anda — bukan bersandarkan andaian."
          : "We start by understanding your organisation's real challenges — not assumptions.",
      icon: Compass,
      image: "/strategic_consultancy.png",
      alt:
        locale === "ms"
          ? "Analisis perundingan strategik"
          : "Strategic consultancy analysis",
    },
    {
      title: locale === "ms" ? "Design (Reka)" : "Design",
      description:
        locale === "ms"
          ? "Setiap program direka khas mengikut konteks anda, bukan diadaptasi daripada templat generik."
          : "Every programme is custom-built around your context, not adapted from a generic template.",
      icon: Layers,
      image: "/how_we_work_building.png",
      alt:
        locale === "ms"
          ? "Reka bentuk program tersuai"
          : "Custom program architectural design",
    },
    {
      title: locale === "ms" ? "Deliver (Laksana)" : "Deliver",
      description:
        locale === "ms"
          ? "Fasilitasi praktikal yang berfokus kepada aplikasi sebenar, bukan pendengaran pasif."
          : "Hands-on facilitation focused on practical application, not passive listening.",
      icon: Zap,
      image: "/professional_training.png",
      alt:
        locale === "ms"
          ? "Latihan profesional secara praktikal"
          : "Practical professional training facilitation",
    },
  ];

  return (
    <section
      id="methodology"
      ref={containerRef}
      className="scroll-mt-20 py-12 w-full overflow-hidden"
    >
      {/* Heading Block */}
      <div className="mb-10 text-center lg:text-left">
        <h2 className="text-lg font-semibold tracking-tight text-primary">
          {locale === "ms" ? "Metodologi" : "Methodology"}
        </h2>
        <p className="mt-2 text-xs text-zinc-500 max-w-xs sm:max-w-sm mx-auto lg:mx-0 leading-relaxed">
          {locale === "ms"
            ? "Pendekatan tersusun kami memastikan setiap latihan disesuaikan untuk impak jangka panjang yang sebenar."
            : "Our structured approach ensures every training is tailored for real, long-term impact."}
        </p>
      </div>

      {/* ================= DESKTOP LAYOUT (Sidebar Tabs & Image Split) ================= */}
      <div className="hidden lg:grid grid-cols-[1fr_1.3fr] gap-12 w-full items-center">
        {/* Left Column: Vertical Tabs */}
        <div className="flex flex-col gap-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;
            return (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                onMouseEnter={() => setActiveStep(index)}
                className={`w-full text-left pl-6 py-5 border-l-2 transition-all duration-300 flex flex-col items-start ${
                  isActive
                    ? "border-accent bg-zinc-50"
                    : "border-zinc-200 hover:border-zinc-350 hover:bg-zinc-50/40"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={`w-4 h-4 transition-colors duration-300 ${
                      isActive ? "text-accent" : "text-zinc-400"
                    }`}
                  />
                  <h4
                    className={`text-sm font-semibold transition-colors duration-300 ${
                      isActive ? "text-zinc-800 font-bold" : "text-zinc-500"
                    }`}
                  >
                    {step.title}
                  </h4>
                </div>
                <div
                  className={`transition-all duration-350 ease-in-out overflow-hidden ${
                    isActive
                      ? "max-h-[100px] opacity-100 mt-2"
                      : "max-h-0 opacity-0 mt-0"
                  }`}
                >
                  <p className="text-xs text-zinc-500 font-light leading-relaxed max-w-sm">
                    {step.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Dynamic Cross-Fading Image */}
        <div className="relative h-[380px] w-full rounded-xl overflow-hidden border border-grey bg-zinc-150 shadow-sm">
          {steps.map((step, index) => (
            <Image
              key={index}
              src={step.image}
              alt={step.alt}
              fill
              sizes="50vw"
              className={`object-cover transition-all duration-700 ease-in-out will-change-transform will-change-opacity ${
                activeStep === index
                  ? "opacity-100 z-10 scale-[1.01]"
                  : "opacity-0 z-0 scale-100"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ================= MOBILE LAYOUT (Accordions with Inline Images) ================= */}
      <div className="lg:hidden flex flex-col divide-y divide-zinc-100 border-y border-zinc-100">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = activeStep === index;
          return (
            <div key={index} className="w-full flex flex-col">
              {/* Accordion Trigger */}
              <button
                onClick={() => setActiveStep(isActive ? null : index)}
                className="w-full py-4 flex justify-between items-center text-left"
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={`w-4 h-4 transition-colors duration-300 ${
                      isActive ? "text-accent" : "text-zinc-400"
                    }`}
                  />
                  <span
                    className={`text-sm font-semibold transition-colors duration-300 ${
                      isActive ? "text-zinc-800" : "text-zinc-600"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-zinc-400 transition-transform duration-300 ${
                    isActive ? "rotate-180 text-accent" : "rotate-0"
                  }`}
                />
              </button>

              {/* Accordion Content Panel */}
              <div
                className={`transition-all duration-350 ease-in-out overflow-hidden ${
                  isActive
                    ? "max-h-[380px] opacity-100 pb-5"
                    : "max-h-0 opacity-0"
                }`}
              >
                {/* Description */}
                <p className="text-xs text-zinc-500 font-light leading-relaxed">
                  {step.description}
                </p>

                {/* Inline Image */}
                <div className="mt-4 relative h-[200px] w-full rounded-xl overflow-hidden border border-grey bg-zinc-100 shadow-sm">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

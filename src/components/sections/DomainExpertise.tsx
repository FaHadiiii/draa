"use client";

import { useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Highlighter } from "@/components/ui/highlighter";
import { Award, Lightbulb, Users, Cpu, TrendingUp } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP ScrollTrigger plugin on client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function DomainExpertise() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate center title
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          {
            opacity: 0,
            y: 40,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 90%",
              once: true,
            },
          },
        );
      }

      // Animate each card individually as it scrolls into view
      cardsRef.current.forEach((card) => {
        if (!card) return;

        gsap.fromTo(
          card,
          {
            scale: 0,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 1.4,
            ease: "back.out(2.2)", // Bouncy ease-out with high overshoot
            scrollTrigger: {
              trigger: card,
              start: "top 92%", // triggers as card enters bottom of viewport
              once: true,
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const domains = [
    {
      title:
        locale === "ms"
          ? "Kepimpinan & Tadbir Urus"
          : "Leadership & Governance",
      posClass:
        "left-10 top-[8%] sm:left-[38%] sm:top-[18%] sm:-translate-x-1/2 sm:-translate-y-1/2",
      icon: Award,
    },
    {
      title: locale === "ms" ? "Strategi & Inovasi" : "Strategy & Innovation",
      posClass:
        "right-4 top-[18%] sm:right-auto sm:left-[74%] sm:top-[22%] sm:-translate-x-1/2 sm:-translate-y-1/2",
      icon: Lightbulb,
    },
    {
      title: locale === "ms" ? "Insan & Budaya" : "People & Culture",
      posClass:
        "left-4 top-[24%] sm:left-[18%] sm:top-[33%] sm:-translate-x-1/2 sm:-translate-y-1/2",
      icon: Users,
    },
    {
      title:
        locale === "ms" ? "Operasi & Teknologi" : "Operations & Technology",
      posClass:
        "right-4 top-[68%] sm:right-auto sm:left-[78%] sm:top-[63%] sm:-translate-x-1/2 sm:-translate-y-1/2",
      icon: Cpu,
    },
    {
      title:
        locale === "ms" ? "Kecemerlangan Perniagaan" : "Business Excellence",
      posClass:
        "left-4 top-[78%] sm:left-[30%] sm:top-[74%] sm:-translate-x-1/2 sm:-translate-y-1/2",
      icon: TrendingUp,
    },
  ];

  return (
    <section
      id="domain"
      ref={sectionRef}
      className="scroll-mt-20 py-12 sm:py-24 w-full relative overflow-hidden"
    >
      <div className="relative w-full h-[480px] sm:h-[500px]">
        {/* Center Title */}
        <div
          ref={titleRef}
          className="absolute left-1/2 top-[48%] sm:top-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 pointer-events-none select-none"
        >
          <h2 className="text-base sm:text-xl font-semibold tracking-tight text-primary">
            <Highlighter
              action="underline"
              color="#b89047"
              strokeWidth={2.5}
              padding={4}
              isView={true}
            >
              {locale === "ms" ? "Kepakaran Domain" : "Domain Expertise"}
            </Highlighter>
          </h2>
          <p className="mt-3 text-[10px] sm:text-xs text-zinc-400 max-w-[150px] sm:max-w-[200px] mx-auto leading-relaxed">
            {locale === "ms"
              ? "Menyampaikan kecemerlangan merentasi kepakaran industri utama."
              : "Delivering excellence across areas of industry expertise."}
          </p>
        </div>

        {/* Orbiting Cards */}
        {domains.map((dom, idx) => (
          <div
            key={idx}
            ref={(el) => {
              cardsRef.current[idx] = el;
            }}
            className={`absolute ${dom.posClass}`}
          >
            <CardContainer className="py-0" containerClassName="py-0">
              <CardBody className="h-auto w-auto bg-transparent">
                <CardItem
                  translateZ={30}
                  className="px-3 sm:px-5 py-1.5 sm:py-2.5 bg-white rounded-lg border border-grey shadow-sm hover:shadow-md hover:border-accent/40 text-[10px] sm:text-xs font-medium text-zinc-800 cursor-default flex items-center gap-1.5 sm:gap-2 whitespace-nowrap"
                >
                  <dom.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent shrink-0" />
                  <span>{dom.title}</span>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </section>
  );
}

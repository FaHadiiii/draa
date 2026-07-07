"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin on client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface CounterProps {
  target: number;
  duration?: number;
  suffix?: string;
}

function AnimatedCounter({
  target,
  duration = 1500,
  suffix = "",
}: CounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTimestamp: number | null = null;

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min(
              (timestamp - startTimestamp) / duration,
              1,
            );
            setCount(Math.floor(progress * target));

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [target, duration]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
}

export default function AboutUs() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";

  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left text and certificate animation
      if (leftRef.current) {
        gsap.fromTo(
          leftRef.current,
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

      // Right stats staggered animation
      const activeStats = statsRef.current.filter((s) => s !== null);
      if (activeStats.length > 0) {
        gsap.fromTo(
          activeStats,
          {
            opacity: 0,
            y: 35,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
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

  const stats = [
    {
      target: 10,
      suffix: "+",
      label: locale === "ms" ? "Tahun Pengalaman" : "Years of Experience",
    },
    {
      target: 100,
      suffix: "+",
      label: locale === "ms" ? "Organisasi Dilatih" : "Organisations Trained",
    },
    {
      target: 5000,
      suffix: "+",
      label: locale === "ms" ? "Peserta Diperkasa" : "Participants Empowered",
    },
    {
      target: 98,
      suffix: "%",
      label: locale === "ms" ? "Kadar Kepuasan" : "Satisfaction Rate",
    },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="scroll-mt-20 pb-16 pt-10 w-full overflow-hidden"
    >
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-0">
        {/* Left Text */}
        <div ref={leftRef} className="flex flex-col justify-center">
          <h2 className="text-lg font-semibold tracking-tight text-primary">
            {locale === "ms" ? "Siapa Kami" : "Who We Are"}
          </h2>
          <p className="mt-4 text-sm text-zinc-600 font-light leading-relaxed max-w-lg">
            {locale === "ms"
              ? "DrAA Training & Consultancy membantu organisasi membina modal insan berkebolehan dan pasukan berprestasi tinggi. Kami bekerjasama dengan agensi kerajaan, GLC, dan organisasi sektor swasta."
              : "DrAA Training & Consultancy helps organisations build capable people and high-performing teams. We work with government agencies, GLCs, and private-sector organisations."}
          </p>
          <Image
            src="/hrd.png"
            alt="HRD Certificate"
            width={500}
            height={500}
            className="mt-4 h-25 w-25 object-contain grayscale"
          />
        </div>

        {/* Right Stats Grid */}
        <div className="grid grid-cols-2 pt-6 sm:pt-0 gap-2 gap-x-12 sm:gap-x-30 gap-y-10 lg:justify-self-end items-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={(el) => {
                statsRef.current[index] = el;
              }}
            >
              <span className="text-2xl font-semibold text-primary block">
                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              </span>
              <span className="text-xs font-light text-zinc-500 mt-1 block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

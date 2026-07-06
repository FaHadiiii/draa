"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

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
  return (
    <section id="about" className="scroll-mt-20 pb-16 pt-10 w-full">
      <div className="grid lg:grid-cols-2">
        {/* Left Text */}
        <div className="flex flex-col justify-center">
          <h2 className="text-lg font-semibold tracking-tight text-primary">
            Who We Are
          </h2>
          <p className="mt-4 text-sm text-zinc-600 font-light leading-relaxed max-w-lg">
            DrAA Training & Consultancy helps organisations build capable people
            and high-performing teams. We work with government agencies, GLCs,
            and private-sector organisations.
          </p>
          <Image
            src="/hrd.png"
            alt="HRD Certificate"
            width={500}
            height={500}
            className="mt-2 h-25 w-25 object-contain grayscale"
          />
        </div>

        {/* Right Stats Grid */}
        <div className="grid grid-cols-2 pt-14 sm:pt-0 gap-2 gap-x-25 gap-y-10 sm:gap-y-0 lg:justify-self-end">
          <div>
            <span className="text-2xl font-semibold text-primary block">
              <AnimatedCounter target={10} suffix="+" />
            </span>
            <span className="text-xs font-normal text-zinc-500 mt-1 block">
              Years in the market
            </span>
          </div>
          <div>
            <span className="text-2xl font-semibold text-primary block">
              <AnimatedCounter target={1000} suffix="+" />
            </span>
            <span className="text-xs font-normal text-zinc-500 mt-1 block">
              Successful deals
            </span>
          </div>
          <div>
            <span className="text-2xl font-semibold text-primary block">
              <AnimatedCounter target={4000} suffix="+" />
            </span>
            <span className="text-xs font-normal text-zinc-500 mt-1 block">
              Properties in database
            </span>
          </div>
          <div>
            <span className="text-2xl font-semibold text-primary block">
              <AnimatedCounter target={95} suffix="%" />
            </span>
            <span className="text-xs font-normal text-zinc-500 mt-1 block">
              Satisfied clients
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

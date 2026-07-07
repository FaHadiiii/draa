"use client";

import { useRef } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface InsightItem {
  category: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  image: string;
}

const insightsData: Record<"en" | "ms", InsightItem[]> = {
  en: [
    {
      category: "Public Sector",
      title: "Modernising Public Administration in Malaysia",
      description:
        "Key strategies for enhancing efficiency, transparency, and service delivery in government agencies through modern administrative practices.",
      date: "Jul 7",
      readTime: "8 min read",
      image: "/founders_corner_blog.png",
    },
    {
      category: "Leadership",
      title: "Strategic Leadership in Times of Change",
      description:
        "How public and private leaders can navigate organizational transitions, manage resistance, and inspire high-performing teams.",
      date: "Jun 24",
      readTime: "6 min read",
      image: "/founders_corner_blog.png",
    },
    {
      category: "Policy Analysis",
      title: "Evidence-Based Policy Formulation",
      description:
        "Understanding the analytical frameworks required for designing, implementing, and evaluating effective organizational policies.",
      date: "May 18",
      readTime: "10 min read",
      image: "/founders_corner_blog.png",
    },
  ],
  ms: [
    {
      category: "Sektor Awam",
      title: "Memodenkan Pentadbiran Awam di Malaysia",
      description:
        "Strategi utama untuk meningkatkan kecekapan, ketelusan, dan penyampaian perkhidmatan dalam agensi kerajaan menerusi amalan pentadbiran moden.",
      date: "Jul 7",
      readTime: "Bacaan 8 min",
      image: "/founders_corner_blog.png",
    },
    {
      category: "Kepimpinan",
      title: "Kepimpinan Strategik Semasa Tempoh Perubahan",
      description:
        "Bagaimana pemimpin awam dan swasta boleh mengemudi peralihan organisasi, mengurus rintangan, dan memberi inspirasi kepada pasukan.",
      date: "Jun 24",
      readTime: "Bacaan 6 min",
      image: "/founders_corner_blog.png",
    },
    {
      category: "Analisis Dasar",
      title: "Formulasi Dasar Berasaskan Bukti",
      description:
        "Memahami rangka kerja analitikal yang diperlukan untuk merangka, melaksana, dan menilai dasar organisasi yang berkesan.",
      date: "May 18",
      readTime: "Bacaan 10 min",
      image: "/founders_corner_blog.png",
    },
  ],
};

export default function Insights() {
  const params = useParams();
  const locale = ((params?.locale as string) || "en") as "en" | "ms";
  const items = insightsData[locale] || insightsData.en;
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 304; // w-[280px] + gap-6 (24px)
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const subtitle =
    locale === "ms"
      ? "Penulisan perspektif DrAA."
      : " DrAA's articles and viewpoints.";

  return (
    <section id="insights" className="scroll-mt-20 py-8 w-full">
      <div className="flex items-center justify-between mb-8 gap-x-4">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-primary">
            {locale === "ms" ? "Artikel & Wawasan" : "Insights"}
          </h2>
          <p className="mt-2 text-xs text-zinc-500 max-w-xl leading-relaxed font-light">
            {subtitle}
          </p>
        </div>
        {/* Navigation Arrows */}
        <div className="flex items-center gap-x-2 shrink-0">
          <button
            onClick={() => handleScroll("left")}
            className="w-7 h-7 rounded-full border border-grey hover:bg-light-grey flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4 text-zinc-500" />
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="w-7 h-7 rounded-full border border-grey hover:bg-light-grey flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 3 Blog Cards */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 pb-4 -mx-6 px-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] md:mx-0 md:px-0 md:grid md:grid-cols-3 md:pb-0 md:overflow-visible"
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col bg-white rounded-lg border border-grey overflow-hidden group shadow-xs hover:shadow-sm transition-all duration-200 shrink-0 w-[280px] snap-start scroll-ml-6 md:scroll-ml-0 md:shrink md:w-auto"
          >
            <div className="p-1 pb-0">
              <div className="h-44 relative overflow-hidden rounded-md bg-zinc-50">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-102 transition-transform duration-200"
                />
              </div>
            </div>
            <div className="p-5 pb-4 pt-3 flex flex-col justify-between flex-1">
              <div>
                <span className="text-[10px] font-medium text-accent tracking-wider">
                  {item.category}
                </span>
                <h3 className="mt-2 text-sm font-semibold text-primary leading-snug group-hover:text-accent transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-zinc-500 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-grey -mx-5 px-5 text-[10px] text-zinc-400 flex items-center gap-x-2">
                <span>{item.date}</span>
                <span>•</span>
                <span>{item.readTime}</span>
              </div>
            </div>
          </div>
        ))}
        {/* Spacer for right/end margin on mobile */}
        <div className="w-[1px] shrink-0 md:hidden" />
      </div>
    </section>
  );
}

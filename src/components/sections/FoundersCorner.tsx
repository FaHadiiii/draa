import Image from "next/image";

export default function FoundersCorner() {
  return (
    <section className="px-6 py-8 max-w-7xl mx-auto w-full">
      <div className="flex sm:flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-primary">
            Founders corner
          </h2>
        </div>
        {/* Navigation Arrows */}
        <div className="flex items-center gap-x-2">
          <button className="w-7 h-7 rounded-full border border-grey hover:bg-light-grey flex items-center justify-center transition-colors">
            <svg
              className="w-4 h-4 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="w-7 h-7 rounded-full bg-primary hover:bg-primary/95 flex items-center justify-center transition-colors text-white">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* 3 Blog Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {[1, 2, 3].map((cardIdx) => (
          <div
            key={cardIdx}
            className="flex flex-col bg-white rounded-xl border border-grey overflow-hidden group shadow-sm hover:shadow transition-all"
          >
            <div className="h-48 relative overflow-hidden bg-zinc-100">
              <Image
                src="/founders_corner_blog.png"
                alt="Founders Corner article theme"
                fill
                sizes="(max-w-768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-4 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center gap-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                  <span className="text-xs font-medium text-zinc-500">
                    Category
                  </span>
                </div>
                <h3 className="mt-3 text-sm font-medium text-primary leading-snug group-hover:text-primary/90 transition-colors">
                  Our people make the difference
                </h3>
                <p className="mt-2 text-xs text-zinc-500 leading-relaxed">
                  We're an extension of your customer service team, and all of
                  our resources are free. Chat to our friendly team 24/7 when
                  you need help.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-grey -mx-4 px-4 text-[10px] text-zinc-500 flex items-center gap-x-2">
                <span>Aug 10</span>
                <span>•</span>
                <span>10 min read</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

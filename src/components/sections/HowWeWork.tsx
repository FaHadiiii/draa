import Image from "next/image";

export default function HowWeWork() {
  return (
    <section id="how-it-works" className="scroll-mt-20 px-6 py-16 max-w-7xl mx-auto w-full">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Left Column: Heading and Image */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-primary">
              How we work
            </h2>
            <p className="mt-3 text-sm text-zinc-650 max-w-md">
              We have made the process of working with us as simple and
              transparent as possible.
            </p>
          </div>
          <div className="mt-6 relative h-[300px] rounded-xl overflow-hidden border border-grey group bg-zinc-100">
            <Image
              src="/how_we_work_building.png"
              alt="Modern corporate skyscraper"
              fill
              sizes="(max-w-1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Column: Step Items */}
        <div className="flex flex-col justify-center gap-y-6">
          {/* Step 1 */}
          <div className="flex gap-x-4 items-start">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white shrink-0">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-primary">
                Free consultation
              </h4>
              <p className="mt-1 text-xs text-zinc-600 leading-relaxed">
                Consultation and needs analysis. At this stage, we determine
                what type of property you need.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-x-4 items-start">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white shrink-0">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-primary">
                Search and selection of properties
              </h4>
              <p className="mt-1 text-xs text-zinc-600 leading-relaxed">
                We offer only verified properties that match your budget and
                goals.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-x-4 items-start">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white shrink-0">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-primary">
                Property viewing and assessment
              </h4>
              <p className="mt-1 text-xs text-zinc-600 leading-relaxed">
                We arrange property viewings and provide a complete information
                overview.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex gap-x-4 items-start">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white shrink-0">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-primary">
                Document verification and preparation
              </h4>
              <p className="mt-1 text-xs text-zinc-600 leading-relaxed">
                We conduct a comprehensive review of all documents and ownership
                rights.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex gap-x-4 items-start">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white shrink-0">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-primary">
                Transaction support
              </h4>
              <p className="mt-1 text-xs text-zinc-600 leading-relaxed">
                We provide support in concluding the contract and accompany you
                at all stages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

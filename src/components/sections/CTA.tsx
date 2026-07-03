export default function CTA() {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto w-full">
      <div className="bg-light-grey rounded-xl border border-grey p-8 sm:p-12 flex flex-col lg:flex-row justify-between items-center relative overflow-hidden gap-8">
        {/* Left content */}
        <div className="max-w-md z-10 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">
            CTA Heading
          </h2>
          <div className="w-16 h-0.5 bg-grey mt-4 mb-4 mx-auto lg:mx-0" />
          <p className="text-xs sm:text-sm text-zinc-650 mb-6 leading-relaxed">
            Experience the best real estate consultancy directly from your
            pocket. Download our native app to view curated properties, book
            tours, and receive live financial advice.
          </p>
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {/* App Store button */}
            <button className="bg-black hover:bg-black/90 text-white rounded-lg px-4 py-2 flex items-center gap-x-2 transition-colors border border-zinc-800">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.84-.98 2.94.1.08.2.12.31.12.87 0 1.98-.56 2.5-1.45z" />
              </svg>
              <div className="flex flex-col items-start leading-none">
                <span className="text-[9px] text-zinc-400">
                  Download on the
                </span>
                <span className="text-xs font-semibold mt-0.5">App Store</span>
              </div>
            </button>

            {/* Play Store button */}
            <button className="bg-black hover:bg-black/90 text-white rounded-lg px-4 py-2 flex items-center gap-x-2 transition-colors border border-zinc-800">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 3.05c-.17.18-.27.47-.27.84v16.22c0 .37.1.66.27.84l.06.06L14.7 11.4v-.17L5.06 2.99l-.06.06zM17.8 14.5l-3.1-3.1v-.17l3.1-3.1.07.04 3.66 2.08c1.04.59 1.04 1.57 0 2.16l-3.66 2.08-.07-.09zM14.7 11.4L5.06 21.05c.32.34.85.39 1.47.04l11.27-6.41-3.1-3.1v-.13zM6.53 2.91L14.7 11.08l3.1-3.1L6.53 1.57c-.62-.35-1.15-.3-1.47.04L6.53 2.91z" />
              </svg>
              <div className="flex flex-col items-start leading-none">
                <span className="text-[9px] text-zinc-400">Get it on</span>
                <span className="text-xs font-semibold mt-0.5">Google Play</span>
              </div>
            </button>
          </div>
        </div>

        {/* Right nested cut-out frames */}
        <div className="relative w-48 h-48 flex-shrink-0 z-0">
          <div className="absolute inset-0 bg-white rounded-xl border border-grey shadow-sm transform -rotate-6" />
          <div className="absolute inset-3 bg-white rounded-xl border border-grey shadow-inner transform rotate-3 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-grey"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

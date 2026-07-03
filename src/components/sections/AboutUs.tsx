export default function AboutUs() {
  return (
    <section id="about" className="px-6 py-16 max-w-7xl mx-auto w-full">
      <div className="grid lg:grid-cols-2">
        {/* Left Text */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold tracking-tight text-primary">
            About Us
          </h2>
          <p className="mt-4 text-sm text-zinc-600 leading-relaxed max-w-lg">
            Business Alliance is a federal network of commercial real estate
            agencies. We have been operating since 2015 and help companies –
            from startups to large corporations – find, rent, and buy office,
            warehouse, and retail spaces. Our team takes care of the search,
            negotiations, legal verification, and transaction support until the
            contract is signed.
          </p>
        </div>

        {/* Right Stats Grid */}
        <div className="grid grid-cols-2 pt-14 sm:pt-0 gap-10 gap-x-25 lg:justify-self-end">
          <div>
            <span className="text-3xl font-bold text-primary block">10+</span>
            <span className="text-xs font-medium text-zinc-500 mt-1 block">
              Years in the market
            </span>
          </div>
          <div>
            <span className="text-3xl font-bold text-primary block">1000+</span>
            <span className="text-xs font-medium text-zinc-500 mt-1 block">
              Successful deals
            </span>
          </div>
          <div>
            <span className="text-3xl font-bold text-primary block">4000+</span>
            <span className="text-xs font-medium text-zinc-500 mt-1 block">
              Properties in database
            </span>
          </div>
          <div>
            <span className="text-3xl font-bold text-primary block">95%</span>
            <span className="text-xs font-medium text-zinc-500 mt-1 block">
              Satisfied clients
            </span>
          </div>
        </div>
      </div>

      {/* Logo Band */}
      <div className="mt-12 pt-18 pb-6 border-grey flex flex-wrap items-center justify-around gap-6">
        {[1, 2, 3, 4, 5, 6].map((idx) => (
          <div
            key={idx}
            className="flex items-center gap-x-2 grayscale opacity-40 hover:opacity-100 transition-opacity"
          >
            <svg
              className="w-5 h-5 text-primary"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="text-xs font-bold tracking-tight text-zinc-700">
              Logoipsum
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

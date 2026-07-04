import Image from "next/image";

export default function PropertyCatalog() {
  return (
    <section
      id="catalog"
      className="scroll-mt-20 px-6 py-8 max-w-7xl mx-auto w-full"
    >
      <div className="flex sm:flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-primary">
            Property Catalog
          </h2>
          <p className="mt-1.5 text-xs text-zinc-500 sm:block hidden">
            A wide selection of real estate for your business
          </p>
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

      {/* 3 Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Card 1: Office spaces */}
        <div className="flex flex-col bg-white rounded-xl border border-grey overflow-hidden group shadow-sm hover:shadow transition-all">
          <div className="h-56 relative overflow-hidden bg-zinc-100">
            <Image
              src="/office_spaces.png"
              alt="Office Spaces"
              fill
              sizes="(max-w-768px) 100vw, 33vw"
              className="object-cover group-hover:scale-[1.01] transition-transform duration-500"
            />
          </div>
          <div className="p-4">
            <h3 className="text-sm font-medium text-primary">Office spaces</h3>
            <p className="mt-1 text-xs font-normal text-zinc-500">
              4000+ properties
            </p>
          </div>
        </div>

        {/* Card 2: Warehouse spaces */}
        <div className="flex flex-col bg-white rounded-xl border border-grey overflow-hidden group shadow-sm hover:shadow transition-all">
          <div className="h-56 relative overflow-hidden bg-zinc-100">
            <Image
              src="/warehouse_spaces.png"
              alt="Warehouse Spaces"
              fill
              sizes="(max-w-768px) 100vw, 33vw"
              className="object-cover group-hover:scale-[1.01] transition-transform duration-500"
            />
          </div>
          <div className="p-4">
            <h3 className="text-sm font-medium text-primary">
              Warehouse spaces
            </h3>
            <p className="mt-1 text-xs font-normal text-zinc-500">
              1000+ properties
            </p>
          </div>
        </div>

        {/* Card 3: Land plots */}
        <div className="flex flex-col bg-white rounded-xl border border-grey overflow-hidden group shadow-sm hover:shadow transition-all">
          <div className="h-56 relative overflow-hidden bg-zinc-100">
            <Image
              src="/land_plots.png"
              alt="Land plots"
              fill
              sizes="(max-w-768px) 100vw, 33vw"
              className="object-cover group-hover:scale-[1.01] transition-transform duration-500"
            />
          </div>
          <div className="p-4">
            <h3 className="text-sm font-medium text-primary">Land plots</h3>
            <p className="mt-1 text-xs font-normal text-zinc-500">
              2000+ properties
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

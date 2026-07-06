export default function Hero() {
  return (
    <section className="py-6 w-full">
      <div className="w-full h-[calc(100vh-7.5rem)] min-h-[550px] bg-light-grey rounded-xl border border-grey flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/[0.02] to-transparent pointer-events-none" />
        <span className="text-[11px] font-medium text-primary px-2.5 py-1 bg-grey rounded-md border border-grey/60">
          Real Estate & Advisory
        </span>
        <h2 className="text-xl sm:text-3xl font-semibold tracking-tight text-primary mt-5 max-w-2xl leading-tight">
          Consultancy Engineered for Modern Business
        </h2>
        <p className="mt-4 text-sm text-zinc-600 max-w-lg">
          Providing high-end workspace consulting, land acquisition analytics,
          and corporate transaction support services.
        </p>
      </div>
    </section>
  );
}

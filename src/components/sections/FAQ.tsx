export default function FAQ() {
  return (
    <section
      id="faq"
      className="px-6 py-16 max-w-7xl mx-auto w-full border-b border-grey"
    >
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Left Column: Heading */}
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-bold tracking-tight text-primary">
            FAQ Section
          </h2>
          <p className="mt-3 text-sm text-zinc-650 max-w-xs">
            We have made the process of working with us as simple and
            transparent as possible.
          </p>
        </div>

        {/* Right Column: Accordion Grid */}
        <div className="lg:col-span-2 flex flex-col gap-y-3">
          {[1, 2, 3, 4, 5, 6].map((qIdx) => (
            <div
              key={qIdx}
              className="bg-light-grey rounded-lg border border-grey overflow-hidden transition-all"
            >
              <button className="w-full px-5 py-4 flex items-center justify-between text-left font-medium text-sm text-primary hover:bg-grey/30 transition-colors">
                <span>Question {qIdx}</span>
                <span className="text-base">+</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

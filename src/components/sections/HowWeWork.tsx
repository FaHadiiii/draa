import Image from "next/image";
import { MessageSquare, Search, Map, FileText, CreditCard } from "lucide-react";

export default function HowWeWork() {
  return (
    <section id="how-it-works" className="scroll-mt-20 py-8 w-full">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Left Column: Heading and Image */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-primary">
              How we work
            </h2>
            <p className="mt-2 text-xs text-zinc-500 max-w-md">
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
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-primary">
                Free consultation
              </h4>
              <p className="mt-1 text-xs text-zinc-500 leading-relaxed">
                Consultation and needs analysis. At this stage, we determine
                what type of property you need.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-x-4 items-start">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white shrink-0">
              <Search className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-primary">
                Search and selection of properties
              </h4>
              <p className="mt-1 text-xs text-zinc-500 leading-relaxed">
                We offer only verified properties that match your budget and
                goals.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-x-4 items-start">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white shrink-0">
              <Map className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-primary">
                Property viewing and assessment
              </h4>
              <p className="mt-1 text-xs text-zinc-500 leading-relaxed">
                We arrange property viewings and provide a complete information
                overview.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex gap-x-4 items-start">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-primary">
                Document verification and preparation
              </h4>
              <p className="mt-1 text-xs text-zinc-500 leading-relaxed">
                We conduct a comprehensive review of all documents and ownership
                rights.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex gap-x-4 items-start">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white shrink-0">
              <CreditCard className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-primary">
                Transaction support
              </h4>
              <p className="mt-1 text-xs text-zinc-500 leading-relaxed">
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

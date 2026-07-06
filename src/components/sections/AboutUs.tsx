import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about" className="scroll-mt-20 pb-16 pt-10 w-full">
      <div className="grid lg:grid-cols-2">
        {/* Left Text */}
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-semibold tracking-tight text-primary">
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
        <div className="grid grid-cols-2 pt-14 sm:pt-0 gap-5 gap-x-25 lg:justify-self-end">
          <div>
            <span className="text-2xl font-semibold text-primary block">
              10+
            </span>
            <span className="text-xs font-normal text-zinc-500 mt-1 block">
              Years in the market
            </span>
          </div>
          <div>
            <span className="text-2xl font-semibold text-primary block">
              1000+
            </span>
            <span className="text-xs font-normal text-zinc-500 mt-1 block">
              Successful deals
            </span>
          </div>
          <div>
            <span className="text-2xl font-semibold text-primary block">
              4000+
            </span>
            <span className="text-xs font-normal text-zinc-500 mt-1 block">
              Properties in database
            </span>
          </div>
          <div>
            <span className="text-2xl font-semibold text-primary block">
              95%
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

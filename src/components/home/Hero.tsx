import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden h-[100dvh] bg-black text-white"
    >
      {/* Background image */}
      <img
        src="/image/Grid & Gradient.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover pointer-events-none"
      />

      {/* glows */}
      <div className="pointer-events-none absolute left-0 bottom-0 h-[34rem] w-[34rem] -translate-x-1/3 translate-y-1/3 rounded-full bg-[#12b886]/45 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-8rem] top-[12rem] h-[36rem] w-[36rem] rounded-full bg-[#4f46e5]/40 blur-[140px]" />
      <div className="pointer-events-none absolute left-1/2 top-[16rem] h-[14rem] w-[44rem] -translate-x-1/2 rounded-full bg-white/12 blur-[120px]" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-between px-6 lg:px-8 pt-14 pb-4">
        {/* top content */}
        <div className="mx-auto w-full max-w-5xl text-center pt-6">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6 leading-[1.1]">
            Turn enterprise adoption into a managed system.
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-[15px] leading-[1.65] text-white/80 sm:text-[17px]">
            AdoptionOS helps transformation teams understand where they are, know
            what to do next, and build a defensible path from transformation
            strategy to sustained adoption.
          </p>

          <div className="mt-5 mb-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-[15px] font-semibold text-black shadow-[0_10px_30px_rgba(255,255,255,0.08)] transition-transform hover:-translate-y-0.5"
            >
              Request a Demo
            </Link>

            <Link
              href="/platform"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/18 bg-white/6 px-7 text-[15px] font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              Explore the Platform
            </Link>
          </div>
        </div>

        {/* dashboard mockup */}
        <div className="relative w-full max-w-[1000px] pb-1">
          
          <div className="">
            <img
              src="/image/Group 2085664658.jpg"
              alt="AdoptionOS Leadership Dashboard"
              className="block h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
function SwirlIcon() {
  return (
    <svg className="w-5 h-5 text-[#3b7cf5] mb-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 12c2-3 5-4 7-2 2.5 2.5 1.5 6.5-2 6.5-3.5 0-5-2.5-5-4.5z" />
      <path d="M12 12c2-3 5-4 7-2 2.5 2.5 1.5 6.5-2 6.5-3.5 0-5-2.5-5-4.5z" transform="rotate(120, 12, 12)" />
      <path d="M12 12c2-3 5-4 7-2 2.5 2.5 1.5 6.5-2 6.5-3.5 0-5-2.5-5-4.5z" transform="rotate(240, 12, 12)" />
    </svg>
  );
}

export default function WhoItServes() {
  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden text-white"
      style={{
        background: "radial-gradient(circle at 0% 40%, #0e2f7d 0%, #071330 40%, #030816 80%, #01040a 100%)",
      }}
    >
      {/* Glow highlight */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#3b7cf5]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-wider px-5 py-2 rounded-full bg-white/5 text-white/80 border border-white/10 uppercase mb-6">
            WHO IT SERVES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-display font-bold text-white mb-5 leading-tight">
            Designed for the people accountable for adoption.
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            AdoptionOS brings methodology, transformation context, guidance, and
            decision support into one connected environment. It tells teams what
            to do, why it matters, when it should happen, who should own it, and
            what good looks like.
          </p>
        </div>

        {/* 2-Column Staggered Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto items-stretch">
          
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {/* Card 1: Enterprise transformation teams */}
            <div className="rounded-[24px] bg-white/[0.02] border border-white/10 p-8 lg:p-10 flex flex-col justify-start relative overflow-hidden backdrop-blur-sm hover:border-white/20 transition-all">
              <SwirlIcon />
              <h3 className="font-display font-bold text-white text-xl mb-3">
                Enterprise transformation teams
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Give your adoption team a structured system to manage work, track
                progress, and report to leadership—replacing fragmented spreadsheets
                and documents with a guided operating environment.
              </p>
            </div>

            {/* Card 2: Transformation offices and PMOs (with Screenshot) */}
            <div className="rounded-[24px] bg-white/[0.02] border border-white/10 p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden backdrop-blur-sm hover:border-white/20 transition-all flex-1">
              <div>
                <SwirlIcon />
                <h3 className="font-display font-bold text-white text-xl mb-3">
                  Transformation offices and PMOs
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Establish consistent adoption practices across multiple workstreams.
                  Surface risks, track readiness, and provide leadership with evidence-based
                  visibility into adoption progress.
                </p>
              </div>

              {/* Dashboard Screenshot */}
              <div className="relative mt-8 -mb-6 sm:-mb-12 -mr-4 sm:-mr-12 ml-2 transform -rotate-1 rounded-tl-2xl overflow-hidden border border-white/15 shadow-2xl">
                <img
                  src="/image/Screenshot 2026-07-26 100621 2.png"
                  alt="Transformation offices and PMOs evidence dashboard"
                  className="w-full h-auto object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* Card 3: Adoption and change leaders (with Screenshot) */}
            <div className="rounded-[24px] bg-white/[0.02] border border-white/10 p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden backdrop-blur-sm hover:border-white/20 transition-all flex-1">
              <div>
                <SwirlIcon />
                <h3 className="font-display font-bold text-white text-xl mb-3">
                  Adoption and change leaders
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Access methodology-backed guidance for every phase of the lifecycle.
                  Understand what good looks like, why it matters, and how to prioritize
                  when time and resources are constrained.
                </p>
              </div>

              {/* Dashboard Screenshot */}
              <div className="relative mt-8 -mb-6 sm:-mb-12 -mr-4 sm:-mr-12 ml-4 transform rotate-1 rounded-tl-2xl overflow-hidden border border-white/15 shadow-2xl">
                <img
                  src="/image/Screenshot 2026-07-26 100621 3.png"
                  alt="Adoption and change leaders dashboard"
                  className="w-full h-auto object-cover object-top"
                />
              </div>
            </div>

            {/* Card 4: Consultancies and system integrators */}
            <div className="rounded-[24px] bg-white/[0.02] border border-white/10 p-8 lg:p-10 flex flex-col justify-start relative overflow-hidden backdrop-blur-sm hover:border-white/20 transition-all">
              <SwirlIcon />
              <h3 className="font-display font-bold text-white text-xl mb-3">
                Consultancies and system integrators
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Deliver consistent methodology across isolated client engagements
                without mixing client information. Maintain repeatability, scale adoption
                capability, and manage multiple transformations from one platform.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

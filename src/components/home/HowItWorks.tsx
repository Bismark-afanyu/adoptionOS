export default function HowItWorks() {
  const capabilities = [
    {
      title: "Diagnose the Transformation",
      description:
        "Capture the transformation's context, delivery approach, timeline, people impact, sponsorship, and risks.",
    },
    {
      title: "Locate the Real Phase",
      description:
        "Pinpoint where the program truly sits in the lifecycle, even when adoption starts late.",
    },
    {
      title: "Build the Advisory Roadmap",
      description:
        "Get a roadmap of recommended adoption activities and deliverables, tailored to your phase.",
    },
    {
      title: "Guide Every Deliverable",
      description:
        "Know why each deliverable matters, when it's due, who owns it, and what quality looks like.",
    },
    {
      title: "Advise With Traceable AI",
      description:
        "Get contextual recommendations grounded in ABEN's Method™, with full rationale.",
    },
    {
      title: "Equip Leadership",
      description:
        "Generate leadership-ready reports on priorities, risks, decisions, and recommended actions.",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden"
    style={{
          background:
            "radial-gradient(circle at top center, #10245c 0%, #0a1740 35%, #000000 65%, #000000 100%)",
        }}
    >     

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-5 py-2 rounded-full border border-white/20 bg-white/5 mb-6">
            <span className="text-xs font-semibold text-white uppercase tracking-wider">
              Platform Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[1.9rem] font-display font-bold text-white max-w-3xl mx-auto leading-tight mb-4">
            A senior adoption advisor, structured as a platform.
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm leading-relaxed">
            AdoptionOS brings methodology, context, and decision support into one
            environment, telling teams what to do, why it matters, when, who owns
            it, and what good looks like.
          </p>
        </div>

        {/* Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        
        >
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="bg-[#0a1a3a]/60 border border-white/10 rounded-2xl p-7 hover:border-white/20 transition-all duration-300"
              style={{
          background:
            "radial-gradient(circle at top left, #10245c 0%, #0a1740 35%, #000000 65%, #000000 100%)",
        }}
              // style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Icon */}
              <div className="mb-5">
                <svg
                  className="w-6 h-6 text-white/70"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-white text-base mb-2">
                {cap.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

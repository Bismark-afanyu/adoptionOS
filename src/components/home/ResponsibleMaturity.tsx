const maturityStages = [
  {
    num: "01",
    title: "Advisory",
    highlight: "Teach what good looks like.",
    description:
      "The platform diagnoses, guides, maps, recommends, and reports. Practitioners remain in full control.",
    isCurrent: true,
  },
  {
    num: "02",
    title: "Assisted",
    highlight: "Help teams create it.",
    description:
      "Guided content creation with methodology templates, structured workflows, and practitioner review.",
    isCurrent: false,
  },
  {
    num: "03",
    title: "Managed",
    highlight: "Manage it as live work.",
    description:
      "Live adoption work managed within the platform with evidence collection and progress tracking.",
    isCurrent: false,
  },
  {
    num: "04",
    title: "Executed",
    highlight: "Execute with human oversight.",
    description:
      "Controlled execution with human oversight, integrations, and continuous feedback loops.",
    isCurrent: false,
  },
];

export default function ResponsibleMaturity() {
  return (
    <section className="py-24 lg:py-24 bg-white text-[#0f172a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-wider px-6 py-2 rounded-full bg-[#e2f6f1] text-[#0f765c] uppercase mb-6">
            RESPONSIBLE MATURITY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[1.9rem] font-display font-bold text-[#0f172a] mb-6 max-w-3xl mx-auto leading-tight">
            We automate only what the platform has first taught.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            AdoptionOS begins as a trusted advisory system. Capabilities then mature
            through assisted creation, managed workflows, and controlled execution. Each
            stage earns the right to advance through evidence, trust, and practitioner
            adoption.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto items-stretch mb-14 relative">
          {maturityStages.map((stage, index) => (
            <div
              key={stage.num}
              className={`relative rounded-[24px] p-7 flex flex-col justify-between min-h-[260px] transition-all ${
                stage.isCurrent
                  ? "bg-[#00ba88] text-white shadow-lg shadow-[#00ba88]/20"
                  : "bg-[#e2f6f1] text-[#0f172a]"
              }`}
            >
              {/* Floating "Current" badge on active stage */}
              {stage.isCurrent && (
                <span className="absolute -top-4 left-10 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border-2 border-[#00ba88] text-[#00ba88] text-xs font-bold shadow-sm z-20">
                  <span className="w-2 h-2 rounded-full bg-[#00ba88]" />
                  Current
                </span>
              )}

              <div>
                <span
                  className={`text-sm font-bold block mb-3 ${
                    stage.isCurrent ? "text-[#8fead3]" : "text-[#29b692]"
                  }`}
                >
                  {stage.num}
                </span>
                <h3
                  className={`text-xl font-bold font-display mb-2 ${
                    stage.isCurrent ? "text-white" : "text-[#0fa07c]"
                  }`}
                >
                  {stage.title}
                </h3>
                <p
                  className={`text-sm font-semibold mb-3 ${
                    stage.isCurrent ? "text-white" : "text-[#29b692]"
                  }`}
                >
                  {stage.highlight}
                </p>
                <p
                  className={`text-xs leading-relaxed ${
                    stage.isCurrent ? "text-white/90" : "text-slate-600"
                  }`}
                >
                  {stage.description}
                </p>
              </div>

              {/* Arrow connector between cards (on desktop) */}
              {index < maturityStages.length - 1 && (
                <div
                  className={`hidden lg:flex items-center justify-center w-8 h-8 rounded-full absolute -right-4 top-1/2 -translate-y-1/2 z-20 shadow-sm ${
                    stage.isCurrent
                      ? "bg-[#00ba88] text-white"
                      : "bg-white text-[#00ba88] border border-[#a8edd9]"
                  }`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="bg-[#e2f6f1] rounded-full px-8 py-2 max-w-4xl mx-auto text-center">
          <p className="text-xs sm:text-sm font-medium text-slate-700">
            The destination is{" "}
            <span className="font-semibold text-slate-900">
              Adoption Intelligence™
            </span>
            , a continuous feedback system that helps organizations anticipate and
            improve adoption.
          </p>
        </div>
      </div>
    </section>
  );
}

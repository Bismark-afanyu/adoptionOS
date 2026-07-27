import type { Metadata } from "next";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Methodology | ABEN's Method™   The AdoptionOS Foundation",
  description:
    "ABEN's Method™ is encoded into the platform's product logic shaping every advisory output, roadmap, and recommendation.",
};

const pillars = [
  {
    title: "Engagement",
    description:
      "Engagement ensures that people affected by the transformation are aware, informed, supported, and participating throughout the lifecycle.",
    items: [
      "Sponsorship activation and maintenance",
      "Stakeholder awareness and communication",
      "Two-way feedback and participation",
      "Resistance identification and resolution",
      "Commitment building across the organization",
    ],
  },
  {
    title: "Enablement",
    description:
      "Enablement ensures that people have the knowledge, skills, and tools required to perform effectively in the new environment.",
    items: [
      "Knowledge transfer and skill development",
      "Role-based learning pathways",
      "Practice and performance support",
      "Tool and process enablement",
      "Reinforcement and sustained competence",
    ],
  },
  {
    title: "Analytics",
    description:
      "Analytics transforms adoption data into evidence that drives decisions, surfaces gaps, and demonstrates the quality of adoption work.",
    items: [
      "Evidence collection and synthesis",
      "Adoption gap identification",
      "Decision-quality reporting",
      "Continuous improvement cycles",
      "Leadership visibility and accountability",
    ],
  },
];

const phases = [
  {
    num: "01",
    name: "Mobilize",
    description: "Establish the adoption foundation, governance, sponsorship, and initial direction.",
  },
  {
    num: "02",
    name: "Discover",
    description: "Understand the organization, impacted people, risks, and adoption needs.",
  },
  {
    num: "03",
    name: "Design",
    description: "Translate impacts into engagement, enablement, and analytics strategies.",
  },
  {
    num: "04",
    name: "Validate",
    description: "Test readiness, confirm understanding, and close gaps before launch.",
  },
  {
    num: "05",
    name: "Launch",
    description: "Support the transition and help people perform through go-live.",
  },
  {
    num: "06",
    name: "Sustain",
    description: "Reinforce behaviors, measure evidence, and embed the new way of working.",
  },
];

const principles = [
  {
    title: "Evidence over activity",
    description: "Adoption quality is measured by evidence of behavior change, not by the volume of activities completed.",
  },
  {
    title: "The Human Journey",
    description: "Every transformation is ultimately a human experience. The methodology centers the experience of the people who must change.",
  },
  {
    title: "Adoption Debt",
    description: "Adoption gaps that are not addressed during the transformation accumulate as adoption debt compounding cost and risk after go-live.",
  },
  {
    title: "Leadership moments",
    description: "Critical leadership actions at defined moments in the lifecycle have disproportionate impact on adoption outcomes.",
  },
  {
    title: "Methodology traceability",
    description: "Every recommendation, deliverable, and advisory output in AdoptionOS is traceable to ABEN's Method™.",
  },
  {
    title: "Progressive complexity",
    description: "The methodology scales from focused single-system deployments to complex global transformation programs.",
  },
];

export default function MethodologyPage() {
  return (
    <>
      <section
        className="min-h-screen flex items-center relative overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at bottom center, #10245c 0%, #0a1740 35%, #050a1a 75%, #000000 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">

              <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6 leading-[1.1]">
                The methodology inside the operating system.
              </h1>
              <p className="text-lg text-white/70 leading-relaxed">
                AdoptionOS is not a generic software platform with a methodology
                attached. ABEN&apos;s Method™ is encoded into the platform&apos;s
                product logic shaping every advisory output, roadmap, and
                recommendation.
              </p>
            </div>
            <div className="hidden lg:flex justify-center">
              <img
                src="/image/query-illustration.png"
                alt="ABEN's Method illustration"
                className="w-full max-w-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
  <div className="max-w-6xl mx-auto px-6 lg:px-8">
    <div className="text-center">
      <span className="inline-flex items-center justify-center rounded-full bg-[#eef3ff] px-8 py-3 text-[15px] font-medium text-slate-700 shadow-[0_2px_20px_rgba(76,110,245,0.06)]">
        THE FOUNDATION
      </span>

      <h2 className="mt-8 text-[28px] sm:text-[38px] font-semibold tracking-[-0.04em] text-black">
        ABEN&apos;s Adoption Formula™
      </h2>

      <div className="relative mx-auto mt-5 max-w-[980px] overflow-hidden rounded-[26px] bg-[#eef3ff] px-6 py-10 sm:px-10 sm:py-12">
        {/* soft abstract background waves */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-16 top-[-40px] h-56 w-56 rounded-full bg-[#bfd0ff]/70 blur-3xl" />
          <div className="absolute left-[18%] top-[28%] h-40 w-72 rounded-full bg-[#dbe7ff]/90 blur-3xl" />
          <div className="absolute right-[12%] bottom-[-30px] h-44 w-72 rounded-full bg-[#c8d8ff]/80 blur-3xl" />
          <svg
            className="absolute left-0 top-0 h-full w-full opacity-35"
            viewBox="0 0 1200 260"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0 80C120 20 220 20 340 70C470 125 560 160 720 150C850 142 930 95 1050 105C1125 112 1165 132 1200 150"
              stroke="#c1d3ff"
              strokeWidth="28"
              strokeLinecap="round"
            />
            <path
              d="M40 108C170 48 260 50 375 96C500 146 615 178 775 168C915 158 1000 112 1120 120"
              stroke="#d8e4ff"
              strokeWidth="18"
              strokeLinecap="round"
            />
            <path
              d="M110 148C235 92 330 98 455 136C590 178 700 198 850 188C980 180 1080 146 1170 150"
              stroke="#cddcff"
              strokeWidth="12"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
          <span className="inline-flex min-w-0 sm:min-w-[150px] items-center justify-center rounded-[20px] sm:rounded-[26px] bg-white px-5 sm:px-8 py-3 sm:py-5 text-lg sm:text-[22px] font-semibold tracking-[-0.03em] text-black shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
            Adoption
          </span>

          <span className="text-xl sm:text-[28px] font-semibold leading-none text-black">
            =
          </span>

          <span className="inline-flex min-w-0 sm:min-w-[192px] items-center justify-center rounded-[20px] sm:rounded-[26px] bg-[#12c2a3] px-5 sm:px-8 py-3 sm:py-5 text-lg sm:text-[22px] font-semibold tracking-[-0.03em] text-white shadow-[0_10px_30px_rgba(18,194,163,0.16)]">
            Engagement
          </span>

          <span className="text-xl sm:text-[28px] font-semibold leading-none text-black">
            +
          </span>

          <span className="inline-flex min-w-0 sm:min-w-[190px] items-center justify-center rounded-[20px] sm:rounded-[26px] bg-[#2e65f5] px-5 sm:px-8 py-3 sm:py-5 text-lg sm:text-[22px] font-semibold tracking-[-0.03em] text-white shadow-[0_10px_30px_rgba(46,101,245,0.16)]">
            Enablement
          </span>

          <span className="text-xl sm:text-[28px] font-semibold leading-none text-black">
            +
          </span>

          <span className="inline-flex min-w-0 sm:min-w-[160px] items-center justify-center rounded-[20px] sm:rounded-[26px] bg-[#7a3df0] px-5 sm:px-8 py-3 sm:py-5 text-lg sm:text-[22px] font-semibold tracking-[-0.03em] text-white shadow-[0_10px_30px_rgba(122,61,240,0.16)]">
            Analytics
          </span>
        </div>
      </div>

      <p className="mx-auto mt-5 max-w-[660px] text-[18px] leading-[1.65] text-slate-700">
        The formula expresses a fundamental truth: enterprise adoption requires
        all three pillars operating together. Neglecting any one creates
        adoption gaps that compound over time.
      </p>
    </div>
  </div>
</section>

      <section className="py-24 bg-[#eef1fb]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-white text-primary text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              HOW IT WORKS
            </span>
            <h2 className="text-section-xl font-display font-bold text-primary max-w-2xl mx-auto">
              From transformation context to a defensible adoption roadmap.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-2xl p-8">
              <h3 className="font-display font-bold text-accent text-xl mb-3">
                {pillars[0].title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                {pillars[0].description}
              </p>
              <ul className="space-y-2">
                {pillars[0].items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted">
                    <span className="text-accent mt-1 flex-shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/image/Business Meeting Restaurant.png"
                alt="Team collaborating on adoption strategy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  {[pillars[1], pillars[2]].map((pillar, index) => (
    <div 
      key={pillar.title} 
      className={`${index === 0 ? 'bg-[#0B1D3A]' : 'bg-white'} rounded-2xl p-8`}
    >
      <h3 className={`font-display font-bold text-xl mb-3 ${index === 0 ? 'text-white' : 'text-accent'}`}>
        {pillar.title}
      </h3>
      <p className={`text-sm leading-relaxed mb-4 ${index === 0 ? 'text-white/80' : 'text-muted'}`}>
        {pillar.description}
      </p>
      <ul className="space-y-2">
        {pillar.items.map((item) => (
          <li key={item} className={`flex items-start gap-2 text-sm ${index === 0 ? 'text-white/80' : 'text-muted'}`}>
            <span className={`${index === 0 ? 'text-white' : 'text-accent'} mt-1 flex-shrink-0`}>•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-6">
            <span className="inline-block bg-[#eef1fb] text-primary text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              THE FOUNDATION
            </span>
            <h2 className="text-section-xl font-display font-bold text-primary mb-4">
              The Six Phases
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              ABEN&apos;s Method™ provides the intellectual foundation for
              AdoptionOS. The Adoption Operating System™ book series teaches the
              methodology. The software operationalizes it across real
              enterprise transformations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
            {phases.map((phase) => (
              <div
                key={phase.num}
                className="bg-[#eef1fb] rounded-2xl p-6 flex items-start gap-4"
              >
                <div className="bg-accent text-white rounded-xl w-14 h-16 flex-shrink-0 flex flex-col items-center justify-center">
                  <span className="text-[10px] font-mono uppercase tracking-wide opacity-80">
                    Phase
                  </span>
                  <span className="text-2xl font-display font-bold leading-none">
                    {Number(phase.num)}
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-accent text-lg mb-1">
                    {phase.name}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-muted mt-10 max-w-xl mx-auto">
            AdoptionOS can map ABEN&apos;s Method™ to the language and phases of
            an organization&apos;s existing transformation methodology.
          </p>
        </div>
      </section>

      <section
        className="py-24 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #10245c 0%, #0a1740 50%, #050a1a 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <span className="inline-block bg-white/10 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              PLATFORM CAPABILITIES
            </span>
            <h2 className="text-section-xl font-display font-bold text-white">
              Methodology Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {principles.map((p) => (
              <div
                key={p.title}
                className="bg-white/[0.05] border border-white/10 rounded-2xl p-6"
              >
                <svg
                  className="w-6 h-6 text-white/70 mb-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <circle cx="12" cy="7" r="3.2" />
                  <circle cx="7" cy="15" r="3.2" />
                  <circle cx="17" cy="15" r="3.2" />
                </svg>
                <h3 className="font-display font-semibold text-white mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="See the Method in the Platform."
        description="Request a demonstration to see how ABEN's Method™ is encoded into the AdoptionOS advisory system."
        primaryLabel="See the Method in the Platform"
      />
    </>
  );
}
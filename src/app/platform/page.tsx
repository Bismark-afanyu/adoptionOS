import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Platform | AdoptionOS   Guidance for Every Adoption Stage",
  description:
    "AdoptionOS behaves like an experienced enterprise adoption advisor. It understands the transformation context, identifies the current phase, and recommends the work that matters.",
};

const capabilityIcons: Record<string, React.ReactNode> = {
  "01": <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" /></>,
  "02": <path d="M3 12h4l2-6 4 12 2-6h6" />,
  "03": <><circle cx="12" cy="12" r="9" /><path d="M14.5 9.5L10 14l1-4.5 4.5-1z" fill="currentColor" stroke="none" /></>,
  "04": <><circle cx="5" cy="6" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="19" cy="18" r="1.5" /><path d="M6.3 7.1L10.7 10.9M13.3 13.1L17.7 16.9" /></>,
  "05": <><rect x="6" y="3" width="12" height="18" rx="2" /><path d="M9 8h6M9 12h6M9 16h4" /></>,
  "06": <path d="M4 6h2M4 12h2M4 18h2M9 6h11M9 12h11M9 18h11" />,
  "07": <><circle cx="12" cy="8" r="3.5" /><path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7" /></>,
  "08": <><rect x="7" y="7" width="10" height="10" rx="1" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" /></>,
  "09": <path d="M5 20V10M11 20V4M17 20v-7" />,
  "10": <><path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" /><path d="M9 12l2 2 4-4" /></>,
};

const capabilityCardStyles = [
  { card: "bg-card border border-border", icon: "bg-background text-primary", title: "text-primary", desc: "text-muted", link: "text-primary", blob: "bg-black/5" },
  { card: "bg-accent/15", icon: "bg-white/70 text-accent", title: "text-primary", desc: "text-muted", link: "text-accent", blob: "bg-accent/20" },
  { card: "bg-[#0a1740] text-white", icon: "bg-white/10 text-white", title: "text-white", desc: "text-white/70", link: "text-white", blob: "bg-white/10" },
];

const currentCapabilities = [
  {
    num: "01",
    title: "Transformation Setup",
    description:
      "Define the transformation profile: organizational context, delivery approach, program scope, timeline, impacted functions, and business impact.",
    features: [
      "Organizational profile",
      "Delivery methodology",
      "Program scope and timeline",
      "Impacted functions and populations",
      "Business impact and drivers",
    ],
  },
  {
    num: "02",
    title: "Diagnostic Assessment",
    description:
      "Assess the current state of adoption readiness across sponsorship quality, change capacity, people impact, risk landscape, and organizational factors.",
    features: [
      "Sponsorship assessment",
      "Readiness indicators",
      "Change capacity evaluation",
      "Risk identification",
      "People impact analysis",
    ],
  },
  {
    num: "03",
    title: "Phase Mapping",
    description:
      "Identify where the program genuinely sits within the six-phase ABEN's Method™ lifecycle. This mapping remains accurate even when adoption work begins at an advanced stage.",
    features: [
      "Six-phase lifecycle alignment",
      "Late-entry positioning",
      "Phase transition indicators",
      "Methodology traceability",
    ],
  },
  {
    num: "04",
    title: "Advisory Roadmap",
    description:
      "Receive a transformation-specific roadmap of recommended adoption activities, deliverables, owners, and timing derived from the diagnostic results and phase position.",
    features: [
      "Phase-specific activities",
      "Recommended deliverables",
      "Ownership guidance",
      "Priority sequencing",
      "Timing recommendations",
    ],
  },
  {
    num: "05",
    title: "Deliverable Guidance",
    description:
      "For every recommended deliverable, the platform explains why it matters, when it is needed, who should own it, what quality looks like, and how it connects to ABEN's Method™.",
    features: [
      "Purpose and rationale",
      "Quality standards",
      "Ownership guidance",
      "Methodology connection",
      "Timing context",
    ],
  },
  {
    num: "06",
    title: "Activity Guidance",
    description:
      "Access structured guidance for every recommended adoption activity explaining the objective, approach, inputs, outputs, and practitioner considerations.",
    features: [
      "Activity objectives",
      "Recommended approach",
      "Required inputs",
      "Expected outputs",
      "Practitioner notes",
    ],
  },
  {
    num: "07",
    title: "Leadership Guidance",
    description:
      "Generate leadership-ready advisory outputs that surface the priorities, risks, decisions, and recommended actions relevant to executive stakeholders at each phase.",
    features: [
      "Priority summary",
      "Risk visibility",
      "Decision requirements",
      "Recommended actions",
      "Leadership-ready format",
    ],
  },
  {
    num: "08",
    title: "AI Advisor",
    description:
      "Receive contextual AI recommendations grounded in ABEN's Method™ and the transformation's actual profile. Every recommendation includes traceable rationale.",
    features: [
      "Methodology-grounded recommendations",
      "Context-aware guidance",
      "Traceable rationale",
      "Practitioner decision support",
    ],
  },
  {
    num: "09",
    title: "Advisory Report",
    description:
      "Generate structured advisory reports that consolidate transformation context, phase position, diagnostic findings, roadmap, and leadership guidance into a single coherent output.",
    features: [
      "Transformation summary",
      "Diagnostic findings",
      "Phase position",
      "Roadmap overview",
      "Leadership advisory",
    ],
  },
  {
    num: "10",
    title: "Enterprise Governance and Security",
    description:
      "Manage platform access, maintain client isolation, and operate within enterprise security and governance requirements.",
    features: [
      "Role-based access",
      "Client isolation",
      "Enterprise security",
      "Governance controls",
      "Audit capability",
    ],
  },
];

const roadmapItems = [
  {
    title: "Assisted content creation",
    description:
      "Guided creation of adoption deliverables using methodology templates and structured workflows.",
  },
  {
    title: "Live work management",
    description:
      "Manage adoption activities, milestones, and deliverables as live program work within the platform.",
  },
  {
    title: "Evidence collection",
    description:
      "Capture and consolidate adoption evidence from multiple sources to inform decisions and reporting.",
  },
  {
    title: "Integration layer",
    description:
      "Connect AdoptionOS to enterprise systems including HRIS, project management, and communication platforms.",
  },
  {
    title: "Adoption Intelligence™",
    description:
      "A continuous feedback system that helps organizations anticipate adoption gaps and improve outcomes over time.",
  },
];

const principles = [
  {
    title: "Methodology before technology",
    description:
      "Every capability is grounded in ABEN's Method™ before it is encoded into software.",
  },
  {
    title: "Advise before automating",
    description:
      "The platform teaches and advises before it assists or executes.",
  },
  {
    title: "Evidence over activity",
    description:
      "Outcomes are measured by adoption evidence, not task completion.",
  },
  {
    title: "Human judgment remains central",
    description: "AI proposes. Practitioners decide. Oversight is never optional.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <section
        className="min-h-screen flex items-center relative overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at 75% 50%, #10245c 0%, #0a1740 35%, #050a1a 75%, #000000 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full py-16 sm:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6 leading-[1.1]">
                Guidance for every stage of enterprise adoption.
              </h1>

              <p className="text-lg text-white/70 leading-relaxed mb-10">
                AdoptionOS behaves like an experienced enterprise adoption advisor.
                It understands the transformation context, identifies the current
                phase, recommends the work that matters, and explains what good
                looks like.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-dark font-semibold px-8 py-3.5 rounded-md hover:bg-white/90 transition-all text-center"
                >
                  Request a Demo
                </Link>
                <Link
                  href="/platform"
                  className="border border-white/30 text-white font-semibold px-8 py-3.5 rounded-md hover:bg-white/10 hover:border-white/50 transition-all text-center"
                >
                  Explore the Platform
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <img
                src="/image/store-illustration.png"
                alt="AdoptionOS platform illustration"
                className="w-full max-w-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 lg:py-28 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    {/* Hero */}
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start mb-24">

      <div>
        <div className="flex items-start gap-5 mb-8">
          <div className="w-[6px] h-24 bg-primary rounded-full flex-shrink-0" />

          <div>
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-primary leading-tight">
              What AdoptionOS
              <br />
              Does Today
            </h2>

            <p className="mt-2 text-muted">
              Current capabilities, available now
            </p>
          </div>
        </div>

        <p className="ml-6 max-w-md leading-8 text-muted">
          The initial AdoptionOS platform diagnoses transformation context,
          advises on approach, guides adoption work, maps to the lifecycle,
          recommends activities and deliverables, and generates
          leadership-ready advisory outputs. Every capability is grounded in
          ABEN&apos;s Method™.
        </p>
      </div>

      <div className="relative">
        <div className="absolute -left-4 bottom-[-14px] w-full h-full border-l-[8px] border-b-[8px] border-primary" />

        <img
          src="/image/image 7.png"
          alt="Team Collaboration"
          className="relative w-full rounded-sm object-cover aspect-[4/3]"
        />
      </div>

    </div>

    {/* Capability Cards */}

    <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">

      {currentCapabilities.map((cap) => (

        <div
          key={cap.num}
          className="relative bg-white pt-6 overflow-hidden"
        >

          {/* Top Line */}

          <div className="absolute top-0 left-0 w-full h-[5px] flex">

            <div className="flex-1 bg-[#1CC8A0]" />
            <div className="flex-1 bg-[#3662FF]" />
            <div className="flex-1 bg-[#8457FF]" />
            <div className="flex-1 bg-[#1CC8A0]" />
            <div className="flex-1 bg-[#8457FF]" />

          </div>

          {/* Watermark */}

          <div className="absolute right-2 bottom-35 text-[110px] font-bold text-[#EEF2FB] leading-none pointer-events-none select-none">
            {cap.num}
          </div>

          {/* Content */}

          <div className="relative z-10">

            <span className="text-sm font-medium text-slate-400">
              {cap.num}
            </span>

            <h3 className="mt-3 text-xl font-semibold text-primary">
              {cap.title}
            </h3>

            <p className="mt-4 text-[15px] leading-7 text-muted max-w-lg">
              {cap.description}
            </p>

            {/* Tags */}

            <div className="mt-7 flex flex-wrap gap-2">

              {[
                "Organization profile",
                "Delivery methodology",
                "Program scope",
                "Impacted functions",
                "Business impact"
              ].map((tag: string) => (

                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full bg-[#EEF2FF] text-[12px] text-slate-600"
                >
                  {tag}
                </span>

              ))}

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>
</section>

      <section
        className="py-24 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0a1740 0%, #081235 50%, #050a1a 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-3">
            What Comes Next
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Roadmap capabilities, coming in future releases
          </p>
          <p className="text-white/60 leading-relaxed max-w-3xl mb-16">
            AdoptionOS matures responsibly. Future capabilities will advance
            toward assisted creation, live management, controlled execution, and
            Adoption Intelligence™ each stage earning the right to advance
            through evidence, trust, and practitioner adoption.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roadmapItems.map((item) => (
              <div
                key={item.title}
                className="relative bg-white/[0.04] border border-white/10 rounded-2xl p-8 overflow-hidden flex flex-col justify-between min-h-[280px]"
              >
                <svg
                  className="absolute -right-6 -bottom-10 w-56 h-56 text-white/5 pointer-events-none"
                  viewBox="0 0 200 200"
                  fill="currentColor"
                >
                  <path d="M100 20c30 0 40 25 55 35 20 13 30 30 20 55-9 22-10 45-35 55-25 10-45 0-65-10-20-10-45-15-55-40-9-23 5-45 20-60 15-15 30-35 60-35z" />
                </svg>

                <div className="relative z-10">
                  <span className="text-[11px] font-mono text-[#b8a480] uppercase tracking-wider">
                    Roadmap
                  </span>
                  <h3 className="font-display font-semibold text-white text-xl mt-3">
                    {item.title}
                  </h3>
                </div>

                <p className="relative z-10 text-sm text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#eef1fb] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-[#0a1740] text-center mb-12">
            Product Philosophy
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-2xl p-7"
              >
                <svg
                  className="w-6 h-6 text-[#0a1740] mb-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <circle cx="12" cy="7" r="3.2" />
                  <circle cx="7" cy="15" r="3.2" />
                  <circle cx="17" cy="15" r="3.2" />
                </svg>
                <h3 className="font-display font-semibold text-[#0a1740] mb-2 text-lg leading-snug">
                  {p.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="See AdoptionOS in action."
        description="Request a platform demonstration and explore how AdoptionOS can support your transformation team."
      />
    </>
  );
}
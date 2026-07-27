import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Consulting | AdoptionOS   Enterprise Adoption Advisory",
  description:
    "AdoptionOS Consulting helps organizations apply the methodology, establish the adoption operating model, and strengthen transformation outcomes.",
};

const approach = [
  { title: "Methodology-backed", description: "Every engagement is grounded in ABEN's Method™" },
  { title: "Platform-supported", description: "AdoptionOS provides structure, guidance, and reporting" },
  { title: "Outcome-oriented", description: "Focused on adoption evidence, not activity volume" },
  { title: "Capability-building", description: "Designed to leave organizations stronger than we found them" },
];

const pillars = [
  { title: "Engagement", description: "The human connection required to build awareness, sponsorship, participation, feedback, and commitment throughout the transformation.", color: "bg-[#12b886]", image: "/image/Frame14.jpg", objectPosition: "center center" },
  { title: "Enablement", description: "The knowledge, skills, tools, practice, and reinforcement required for people to work successfully in the new environment.", color: "bg-[#3b7cf5]", image: "/image/Frame.jpg", objectPosition: "center top" },
  { title: "Analytics", description: "The evidence required to understand adoption, identify gaps, guide decisions, and continuously improve outcomes across the lifecycle.", color: "bg-[#7c5ce0]", image: "/image/Frame0.jpg", objectPosition: "center top" },
];

const services = [
  {
    phase: "Diagnose",
    items: [
      { title: "Transformation diagnostic", description: "Assess the current state of adoption readiness, sponsorship quality, risk landscape, and program positioning." },
      { title: "Adoption operating model review", description: "Evaluate the current adoption structure, roles, processes, and capabilities against the demands of the transformation." },
    ],
  },
  {
    phase: "Design",
    items: [
      { title: "Adoption strategy development", description: "Design the adoption approach, operating model, resourcing plan, and measurement framework for the transformation." },
      { title: "Engagement and enablement planning", description: "Develop the engagement and enablement strategies aligned to the transformation scope and impacted populations." },
    ],
  },
  {
    phase: "Mobilize",
    items: [
      { title: "Adoption operating model setup", description: "Establish governance, roles, accountabilities, and processes for managing adoption throughout the transformation." },
      { title: "Executive adoption advisory", description: "Provide senior adoption leadership to support executive decision-making and transformation governance." },
    ],
  },
  {
    phase: "Prepare",
    items: [
      { title: "Readiness assessment and planning", description: "Validate organizational readiness for go-live and develop targeted interventions to close identified gaps." },
      { title: "Capability building", description: "Develop the internal capability of adoption and change teams to sustain adoption work beyond the engagement." },
    ],
  },
  {
    phase: "Launch",
    items: [
      { title: "Go-live adoption support", description: "Provide structured support through the transition into the new environment, helping people perform from day one." },
      { title: "ERP transformation adoption leadership", description: "Specialized adoption leadership for large-scale ERP and digital transformation programs at critical launch moments." },
    ],
  },
  {
    phase: "Sustain",
    items: [
      { title: "Sustainment planning and execution", description: "Design and implement sustainment strategies that reinforce behaviors, close adoption gaps, and embed the new way of working." },
      { title: "AdoptionOS platform implementation", description: "Implement and configure AdoptionOS for the organization, ensuring the platform is aligned to the transformation context." },
    ],
  },
];

const engagementTypes = [
  "Executive adoption advisory",
  "ERP transformation adoption leadership",
  "Adoption strategy and roadmap development",
  "Adoption operating model setup",
  "Readiness and go-live support",
  "Sustainment planning",
  "Capability-building for internal teams",
  "AdoptionOS platform implementation",
];

const consultBenefits = [
  { title: "Client isolation", description: "Each engagement operates in a separate environment. No client information is shared or mixed.", color: "border-l-[#3b7cf5]" },
  { title: "Methodology repeatability", description: "ABEN's Method™ is consistently applied across every engagement, regardless of which advisor leads it.", color: "border-l-[#7c5ce0]" },
  { title: "Scalable delivery", description: "Manage multiple concurrent transformations from a single platform without loss of quality or consistency.", color: "border-l-[#3b7cf5]" },
  { title: "Capability transfer", description: "Build client-side adoption capability that reduces long-term consulting dependency.", color: "border-l-[#7c5ce0]" },
];

function Eyebrow({ children, tone = "light" }: { children: React.ReactNode; tone?: "light" | "dark" }) {
  return (
    <span
      className={`inline-block text-xs font-semibold px-4 py-1.5 rounded-full mb-4 ${tone === "dark" ? "bg-white/10 text-white" : "bg-[#eef1fb] text-primary"
        }`}
    >
      {children}
    </span>
  );
}

export default function ConsultingPage() {
  return (
    <>
      <section
        className="min-h-screen flex items-center relative overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at top center, #10245c 0%, #0a1740 35%, #050a1a 75%, #000000 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6 leading-[1.1]">
                Enterprise adoption leadership, supported by a repeatable system.
              </h1>
              <p className="text-lg text-white/70 leading-relaxed mb-10">
                AdoptionOS Consulting helps organizations apply the methodology,
                establish the adoption operating model, strengthen critical
                transformation moments, and prepare internal teams to sustain
                adoption.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-dark font-semibold px-8 py-3.5 rounded-md hover:bg-white/90 transition-all"
              >
                Discuss Your Transformation
              </Link>
            </div>
            <div className="hidden lg:flex justify-center">
              <img
                src="/image/Group 35.jpg"
                alt="ABEN's Method illustration"
                className="w-full max-w-lg"
              />
            </div>
          </div>

        </div>
      </section>

      <section className="py-20 bg-[#eef1fb]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-start">
            {/* Left feature card */}
            <div className="relative overflow-hidden rounded-[22px] max-h-[438px]  bg-slate-900">
              <img
                src="/image/Woman Sitting on Chair.jpg"
                alt="Our Approach"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/55" />

              <div className="relative z-10 h-full flex flex-col justify-end p-8 sm:p-10 lg:p-12 text-white">
                <span className="inline-flex w-fit items-center rounded-full bg-white px-4 py-2 text-[16px] font-medium text-black shadow-sm mb-16">
                  Our Approach
                </span>

                <h2 className="max-w-[620px] text-[28px] sm:text-[32px] lg:text-[32px] font-semibold tracking-[-0.04em] leading-[1.08] text-white">
                  Advisory led.
                  <br />
                  Methodology backed.
                  <br />
                  Outcome focused.
                </h2>

                <p className="mt-4 max-w-[620px] text-[16px] leading-[1.5] text-white/90">
                  AdoptionOS Consulting is not generic staff augmentation. Our
                  advisors bring structured methodology, transformation experience,
                  and the AdoptionOS platform to every engagement, delivering
                  repeatable outcomes rather than individual effort.
                </p>
              </div>
            </div>

            {/* Right cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 pt-2">
              {approach.map((a) => (
                <div
                  key={a.title}
                  className="relative rounded-[22px] bg-white p-8 sm:p-9 min-h-[190px] shadow-[0_8px_30px_rgba(15,23,42,0.03)]"
                >
                  <div className="h-[7px] w-full rounded-full bg-[#2f66f4] mb-2" />

                  <h3 className="text-[16px] leading-tight font-semibold tracking-[-0.03em] text-black">
                    {a.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-[1.5] text-slate-800/90 max-w-[300px]">
                    {a.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center justify-center rounded-full bg-[#eef1fb] px-6 py-2 text-sm font-medium text-primary mb-8">
              THE FOUNDATION
            </span>

            <h2 className="text-2xl sm:text-[32px] font-display font-bold text-primary max-w-4xl mx-auto mb-5">
              Adoption is not one workstream. It is a connected system.
            </h2>

            <div className="relative mx-auto mb-10 max-w-5xl overflow-hidden rounded-[28px] bg-[#eef3ff] px-6 py-8 sm:px-10 sm:py-10">
              <div className="pointer-events-none absolute inset-0">
                <svg
                  className="absolute left-0 top-0 h-full w-full opacity-40"
                  viewBox="0 0 1200 240"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 70C140 10 250 20 370 70C500 125 610 155 760 145C900 135 990 90 1120 100C1160 103 1185 110 1200 118"
                    stroke="#bfd0ff"
                    strokeWidth="26"
                    strokeLinecap="round"
                  />
                  <path
                    d="M20 95C160 35 280 40 395 88C525 142 635 172 790 160C930 150 1030 110 1160 118"
                    stroke="#d8e4ff"
                    strokeWidth="18"
                    strokeLinecap="round"
                  />
                  <path
                    d="M90 128C230 75 335 82 455 126C585 176 695 196 845 186C975 178 1070 148 1180 150"
                    stroke="#cddcff"
                    strokeWidth="12"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
                <span className="inline-flex min-w-0 sm:min-w-[148px] items-center justify-center rounded-[20px] sm:rounded-[28px] bg-white px-5 sm:px-8 py-3 sm:py-5 text-base sm:text-lg font-bold text-black shadow-sm">
                  Adoption
                </span>

                <span className="text-xl sm:text-2xl font-bold text-black">=</span>

                <span className="inline-flex min-w-0 sm:min-w-[188px] items-center justify-center rounded-[20px] sm:rounded-[28px] bg-[#12b886] px-5 sm:px-8 py-3 sm:py-5 text-base sm:text-lg font-bold text-white shadow-sm">
                  Engagement
                </span>

                <span className="text-xl sm:text-2xl font-bold text-black">+</span>

                <span className="inline-flex min-w-0 sm:min-w-[188px] items-center justify-center rounded-[20px] sm:rounded-[28px] bg-[#3b7cf5] px-5 sm:px-8 py-3 sm:py-5 text-base sm:text-lg font-bold text-white shadow-sm">
                  Enablement
                </span>

                <span className="text-xl sm:text-2xl font-bold text-black">+</span>

                <span className="inline-flex min-w-0 sm:min-w-[160px] items-center justify-center rounded-[20px] sm:rounded-[28px] bg-[#7c5ce0] px-5 sm:px-8 py-3 sm:py-5 text-base sm:text-lg font-bold text-white shadow-sm">
                  Analytics
                </span>
              </div>
            </div>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="overflow-hidden rounded-[24px] bg-[#eef3ff] flex flex-col h-full"
              >
                <div className="p-8 sm:p-9 min-h-[190px]">
                  <h3 className="mb-3 text-[20px] font-semibold tracking-[-0.03em] text-black">
                    {pillar.title}
                  </h3>
                  <p className="max-w-full text-[14px] sm:text-[16px] leading-[1.5] text-black/75">
                    {pillar.description}
                  </p>
                </div>

                <div
                  className="relative mt-auto h-[200px] sm:h-[250px] md:h-[350px] w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${pillar.image})`,
                    backgroundPosition: pillar.objectPosition ?? "center center",
                  }}
                />
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 flex w-fit max-w-4xl items-center justify-center rounded-full bg-[#eef1fb] px-8 py-4 text-center text-base text-primary">
            The three pillars operate together throughout every phase of the transformation.
          </p>
        </div>
      </section>

      <section
        className="py-15 relative overflow-hidden"
        style={{
          background: "radial-gradient(circle at top center, #10245c 0%, #0a1740 15%, #000000 75%, #000000 100%)",
        }}
      >
        {/* Background Image at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 w-full h-[60%] pointer-events-none z-0 opacity-40 mix-blend-screen">
          <img
            src="/image/bg 1.jpg"
            alt=""
            className="w-full h-full object-cover object-bottom"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left Column: Text Content */}
            <div className="text-left">
              <Eyebrow tone="dark">The System</Eyebrow>
              <h2 className="text-4xl lg:text-[2.75rem] font-display font-bold text-white mb-6 leading-tight">
                Three pillars.
                <span className="block mt-1">One connected system.</span>
              </h2>
              <p className="text-white/60 text-base leading-relaxed max-w-lg">
                Engagement, Enablement, and Analytics operate together across every
                phase of the transformation lifecycle.
              </p>
            </div>

            {/* Right Column: Visual Card */}
            <div className="relative animate-fade-slide-up opacity-0 [animation-delay:400ms] w-full flex flex-col items-center lg:items-end mt-8 lg:mt-0">
              <div className="relative w-full max-w-[550px] aspect-square">
                <svg viewBox="0 0 600 600" className="w-full h-full overflow-visible">
                  {/* Center of diagram: 300, 300 */}

                  {/* Inner Connecting Arcs (Circle of r=160 passing through nodes) */}
                  <path d="M 300 140 A 160 160 0 0 0 161.4 380" fill="none" stroke="#00a89d" strokeWidth="3" strokeDasharray="8 8" className="animate-flow-line" />
                  <path d="M 161.4 380 A 160 160 0 0 0 438.6 380" fill="none" stroke="#5667e8" strokeWidth="3" strokeDasharray="8 8" className="animate-flow-line" />
                  <path d="M 438.6 380 A 160 160 0 0 0 300 140" fill="none" stroke="#a855f7" strokeWidth="3" strokeDasharray="8 8" className="animate-flow-line" />

                  {/* Dashed lines from center to nodes */}
                  <path d="M300 300 L300 140" stroke="#d89a2b" strokeWidth="2.5" strokeDasharray="8 8" className="animate-flow-line" />
                  <path d="M300 300 L161.4 380" stroke="#00a89d" strokeWidth="2.5" strokeDasharray="8 8" className="animate-flow-line" />
                  <path d="M300 300 L438.6 380" stroke="#a855f7" strokeWidth="2.5" strokeDasharray="8 8" className="animate-flow-line" />

                  {/* Outer dashed orbit (r=230) */}
                  <circle cx="300" cy="300" r="230" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4 6" />

                  {/* Orbit pins and dots */}
                  {/* Mobilize (Top) */}
                  <path d="M300 70 L300 50" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                  <circle cx="300" cy="50" r="5" fill="#d89a2b" />
                  <text x="300" y="35" fill="#fff" fontSize="13" textAnchor="middle" opacity="0.9">Mobilize</text>

                  {/* Discover (Top Right) */}
                  <path d="M499 185 L514 176" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                  <circle cx="514" cy="176" r="5" fill="#00a89d" />
                  <text x="526" y="180" fill="#fff" fontSize="13" textAnchor="start" opacity="0.9">Discover</text>

                  {/* Design (Bottom Right) */}
                  <path d="M499 415 L514 424" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                  <circle cx="514" cy="424" r="5" fill="#a855f7" />
                  <text x="526" y="428" fill="#fff" fontSize="13" textAnchor="start" opacity="0.9">Design</text>

                  {/* Validate (Bottom) */}
                  <path d="M300 530 L300 550" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                  <circle cx="300" cy="550" r="5" fill="#00a89d" />
                  <text x="300" y="572" fill="#fff" fontSize="13" textAnchor="middle" opacity="0.9">Validate</text>

                  {/* Launch (Bottom Left) */}
                  <path d="M101 415 L86 424" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                  <circle cx="86" cy="424" r="5" fill="#00a89d" />
                  <text x="74" y="428" fill="#fff" fontSize="13" textAnchor="end" opacity="0.9">Launch</text>

                  {/* Sustain (Top Left) */}
                  <path d="M101 185 L86 176" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                  <circle cx="86" cy="176" r="5" fill="#00a89d" />
                  <text x="74" y="180" fill="#fff" fontSize="13" textAnchor="end" opacity="0.9">Sustain</text>


                  {/* Top Node: ENGAGEMENT */}
                  <circle cx="300" cy="140" r="60" fill="#071127" stroke="#d89a2b" strokeWidth="2" className="drop-shadow-[0_0_15px_rgba(216,154,43,0.4)]" />
                  <text x="300" y="135" fill="#fff" fontSize="16" fontWeight="bold" textAnchor="middle">ENGAGE</text>
                  <text x="300" y="152" fill="#d89a2b" fontSize="12" fontWeight="bold" textAnchor="middle">MENT</text>

                  {/* Bottom Left Node: ENABLEMENT */}
                  <circle cx="161.4" cy="380" r="60" fill="#071127" stroke="#00a89d" strokeWidth="2" className="drop-shadow-[0_0_15px_rgba(0,168,157,0.4)]" />
                  <text x="161.4" y="375" fill="#fff" fontSize="16" fontWeight="bold" textAnchor="middle">ENABLE</text>
                  <text x="161.4" y="392" fill="#00a89d" fontSize="12" fontWeight="bold" textAnchor="middle">MENT</text>

                  {/* Bottom Right Node: ANALYTICS */}
                  <circle cx="438.6" cy="380" r="60" fill="#071127" stroke="#a855f7" strokeWidth="2" className="drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]" />
                  <text x="438.6" y="375" fill="#fff" fontSize="16" fontWeight="bold" textAnchor="middle">ANALYT</text>
                  <text x="438.6" y="392" fill="#a855f7" fontSize="12" fontWeight="bold" textAnchor="middle">ICS</text>

                  {/* Center Node: ADOPTION OS */}
                  <circle cx="300" cy="300" r="85" fill="#071127" stroke="#00a89d" strokeWidth="2" className="drop-shadow-[0_0_30px_rgba(0,168,157,0.3)]" />
                  <circle cx="300" cy="300" r="80" fill="none" stroke="rgba(0,168,157,0.3)" strokeWidth="1" />

                  {/* Logo inside center node */}
                  <path d="M300 240 L280 270 H292 L300 255 L308 270 H320 Z" fill="#00a89d" opacity="0.8" />
                  <path d="M290 275 L300 290 L310 275 Z" fill="#00a89d" opacity="0.5" />

                  <text x="300" y="305" fill="#fff" fontSize="18" fontWeight="bold" textAnchor="middle">ADOPTION</text>
                  <text x="300" y="322" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle" opacity="0.9">OPERATING SYSTEM</text>
                </svg>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Eyebrow>How It Works</Eyebrow>
            <h2 className="text-section-xl font-display font-bold text-primary max-w-2xl mx-auto">
              From transformation context to a defensible adoption roadmap.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((group) => (
              <div
                key={group.phase}
                className="bg-[#eef1fb] rounded-2xl p-6"
              >
                <span className="text-[11px] font-mono text-accent font-semibold uppercase tracking-wider">
                  {group.phase}
                </span>
                <div className="mt-3 space-y-4">
                  {group.items.map((item) => (
                    <div key={item.title} className="border-l-2 border-accent pl-4">
                      <h4 className="font-display font-semibold text-accent text-sm mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f4f7ff] grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column: Content */}
        <div className="lg:col-span-4 flex items-center justify-end py-20 lg:py-32 px-6 lg:px-8">
          <div className="w-full max-w-lg lg:max-w-xl pr-0 lg:pr-8">
            <span className="inline-block text-xs font-semibold px-4 py-1.5 rounded-full mb-6 bg-white text-slate-800 shadow-sm border border-slate-100/50">
              Engagement Types
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.25rem] font-display font-bold text-primary leading-tight mb-6">
              Flexible to the needs of the transformation.
            </h2>
            <p className="text-slate-600 leading-relaxed text-[15px] lg:text-base mb-8 max-w-md">
              AdoptionOS Consulting engagements are structured around the
              specific needs of the transformationnot fixed service
              packages. We work with organizations at any stage of the
              lifecycle.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#0a1740] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#0a1740]/90 transition-all text-sm shadow-sm"
            >
              Discuss Your Transformation
            </Link>
          </div>
        </div>

        {/* Right Column: Background Image with Cards */}
        <div className="lg:col-span-8 relative min-h-[400px] lg:min-h-full flex items-center justify-center p-6 sm:p-10 lg:p-16">
          {/* Background Image */}
          <img
            src="/image/hr-professional-answering-applicant-questions-about-employment-perks-hiring-meeting 1.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Subtle Overlay to make cards pop */}
          <div className="absolute inset-0 bg-slate-950/10 pointer-events-none" />

          {/* Cards Flex Container */}
          <div className="flex flex-wrap gap-4 w-full max-w-3xl justify-center relative z-10">
            {engagementTypes.map((type) => (
              <div
                key={type}
                className="bg-white/45 backdrop-blur-md border border-white/40 rounded-2xl px-6 py-4 flex items-center justify-center text-center text-xs sm:text-sm font-semibold text-slate-950 shadow-md transition-all hover:bg-white/55 w-fit"
              >
                {type}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column: Text and Screenshot */}
            <div>
              <Eyebrow>Engagement Types</Eyebrow>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.25rem] font-display font-bold text-primary leading-tight mb-4">
                Methodology consistency across every client engagement.
              </h2>
              <p className="text-muted leading-relaxed max-w-xl mb-8 text-[15px] lg:text-base">
                AdoptionOS allows consultancies and system integrators to deliver
                consistent methodology across isolated client engagementswithout
                mixing client information, compromising repeatability, or depending on
                individual practitioner knowledge.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#0a1740] text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-[#0a1740]/90 transition-all text-sm shadow-sm"
              >
                Explore Partnership Options
              </Link>

              {/* Platform Screenshot Image */}
              <div className="relative mt-12 w-full">
                {/* Glowing radial gradient backdrop behind image */}
                <div className="absolute -left-8 -bottom-8 w-72 h-72 bg-[#3b7cf5]/25 rounded-full blur-[80px] pointer-events-none z-0" />
                <div className="absolute -right-4 -bottom-4 w-60 h-60 bg-[#7c5ce0]/15 rounded-full blur-[80px] pointer-events-none z-0" />

                <img
                  src="/image/Screenshot 2026-07-26 145605 2.png"
                  alt="AdoptionOS platform dashboard screenshot"
                  className="relative z-10 w-full rounded-2xl border border-slate-200/50 shadow-[0_20px_50px_rgba(59,124,245,0.2)]"
                />
              </div>
            </div>

            {/* Right Column: Benefits Cards */}
            <div className="space-y-2">
              {consultBenefits.map((b) => {
                const isPurple = b.color.includes("#7c5ce0");
                return (
                  <div
                    key={b.title}
                    className={`rounded-2xl p-6 lg:p-8 border-2 border-r-transparent shadow-sm transition-all hover:shadow-md ${isPurple
                        ? "bg-[#f5f2ff]/85 border-[#7c5ce0] border-l-4"
                        : "bg-[#f0f4ff]/85 border-[#3b7cf5] border-l-4"
                      }`}
                  >
                    <h3 className="font-display font-bold text-slate-900 text-lg mb-2">
                      {b.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to discuss your transformation?"
        description="Connect with an AdoptionOS advisor to explore how consulting services can support your program."
        primaryLabel="Discuss Your Transformation"
      />
    </>
  );
}
import type { Metadata } from "next";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Company | AdoptionOS   Building the Adoption Operating System",
  description:
    "AdoptionOS Inc. exists to transform enterprise adoption from a fragmented, document-dependent practice into a structured, measurable business discipline.",
};

const principles = [
  { title: "Methodology before technology", description: "Every capability is grounded in ABEN's Method™ before it is encoded into software." },
  { title: "Advise before automating", description: "The platform teaches and advises before it assists or executes." },
  { title: "Teach first, assist second, execute third", description: "Practitioners must understand what good looks like before the platform helps them create it." },
  { title: "Evidence over activity", description: "Adoption quality is measured by evidence of behavior change, not by task completion." },
  { title: "Human judgment remains central", description: "AI proposes. Practitioners decide. Oversight is never optional." },
  { title: "Progressive complexity", description: "The methodology scales from focused deployments to complex global transformation programs." },
  { title: "Respect the client's methodology", description: "AdoptionOS maps to an organization's existing methodology rather than replacing it." },
  { title: "AI proposes; practitioners decide", description: "Every AI recommendation includes traceable rationale so practitioners can evaluate and decide." },
];

const ecosystem = [
  {
    title: "AdoptionOS",
    subtitle: "Enterprise Software Platform",
    description: "The digital operating system that guides, manages, measures, and continuously improves enterprise adoption throughout a transformation.",
  },
  {
    title: "AdoptionOS Consulting",
    subtitle: "Advisory Services",
    description: "Enterprise adoption advisory and implementation services that help organizations apply the methodology and establish the operating model.",
  },
  {
    title: "ABEN's Method™",
    subtitle: "Proprietary Methodology",
    description: "The structured enterprise adoption approach that provides the intellectual foundation for every capability in AdoptionOS.",
  },
  {
    title: "ABEN's Adoption Formula™",
    subtitle: "Core Framework",
    description: "Adoption = Engagement + Enablement + Analytics. The formula that expresses how the three adoption pillars operate together.",
  },
  {
    title: "The Adoption Operating System™",
    subtitle: "Book and Thought Leadership",
    description: "The book series that teaches ABEN's Method™ and makes the methodology accessible to transformation practitioners and enterprise leaders.",
  },
];

const maturityStages = [
  { num: "01", name: "Advisory", tag: "Current" },
  { num: "02", name: "Assisted", tag: "Roadmap" },
  { num: "03", name: "Managed", tag: "Roadmap" },
  { num: "04", name: "Adoption Intelligence™", tag: "Vision" },
];

const categoryPoints = [
  { title: "The problem", description: "Adoption work managed through disconnected documents and individual experience.", color: "border-l-[#3b7cf5]" },
  { title: "The gap", description: "No purpose-built operating system for enterprise adoption existed.", color: "border-l-[#7c5ce0]" },
  { title: "The category", description: "AdoptionOS defines and leads the Enterprise Adoption Operating System category.", color: "border-l-[#3b7cf5]" },
  { title: "The foundation", description: "ABEN's Method™ provides the methodology that makes the category real, not theoretical.", color: "border-l-[#7c5ce0]" },
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

export default function CompanyPage() {
  return (
    <>
      <section
        className="min-h-screen flex items-center relative overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at left center, #10245c 0%, #0a1740 35%, #050a1a 75%, #000000 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6 leading-[1.1]">
                Building the operating system for enterprise adoption.
              </h1>
              <p className="text-lg text-white/70 leading-relaxed">
                AdoptionOS Inc. exists to transform enterprise adoption from a
                fragmented, document-dependent practice into a structured,
                measurable, and continuously improving business discipline.
              </p>
            </div>
            <div className="hidden lg:flex justify-center">
              <img
                src="/image/archive-illustration.jpg"
                alt="AdoptionOS platform illustration"
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Vision Card */}
            <div className="relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-[#E9EEF8] bg-[#EFF3FB] p-6 sm:p-10 min-h-[320px]">
              {/* Illustration - positioned right */}
              <img
                src="/image/Rectangle 240649378.jpg"
                alt="Vision illustration"
                className="absolute right-0 top-0 h-full w-auto object-contain pointer-events-none"
              />

              <span className="text-[36px] font-normal text-primary relative z-10">
                Vision
              </span>

              <p className="max-w-[230px] text-[14px] leading-relaxed text-primary/80 relative z-10">
                A world where enterprise adoption is a managed,
                measurable, and continuously improving business
                disciplinenot a collection of documents managed by
                individuals.
              </p>
            </div>

            {/* Mission Card */}
            <div className="relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-[#E4E0F8] bg-[#EEEAFC] p-10 min-h-[320px]">
              {/* Illustration - positioned right */}
              <img
                src="/image/Rectangle 2406493782.jpg"
                alt="Mission illustration"
                className="absolute right-0 top-0 h-full w-auto object-contain pointer-events-none"
              />

              <span className="text-[36px] font-normal text-primary relative z-10">
                Mission
              </span>

              <p className="max-w-[230px] text-[14px] leading-relaxed text-primary/80 relative z-10">
                To provide enterprise transformation teams with the
                methodology, platform, and expertise required to guide
                adoption from mobilization through sustained
                performance.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 bg-[#eef1fb]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <Eyebrow>The Category</Eyebrow>
              <h2 className="text-section-xl font-display font-bold text-primary mb-6">
                Creating the Enterprise Adoption Operating System category.
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Every major enterprise function has a system purpose-built to
                  support its work. Finance has ERPs. Sales has CRMs. HR has
                  HCM platforms. Engineering has PLM. Projects have PPM.
                </p>
                <p>
                  Enterprise adoption the discipline responsible for ensuring
                  that people actually change how they work has been managed
                  primarily through documents, spreadsheets, templates, and
                  individual practitioner experience.
                </p>
                <p>
                  AdoptionOS was created to close that gap. Not by building
                  another project management tool or document repository, but
                  by creating a new category: the Enterprise Adoption
                  Operating System.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {categoryPoints.map((item) => (
                <div
                  key={item.title}
                  className={`bg-white rounded-xl p-6 border-l-4 ${item.color}`}
                >
                  <h3 className="font-display font-semibold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <Eyebrow>Product Principles</Eyebrow>
            <h2 className="text-section-xl font-display font-bold text-primary max-w-2xl mx-auto">
              How we build.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 max-w-6xl mx-auto">
            {principles.map((p) => (
              <div key={p.title} className="border-l-2 border-[#2563EB] pl-4">
                <h3 className="font-display font-semibold text-[#2563EB] mb-2">
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

      <section
        className="py-24 relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #0a1740 0%, #10245c 45%, #050a1a 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <Eyebrow tone="dark">The Ecosystem</Eyebrow>
            <h2 className="text-section-xl font-display font-bold text-white max-w-2xl mx-auto">
              One company. One methodology. One category.
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ecosystem.slice(0, 3).map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6"
                >
                  <p className="text-xs font-mono text-muted-foreground mb-1">
                    {item.subtitle}
                  </p>
                  <h3 className="font-display font-bold text-accent text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-primary/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mt-6">
              {ecosystem.slice(3).map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6"
                >
                  <p className="text-xs font-mono text-muted-foreground mb-1">
                    {item.subtitle}
                  </p>
                  <h3 className="font-display font-bold text-accent text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-primary/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className=" relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left – text content */}
            <div>
              <div className="flex items-start gap-3 mb-2">
                <div
                  className="w-1 h-14 rounded-full flex-shrink-0"
                  style={{ background: "linear-gradient(180deg, #7c5ce0, #3b7cf5, #12b886)" }}
                />
                <div>
                  <h3 className="font-display font-bold text-primary text-2xl leading-tight">
                    Hilary Aben
                  </h3>
                  <p className="text-sm text-muted mt-1">Founder, AdoptionOS Inc.</p>
                </div>
              </div>

              <p className="text-muted leading-relaxed mt-8">
                AdoptionOS was founded by Hilary Aben, an enterprise transformation
                and adoption leader whose work spans ERP transformation,
                organizational readiness, workforce enablement, and technology
                delivery.
              </p>
              <p className="text-muted leading-relaxed mt-4">
                AdoptionOS translates practical transformation experience into a
                methodology-backed system that organizations can use
                repeatedlyreplacing the fragmented, document-dependent practices
                that have defined the adoption discipline with a structured,
                guided, and continuously improving operating environment.
              </p>
            </div>

            {/* Right – photo with purple ring */}
            <div className="relative min-h-[350px] lg:min-h-[500px] flex items-end justify-center lg:justify-end">
              {/* Large purple circle ring – extends off right edge */}
              <div
                className="absolute w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full border-[40px] sm:border-[66px] border-[#7c5ce0] -right-20 sm:-right-44 -top-1 pointer-events-none"
              />

              {/* Photo */}
              <div className="relative z-10 w-full max-w-[380px] lg:w-[420px] -right-4 sm:-right-10 -top-1">
                <img
                  src="/image/Adobe Express - file (6) 1.jpg"
                  alt="Hilary Aben, Founder of AdoptionOS Inc."
                  className="w-full h-auto object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-28 bg-[#e8edf8]">
        {/* Background Image — Left side */}
        <img
          src="/image/Group 2085664654.jpg"
          alt=""
          className="absolute left-0 top-0 h-full w-[28%] object-cover object-right pointer-events-none"
        />
        
        {/* Background Image — Right side (mirrored) */}
        <img
          src="/image/Group 2085664654.jpg"
          alt=""
          className="absolute right-0 top-0 h-full w-[28%] object-cover object-left pointer-events-none -scale-x-100"
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <Eyebrow>Future Vision</Eyebrow>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-display font-bold text-primary mb-8 leading-tight">
              Toward Adoption Intelligence™.
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-4 text-[15px] leading-relaxed">
              The long-term vision for AdoptionOS is Adoption Intelligence™, a
              continuous feedback system that helps organizations anticipate
              adoption gaps, measure adoption quality, and improve
              transformation outcomes over time.
            </p>
            <p className="text-slate-600 max-w-2xl mx-auto text-[15px] leading-relaxed">
              We build toward that future responsibly: teaching before
              assisting, advising before automating, and earning the right to
              advance through evidence, trust, and practitioner adoption.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {maturityStages.map((stage) => (
              <div
                key={stage.num}
                className={`relative rounded-2xl p-6 flex items-center justify-between overflow-hidden ${
                  stage.tag === "Current"
                    ? "bg-white border border-slate-200/80 shadow-sm"
                    : "bg-white border border-slate-200/60"
                }`}
              >
                {/* Gradient glow for the "Current" card */}
                {stage.tag === "Current" && (
                  <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#c8e6d0]/40 via-[#d6e4f7]/30 to-transparent pointer-events-none" />
                )}

                <div className="relative z-10">
                  <span className="text-xs font-mono text-slate-400 block mb-1">
                    {stage.num}
                  </span>
                  <h3 className="font-display font-bold text-primary text-lg">
                    {stage.name}
                  </h3>
                </div>
                <span
                  className={`relative z-10 text-[11px] font-medium px-3 py-1 rounded-full ${
                    stage.tag === "Current"
                      ? "text-slate-600"
                      : "text-slate-400"
                  }`}
                >
                  {stage.tag === "Current" ? "Currently" : stage.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Learn more about AdoptionOS."
        description="Explore the platform, methodology, or consulting services or connect with an advisor to discuss your transformation."
      />
    </>
  );
}
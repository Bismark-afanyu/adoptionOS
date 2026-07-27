import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights | AdoptionOS   Enterprise Adoption Thought Leadership",
  description:
    "Perspectives on methodology, transformation, leadership, and the practice of building adoption as a managed discipline.",
};

const categories = [
  "All",
  "Adoption",
  "ERP",
  "Leadership",
  "Engagement",
  "Enablement",
  "Analytics",
  "AdoptionOS Product",
  "ABEN's Method™",
];

const articles = [
  {
    category: "Adoption",
    title: "Why enterprise adoption still relies on documents   and what that costs transformations",
    description:
      "The gap between how enterprise functions are supported and how adoption work is managed has significant consequences for transformation outcomes.",
  },
  {
    category: "ABEN's Method™",
    title: "Understanding ABEN's Adoption Formula™: Why all three pillars must operate together",
    description:
      "Engagement, Enablement, and Analytics are not independent workstreams. This piece explores what happens when any one is neglected.",
  },
  {
    category: "ERP",
    title: "Adoption debt in ERP transformations: How gaps compound after go-live",
    description:
      "Adoption work deferred during the transformation does not disappear. It accumulates as adoption debt that organizations must eventually address.",
  },
  {
    category: "Leadership",
    title: "The leadership moments that determine adoption outcomes",
    description:
      "Specific leadership actions at defined points in the transformation lifecycle have disproportionate impact on whether adoption succeeds.",
  },
  {
    category: "Analytics",
    title: "Evidence over activity: Measuring what actually matters in adoption",
    description:
      "Adoption dashboards filled with activity metrics do not tell you whether people have actually changed how they work. Here is what does.",
  },
  {
    category: "Adoption",
    title: "When adoption work begins late: How to position a program already in motion",
    description:
      "Many adoption teams join a transformation after it has already started. Locating the real phase is the first step toward a credible approach.",
  },
  {
    category: "Engagement",
    title: "Sponsorship is not a checkbox: Building genuine leadership commitment",
    description:
      "Nominal sponsorship is one of the most common adoption risks. This piece examines what real sponsorship looks like and how to build it.",
  },
  {
    category: "Enablement",
    title: "Beyond training: What it takes for people to actually perform in a new environment",
    description:
      "Training completion rates are not adoption evidence. Enablement requires knowledge, practice, reinforcement, and the right support at the right moment.",
  },
  {
    category: "AdoptionOS Product",
    title: "How AdoptionOS maps ABEN's Method™ to an organization's existing methodology",
    description:
      "Organizations do not abandon their transformation frameworks. AdoptionOS is designed to work alongside them   not replace them.",
  },
];

export default function InsightsPage() {
  return (
    <>
      <section className="bg-dark pt-32 pb-24 relative overflow-hidden grain-overlay grid-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-xs font-mono text-accent uppercase tracking-wider mb-3">
              Insights
            </p>
            <h1 className="text-hero-xl font-display font-bold text-white mb-6">
              Thinking on enterprise adoption.
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Perspectives on methodology, transformation, leadership, and the
              practice of building adoption as a managed discipline.
            </p>
          </div>
        </div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-card border border-border rounded-2xl p-8 mb-16 max-w-4xl">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="flex-1">
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">
                  Coming Soon
                </p>
                <h2 className="font-display font-bold text-primary text-2xl mb-3">
                  The Adoption Operating System™
                </h2>
                <p className="text-sm font-medium text-foreground mb-2">
                  A practical guide to applying ABEN&apos;s Method™ for
                  enterprise adoption.
                </p>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  The Adoption Operating System™ book series teaches
                  ABEN&apos;s Method™ and makes the methodology accessible to
                  transformation practitioners, adoption leaders, and enterprise
                  executives.
                </p>
                <div className="flex gap-2 mb-4">
                  {["Engagement", "Enablement", "Analytics"].map((p) => (
                    <span
                      key={p}
                      className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full border border-accent/20"
                    >
                      {p}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-muted italic">
                  Publishing details coming soon
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <p className="text-xs font-mono text-accent uppercase tracking-wider mb-3">
              All Articles
            </p>
            <h2 className="text-section-xl font-display font-bold text-primary max-w-3xl">
              9 articles across 8 categories
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`text-sm px-4 py-2 rounded-full border transition-all ${i === 0
                    ? "bg-accent/10 border-accent/20 text-accent font-medium"
                    : "bg-card border-border text-muted hover:text-primary hover:border-primary/20"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
            {articles.map((article) => (
              <div
                key={article.title}
                className="bg-card border border-border rounded-xl p-6 card-hover"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono text-accent">
                    {article.category}
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground bg-muted/10 px-2 py-0.5 rounded-full border border-border">
                    Coming Soon
                  </span>
                </div>
                <h3 className="font-display font-semibold text-primary mb-2 leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {article.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-card border border-border rounded-xl p-8 max-w-4xl">
            <h3 className="font-display font-semibold text-primary mb-3">
              Stay Informed
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-6">
              Articles will be published as the platform launches and the
              methodology is applied in practice. Contact us to be notified when
              new content is available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-md hover:bg-accent/90 hover:shadow-teal-glow transition-all"
              >
                Stay Informed
              </Link>
              <Link
                href="/methodology"
                className="inline-flex items-center justify-center border border-border text-primary font-semibold px-6 py-3 rounded-md hover:bg-card transition-all"
              >
                Explore the Methodology
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

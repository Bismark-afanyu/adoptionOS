import Link from "next/link";

interface CTASectionProps {
  badge?: string;
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({
  badge = "TAKE THE NEXT STEP",
  title,
  description,
  primaryLabel = "Request a Demo",
  primaryHref = "/contact",
  secondaryLabel = "Talk to an Advisor",
  secondaryHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/image/modern-business-center 1.png')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/30 via-dark/50 to-dark" />
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center relative z-10">
        {badge && (
          <span className="inline-block bg-white text-dark text-xs font-semibold uppercase tracking-widest px-5 py-2 rounded-full mb-8">
            {badge}
          </span>
        )}
        <h2 className="text-section-xl font-display font-bold text-white mb-6 lg:whitespace-nowrap">
          {title}
        </h2>
        {description && (
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryHref}
            className="bg-white text-dark font-semibold px-8 py-3.5 rounded-md hover:bg-white/90 transition-all"
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="border border-white/30 text-white font-semibold px-8 py-3.5 rounded-md hover:bg-white/10 hover:border-white/50 transition-all"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

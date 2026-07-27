import Link from "next/link";

const footerSections = [
  {
    title: "Company",
    links: [
      { href: "/company", label: "About AdoptionOS Inc." },
      { href: "/contact", label: "Contact" },
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { href: "/platform", label: "AdoptionOS Platform" },
      { href: "/consulting", label: "AdoptionOS Consulting" },
      { href: "/platform", label: "For Enterprises" },
      { href: "/consulting", label: "For Consultancies" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/methodology", label: "ABEN's Method™" },
      { href: "/methodology", label: "ABEN's Adoption Formula™" },
      { href: "/methodology", label: "The Six Phases" },
      { href: "/insights", label: "Insights" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <img
                src="/image/AdoptionOS Logo White 1.png"
                alt="AdoptionOS"
                className="h-8"
              />
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              AdoptionOS Inc. is defining the Enterprise Adoption Operating
              System category.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-display font-semibold text-white text-sm mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link, i) => (
                  <li key={`${link.href}-${i}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-white/10 mt-12 mb-6" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p className="text-center sm:text-left">
            © 2026 AdoptionOS Inc. All rights reserved.{" "}
            <span className="mx-1">·</span>{" "}
            <Link href="/terms" className="hover:text-white/60 transition-colors">
              Terms
            </Link>{" "}
            <span className="mx-1">·</span>{" "}
            <Link href="/privacy" className="hover:text-white/60 transition-colors">
              Privacy
            </Link>
          </p>
          <p>
            AdoptionOS™, ABEN&apos;s Method™, ABEN&apos;s Adoption Formula™, The
            Adoption Operating System™, and Adoption Intelligence™ are
            trademarks or claimed marks of their respective owner.
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";

const col1Cards = [
  {
    title: "Enterprise adoption strategy",
    description:
      "Define the adoption approach, operating model, and resourcing for complex enterprise transformations.",
  },
  {
    title: "Transformation diagnostics",
    description:
      "Assess the current state of adoption readiness, risks, and program positioning.",
  },
  {
    title: "ERP and digital transformation adoption",
    description:
      "Specialized adoption leadership for large-scale ERP and technology transformation programs.",
  },
];

const col2Cards = [
  {
    title: "Adoption operating model design",
    description:
      "Design the governance, roles, processes, and tools needed to sustain adoption at scale.",
  },
  {
    title: "Readiness and launch support",
    description:
      "Prepare the organization for go-live with structured readiness validation and launch planning.",
  },
  {
    title: "Sustainment and continuous adoption",
    description:
      "Reinforce new behaviors, measure adoption evidence, and embed lasting change post-launch.",
  },
];

export default function Consulting() {
  return (
    <section className="py-20 lg:py-32 bg-[#edf2fd] text-[#071127] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Text & Photo */}
          <div className="lg:col-span-5 flex flex-col">
            <div>
              <span className="inline-block text-xs font-semibold tracking-wider px-5 py-2 rounded-full bg-white text-slate-800 border border-slate-200/80 uppercase shadow-sm mb-6">
                HOW IT WORKS
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-[1.5rem] font-display font-bold text-[#071127] mb-6 leading-tight">
                The platform provides the system. Our advisors help organizations apply it.
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                AdoptionOS Consulting works with enterprise transformation teams
                that need experienced adoption leadership, methodology
                implementation, transformation diagnostics, roadmap development,
                readiness support, launch preparation, and sustainment guidance.
              </p>

              <Link
                href="/consulting"
                className="inline-block bg-[#0a1740] hover:bg-[#0a1740]/90 text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-all shadow-md mb-10"
              >
                Explore the Methodology
              </Link>
            </div>

            {/* Laptop Photo */}
            <div className="rounded-[24px] overflow-hidden shadow-lg border border-slate-200/60">
              <img
                src="/image/Man in Brown Suit Jacket.png"
                alt="AdoptionOS platform on laptop"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Column: 2 Staggered Columns of Service Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 items-start pt-2">
            {/* Sub-Column 1 */}
            <div className="flex flex-col gap-5">
              {col1Cards.map((card) => (
                <div
                  key={card.title}
                  className="bg-white rounded-[20px] p-6 lg:p-7 shadow-sm border border-slate-100/80 flex flex-col justify-start"
                >
                  <h3 className="font-display font-bold text-[#071127] text-base lg:text-lg mb-2 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Sub-Column 2 */}
            <div className="flex flex-col gap-5">
              {col2Cards.map((card) => (
                <div
                  key={card.title}
                  className="bg-white rounded-[20px] p-6 lg:p-7 shadow-sm border border-slate-100/80 flex flex-col justify-start"
                >
                  <h3 className="font-display font-bold text-[#071127] text-base lg:text-lg mb-2 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";

const pillars = [
  {
    num: "01",
    tag: "ABEN's Method™",
    title: "The Method",
    description:
      "The structured enterprise adoption approach that provides the intellectual foundation for every capability in AdoptionOS.",
  },
  {
    num: "02",
    tag: "AdoptionOS",
    title: "The Platform",
    description:
      "The digital operating system that encodes ABEN's Method™ into guided workflows, advisory outputs, and leadership intelligence.",
  },
  {
    num: "03",
    tag: "How Organizations Apply It",
    title: "The Practice",
    description:
      "How organizations use the method and platform together to build repeatable adoption capability and improve transformation outcomes.",
  },
];

export default function Foundation() {
  return (
    <section className="py-24 lg:py-20 bg-[#f6f8fd] text-[#071127] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Top Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-wider px-6 py-2 rounded-full bg-[#ede4fc] text-[#4c1d95] uppercase mb-6">
            THE FOUNDATION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[1.8rem] font-display font-bold text-[#071127] mb-5 max-w-3xl mx-auto leading-tight">
            Built on a methodology, not assembled from features.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            ABEN&apos;s Method™ provides the intellectual foundation for AdoptionOS.
            The Adoption Operating System™ book series teaches the methodology. The
            software operationalizes it across real enterprise transformations.
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 max-w-7xl mx-auto items-center">
          {/* Left Column: Stack of 3 Cards + CTA Buttons */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {pillars.map((p) => (
              <div
                key={p.num}
                className="bg-white rounded-2xl p-6 lg:p-7 shadow-sm border border-slate-100/80 flex flex-col justify-start"
              >
                <span className="text-xs font-semibold text-slate-400 font-mono block mb-1.5">
                  {p.num} / {p.tag}
                </span>
                <h3 className="text-lg font-bold font-display text-[#071127] mb-2">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 mt-4">
              <Link
                href="/contact"
                className="bg-[#0a1740] hover:bg-[#0a1740]/90 text-white font-semibold px-6 py-3 rounded-full text-sm transition-all shadow-md"
              >
                Explore the Methodology
              </Link>
              <Link
                href="/platform"
                className="bg-white hover:bg-slate-50 text-[#071127] border border-slate-300 font-semibold px-6 py-3 rounded-full text-sm transition-all shadow-sm"
              >
                Read AdoptionOS Insights
              </Link>
            </div>
          </div>

          {/* Right Column: 3D Platform Mockup & Background Mesh */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            {/* Background Pastel Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#93c5fd]/30 via-[#c084fc]/25 to-[#a7f3d0]/35 rounded-3xl blur-3xl pointer-events-none -z-10" />

            <img
              src="/image/Browser.png"
              alt="AdoptionOS Platform 3D Stack"
              className="w-full h-auto object-contain drop-shadow-2xl pointer-events-none"
            />
          </div>
        </div>

        {/* Bottom Banner Pill */}
        <div className=" bg-[#ede4fc] rounded-full px-8 py-3.5 max-w-3xl mx-auto text-center">
          <p className="text-xs sm:text-sm font-medium text-slate-700">
            The three pillars operate together throughout every phase of the
            transformation.
          </p>
        </div>
      </div>
    </section>
  );
}

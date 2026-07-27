"use client";

import { useState, useEffect } from "react";

const phases = [
  {
    num: "01",
    name: "Mobilize",
    description:
      "Establish the adoption foundation, governance, sponsorship, resources, and initial direction for the transformation.",
  },
  {
    num: "02",
    name: "Discover",
    description:
      "Deeply understand the organizational landscape, identify impacted people and business units, surface adoption risks, and uncover unique change barriers.",
  },
  {
    num: "03",
    name: "Design",
    description:
      "Translate impacts and diagnostics into targeted engagement models, enablement strategies, change toolkits, and measurable feedback loops.",
  },
  {
    num: "04",
    name: "Validate",
    description:
      "Rigorously test operational readiness, confirm messaging understanding, close training gaps, and verify leadership alignment before launching.",
  },
  {
    num: "05",
    name: "Launch",
    description:
      "Support the direct transition, provide real-time user assistance, and maintain high performance levels through system go-live and initial run hours.",
  },
  {
    num: "06",
    name: "Sustain",
    description:
      "Reinforce adoption behaviors, measure concrete usage evidence, identify optimization options, and lock in the new way of working permanently.",
  },
];

export default function Lifecycle() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % phases.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        background: "radial-gradient(circle at 0% 40%, #0e2f7d 0%, #071330 40%, #030816 80%, #01040a 100%)",
      }}
    >
      {/* Subtle glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#2563eb]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center px-5 py-2 rounded-full border border-white/20 bg-white/5 mb-6">
            <span className="text-xs font-semibold text-white uppercase tracking-wider">
              The Lifecycle
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.1rem] font-display font-bold text-white max-w-3xl mx-auto leading-tight">
            One adoption lifecycle from mobilization through sustainment.
          </h2>
        </div>

        {/* Phase Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {phases.map((phase, i) => (
            <button
              key={phase.num}
              onClick={() => setActive(i)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === i
                  ? "bg-[#10b981] text-white shadow-lg shadow-[#10b981]/25"
                  : "bg-white/10 text-white/70 hover:bg-white/15 hover:text-white"
              }`}
            >
              <span className="mr-2 font-bold">{phase.num}</span>
              {phase.name}
            </button>
          ))}
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-3xl p-8 lg:p-10 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left: Phase Details */}
            <div>
              <span className="text-sm text-gray-400 font-medium mb-2 block">
                Phase {phases[active].num}
              </span>
              <h3 className="text-2xl font-display font-bold text-[#071127] mb-4">
                {phases[active].name}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {phases[active].description}
              </p>
            </div>

            {/* Right: Progress Indicator */}
            <div className="flex items-center justify-center overflow-hidden">
              <div className="flex items-center gap-0">
                {phases.map((phase, i) => (
                  <div key={phase.num} className="flex items-center">
                    {/* Dot */}
                    <div
                      className={`flex items-center justify-center transition-all duration-300 ${
                        active === i
                          ? "w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#10b981] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#10b981]/30"
                          : active > i
                          ? "w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 text-gray-400 text-[10px] sm:text-xs font-medium"
                          : "w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 text-gray-300 text-[10px] sm:text-xs font-medium"
                      }`}
                    >
                      {i + 1}
                    </div>
                    {/* Connector line (not after last dot) */}
                    {i < phases.length - 1 && (
                      <div
                        className={`h-[2px] w-4 sm:w-8 transition-all duration-300 ${
                          active > i ? "bg-gray-300" : "bg-gray-200"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-center text-sm text-white/60 mt-10 max-w-3xl mx-auto">
          <strong className="text-white/80">AdoptionOS</strong> can map
          ABEN&apos;s Method™ to the language and phases of an organization&apos;s
          existing methodology.
        </p>
      </div>
    </section>
  );
}

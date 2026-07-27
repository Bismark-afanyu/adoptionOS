"use client";

import { useState, useEffect } from "react";

const steps = [
  {
    num: "01",
    title: "Set up the environment",
    description:
      "Define the transformation profile: scope, delivery approach, timeline, impacted functions, and organizational context.",
    mockup: {
      title: "Transformation Profile",
      items: ["Organization", "Scope", "Timeline", "Delivery Approach"],
    },
  },
  {
    num: "02",
    title: "Complete the diagnostic",
    description:
      "Assess sponsorship quality, adoption readiness, change capacity, risk landscape, and people impact across the program.",
    mockup: {
      title: "Diagnostic Results",
      items: ["Sponsorship Score", "Adoption Readiness", "Risk Index", "Change Capacity"],
    },
  },
  {
    num: "03",
    title: "Map the transformation phase",
    description:
      "Identify where the program genuinely sits within the six-phase lifecycle, even when work begins at an advanced stage.",
    mockup: {
      title: "Lifecycle Phase Locator",
      items: ["Mobilize", "Discover", "Design", "Validate", "Launch", "Sustain"],
    },
  },
  {
    num: "04",
    title: "Review the advisory roadmap",
    description:
      "Receive a transformation-specific roadmap of recommended adoption activities, owners, and deliverables.",
    mockup: {
      title: "Advisory Roadmap",
      items: ["Change Capacity Diagnostic", "Stakeholder Alignment", "Communications Strategy", "Training Plan"],
    },
  },
  {
    num: "05",
    title: "Act with guidance and leadership insight",
    description:
      "Access deliverable guidance, AI advisor rationale, and leadership-ready reports that surface decisions and next actions.",
    mockup: {
      title: "Executive Advisory Brief",
      items: ["AI Recommendation", "Priority Actions", "Risk Alerts", "Next Steps"],
    },
  },
];

export default function AdoptionFormula() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 bg-[#eef1f8] px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-5 py-2 rounded-full border border-gray-200 bg-white mb-6">
            <span className="text-xs font-semibold text-[#071127] uppercase tracking-wider">
              How It Works
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[1.9rem] font-display font-bold text-[#071127] max-w-3xl mx-auto leading-tight">
            From transformation context to a defensible adoption roadmap.
          </h2>
        </div>

        {/* Step Navigation */}
        <div className="bg-white rounded-2xl p-2 mb-6 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            {steps.map((step, i) => (
              <button
                key={step.num}
                onClick={() => setActive(i)}
                className={`text-left px-4 py-5 rounded-xl transition-all duration-300 ${
                  active === i
                    ? "bg-[#071127] text-white"
                    : "text-[#071127] hover:bg-gray-50"
                }`}
              >
                <span
                  className={`text-sm font-bold block mb-1 ${
                    active === i ? "text-white" : "text-[#071127]"
                  }`}
                >
                  {step.num}
                </span>
                <span
                  className={`text-sm font-medium leading-tight block ${
                    active === i ? "text-white/90" : "text-gray-600"
                  }`}
                >
                  {step.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left: Step Details */}
            <div>
              <span className="text-sm text-gray-400 font-medium mb-2 block">
                Step {active + 1}
              </span>
              <h3 className="text-2xl font-display font-bold text-[#071127] mb-4">
                {steps[active].title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {steps[active].description}
              </p>
            </div>

            {/* Right: Mockup Card */}
            <div className="border border-gray-100 rounded-2xl p-6">
              {/* Browser dots */}
              <div className="flex gap-1.5 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
              </div>

              <h4 className="text-sm font-semibold text-[#071127] mb-4 pb-3 border-b border-gray-100">
                {steps[active].mockup.title}
              </h4>

              <ul className="space-y-3">
                {steps[active].mockup.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#071127]" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}

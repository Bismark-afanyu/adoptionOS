"use client";

import { useState } from "react";

const inquiryTypes = [
  "Request a platform demo",
  "Adoption advisory services",
  "Consulting partnership",
  "System integrator partnership",
  "Speaking or media inquiry",
  "General inquiry",
];

const helpOptions = [
  {
    title: "Platform Demo",
    description: "See AdoptionOS in action with a guided demonstration tailored to your transformation context.",
  },
  {
    title: "Advisory Conversation",
    description: "Speak with an experienced adoption advisor about your transformation needs and challenges.",
  },
  {
    title: "Consulting Inquiry",
    description: "Explore how AdoptionOS Consulting can support your program from strategy through sustainment.",
  },
  {
    title: "Partnership",
    description: "Discuss how system integrators and consultancies can leverage AdoptionOS for client delivery.",
  },
];

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState("");

  return (
    <>
      <section className="bg-dark pt-32 pb-24 relative overflow-hidden grain-overlay grid-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-hero-xl font-display font-bold text-white mb-6">
              Let&apos;s discuss your transformation.
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Connect with an AdoptionOS advisor to explore the platform,
              consulting services, or partnership opportunities.
            </p>
          </div>
        </div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mb-16">
            {helpOptions.map((opt) => (
              <div
                key={opt.title}
                className="bg-card border border-border rounded-xl p-5"
              >
                <h3 className="font-display font-semibold text-primary text-sm mb-2">
                  {opt.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {opt.description}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="32" height="32" rx="8" fill="white" />
                  <path
                    d="M8 12h16v2H8zm0 4h12v2H8zm0 4h8v2H8z"
                    fill="#00A89D"
                  />
                </svg>
              </div>
              <div>
                <p className="font-display font-semibold text-primary text-sm">
                  AdoptionOS Inc.
                </p>
                <p className="text-xs text-muted">
                  We typically respond to inquiries within one business day. All
                  information shared is treated with professional confidence.
                </p>
              </div>
            </div>

            <h2 className="font-display font-bold text-primary text-xl mb-2">
              Submit an inquiry
            </h2>
            <p className="text-sm text-muted mb-8">
              Fields marked with * are required. Additional fields will appear
              based on your inquiry type.
            </p>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <p className="text-sm font-medium text-primary mb-4">
                  Your contact information
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-muted mb-1.5">
                      First name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-card border border-border rounded-md px-4 py-2.5 text-sm text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted mb-1.5">
                      Last name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-card border border-border rounded-md px-4 py-2.5 text-sm text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-muted mb-1.5">
                    Work email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-card border border-border rounded-md px-4 py-2.5 text-sm text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted mb-1.5">
                    Company *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-card border border-border rounded-md px-4 py-2.5 text-sm text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-muted mb-1.5">
                  Job title *
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-card border border-border rounded-md px-4 py-2.5 text-sm text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm text-muted mb-1.5">
                  Inquiry type *
                </label>
                <select
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  required
                  className="w-full bg-card border border-border rounded-md px-4 py-2.5 text-sm text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                >
                  <option value="">Select your inquiry type</option>
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <p className="text-xs text-muted mt-1.5">
                  Select your inquiry type to see relevant fields.
                </p>
              </div>

              {!inquiryType && (
                <p className="text-sm text-muted italic">
                  Select an inquiry type above to continue.
                </p>
              )}

              {inquiryType && (
                <button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground font-semibold px-6 py-3.5 rounded-md hover:bg-accent/90 hover:shadow-teal-glow transition-all"
                >
                  Submit Inquiry
                </button>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

export default function AdoptionFoundation() {

  const pillars = [
  { title: "Engagement", description: "The human connection required to build awareness, sponsorship, participation, feedback, and commitment throughout the transformation.", color: "bg-[#12b886]", image: "/image/Frame14.png", objectPosition: "center center" },
  { title: "Enablement", description: "The knowledge, skills, tools, practice, and reinforcement required for people to work successfully in the new environment.", color: "bg-[#3b7cf5]", image: "/image/Frame.png", objectPosition: "center top" },
  { title: "Analytics", description: "The evidence required to understand adoption, identify gaps, guide decisions, and continuously improve outcomes across the lifecycle.", color: "bg-[#7c5ce0]", image: "/image/Frame0.png", objectPosition: "center top" },
];

  return (
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
  );
}
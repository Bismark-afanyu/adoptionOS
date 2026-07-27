export default function CategoryGap() {
  return (
    <section className="py-10 bg-white px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-[1200px] w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col">
            <div className="flex items-start gap-4 mb-6">
              {/* Gradient accent bar */}
              <div className="w-2 h-16 rounded-full bg-gradient-to-b from-[#a855f7] via-[#2563eb] to-[#10b981] shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-[1.75rem] font-display font-bold text-[#071127] leading-tight">
                  Powered by<br />
                  ABEN&apos;s Method™
                </h2>
              </div>
            </div>

            <p className="text-gray-600 text-[15px] leading-relaxed max-w-md ml-6">
              The platform turns adoption methodology into practical guidance,
              recommended actions, required deliverables, and evidence leaders
              can trust.
            </p>
          </div>

          {/* Right Column: Circular Diagram */}
          <div className="relative animate-fade-slide-up opacity-0 [animation-delay:400ms] w-full flex flex-col items-center lg:items-end mt-8 lg:mt-0 bg-[#071127] rounded-full aspect-square max-w-[650px] p-8 sm:p-16 lg:p-20 mx-auto">
              <div className="relative w-full h-full">
                <svg viewBox="0 0 600 600" className="w-full h-full overflow-visible">
                  {/* Center of diagram: 300, 300 */}

                  {/* Inner Connecting Arcs (Circle of r=160 passing through nodes) */}
                  <path d="M 300 140 A 160 160 0 0 0 161.4 380" fill="none" stroke="#00a89d" strokeWidth="3" strokeDasharray="8 8" className="animate-flow-line" />
                  <path d="M 161.4 380 A 160 160 0 0 0 438.6 380" fill="none" stroke="#5667e8" strokeWidth="3" strokeDasharray="8 8" className="animate-flow-line" />
                  <path d="M 438.6 380 A 160 160 0 0 0 300 140" fill="none" stroke="#a855f7" strokeWidth="3" strokeDasharray="8 8" className="animate-flow-line" />

                  {/* Dashed lines from center to nodes */}
                  <path d="M300 300 L300 140" stroke="#d89a2b" strokeWidth="2.5" strokeDasharray="8 8" className="animate-flow-line" />
                  <path d="M300 300 L161.4 380" stroke="#00a89d" strokeWidth="2.5" strokeDasharray="8 8" className="animate-flow-line" />
                  <path d="M300 300 L438.6 380" stroke="#a855f7" strokeWidth="2.5" strokeDasharray="8 8" className="animate-flow-line" />

                  {/* Outer dashed orbit (r=230) */}
                  <circle cx="300" cy="300" r="230" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4 6" />

                  {/* Orbit pins and dots */}
                  {/* Mobilize (Top) */}
                  <path d="M300 70 L300 50" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                  <circle cx="300" cy="50" r="5" fill="#d89a2b" />
                  <text x="300" y="35" fill="#fff" fontSize="13" textAnchor="middle" opacity="0.9">Mobilize</text>

                  {/* Discover (Top Right) */}
                  <path d="M499 185 L514 176" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                  <circle cx="514" cy="176" r="5" fill="#00a89d" />
                  <text x="526" y="180" fill="#fff" fontSize="13" textAnchor="start" opacity="0.9">Discover</text>

                  {/* Design (Bottom Right) */}
                  <path d="M499 415 L514 424" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                  <circle cx="514" cy="424" r="5" fill="#a855f7" />
                  <text x="526" y="428" fill="#fff" fontSize="13" textAnchor="start" opacity="0.9">Design</text>

                  {/* Validate (Bottom) */}
                  <path d="M300 530 L300 550" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                  <circle cx="300" cy="550" r="5" fill="#00a89d" />
                  <text x="300" y="572" fill="#fff" fontSize="13" textAnchor="middle" opacity="0.9">Validate</text>

                  {/* Launch (Bottom Left) */}
                  <path d="M101 415 L86 424" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                  <circle cx="86" cy="424" r="5" fill="#00a89d" />
                  <text x="74" y="428" fill="#fff" fontSize="13" textAnchor="end" opacity="0.9">Launch</text>

                  {/* Sustain (Top Left) */}
                  <path d="M101 185 L86 176" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                  <circle cx="86" cy="176" r="5" fill="#00a89d" />
                  <text x="74" y="180" fill="#fff" fontSize="13" textAnchor="end" opacity="0.9">Sustain</text>


                  {/* Top Node: ENGAGEMENT */}
                  <circle cx="300" cy="140" r="60" fill="#071127" stroke="#d89a2b" strokeWidth="2" className="drop-shadow-[0_0_15px_rgba(216,154,43,0.4)]" />
                  <text x="300" y="135" fill="#fff" fontSize="16" fontWeight="bold" textAnchor="middle">ENGAGE</text>
                  <text x="300" y="152" fill="#d89a2b" fontSize="12" fontWeight="bold" textAnchor="middle">MENT</text>

                  {/* Bottom Left Node: ENABLEMENT */}
                  <circle cx="161.4" cy="380" r="60" fill="#071127" stroke="#00a89d" strokeWidth="2" className="drop-shadow-[0_0_15px_rgba(0,168,157,0.4)]" />
                  <text x="161.4" y="375" fill="#fff" fontSize="16" fontWeight="bold" textAnchor="middle">ENABLE</text>
                  <text x="161.4" y="392" fill="#00a89d" fontSize="12" fontWeight="bold" textAnchor="middle">MENT</text>

                  {/* Bottom Right Node: ANALYTICS */}
                  <circle cx="438.6" cy="380" r="60" fill="#071127" stroke="#a855f7" strokeWidth="2" className="drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]" />
                  <text x="438.6" y="375" fill="#fff" fontSize="16" fontWeight="bold" textAnchor="middle">ANALYT</text>
                  <text x="438.6" y="392" fill="#a855f7" fontSize="12" fontWeight="bold" textAnchor="middle">ICS</text>

                  {/* Center Node: ADOPTION OS */}
                  <circle cx="300" cy="300" r="85" fill="#071127" stroke="#00a89d" strokeWidth="2" className="drop-shadow-[0_0_30px_rgba(0,168,157,0.3)]" />
                  <circle cx="300" cy="300" r="80" fill="none" stroke="rgba(0,168,157,0.3)" strokeWidth="1" />

                  {/* Logo inside center node */}
                  <path d="M300 240 L280 270 H292 L300 255 L308 270 H320 Z" fill="#00a89d" opacity="0.8" />
                  <path d="M290 275 L300 290 L310 275 Z" fill="#00a89d" opacity="0.5" />

                  <text x="300" y="305" fill="#fff" fontSize="18" fontWeight="bold" textAnchor="middle">ADOPTION</text>
                  <text x="300" y="322" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle" opacity="0.9">OPERATING SYSTEM</text>
                </svg>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}

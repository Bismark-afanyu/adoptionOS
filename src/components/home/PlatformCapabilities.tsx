export default function PlatformCapabilities() {
  const items = [
    { name: "Finance", system: "ERPs." },
    { name: "Sales", system: "CRMs." },
    { name: "HR", system: "HCM platforms." },
    { name: "Engineering", system: "PLM." },
    { name: "Projects", system: "PPM." },
  ];

  return (
    <section className="py-20 bg-[#eef1f8] px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] w-full mx-auto">
        {/* Top Heading Card */}
        <div className="bg-white max-w-[1100px] w-full mx-auto rounded-t-2xl px-8 py-5 shadow-sm">
          <h2 className="text-3xl sm:text-4xl lg:text-[30px] font-display font-bold text-[#071127] text-center leading-tight">
            Every major enterprise function has a system. Adoption does not.
          </h2>
        </div>

        {/* Bottom Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          {/* Left Column: List */}
          <div className="bg-white  px-8 py-10 shadow-sm flex flex-col justify-center">
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <p key={item.name} className="text-xl sm:text-2xl font-display text-[#071127]">
                  <span className="font-bold">{item.name}</span>
                  <span className="font-normal text-gray-500"> has </span>
                  <span className="font-bold">{item.system}</span>
                </p>
              ))}
              <p className="text-xl sm:text-2xl font-display font-bold text-[#071127] mt-2">
                Enterprise adoption still relies primarily on documents
              </p>
            </div>
          </div>

          {/* Right Column: Image with Text Overlay */}
          <div className="relative  overflow-hidden shadow-sm min-h-[400px]">
            <img
              src="/image/rbC4T 1.png"
              alt="Team discussing transformation"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            {/* Text overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-white/90 text-sm leading-relaxed mb-4">
                Transformation teams continue to manage critical adoption work through
                disconnected presentations, spreadsheets, trackers, templates, and individual
                experience. AdoptionOS transforms that fragmented work into a guided,
                methodology-backed operating system.
              </p>
              <p className="text-white font-bold text-base">
                That is the gap AdoptionOS was created to address.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

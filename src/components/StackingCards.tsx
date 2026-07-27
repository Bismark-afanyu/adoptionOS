"use client";

import { useEffect, useRef, useState } from "react";

interface Capability {
  num: string;
  title: string;
  description: string;
  features: string[];
}

interface StackingCardsProps {
  items: Capability[];
}

export default function StackingCards({ items }: StackingCardsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrolled = -rect.top;
      const scrollableDistance = sectionHeight - viewportHeight;

      if (scrollableDistance <= 0) return;

      const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));
      const newIndex = Math.min(
        items.length - 1,
        Math.floor(progress * items.length)
      );

      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [items.length]);

  return (
    <div
      ref={sectionRef}
      style={{ height: `${items.length * 100}vh` }}
      className="relative"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="relative max-w-2xl mx-auto">
            {items.map((cap, index) => {
              const distance = index - activeIndex;
              const isActive = index === activeIndex;
              const isPast = index < activeIndex;

              let translateY = 0;
              let scale = 1;
              let opacity = 1;

              if (isPast) {
                translateY = -60;
                scale = 0.92;
                opacity = 0;
              } else if (isActive) {
                translateY = 0;
                scale = 1;
                opacity = 1;
              } else {
                translateY = 80 + (distance - 1) * 40;
                scale = 1 - distance * 0.05;
                opacity = Math.max(0, 1 - distance * 0.3);
              }

              return (
                <div
                  key={cap.num}
                  className="absolute inset-0 transition-all duration-700 ease-out"
                  style={{
                    transform: `translateY(${translateY}px) scale(${scale})`,
                    opacity,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                >
                  <div className="bg-card border border-border rounded-xl p-8 shadow-2xl">
                    <span className="text-sm font-mono text-accent font-semibold">
                      {cap.num}
                    </span>
                    <h3 className="font-display font-semibold text-primary text-xl mt-3 mb-4">
                      {cap.title}
                    </h3>
                    <p className="text-muted leading-relaxed mb-5">
                      {cap.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cap.features.map((f) => (
                        <span
                          key={f}
                          className="text-xs bg-background text-muted-foreground px-3 py-1.5 rounded-full border border-border"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="absolute right-2 sm:-right-16 top-1/2 -translate-y-1/2 flex flex-col gap-2">
              {items.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-accent scale-125"
                      : index < activeIndex
                      ? "bg-accent/40"
                      : "bg-border"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/platform", label: "Platform" },
  { href: "/methodology", label: "Methodology" },
  { href: "/consulting", label: "Consulting" },
  { href: "/company", label: "Company" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#000000] backdrop-blur-md  border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center">
          <img
            src="/image/AdoptionOS Logo White 1.png"
            alt="AdoptionOS"
            className="h-8"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[15px] font-medium px-4 py-2 rounded-md transition-colors ${
  isActive
    ? "bg-white/15 text-white"
    : "text-white/80 hover:text-white"
}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <Link
            href="/contact"
            className="text-[15px] font-medium text-white/80 hover:text-white transition-colors"
          >
            Talk to an Advisor
          </Link>
          <Link
            href="/contact"
            className="text-[15px] font-semibold bg-accent text-accent-foreground px-5 py-2.5 rounded-md hover:bg-accent/90 hover:shadow-teal-glow transition-all flex items-center gap-1.5"
          >
            Request a Demo
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

        <button
          className="lg:hidden p-2 text-white/80 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#071127] border-t border-white/10 px-6 py-4 space-y-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-sm font-medium transition-colors px-3 py-2 rounded-md ${
                  isActive
                    ? "bg-white/15 text-white"
                    : "text-white/80 hover:text-white"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <hr className="border-white/10" />
          <Link
            href="/contact"
            className="block text-sm font-medium text-white/80"
            onClick={() => setOpen(false)}
          >
            Talk to an Advisor
          </Link>
          <Link
            href="/contact"
            className="block text-sm font-semibold bg-accent text-accent-foreground px-5 py-2.5 rounded-md text-center flex items-center justify-center gap-1.5"
            onClick={() => setOpen(false)}
          >
            Request a Demo
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      )}
    </header>
  );
}
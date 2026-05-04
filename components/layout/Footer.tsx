"use client";
import { SOCIAL_LINKS } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative z-[2] flex flex-col md:flex-row items-center justify-between 
      gap-6 md:gap-4 px-6 md:px-12 lg:px-16 py-10
      border-t border-cyan-400/10">

      {/* Logo */}
      <div className="text-sm font-black tracking-[3px] text-cyan-400 font-orbitron">
        DEV.X
      </div>

      {/* Text */}
      <p className="text-[11px] tracking-wide text-gray-400/60 font-mono text-center">
        // BUILT WITH PRECISION — 2025
      </p>

      {/* Social Links */}
      <div className="flex gap-4">
        {SOCIAL_LINKS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            className="w-9 h-9 flex items-center justify-center text-sm
            border border-cyan-400/20 text-gray-400
            clip-hex-xs
            transition-all duration-300
            hover:border-cyan-400 hover:text-cyan-400
            hover:bg-cyan-400/[0.05]"
          >
            {s.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
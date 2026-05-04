"use client";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { SECTIONS } from "@/lib/data";

export function NavDots() {
  const active = useScrollSpy();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed right-7 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-50 hidden md:flex">
      {SECTIONS.map((id) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className="rounded-full transition-all duration-300"
          style={{
            width: 6, height: 6,
            border: active === id ? "1px solid var(--neon-cyan)" : "1px solid rgba(0,245,255,0.3)",
            background: active === id ? "var(--neon-cyan)" : "transparent",
            boxShadow: active === id ? "0 0 8px var(--neon-cyan)" : "none",
            
          }}
          aria-label={`Scroll to ${id}`}
        />
      ))}
    </div>
  );
}

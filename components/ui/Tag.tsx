import type { Tag as TagType } from "@/types";

const colorMap = {
  cyan: { border: "rgba(0,245,255,0.2)", color: "var(--neon-cyan)" },
  purple: { border: "rgba(191,0,255,0.2)", color: "var(--neon-purple)" },
  green: { border: "rgba(57,255,20,0.2)", color: "var(--neon-green)" },
};

export function Tag({ label, color = "cyan" }: TagType) {
  const c = colorMap[color];
  return (
    <span
      className="clip-hex-xxs inline-block px-2.5 py-1 text-xs tracking-wide"
      style={{ fontFamily: "var(--font-share-tech-mono)", fontSize: 10, border: `1px solid ${c.border}`, color: c.color, letterSpacing: 1 }}
    >
      {label}
    </span>
  );
}

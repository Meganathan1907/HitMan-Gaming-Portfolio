interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}
export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <div
      className={`section-label-line flex items-center uppercase tracking-widest mb-3 ${className}`}
      style={{ fontFamily: "var(--font-share-tech-mono)", fontSize: 11, color: "var(--neon-cyan)", letterSpacing: 4 }}
    >
      {children}
    </div>
  );
}

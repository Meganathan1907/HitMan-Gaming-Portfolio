export function Divider() {
  return (
    <div
      className="relative z-[2]"
      style={{
        margin: "0 60px",
        height: 1,
        maxWidth: "calc(100% - 120px)",
        background: "linear-gradient(90deg, transparent, rgba(0,245,255,0.2), transparent)",
      }}
    />
  );
}

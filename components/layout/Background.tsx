export function Background() {
  return (
    <>
      <div className="grid-bg" />
      {/* Orb 1 */}
      <div
        className="orb fixed rounded-full pointer-events-none z-0"
        style={{
          width: 400, height: 400,
          background: "rgba(191,0,255,0.12)",
          filter: "blur(80px)",
          top: -100, right: -100,
          animationDelay: "0s",
        }}
      />
      {/* Orb 2 */}
      <div
        className="orb fixed rounded-full pointer-events-none z-0"
        style={{
          width: 300, height: 300,
          background: "rgba(0,245,255,0.08)",
          filter: "blur(80px)",
          bottom: "20%", left: -80,
          animationDelay: "-3s",
        }}
      />
      {/* Orb 3 */}
      <div
        className="orb fixed rounded-full pointer-events-none z-0"
        style={{
          width: 250, height: 250,
          background: "rgba(57,255,20,0.06)",
          filter: "blur(80px)",
          top: "50%", right: "10%",
          animationDelay: "-5s",
        }}
      />
    </>
  );
}

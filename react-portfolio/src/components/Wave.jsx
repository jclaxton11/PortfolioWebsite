import Wave from "react-wavify";

export default function WaveBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,            // <-- key change
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", inset: 0 }}>
        <Wave
          fill="rgba(82, 198, 255, 0.10)"
          options={{ height: 60, amplitude: 28, speed: 0.08, points: 3 }}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        />
        <Wave
          fill="rgba(255, 179, 71, 0.12)"
          options={{ height: 45, amplitude: 34, speed: 0.12, points: 4 }}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}

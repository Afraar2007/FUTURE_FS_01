/**
 * Animated gradient blobs, blur fields and moving light streaks.
 * Pure CSS animations — cheap and SSR-safe.
 */
export function GradientBlobs() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-background" />

      {/* Gradient blobs */}
      <div className="animate-blob absolute -left-32 top-[-10%] h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle,oklch(0.65_0.24_295/0.35),transparent_60%)] blur-3xl" />
      <div
        className="animate-blob absolute right-[-15%] top-[20%] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,oklch(0.82_0.16_195/0.3),transparent_60%)] blur-3xl"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="animate-blob absolute bottom-[-15%] left-[20%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,oklch(0.68_0.27_340/0.28),transparent_60%)] blur-3xl"
        style={{ animationDelay: "-12s" }}
      />

      {/* Moving light streaks */}
      <div className="absolute left-0 top-1/4 h-px w-1/2">
        <div className="animate-streak h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>
      <div
        className="absolute right-0 top-2/3 h-px w-1/2"
        style={{ transform: "scaleX(-1)" }}
      >
        <div
          className="animate-streak h-px w-full bg-gradient-to-r from-transparent via-accent to-transparent"
          style={{ animationDelay: "-4s" }}
        />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.97 0.01 264) 1px, transparent 1px), linear-gradient(90deg, oklch(0.97 0.01 264) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,oklch(0.12_0.02_264/0.7))]" />
    </div>
  );
}

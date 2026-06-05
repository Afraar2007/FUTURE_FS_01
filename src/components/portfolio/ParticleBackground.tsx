import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

/**
 * Mouse-reactive interactive particle field.
 * Must be rendered inside <ClientOnly> to avoid SSR issues.
 */
export function ParticleBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      fpsLimit: 60,
      detectRetina: true,
      background: { color: "transparent" },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          onClick: { enable: true, mode: "push" },
        },
        modes: {
          grab: { distance: 160, links: { opacity: 0.5, color: "#5eead4" } },
          push: { quantity: 3 },
        },
      },
      particles: {
        number: { value: 70, density: { enable: true } },
        color: { value: ["#5eead4", "#a78bfa", "#f472b6"] },
        links: {
          enable: true,
          distance: 140,
          color: "#6366f1",
          opacity: 0.18,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.8,
          direction: "none",
          random: true,
          outModes: { default: "out" },
        },
        opacity: {
          value: { min: 0.2, max: 0.7 },
          animation: { enable: true, speed: 0.6, sync: false },
        },
        size: { value: { min: 1, max: 3 } },
        shape: { type: "circle" },
      },
    }),
    []
  );

  if (!ready) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="pointer-events-none fixed inset-0 -z-[5] h-full w-full"
    />
  );
}

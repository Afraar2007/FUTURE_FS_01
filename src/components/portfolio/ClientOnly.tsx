import { useEffect, useState, type ReactNode } from "react";

/**
 * Renders children only on the client (after mount).
 * Prevents SSR/hydration issues for canvas, WebGL and particle effects.
 */
export function ClientOnly({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return <>{children}</>;
}

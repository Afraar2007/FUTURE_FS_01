import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { navItems } from "@/lib/portfolio/data";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      className="fixed inset-x-0 top-4 z-50 px-4"
    >
      <nav
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6 ${
          scrolled ? "glass-strong shadow-elegant" : "glass"
        }`}
        style={scrolled ? { boxShadow: "var(--shadow-elegant)" } : undefined}
        aria-label="Primary"
      >
        <button
          onClick={() => handleNav("home")}
          className="flex items-center gap-2 font-display text-lg font-bold tracking-tight"
          aria-label="Go to home"
        >
          <Sparkles className="h-5 w-5 text-primary" aria-hidden="true" />
          <span className="text-gradient">AK.dev</span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map(({ label, id }) => (
            <li key={id}>
              <button
                onClick={() => handleNav(id)}
                className={`relative rounded-xl px-3.5 py-2 text-sm font-medium transition-colors ${
                  active === id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-current={active === id ? "page" : undefined}
              >
                {active === id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-xl bg-primary/15 ring-1 ring-primary/40"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleNav("contact")}
          className="hidden rounded-xl bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow-cyan)] transition-transform hover:scale-105 md:inline-flex"
        >
          Let&apos;s Talk
        </button>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="glass-strong mx-auto mt-3 max-w-5xl overflow-hidden rounded-2xl p-2 md:hidden"
          >
            <ul className="flex flex-col">
              {navItems.map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => handleNav(id)}
                    className={`block w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                      active === id
                        ? "bg-primary/15 text-foreground"
                        : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                    }`}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

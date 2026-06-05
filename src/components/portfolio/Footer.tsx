import { motion } from "framer-motion";
import { ArrowUp, Sparkles } from "lucide-react";
import { navItems, socials, profile } from "@/lib/portfolio/data";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/10 px-6 py-14">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <button
            onClick={() => scrollToId("home")}
            className="flex items-center gap-2 font-display text-xl font-bold"
          >
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-gradient">AK.dev</span>
          </button>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            {profile.tagline}
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold">Quick Navigation</h4>
          <ul className="grid grid-cols-2 gap-2">
            {navItems.map((n) => (
              <li key={n.id}>
                <button
                  onClick={() => scrollToId(n.id)}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {n.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold">Social</h4>
          <ul className="flex flex-wrap gap-3">
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.url}
                  className="glass inline-flex rounded-lg px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-primary"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Crafted with care.
        </p>
        <motion.button
          whileHover={{ y: -3 }}
          onClick={() => scrollToId("home")}
          className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-foreground"
          aria-label="Back to top"
        >
          <ArrowUp className="h-3.5 w-3.5" /> Back to Top
        </motion.button>
      </div>
    </footer>
  );
}

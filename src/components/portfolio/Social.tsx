import { motion } from "framer-motion";
import { Linkedin, Github, Instagram, Twitter, Youtube, Mail } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { socials } from "@/lib/portfolio/data";

const iconMap = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Instagram: Instagram,
  "Twitter/X": Twitter,
  YouTube: Youtube,
  Email: Mail,
} as const;

const items = socials.map((social) => ({
  ...social,
  icon: iconMap[social.name as keyof typeof iconMap] ?? Mail,
  color:
    social.name === "LinkedIn"
      ? "oklch(0.6 0.16 240)"
      : social.name === "GitHub"
      ? "oklch(0.75 0.02 264)"
      : social.name === "Instagram"
      ? "oklch(0.68 0.27 340)"
      : social.name === "Twitter/X"
      ? "oklch(0.82 0.16 195)"
      : social.name === "YouTube"
      ? "oklch(0.62 0.24 18)"
      : "oklch(0.65 0.24 295)",
}));

export function Social() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <SectionHeading eyebrow="Stay Connected" title="Find me online" />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {items.map((s, i) => (
          <motion.a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noreferrer noopener"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ y: -8 }}
            className="group glass relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl p-6"
          >
            <div
              className="absolute inset-0 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-30"
              style={{ background: s.color }}
            />
            <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 transition-colors group-hover:ring-white/30">
              <s.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
            </div>
            <span className="relative text-xs font-medium text-muted-foreground group-hover:text-foreground">
              {s.name}
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Download, Briefcase, GraduationCap, Award, FileText } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { experience, education, certifications, profile } from "@/lib/portfolio/data";

function Timeline({
  items,
  icon: Icon,
}: {
  items: { role: string; org: string; period: string; detail: string }[];
  icon: typeof Briefcase;
}) {
  return (
    <div className="relative ml-3 space-y-8 border-l border-white/10 pl-8">
      {items.map((item, i) => (
        <motion.div
          key={item.role + item.org}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="relative"
        >
          <span className="absolute -left-[42px] flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent ring-4 ring-background">
            <Icon className="h-3 w-3 text-primary-foreground" />
          </span>
          <span className="font-mono text-xs text-primary">{item.period}</span>
          <h4 className="mt-1 text-lg font-bold">{item.role}</h4>
          <p className="text-sm font-medium text-muted-foreground">{item.org}</p>
          <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
        </motion.div>
      ))}
    </div>
  );
}

export function Resume() {
  return (
    <section id="resume" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <SectionHeading
        eyebrow="Career"
        title="Resume"
        subtitle="A snapshot of my journey, education and credentials."
      />

      <Reveal className="mb-14">
        <div className="glass-strong flex flex-col items-center justify-between gap-5 rounded-3xl p-8 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 ring-1 ring-white/10">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-bold">{profile.name} — Resume.pdf</h3>
              <p className="text-sm text-muted-foreground">
                Full work history, skills and references in one document.
              </p>
            </div>
          </div>
          <a
            href="/resume.pdf"
            download="Afraar-M-Resume.pdf"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow-cyan)] transition-transform hover:scale-105"
          >
            <Download className="h-4 w-4" /> Download Resume
          </a>
        </div>
      </Reveal>

      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h3 className="mb-8 flex items-center gap-2 text-xl font-bold">
            <Briefcase className="h-5 w-5 text-primary" /> Experience
          </h3>
          <Timeline items={experience} icon={Briefcase} />
        </div>
        <div>
          <h3 className="mb-8 flex items-center gap-2 text-xl font-bold">
            <GraduationCap className="h-5 w-5 text-primary" /> Education
          </h3>
          <Timeline items={education} icon={GraduationCap} />

          <h3 className="mb-6 mt-12 flex items-center gap-2 text-xl font-bold">
            <Award className="h-5 w-5 text-primary" /> Certifications
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {certifications.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass rounded-xl p-4 text-sm font-medium"
              >
                {c}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

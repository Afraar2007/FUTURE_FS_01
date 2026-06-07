import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";
import { stats, profile } from "@/lib/portfolio/data";
import portrait from "@/assets/about-portrait.jpg";

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <SectionHeading
        eyebrow="About Me"
        title="Engineering meets artistry"
        subtitle="A developer obsessed with the details that turn good products into unforgettable experiences."
      />

      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="group relative mx-auto max-w-sm">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/40 via-accent/30 to-transparent opacity-70 blur-2xl transition-opacity group-hover:opacity-100" />
            <div className="glass-strong animate-float-y relative overflow-hidden rounded-3xl">
              <img
                src={portrait}
                alt={`Stylized neon portrait of ${profile.name}`}
                width={896}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I&apos;m <span className="font-semibold text-foreground">{profile.name}</span>,
              a {profile.title.toLowerCase()} based in {profile.location}. Motivated and detail-oriented individual with a strong passion for technology, problem-solving, and continuous learning. Skilled in programming, web development, and analytical thinking, with the ability to adapt quickly to new challenges. Committed to delivering high-quality work, collaborating effectively in team environments, and contributing to organizational success through dedication, creativity, and a strong work ethic. Seeking opportunities to apply technical skills, gain practical experience, and grow as a professional in the field of software development and technology.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              My sweet spot is building clean, responsive, and scalable web applications. I enjoy turning ideas into real-world solutions through code while continuously learning new technologies and improving my problem-solving skills. When I'm not coding, I'm exploring new tech trends, working on personal projects, and sharpening my development expertise.

            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={0.08 * i}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="glass rounded-2xl p-5 text-center"
                >
                  <div className="text-3xl font-bold text-gradient sm:text-4xl">
                    <CountUp to={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

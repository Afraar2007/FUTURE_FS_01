import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, Clock, Calendar, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { articles, articleCategories } from "@/lib/portfolio/data";

export function Articles() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<string>("All");

  const featured = articles.find((a) => a.featured);
  const list = articles.filter((a) => {
    const matchesCat = cat === "All" || a.category === cat;
    const matchesQuery =
      a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(query.toLowerCase());
    return matchesCat && matchesQuery && !a.featured;
  });

  return (
    <section id="articles" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <SectionHeading
        eyebrow="Writing"
        title="Articles & Notes"
        subtitle="Deep-dives on performance, 3D on the web and pragmatic architecture."
      />

      {featured && (
        <Reveal>
          <article className="group glass-strong relative mb-10 grid overflow-hidden rounded-3xl md:grid-cols-2">
            <div className="relative overflow-hidden">
              <img
                src={featured.image}
                alt={`${featured.title} cover`}
                width={1024}
                height={768}
                loading="lazy"
                className="h-full min-h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-primary to-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary-foreground">
                Featured
              </span>
            </div>
            <div className="flex flex-col justify-center p-8">
              <span className="font-mono text-xs uppercase tracking-widest text-primary">
                {featured.category}
              </span>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">{featured.title}</h3>
              <p className="mt-3 text-muted-foreground">{featured.excerpt}</p>
              <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" /> {featured.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" /> {featured.readingTime}
                </span>
              </div>
              <a
                href="#"
                className="mt-6 inline-flex w-fit items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
              >
                Read article <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        </Reveal>
      )}

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="glass flex items-center gap-2 rounded-xl px-4 py-2.5">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles..."
            aria-label="Search articles"
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground sm:w-56"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {articleCategories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                cat === c
                  ? "bg-gradient-to-r from-primary to-accent text-primary-foreground"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid gap-6 md:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((a) => (
            <motion.article
              layout
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4 }}
              className="group glass overflow-hidden rounded-2xl"
            >
              <div className="overflow-hidden">
                <img
                  src={a.image}
                  alt={`${a.title} cover`}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
                  {a.category}
                </span>
                <h3 className="mt-2 text-lg font-bold leading-snug">{a.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{a.excerpt}</p>
                <div className="mt-4 flex items-center gap-3 text-[11px] text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {a.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {a.readingTime}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
      {list.length === 0 && (
        <p className="mt-8 text-center text-sm text-muted-foreground">
          No articles match your search.
        </p>
      )}
    </section>
  );
}

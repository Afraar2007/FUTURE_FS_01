import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send, CheckCircle2, Mail, MapPin, Linkedin, Github } from "lucide-react";
import { z } from "zod";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { profile } from "@/lib/portfolio/data";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  subject: z.string().trim().min(2, "Add a subject").max(120),
  message: z.string().trim().min(10, "Message is too short").max(1200),
});

type Field = "name" | "email" | "subject" | "message";
const fields: { id: Field; label: string; type?: string; textarea?: boolean }[] = [
  { id: "name", label: "Your Name" },
  { id: "email", label: "Email Address", type: "email" },
  { id: "subject", label: "Subject" },
  { id: "message", label: "Message", textarea: true },
];

export function Contact() {
  const [values, setValues] = useState<Record<Field, string>>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formspreeFormId = import.meta.env.VITE_FORMSPREE_FORM_ID ?? "xyzabc123";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(values);
    if (!result.success) {
      const fieldErrors: Partial<Record<Field, string>> = {};
      result.error.issues.forEach((issue) => {
        fieldErrors[issue.path[0] as Field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    
    setErrors({});
    setSubmissionError(null);
    setIsLoading(true);
    
    if (formspreeFormId === "xyzabc123") {
      setSubmissionError(
        "Formspree is not configured. Please set VITE_FORMSPREE_FORM_ID in your .env file or replace the placeholder form ID."
      );
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeFormId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
        }),
      });

      if (response.ok) {
        setSent(true);
        setValues({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSent(false), 4000);
      } else {
        const errorText = await response.text();
        console.error("Formspree response error:", errorText);
        setSubmissionError(
          "Unable to send message. Please check your Formspree settings and try again."
        );
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      setSubmissionError(
        "Something went wrong while sending your message. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <SectionHeading
        eyebrow="Get In Touch"
        title="Let's build something"
        subtitle="Have a project in mind or just want to say hi? My inbox is always open."
      />

      <div className="grid gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="flex h-full flex-col gap-4">
            <div className="glass-strong rounded-2xl p-6">
              <h3 className="text-lg font-bold">Contact details</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Prefer a direct line? Reach me through any of these.
              </p>
              <div className="mt-5 space-y-4">
                <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-sm hover:text-primary">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                    <Mail className="h-4 w-4 text-primary" />
                  </span>
                  {profile.email}
                </a>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                    <MapPin className="h-4 w-4 text-primary" />
                  </span>
                  {profile.location}
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <a href="#" aria-label="LinkedIn" className="glass flex h-10 w-10 items-center justify-center rounded-xl hover:text-primary">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" aria-label="GitHub" className="glass flex h-10 w-10 items-center justify-center rounded-xl hover:text-primary">
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="glass-strong space-y-5 rounded-3xl p-7" noValidate>
            {fields.map((f) => (
              <div key={f.id} className="group relative">
                {f.textarea ? (
                  <textarea
                    id={f.id}
                    rows={4}
                    value={values[f.id]}
                    onChange={(e) => setValues((v) => ({ ...v, [f.id]: e.target.value }))}
                    className="peer w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 pb-2 pt-6 text-sm outline-none transition-colors focus:border-primary/60"
                    placeholder=" "
                    aria-invalid={!!errors[f.id]}
                  />
                ) : (
                  <input
                    id={f.id}
                    type={f.type ?? "text"}
                    value={values[f.id]}
                    onChange={(e) => setValues((v) => ({ ...v, [f.id]: e.target.value }))}
                    className="peer w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 pb-2 pt-6 text-sm outline-none transition-colors focus:border-primary/60"
                    placeholder=" "
                    aria-invalid={!!errors[f.id]}
                  />
                )}
                <label
                  htmlFor={f.id}
                  className="pointer-events-none absolute left-4 top-4 text-sm text-muted-foreground transition-all peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
                >
                  {f.label}
                </label>
                {errors[f.id] && (
                  <p className="mt-1.5 text-xs text-destructive">{errors[f.id]}</p>
                )}
              </div>
            ))}

            <button
              type="submit"
              disabled={isLoading}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow-cyan)] transition-transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              {isLoading ? "Sending..." : "Send Message"}
            </button>

            {submissionError && (
              <div className="rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive">
                {submissionError}
              </div>
            )}

            <AnimatePresence>
              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex items-center justify-center gap-2 rounded-xl bg-primary/15 px-4 py-3 text-sm font-medium text-primary ring-1 ring-primary/30"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  Thanks! Your message is on its way.
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

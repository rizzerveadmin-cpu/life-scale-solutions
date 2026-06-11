import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Dr Mary Kimani" },
      { name: "description", content: "Reach out for keynotes, advisory, acquisitions, partnerships and collaborations." },
      { property: "og:title", content: "Let's build something meaningful — Dr Mary Kimani" },
      { property: "og:description", content: "Reach out for keynotes, advisory, acquisitions, partnerships and collaborations." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const intents = ["Keynote", "Advisory", "Partnership", "Acquisition", "Media", "Other"];

const WEBHOOK_URL = "https://hook.eu1.make.com/nwz6p2n66ckaxciw9thurg8crhdoy2do";

function ContactPage() {
  const [intent, setIntent] = useState("Keynote");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      "Interested in": intent,
      Name: String(formData.get("name") ?? ""),
      Organisation: String(formData.get("org") ?? ""),
      Email: String(formData.get("email") ?? ""),
      Phone: String(formData.get("phone") ?? ""),
      Message: String(formData.get("message") ?? ""),
    };

    setStatus("submitting");
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      setIntent("Keynote");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-background text-charcoal">
      <SiteNav />
      <section className="pt-40 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <p className="text-xs uppercase tracking-[0.3em] text-teal mb-6">Contact</p>
            <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.02]">
              Let's build something <span className="italic text-teal">meaningful</span>.
            </h1>
          </div>
          <div className="lg:col-span-4">
            <p className="text-lg text-charcoal/70 leading-relaxed">
              Whether you're seeking a keynote speaker, strategic advisor,
              acquisition partner, or collaborator, I'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-10">
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="lg:col-span-8 bg-background border border-border rounded-3xl p-8 md:p-12"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-charcoal/50 mb-4">I'm interested in</p>
            <div className="flex flex-wrap gap-2 mb-10">
              {intents.map((i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => setIntent(i)}
                  className={`px-5 py-2.5 rounded-full text-sm border transition-colors ${
                    intent === i
                      ? "bg-charcoal text-primary-foreground border-charcoal"
                      : "border-charcoal/15 text-charcoal/70 hover:border-teal hover:text-teal"
                  }`}
                >{i}</button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Your name" name="name" />
              <Field label="Organisation" name="org" />
              <Field label="Email" name="email" type="email" />
              <Field label="Phone (optional)" name="phone" />
            </div>
            <div className="mt-6">
              <label className="block text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2">Tell me about it</label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full bg-transparent border-b border-charcoal/20 focus:border-teal outline-none py-3 text-charcoal placeholder:text-charcoal/30 transition-colors"
                placeholder="Event, opportunity, timing, audience…"
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-charcoal text-primary-foreground hover:bg-teal transition-colors disabled:opacity-60"
            >
              {status === "submitting" ? "Sending…" : "Send message"} <ArrowUpRight className="size-4" />
            </button>

            {status === "success" && (
              <p className="mt-6 text-sm text-teal">Thank you — your enquiry has been sent.</p>
            )}
            {status === "error" && (
              <p className="mt-6 text-sm text-red-600">Something went wrong. Please try again.</p>
            )}
          </motion.form>

          <div className="lg:col-span-4 space-y-8">
            <div className="bg-charcoal text-mist rounded-3xl p-10">
              <p className="text-xs uppercase tracking-[0.25em] text-emerald mb-6">Direct</p>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Mail className="size-5 text-emerald shrink-0 mt-0.5" />
                  <a href="mailto:hello@drmarykimani.com" className="text-mist hover:text-emerald transition-colors">hello@drmarykimani.com</a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="size-5 text-emerald shrink-0 mt-0.5" />
                  <span>Melbourne, Australia · Available globally</span>
                </div>
              </div>
            </div>
            <div className="bg-sage/30 rounded-3xl p-10">
              <p className="font-display text-2xl text-charcoal leading-snug">
                "Real impact happens when systems, people, and purpose align."
              </p>
              <p className="mt-5 text-sm text-charcoal/60">— Dr Mary Kimani</p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-2">{label}</label>
      <input
        name={name}
        type={type}
        className="w-full bg-transparent border-b border-charcoal/20 focus:border-teal outline-none py-3 text-charcoal placeholder:text-charcoal/30 transition-colors"
      />
    </div>
  );
}

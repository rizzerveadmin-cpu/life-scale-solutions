import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight, Mic, Compass, TrendingUp, GraduationCap, Handshake } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Dr Mary Kimani" },
      { name: "description", content: "Speaking, advisory, growth, sector expertise and partnerships with Dr Mary Kimani." },
      { property: "og:title", content: "Services — Dr Mary Kimani" },
      { property: "og:description", content: "Five ways to engage Dr Mary Kimani." },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Mic, title: "Speaking & Keynotes", body: "For conferences and leadership events that need a voice with both authority and lived experience." },
  { icon: Compass, title: "Strategic Advisory", body: "Trusted counsel for boards, founders, executives and investors navigating complex growth and impact decisions." },
  { icon: TrendingUp, title: "Business Growth & Transformation", body: "Scaling systems, operations and teams — turning mission-led organisations into commercially resilient platforms." },
  { icon: GraduationCap, title: "Disability & Education Innovation", body: "Specialised sector expertise across NDIS, early childhood, education and youth development." },
  { icon: Handshake, title: "Partnerships & Acquisitions", body: "Growth opportunities, joint ventures and strategic collaborations with founders and investors." },
];

function ServicesPage() {
  return (
    <div className="bg-background text-charcoal">
      <SiteNav />
      <section className="pt-40 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-teal mb-6">Services</p>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] max-w-4xl">
            Five ways to engage <span className="italic text-teal">Dr Mary</span>.
          </h1>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-px bg-border rounded-3xl overflow-hidden border border-border">
          {services.map(({ icon: Icon, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="bg-background hover:bg-sage/15 transition-colors p-10 lg:p-14 grid lg:grid-cols-12 gap-8 items-center group"
            >
              <div className="lg:col-span-1 font-display text-emerald text-xl">0{i + 1}</div>
              <div className="lg:col-span-1"><Icon className="size-8 text-teal" strokeWidth={1.4} /></div>
              <div className="lg:col-span-5">
                <h2 className="font-display text-3xl md:text-4xl text-charcoal">{title}</h2>
              </div>
              <div className="lg:col-span-4">
                <p className="text-charcoal/70 leading-relaxed">{body}</p>
              </div>
              <div className="lg:col-span-1 flex justify-end">
                <Link to="/contact" className="inline-flex items-center justify-center size-12 rounded-full border border-charcoal/20 group-hover:bg-charcoal group-hover:text-primary-foreground group-hover:border-charcoal transition-colors">
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
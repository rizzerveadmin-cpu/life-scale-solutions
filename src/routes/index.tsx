import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Mic, Briefcase, Compass, Check, ChevronLeft, ChevronRight } from "lucide-react";
import maryExecutive from "@/assets/mary-executive.png";
import maryObama from "@/assets/mary-obama.jpg";
import maryTv from "@/assets/mary-tv.jpeg";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr Mary Kimani — Founder, Investor & Social Impact Architect" },
      { name: "description", content: "Entrepreneur, investor and global leader building businesses that transform systems and change lives." },
      { property: "og:title", content: "Dr Mary Kimani — Founder, Investor & Social Impact Architect" },
      { property: "og:description", content: "Entrepreneur, investor and global leader building businesses that transform systems and change lives." },
    ],
  }),
  component: Index,
});

const impactStats = [
  { value: 40, suffix: "+", label: "Years Leadership" },
  { value: 4000, suffix: "+", label: "Families Impacted" },
  { value: null, text: "Entrepreneur & Investor", label: "" },
  { value: null, text: "NDIS & Education Expert", label: "" },
  { value: null, text: "International Speaker", label: "" },
  { value: null, text: "Systems Transformation Leader", label: "" },
];

const milestones = [
  "Born in Rural Kenya",
  "Migrated to Australia with $500",
  "Earned a PhD",
  "Built Services Supporting 4,000+ Families",
  "Entrepreneur, Investor & Speaker",
];

const carouselImages = [
  { src: maryExecutive, alt: "Dr Mary Kimani — executive portrait", caption: "Executive Portrait" },
  { src: maryObama, alt: "Dr Mary Kimani with President Barack Obama", caption: "With President Barack Obama" },
  { src: maryTv, alt: "Dr Mary Kimani in a televised interview", caption: "Televised Interview" },
];

const whatIDo = [
  { icon: Mic, title: "Speaking", body: "High-impact keynotes on leadership, education, disability innovation and systems transformation." },
  { icon: Briefcase, title: "Business Acquisition & Consulting", body: "Supporting growth, partnerships, acquisitions and scalable impact." },
  { icon: Compass, title: "Strategic Advisory", body: "Guidance for founders, executives, boards and investors." },
];

const proofs = [
  { title: "Commercial Proof", body: "Built and scaled sustainable organisations serving thousands of families." },
  { title: "Social Proof", body: "Creating measurable outcomes for vulnerable individuals and communities." },
  { title: "Execution Proof", body: "40 years of delivering practical systems that work." },
  { title: "Industry Proof", body: "Recognised authority across disability, education, youth and early childhood sectors." },
];

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString() + suffix);
  const [display, setDisplay] = useState("0" + suffix);
  useEffect(() => {
    const unsub = rounded.on("change", setDisplay);
    return () => unsub();
  }, [rounded]);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration: 2, ease: "easeOut" });
    return () => controls.stop();
  }, [inView, mv, to]);
  return <span ref={ref}>{display}</span>;
}

function StoryCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % carouselImages.length), 5000);
    return () => clearInterval(t);
  }, []);
  const go = (d: number) => setI((p) => (p + d + carouselImages.length) % carouselImages.length);
  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-mist shadow-2xl">
      {carouselImages.map((img, idx) => (
        <motion.img
          key={img.src}
          src={img.src}
          alt={img.alt}
          initial={false}
          animate={{ opacity: i === idx ? 1 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ))}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/80 to-transparent p-6 flex items-end justify-between">
        <p className="text-mist text-sm tracking-wide">{carouselImages[i].caption}</p>
        <div className="flex gap-2">
          <button onClick={() => go(-1)} aria-label="Previous" className="size-9 rounded-full bg-mist/20 hover:bg-mist/40 backdrop-blur flex items-center justify-center text-mist transition-colors">
            <ChevronLeft className="size-4" />
          </button>
          <button onClick={() => go(1)} aria-label="Next" className="size-9 rounded-full bg-mist/20 hover:bg-mist/40 backdrop-blur flex items-center justify-center text-mist transition-colors">
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
      <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-1.5">
        {carouselImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`h-1 rounded-full transition-all ${i === idx ? "w-8 bg-mist" : "w-4 bg-mist/40"}`}
          />
        ))}
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="bg-background text-charcoal overflow-x-hidden">
      <SiteNav />

      {/* HERO */}
      <section className="relative min-h-screen pt-32 pb-20 lg:pt-40 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-teal mb-8">
              <span className="h-px w-10 bg-teal" /> Dr Mary Kimani
            </div>
            <h1 className="font-display text-[clamp(2.75rem,6vw,5.5rem)] leading-[1.02] text-charcoal">
              Building Businesses.
              <br />
              <span className="italic text-teal">Transforming</span> Systems.
              <br />
              Changing Lives.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-charcoal/70 leading-relaxed">
              Entrepreneur, Investor, Speaker and Social Impact Leader
              creating measurable outcomes across disability, education,
              youth development and community transformation.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-charcoal text-primary-foreground text-sm hover:bg-teal transition-colors"
              >
                Book Dr Mary
                <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-charcoal/20 text-charcoal text-sm hover:bg-charcoal hover:text-primary-foreground transition-colors"
              >
                Partner With Me
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div
              className="absolute -inset-6 rounded-[2rem] blur-2xl opacity-40"
              style={{ background: "linear-gradient(135deg, #216869, #1F2421)" }}
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-mist shadow-2xl">
              <img
                src={maryExecutive}
                alt="Dr Mary Kimani — executive portrait"
                className="h-full w-full object-cover"
              />
              <div
                className="absolute inset-0 mix-blend-multiply opacity-20"
                style={{ background: "linear-gradient(180deg, transparent 40%, #1F2421 100%)" }}
              />
              <div
                className="absolute inset-0 mix-blend-overlay opacity-30"
                style={{ background: "linear-gradient(135deg, transparent 60%, #216869 100%)" }}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl px-5 py-4 shadow-xl hidden md:block">
              <p className="text-xs uppercase tracking-[0.2em] text-teal">Impact</p>
              <p className="font-display text-2xl mt-1">4,000+ families</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* IMPACT STATISTICS BAR — #DCE1DE */}
      <section style={{ backgroundColor: "#DCE1DE" }} className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-xs uppercase tracking-[0.35em] text-teal mb-12 text-center">
            Impact at Scale
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
            {impactStats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="border-t border-charcoal/15 pt-6"
              >
                {s.value !== null ? (
                  <>
                    <p className="font-display text-5xl md:text-6xl text-charcoal leading-none">
                      <CountUp to={s.value} suffix={s.suffix} />
                    </p>
                    <p className="mt-3 text-sm uppercase tracking-[0.2em] text-charcoal/70">{s.label}</p>
                  </>
                ) : (
                  <p className="font-display text-2xl md:text-3xl text-charcoal leading-snug">{s.text}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FROM RURAL KENYA TO GLOBAL INFLUENCE — White */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <StoryCarousel />
          </div>
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-teal mb-6">The Woman Behind The Impact</p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-charcoal">
              From Rural Kenya<br />to Global Influence
            </h2>
            <div className="mt-8 space-y-5 text-lg text-charcoal/75 leading-relaxed max-w-xl">
              <p>
                Born in rural Kenya with limited resources, Dr Mary Kimani
                transformed adversity into opportunity through education,
                determination, and relentless execution.
              </p>
              <p>
                Arriving in Australia with only $500, she balanced study, work,
                and single motherhood while pursuing a PhD — and went on to
                build services empowering thousands of vulnerable individuals.
              </p>
            </div>
            <div className="mt-10">
              <p className="text-xs uppercase tracking-[0.3em] text-teal mb-5">Key Milestones</p>
              <ul className="space-y-3">
                {milestones.map((m, i) => (
                  <motion.li
                    key={m}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                    className="flex items-center gap-3 text-charcoal/85"
                  >
                    <span className="flex items-center justify-center size-6 rounded-full bg-emerald/15 text-emerald">
                      <Check className="size-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-base md:text-lg">{m}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT I DO — #9CC5A1 at 10% */}
      <section style={{ backgroundColor: "rgba(156, 197, 161, 0.10)" }} className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-teal mb-6">What I Do</p>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-tight">
              Three ways to <span className="italic text-teal">work together</span>.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {whatIDo.map(({ icon: Icon, title, body }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-background rounded-2xl p-10 border border-border hover:border-teal/40 hover:shadow-xl transition-all"
              >
                <div className="size-12 rounded-xl bg-teal/10 flex items-center justify-center mb-6 group-hover:bg-teal group-hover:text-mist transition-colors">
                  <Icon className="size-6 text-teal group-hover:text-mist transition-colors" strokeWidth={1.6} />
                </div>
                <h3 className="font-display text-2xl text-charcoal mb-3">{title}</h3>
                <p className="text-charcoal/70 leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF — White */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-teal mb-6">The Proof</p>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-tight">
              Four pillars of <span className="italic text-teal">credibility</span>.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border rounded-3xl overflow-hidden border border-border">
            {proofs.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-background p-10 hover:bg-sage/15 transition-colors"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-display text-emerald text-sm">0{i + 1}</span>
                  <span className="h-px flex-1 bg-border" />
                </div>
                <h3 className="font-display text-2xl text-charcoal mb-3">{p.title}</h3>
                <p className="text-charcoal/70 leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — White */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-teal mb-6">Testimonials</p>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-tight">
              What partners <span className="italic text-teal">say</span>.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { quote: "[Add a testimonial from a client, partner or collaborator here. Replace this text with a real quote.]", name: "[Name]", role: "[Role, Organisation]" },
              { quote: "[Add a second testimonial here. This could be from a conference organiser, board member, or investor.]", name: "[Name]", role: "[Role, Organisation]" },
              { quote: "[Add a third testimonial here. Consider including one from the disability, education or youth sector.]", name: "[Name]", role: "[Role, Organisation]" },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-background rounded-2xl p-10 border border-border"
              >
                <p className="text-emerald text-4xl font-display leading-none mb-6">&ldquo;</p>
                <p className="text-charcoal/80 leading-relaxed mb-8">{t.quote}</p>
                <div>
                  <p className="font-display text-charcoal">{t.name}</p>
                  <p className="text-sm text-charcoal/60">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE — #216869 at 5% */}
      <section style={{ backgroundColor: "rgba(33, 104, 105, 0.05)" }} className="py-40">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-teal mb-12">Signature</p>
          <blockquote
            className="text-charcoal leading-[1.08]"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.5rem, 6.5vw, 5.5rem)",
            }}
          >
            <span className="text-emerald">&ldquo;</span>Real impact happens when systems, people and purpose
            <span className="italic"> align</span>.<span className="text-emerald">&rdquo;</span>
          </blockquote>
          <p
            className="mt-12 text-teal"
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1.75rem" }}
          >
            — Dr Mary Kimani
          </p>
        </div>
      </section>

      {/* CTA — White */}
      <section className="py-32 bg-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-charcoal">
            Ready to Create <span className="italic text-teal">Meaningful Impact</span>?
          </h2>
          <p className="mt-8 text-lg text-charcoal/75 leading-relaxed max-w-2xl mx-auto">
            Whether you're seeking a speaker, advisor, investor, acquisition
            partner or collaborator, let's start the conversation.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-charcoal text-primary-foreground text-sm hover:bg-teal transition-colors"
            >
              Book Dr Mary
              <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-charcoal/20 text-charcoal text-sm hover:bg-charcoal hover:text-primary-foreground transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

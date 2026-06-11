import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import maryPortrait from "@/assets/mary-portrait.jpeg";
import maryLiving from "@/assets/mary-living.jpeg";
import maryStanding from "@/assets/mary-standing.jpeg";
import maryTv from "@/assets/mary-tv.jpeg";
import maryYoungKenya from "@/assets/mary-young-kenya.jpeg.asset.json";
import maryAustralia from "@/assets/mary-australia.jpg.asset.json";
import maryPhd from "@/assets/mary-phd.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Dr Mary Kimani" },
      { name: "description", content: "The story of Dr Mary Kimani: from rural Kenya to global social-impact leadership." },
      { property: "og:title", content: "About Dr Mary Kimani" },
      { property: "og:description", content: "From rural Kenya to global influence — the six chapters." },
      { property: "og:image", content: maryPortrait },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const chapters = [
  { n: "01", title: "Early Life In Kenya", body: "A childhood in rural Kenya shaped by limited resources, deep community, and an early belief that opportunity must be built — not waited for.", image: maryYoungKenya.url },
  { n: "02", title: "Migration To Australia", body: "Arriving with $500 to her name. A new country, no safety net, and the conviction that systems can be rebuilt for those they leave behind.", image: maryAustralia.url },
  { n: "03", title: "PhD Journey", body: "Single motherhood, full-time work, and doctoral research — pursued in parallel. The discipline that still defines how she leads today.", image: maryPhd.url },
  { n: "04", title: "Building Businesses", body: "From practitioner to founder. Designing and scaling services across disability, education, and youth development with commercial rigour.", image: maryStanding },
  { n: "05", title: "Impact At Scale", body: "4,000+ families. Multi-million dollar service growth. National recognition as a builder of sustainable social outcomes.", image: maryTv },
  { n: "06", title: "What's Next", body: "Acquisitions, advisory, investment and platform-level reform — building the next generation of impact businesses.", image: maryLiving },
];


function AboutPage() {
  return (
    <div className="bg-background text-charcoal">
      <SiteNav />
      <section className="pt-40 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-teal mb-6">About</p>
            <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.02]">
              A life of <span className="italic text-teal">building</span>, in seven chapters.
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg text-charcoal/70 leading-relaxed">
              Dr Mary Kimani's story isn't a résumé. It's a record of what becomes possible when conviction meets execution — across continents, sectors, and decades.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 space-y-32">
          {chapters.map((c, i) => (
            <motion.div
              key={c.n}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`grid lg:grid-cols-12 gap-10 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="lg:col-span-5">
                <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-mist">
                  <img src={chapterImages[i % chapterImages.length]} alt={c.title} className="h-full w-full object-cover" />
                </div>
              </div>
              <div className="lg:col-span-7">
                <span className="font-display text-emerald text-sm tracking-[0.3em]">CHAPTER {c.n}</span>
                <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight">{c.title}</h2>
                <p className="mt-6 text-lg text-charcoal/75 leading-relaxed max-w-xl">{c.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-charcoal text-mist">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
          <h2 className="font-display text-3xl md:text-5xl text-white leading-tight">
            Want to build something meaningful together?
          </h2>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-10 px-8 py-4 rounded-full bg-emerald text-charcoal text-sm hover:bg-mist transition-colors">
            Start the conversation <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
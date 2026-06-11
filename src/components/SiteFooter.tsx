import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-mist">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 max-w-md">
          <p className="font-display text-2xl text-white">Dr Mary Kimani</p>
          <p className="mt-4 text-sm leading-relaxed text-mist/70">
            Building businesses. Transforming systems. Changing lives.
            Founder, investor and social impact architect.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-mist/50">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-emerald">About</Link></li>
            <li><Link to="/services" className="hover:text-emerald">Services</Link></li>
            <li><Link to="/contact" className="hover:text-emerald">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-mist/50">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-mist/80">
            <li>hello@drmarykimani.com</li>
            <li>Sydney, Australia</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 text-xs text-mist/50 flex justify-between">
          <span>© {new Date().getFullYear()} Dr Mary Kimani. All rights reserved.</span>
          <span>Founder · Investor · Builder</span>
        </div>
      </div>
    </footer>
  );
}
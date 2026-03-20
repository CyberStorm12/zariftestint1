import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail, ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { useCms } from "@/contexts/CmsContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const { content } = useCms();
  const g = content.global;
  const h = content.header;

  const navItems = useMemo(
    () => [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "IELTS", href: "/ielts" },
      { label: "Japanese", href: "/japanese" },
      { label: "Destinations", href: "/destinations" },
      { label: "Success Stories", href: "/success-stories" },
      { label: "Contact", href: "/contact" },
    ],
    [],
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/88 text-white shadow-[0_10px_40px_rgba(2,6,23,0.18)] backdrop-blur-xl">
      <div className="hidden border-b border-white/10 lg:block">
        <div className="container flex h-11 items-center justify-between text-sm text-slate-300">
          <div className="flex items-center gap-6">
            <a href={`tel:${g.phone1}`} className="inline-flex items-center gap-2 transition hover:text-white">
              <Phone size={14} className="text-amber-400" />
              {g.phone1}
            </a>
            <a href={`mailto:${g.email}`} className="inline-flex items-center gap-2 transition hover:text-white">
              <Mail size={14} className="text-amber-400" />
              {g.email}
            </a>
          </div>
          <p className="tracking-[0.24em] uppercase text-[11px] text-slate-400">Trusted study abroad support from Bangladesh</p>
        </div>
      </div>

      <div className="container">
        <div className="flex h-18 items-center justify-between gap-4 py-3 md:h-20">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-300/30 bg-white/95 shadow-lg shadow-amber-500/10">
              <img src={h.logo} alt={`${g.siteName} Logo`} className="h-9 w-auto object-contain" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-base font-semibold tracking-wide text-white md:text-lg">{g.siteName}</p>
              <p className="truncate text-xs text-amber-300 md:text-sm">{g.tagline}</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 lg:flex">
            {navItems.map((item) => {
              const active = location === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    active
                      ? "bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 shadow-lg"
                      : "text-slate-300 hover:bg-white/8 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/contact"
              className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-amber-400/50 hover:text-white"
            >
              Contact
            </Link>
            <a
              href={g.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-500 px-5 py-3 text-sm font-bold text-slate-950 shadow-[0_8px_30px_rgba(245,158,11,0.35)] transition hover:-translate-y-0.5"
            >
              {h.registerButtonText}
              <ArrowRight size={16} />
            </a>
          </div>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isOpen && (
          <div className="pb-4 lg:hidden">
            <nav className="space-y-2 rounded-3xl border border-white/10 bg-slate-900/95 p-4 shadow-2xl">
              {navItems.map((item) => {
                const active = location === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block rounded-2xl px-4 py-3 text-sm font-medium transition ${
                      active ? "bg-amber-400 text-slate-950" : "text-slate-200 hover:bg-white/6"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a
                href={g.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 px-4 py-3 text-sm font-bold text-slate-950"
              >
                {h.registerButtonText}
                <ArrowRight size={16} />
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

import { Link } from "wouter";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube, ArrowUpRight } from "lucide-react";
import { useCms } from "@/contexts/CmsContext";

const socialIcons = [
  { key: "facebook", icon: Facebook },
  { key: "instagram", icon: Instagram },
  { key: "linkedin", icon: Linkedin },
  { key: "youtube", icon: Youtube },
] as const;

export default function Footer() {
  const { content } = useCms();
  const g = content.global;
  const f = content.footer;

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-200">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/70 to-transparent" />
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="container relative py-16">
        <div className="mb-10 grid gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/30 lg:grid-cols-[1.3fr_0.9fr_0.9fr_1fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">Study Hub BD</p>
            <h3 className="mb-4 text-3xl font-semibold text-white">Global admissions guidance with a premium student experience.</h3>
            <p className="max-w-md text-sm leading-7 text-slate-300">{f.about}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {socialIcons.map(({ key, icon: Icon }) => (
                <a
                  key={key}
                  href={g.socialMedia[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/6 text-slate-200 transition hover:-translate-y-0.5 hover:border-amber-400/40 hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Explore</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link href="/" className="transition hover:text-white">Home</Link></li>
              <li><Link href="/about" className="transition hover:text-white">About Us</Link></li>
              <li><Link href="/services" className="transition hover:text-white">Services</Link></li>
              <li><Link href="/destinations" className="transition hover:text-white">Destinations</Link></li>
              <li><Link href="/success-stories" className="transition hover:text-white">Success Stories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Programs</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link href="/ielts" className="transition hover:text-white">IELTS Training</Link></li>
              <li><Link href="/japanese" className="transition hover:text-white">Japanese Language</Link></li>
              <li><Link href="/contact" className="transition hover:text-white">Free Consultation</Link></li>
              <li>
                <a href={g.registrationLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition hover:text-white">
                  Apply Now <ArrowUpRight size={15} />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Contact</h4>
            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-amber-300" />
                <p>{g.address}</p>
              </div>
              <div className="flex gap-3">
                <Phone size={18} className="mt-0.5 flex-shrink-0 text-amber-300" />
                <div>
                  <p>{g.phone1}</p>
                  <p>{g.phone2}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail size={18} className="mt-0.5 flex-shrink-0 text-amber-300" />
                <p>{g.email}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>{f.copyrightText}</p>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-white">Privacy Policy</a>
            <a href="#" className="transition hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

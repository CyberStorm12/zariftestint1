import { Link } from "wouter";
import { ArrowRight, BookOpen, Globe2, Users, Award, Zap, Heart, Sparkles, ShieldCheck, GraduationCap, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useCms } from "@/contexts/CmsContext";
import RichText from "@/components/RichText";

const SERVICE_ICONS = [BookOpen, Globe2, Users, Award, Zap, Heart];
const TRUST_BADGES = [
  { icon: ShieldCheck, label: "Trusted guidance" },
  { icon: GraduationCap, label: "Expert mentors" },
  { icon: Sparkles, label: "Premium experience" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

export default function Home() {
  const { content } = useCms();
  const { home, services, destinations, successStories, global: g } = content;
  const featuredServices = services.slice(0, 6);
  const featuredDestinations = destinations.slice(0, 5);
  const featuredStories = successStories.slice(0, 3);

  return (
    <div className="bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.14),_transparent_30%),linear-gradient(180deg,#f8fafc_0%,#fff7ed_42%,#ffffff_100%)] text-slate-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.96),rgba(30,41,59,0.9))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.28),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.18),transparent_18%)]" />
        <div className="container relative z-10 py-18 md:py-24 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
            <motion.div initial="hidden" animate="show" className="max-w-3xl space-y-8">
              <motion.div custom={0.05} variants={fadeUp}>
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-white/8 px-4 py-2 text-sm font-medium text-amber-200 backdrop-blur">
                  <Sparkles size={15} />
                  {home.hero.badge}
                </span>
              </motion.div>

              <motion.div custom={0.12} variants={fadeUp}>
                <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                  {home.hero.title} <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">{home.hero.titleHighlight}</span>
                </h1>
              </motion.div>

              <motion.div custom={0.2} variants={fadeUp}>
                <RichText as="p" className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg" text={home.hero.description} />
              </motion.div>

              <motion.div custom={0.3} variants={fadeUp} className="flex flex-col gap-4 sm:flex-row">
                <a
                  href={g.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-500 px-7 py-4 text-sm font-bold text-slate-950 shadow-[0_16px_40px_rgba(245,158,11,0.35)] transition hover:-translate-y-0.5"
                >
                  {home.hero.ctaButton}
                  <ArrowRight size={18} />
                </a>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/6 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition hover:border-amber-300/35 hover:bg-white/10"
                >
                  {home.hero.learnMoreButton}
                </Link>
              </motion.div>

              <motion.div custom={0.38} variants={fadeUp} className="grid gap-4 sm:grid-cols-3">
                {home.hero.stats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/6 p-5 backdrop-blur-xl">
                    <p className="text-3xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
              <div className="relative mx-auto max-w-xl">
                <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-amber-400/25 via-yellow-400/15 to-cyan-400/15 blur-2xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/10 p-6 shadow-[0_25px_80px_rgba(15,23,42,0.45)] backdrop-blur-2xl">
                  <div className="rounded-[1.6rem] border border-white/10 bg-slate-950/80 p-6 text-white">
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Global roadmap</p>
                        <h2 className="mt-2 text-2xl font-semibold">A world-class student journey</h2>
                      </div>
                      <div className="rounded-2xl bg-gradient-to-br from-amber-300 to-yellow-500 p-3 text-slate-950">
                        <Globe2 size={28} />
                      </div>
                    </div>

                    <div className="space-y-4">
                      {[
                        "Profile assessment and destination matching",
                        "Language preparation with focused mentoring",
                        "Application, visa and enrollment support",
                      ].map((item, index) => (
                        <div key={item} className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/6 p-4">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-400 font-bold text-slate-950">{index + 1}</div>
                          <p className="text-sm leading-7 text-slate-200">{item}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                      {TRUST_BADGES.map(({ icon: Icon, label }) => (
                        <div key={label} className="rounded-2xl border border-white/8 bg-white/6 p-4 text-center">
                          <Icon size={18} className="mx-auto mb-2 text-amber-300" />
                          <p className="text-xs leading-5 text-slate-300">{label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative -mt-8 pb-10 md:-mt-10 md:pb-16">
        <div className="container">
          <div className="grid gap-4 rounded-[2rem] border border-slate-200/70 bg-white/92 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.12)] backdrop-blur sm:grid-cols-3 md:p-7">
            {TRUST_BADGES.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-4 rounded-[1.4rem] bg-slate-50 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-amber-400">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{label}</p>
                  <p className="text-sm text-slate-500">Designed to feel reliable, modern and premium.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-18">
        <div className="container">
          <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="section-kicker">Premium services</p>
              <h2 className="section-title">
                {home.servicesSection.title} <span className="text-amber-500">{home.servicesSection.titleHighlight}</span>
              </h2>
            </div>
            <RichText as="p" className="max-w-xl text-base leading-8 text-slate-600" text={home.servicesSection.subtitle} />
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredServices.map((service, index) => {
              const Icon = SERVICE_ICONS[index % SERVICE_ICONS.length];
              return (
                <Link key={service.id} href="/services">
                  <div className="group flex h-full flex-col rounded-[1.8rem] border border-slate-200 bg-white p-7 shadow-[0_14px_50px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-[0_20px_60px_rgba(245,158,11,0.12)]">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-950 to-slate-800 text-amber-400 shadow-lg shadow-slate-900/15 transition group-hover:scale-105">
                      <Icon size={24} />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-slate-950">{service.title}</h3>
                    <RichText as="p" className="mb-6 flex-1 text-sm leading-7 text-slate-600" text={service.description} />
                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600">
                      Discover the service
                      <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-14 text-white md:py-20">
        <div className="container">
          <div className="mb-10 text-center md:mb-14">
            <p className="section-kicker !text-amber-300">Study destinations</p>
            <h2 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
              {home.destinationsSection.title} <span className="text-amber-400">{home.destinationsSection.titleHighlight}</span>
            </h2>
            <RichText as="p" className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300" text={home.destinationsSection.subtitle} />
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {featuredDestinations.map((country) => (
              <div key={country.id} className="rounded-[1.8rem] border border-white/10 bg-white/6 p-6 text-center backdrop-blur-xl transition hover:border-amber-400/40 hover:bg-white/8">
                <div className="mb-4 text-5xl">{country.flag}</div>
                <h3 className="text-lg font-semibold text-white">{country.name}</h3>
                <RichText as="p" className="mt-3 text-sm leading-7 text-slate-300" text={country.shortDescription} />
                <Link href="/destinations" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber-300">
                  Explore
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container">
          <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="section-kicker">Student outcomes</p>
              <h2 className="section-title">
                {home.successSection.title} <span className="text-amber-500">{home.successSection.titleHighlight}</span>
              </h2>
            </div>
            <RichText as="p" className="max-w-xl text-base leading-8 text-slate-600" text={home.successSection.subtitle} />
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredStories.map((student) => (
              <div key={student.id} className="overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white shadow-[0_16px_60px_rgba(15,23,42,0.08)]">
                <div className="relative h-72 overflow-hidden bg-slate-900">
                  <img src={student.image} alt={student.name} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-transparent p-5">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-amber-200 backdrop-blur">
                      <Star size={13} />
                      Success story
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-950">{student.name}</h3>
                  <p className="mt-2 text-sm text-slate-500">{student.university}</p>
                  <p className="mt-1 text-sm font-semibold text-amber-600">{student.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="container">
          <div className="overflow-hidden rounded-[2.2rem] bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_58%,#7c2d12_100%)] p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.2)] md:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div className="max-w-2xl">
                <p className="section-kicker !text-amber-300">Ready to begin?</p>
                <h2 className="text-3xl font-semibold leading-tight md:text-4xl">{home.ctaSection.title}</h2>
                <RichText as="p" className="mt-4 text-base leading-8 text-slate-300 md:text-lg" text={home.ctaSection.subtitle} />
              </div>
              <a
                href={g.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-500 px-7 py-4 text-sm font-bold text-slate-950 shadow-[0_16px_40px_rgba(245,158,11,0.34)] transition hover:-translate-y-0.5"
              >
                {home.ctaSection.buttonText}
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

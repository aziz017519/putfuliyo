import {
  ArrowRight,
  ArrowUpRight,
  Heart,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { profile } from "@/lib/data";
import { revealDelay } from "@/lib/style";
import { GithubIcon } from "./BrandIcons";

const quickLinks = profile.nav;
const otherPlaces = [
  { label: "GitHub", href: profile.githubUrl },
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "Phone", href: profile.phoneHref },
];

export default function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(109,40,217,0.35),transparent_60%)]" />
        <div className="grid-lines absolute inset-0 opacity-25" />
        <div className="noise-overlay absolute inset-0" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#05010f] to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 pb-8 pt-20 sm:px-8 lg:pt-24">
        <div className="flex flex-col items-center text-center">
          <span
            data-reveal
            className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.06] px-5 py-2 font-mono text-[10.5px] tracking-[0.32em] text-white/70 backdrop-blur-md"
          >
            {"// "}END OF THE JOURNEY
          </span>
          <h2
            data-reveal
            style={revealDelay(80)}
            className="font-display mt-6 text-[clamp(2.3rem,3.6vw,3.3rem)] font-extrabold leading-[1.1] tracking-tight text-white"
          >
            Thanks for <span className="text-gradient-tomorrow">Visiting!</span>
          </h2>
          <p
            data-reveal
            style={revealDelay(140)}
            className="mt-4 max-w-[580px] text-[15.5px] leading-[1.65] text-white/60 sm:text-[16.5px]"
          >
            Let&apos;s build something amazing together. Stay curious, keep
            building, and I&apos;ll see you around the internet!
          </p>

          <div
            data-reveal
            style={revealDelay(200)}
            className="mt-8 flex w-full max-w-[620px] items-center gap-4"
          >
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-white/25" />
            <Sparkles className="h-4 w-4 shrink-0 fill-violet-400 text-violet-300 drop-shadow-[0_0_8px_rgba(167,139,250,0.8)]" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-white/25" />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:mt-14 lg:grid-cols-[1.5fr_1fr_1fr_1.15fr] lg:gap-x-10">
          <div data-reveal>
            <div className="flex items-center gap-3">
              <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-violet-500 via-violet-600 to-indigo-600 shadow-[0_0_24px_rgba(139,92,246,0.45)]">
                <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4),transparent_60%)]" />
                <span className="font-display relative text-[15px] font-extrabold text-white">
                  AA
                </span>
              </span>
              <span className="font-display text-2xl font-semibold tracking-tight text-white">
                Abdul Aziz
              </span>
            </div>
            <p className="mt-3.5 max-w-[290px] text-[14.5px] leading-relaxed text-white/55">
              Turning ideas into reality through code, creativity and
              curiosity — one project at a time.
            </p>
            <p className="mt-4 inline-flex items-center gap-1.5 text-[13px] text-white/40">
              <MapPin className="h-3.5 w-3.5 text-violet-400/80" />
              {profile.location}
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] backdrop-blur-md transition-all duration-300 hover:border-violet-400/50 hover:bg-violet-500/10 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
              >
                <GithubIcon className="h-[18px] w-[18px] text-white/90" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] backdrop-blur-md transition-all duration-300 hover:border-violet-400/50 hover:bg-violet-500/10 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
              >
                <Mail className="h-[18px] w-[18px] text-violet-200" />
              </a>
              <a
                href={profile.phoneHref}
                aria-label="Phone"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] backdrop-blur-md transition-all duration-300 hover:border-violet-400/50 hover:bg-violet-500/10 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
              >
                <Phone className="h-[18px] w-[18px] text-emerald-200" />
              </a>
            </div>
          </div>

          <div data-reveal style={revealDelay(80)}>
            <h4 className="font-display text-[16.5px] font-semibold text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex items-center justify-between gap-6 py-0.5 text-[14.5px] text-white/60 transition-colors hover:text-white"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-violet-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal style={revealDelay(140)}>
            <h4 className="font-display text-[16.5px] font-semibold text-white">
              Other Places
            </h4>
            <ul className="mt-4 space-y-2.5">
              {otherPlaces.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex items-center justify-between gap-6 py-0.5 text-[14.5px] text-white/60 transition-colors hover:text-white"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-violet-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal style={revealDelay(200)}>
            <h4 className="font-display text-[16.5px] font-semibold text-white">
              Let&apos;s Connect
            </h4>
            <p className="mt-3 max-w-[280px] text-[14.5px] leading-relaxed text-white/55">
              Open to junior roles, internships, collaborations and interesting
              projects.
            </p>
            <a
              href="#contact"
              className="group btn-primary-glow mt-5 inline-flex h-12 items-center gap-2.5 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 px-6 text-[14.5px] font-semibold text-white transition-all duration-300 hover:brightness-110 active:scale-[0.99]"
            >
              <Mail className="h-4 w-4" />
              Send a Message
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div
          data-reveal
          className="mt-12 flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-[#0a051c]/70 px-5 py-4 backdrop-blur-md sm:flex-row sm:justify-between sm:gap-4 lg:mt-16"
        >
          <p className="text-center text-[13px] text-white/50 sm:text-left">
            &copy; 2026 Abdul Aziz. All rights reserved.
          </p>
          <div className="hidden items-center gap-2.5 md:flex">
            <Sparkles className="h-3.5 w-3.5 text-violet-400" />
            <span className="font-mono text-[10.5px] tracking-[0.28em] text-white/50">
              IDEAS <span className="text-white/25">→</span> CODE{" "}
              <span className="text-white/25">→</span> IMPACT
            </span>
          </div>
          <p className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-center text-[13px] text-white/50">
            Made with{" "}
            <Heart className="h-3.5 w-3.5 fill-[#ff5c8a] text-[#ff5c8a]" /> in
            Bangladesh
            <span className="mx-1 text-white/20">|</span>
            Keep Building
            <ArrowRight className="h-3.5 w-3.5" />
          </p>
        </div>
      </div>
    </footer>
  );
}

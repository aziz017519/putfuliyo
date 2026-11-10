import type { CSSProperties } from "react";
import {
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Code2,
  GraduationCap,
  Languages as LanguagesIcon,
  MapPin,
  Quote,
  Sparkles,
} from "lucide-react";
import { profile } from "@/lib/data";
import { GithubIcon } from "./BrandIcons";

const delay = (ms: number) =>
  ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

const statIcons = [Code2, Sparkles, LanguagesIcon, CalendarDays];

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 scroll-mt-20 overflow-x-clip py-24 lg:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_20%,rgba(109,40,217,0.16),transparent_55%)]" />
        <div className="absolute right-0 top-1/3 h-[420px] w-[420px] rounded-full bg-indigo-700/10 blur-[140px]" />
        <div className="noise-overlay absolute inset-0" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div>
            <div className="lg:sticky lg:top-24">
              <p
                data-reveal
                className="font-mono text-[12px] tracking-[0.35em] text-violet-300/80"
              >
              <span className="text-violet-400/60">{"// "}</span>01. ABOUT ME
            </p>

            <h2
              data-reveal
              style={delay(80)}
              className="font-display mt-5 text-[clamp(2.3rem,4.8vw,3.7rem)] font-extrabold leading-[1.04] tracking-tight text-white"
            >
              More than
              <br />
              just a
              <br />
              <span className="text-gradient-tomorrow">developer.</span>
            </h2>

            <div
              data-reveal="scale"
              style={delay(160)}
              className="glass card-sheen relative mt-8 overflow-hidden rounded-3xl p-6"
            >
              <span className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/20 blur-2xl" />
              <div className="flex items-center gap-4">
                <span className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 via-violet-600 to-indigo-600 shadow-[0_0_30px_rgba(139,92,246,0.5)]">
                  <span className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4),transparent_60%)]" />
                  <span className="font-display text-2xl font-extrabold tracking-tight text-white">
                    AA
                  </span>
                </span>
                <div className="min-w-0">
                  <p className="font-display text-lg font-semibold text-white">
                    {profile.name}
                  </p>
                  <p className="mt-0.5 text-[13px] text-violet-200/70">
                    {profile.role}
                  </p>
                  <p className="mt-1 inline-flex items-center gap-1 text-[12px] text-white/45">
                    <MapPin className="h-3 w-3" />
                    {profile.location}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                <span className="inline-flex items-center gap-2 text-[12px] text-emerald-200/90">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
                  Available for junior roles
                </span>
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[12px] text-white/60 transition-colors hover:text-white"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  GitHub
                </a>
              </div>
            </div>

            <figure
              data-reveal
              style={delay(220)}
              className="relative mt-8 max-w-sm rounded-2xl border border-white/10 bg-black/30 px-5 pb-4 pt-6 backdrop-blur-xl"
            >
              <Quote className="animate-float-slow absolute -top-3 left-4 h-6 w-6 fill-violet-500/80 text-violet-400 drop-shadow-[0_0_12px_rgba(139,92,246,0.9)]" />
              <blockquote className="font-hand text-[22px] leading-snug text-white/90">
                &ldquo;{profile.quote}&rdquo;
              </blockquote>
              <span
                aria-hidden="true"
                className="mt-3 block h-[2px] w-6 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(139,92,246,0.9)]"
              />
            </figure>
            </div>
          </div>

          <div>
            <div className="space-y-4">
              {profile.objective.map((paragraph, index) => (
                <p
                  key={index}
                  data-reveal
                  style={delay(80 + index * 60)}
                  className="text-[16px] leading-[1.75] text-white/70 sm:text-[16.5px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <article
                data-reveal
                style={delay(200)}
                className="group glass relative overflow-hidden rounded-2xl p-5 transition-colors duration-300 hover:border-violet-400/40"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300 transition-transform duration-300 group-hover:scale-110">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <p className="mt-4 text-[11px] font-mono uppercase tracking-[0.2em] text-white/40">
                  Education
                </p>
                <h3 className="mt-1.5 text-[15.5px] font-semibold leading-snug text-white">
                  {profile.education.degree}
                </h3>
                <p className="mt-1 text-[13px] text-white/55">
                  {profile.education.group} · {profile.education.year}
                </p>
                <p className="mt-3 text-[13px] leading-relaxed text-white/50">
                  {profile.education.institution},{" "}
                  {profile.education.location}
                </p>
              </article>

              <article
                data-reveal
                style={delay(260)}
                className="group glass relative overflow-hidden rounded-2xl p-5 transition-colors duration-300 hover:border-violet-400/40"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300 transition-transform duration-300 group-hover:scale-110">
                  <BookOpen className="h-5 w-5" />
                </span>
                <p className="mt-4 text-[11px] font-mono uppercase tracking-[0.2em] text-white/40">
                  Currently learning
                </p>
                <h3 className="mt-1.5 text-[15.5px] font-semibold leading-snug text-white">
                  {profile.course.title}
                </h3>
                <p className="mt-1 text-[13px] text-white/55">
                  {profile.course.provider}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2 py-0.5 text-[10.5px] font-medium text-emerald-200">
                    {profile.course.status}
                  </span>
                  <span className="text-[11.5px] text-white/45">
                    {profile.course.period}
                  </span>
                </div>
              </article>
            </div>

            <div
              data-reveal
              style={delay(320)}
              className="glass mt-4 rounded-2xl p-5"
            >
              <div className="flex items-center gap-2">
                <LanguagesIcon className="h-4 w-4 text-violet-300" />
                <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40">
                  Languages
                </p>
              </div>
              <div className="mt-4 space-y-4">
                {profile.languages.map((language) => (
                  <div key={language.name}>
                    <div className="flex items-center justify-between text-[13.5px]">
                      <span className="font-medium text-white/85">
                        {language.name}
                      </span>
                      <span className="text-white/45">{language.level}</span>
                    </div>
                    <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-violet-500 via-violet-400 to-indigo-400 shadow-[0_0_12px_rgba(139,92,246,0.6)]"
                        style={{ width: `${language.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div data-reveal style={delay(380)} className="mt-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">
                What I enjoy
              </p>
              <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {profile.enjoy.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 rounded-xl border border-white/[0.07] bg-white/[0.025] px-3.5 py-2.5 text-[13.5px] text-white/70 transition-colors duration-300 hover:border-violet-400/30 hover:bg-violet-500/[0.06] hover:text-white"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-violet-400/80" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-20 lg:grid-cols-4">
          {profile.stats.map((stat, index) => {
            const Icon = statIcons[index % statIcons.length];
            return (
              <div
                key={stat.label}
                data-reveal="scale"
                style={delay(index * 70)}
                className="glass group relative overflow-hidden rounded-2xl px-5 py-5 transition-colors duration-300 hover:border-violet-400/40"
              >
                <span className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-violet-500/15 blur-2xl transition-colors duration-300 group-hover:bg-violet-500/25" />
                <Icon className="h-4 w-4 text-violet-300/80" />
                <p className="font-display mt-3 text-[clamp(1.5rem,3vw,2rem)] font-extrabold leading-none text-white">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-[11.5px] leading-snug text-white/50">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

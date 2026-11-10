import type { CSSProperties } from "react";
import {
  ArrowRight,
  Download,
  MapPin,
  Phone,
  Sparkles,
  Terminal,
} from "lucide-react";
import { profile } from "@/lib/data";
import { GithubIcon, ReactIcon } from "./BrandIcons";
import Starfield from "./Starfield";

const delay = (ms: number) =>
  ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

const tickerWords = ["Learn", "Build", "Improve", "Repeat"];

const codeLines: Array<{ content: React.ReactNode }> = [
  {
    content: (
      <>
        <span className="text-fuchsia-300">const</span>{" "}
        <span className="text-sky-300">developer</span>{" "}
        <span className="text-white/50">=</span>{" "}
        <span className="text-white/70">{"{"}</span>
      </>
    ),
  },
  {
    content: (
      <>
        {"  "}
        <span className="text-violet-300">name</span>
        <span className="text-white/50">:</span>{" "}
        <span className="text-emerald-300">&quot;Abdul Aziz&quot;</span>
        <span className="text-white/50">,</span>
      </>
    ),
  },
  {
    content: (
      <>
        {"  "}
        <span className="text-violet-300">role</span>
        <span className="text-white/50">:</span>{" "}
        <span className="text-emerald-300">&quot;Full Stack Developer&quot;</span>
        <span className="text-white/50">,</span>
      </>
    ),
  },
  {
    content: (
      <>
        {"  "}
        <span className="text-violet-300">based</span>
        <span className="text-white/50">:</span>{" "}
        <span className="text-emerald-300">&quot;Moulvibazar, BD&quot;</span>
        <span className="text-white/50">,</span>
      </>
    ),
  },
  {
    content: (
      <>
        {"  "}
        <span className="text-violet-300">stack</span>
        <span className="text-white/50">: [</span>
        <span className="text-emerald-300">&quot;React&quot;</span>
        <span className="text-white/50">, </span>
        <span className="text-emerald-300">&quot;Next.js&quot;</span>
        <span className="text-white/50">,</span>
      </>
    ),
  },
  {
    content: (
      <>
        {"           "}
        <span className="text-emerald-300">&quot;Node.js&quot;</span>
        <span className="text-white/50">, </span>
        <span className="text-emerald-300">&quot;MongoDB&quot;</span>
        <span className="text-white/50">],</span>
      </>
    ),
  },
  {
    content: (
      <>
        {"  "}
        <span className="text-violet-300">learning</span>
        <span className="text-white/50">:</span>{" "}
        <span className="text-emerald-300">&quot;Programming Hero&quot;</span>
        <span className="text-white/50">,</span>
      </>
    ),
  },
  {
    content: (
      <>
        {"  "}
        <span className="text-violet-300">openToWork</span>
        <span className="text-white/50">:</span>{" "}
        <span className="text-orange-300">true</span>
        <span className="text-white/50">,</span>
      </>
    ),
  },
  {
    content: <span className="text-white/70">{"};"}</span>,
  },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen flex-col overflow-hidden pt-[72px]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,rgba(109,40,217,0.35),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_60%,rgba(67,56,202,0.18),transparent_55%)]" />
        <Starfield className="absolute inset-0 h-full w-full opacity-70" />
        <div className="animate-bg-drift absolute -left-40 top-16 h-[480px] w-[480px] rounded-full bg-violet-700/20 blur-[140px]" />
        <div className="animate-bg-drift absolute -right-24 bottom-10 h-[460px] w-[460px] rounded-full bg-indigo-700/20 blur-[150px] [animation-delay:3s]" />
        <div className="grid-lines absolute inset-0 opacity-40" />
        <div className="noise-overlay absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#05010f] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-5 pb-14 pt-10 sm:px-8 lg:pb-20 lg:pt-16">
        <div className="w-full">
          <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
            <div>
              <p
                data-reveal
                className="font-mono text-[11.5px] tracking-[0.3em] text-violet-300/90 sm:text-[13px] sm:tracking-[0.35em]"
              >
                <span className="text-violet-400/70">{"// "}</span>
                JUNIOR FULL STACK WEB DEVELOPER
                <span className="animate-blink ml-1 inline-block h-4 w-[2px] translate-y-[3px] bg-violet-300" />
              </p>

              <div data-reveal style={delay(80)} className="mt-5">
                <h1 className="font-display text-gradient-name cursor-default text-[clamp(3.1rem,8.5vw,5.6rem)] font-extrabold leading-[0.95] tracking-tight">
                  Abdul Aziz
                </h1>
                <h2 className="font-display mt-4 text-[clamp(1.65rem,4vw,2.6rem)] font-bold leading-[1.1] tracking-tight text-white">
                  I build solutions
                  <br />
                  for a better{" "}
                  <span className="text-gradient-tomorrow">tomorrow.</span>
                </h2>
              </div>

              <p
                data-reveal
                style={delay(160)}
                className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/65 sm:text-base"
              >
                {profile.intro}
              </p>

              <div
                data-reveal
                style={delay(240)}
                className="mt-7 flex flex-wrap items-center gap-4"
              >
                <a
                  href="#projects"
                  className="btn-primary-glow shimmer-sweep group inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-indigo-500 px-7 py-3.5 text-[15px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
                >
                  View My Work
                  <ArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex w-full items-center justify-center gap-2.5 rounded-2xl border border-white/20 bg-white/[0.03] px-7 py-3.5 text-[15px] font-medium text-white/90 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-300/60 hover:bg-violet-500/10 hover:text-white hover:shadow-[0_8px_30px_rgba(139,92,246,0.35)] sm:w-auto"
                >
                  <Download className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-y-0.5" />
                  Download Resume
                </a>
              </div>

              <div
                data-reveal
                style={delay(320)}
                className="mt-6 flex flex-wrap items-center gap-3"
              >
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  className="glass group flex h-12 w-12 items-center justify-center rounded-2xl text-violet-200/80 transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/50 hover:text-white hover:shadow-[0_10px_30px_rgba(139,92,246,0.45)]"
                >
                  <GithubIcon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Send an email"
                  className="glass group flex h-12 w-12 items-center justify-center rounded-2xl text-violet-200/80 transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/50 hover:text-white hover:shadow-[0_10px_30px_rgba(139,92,246,0.45)]"
                >
                  <span className="transition-transform duration-300 group-hover:scale-110">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m2 7 8.99 5.73a2 2 0 0 0 2.01 0L22 7" />
                    </svg>
                  </span>
                </a>
                <span className="ml-1 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3 py-1.5 text-xs text-emerald-200/90">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  Open to opportunities
                </span>
              </div>

              <div
                data-reveal
                style={delay(380)}
                className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-white/50"
              >
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-violet-400" />
                  {profile.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5 text-violet-400" />
                  {profile.phone}
                </span>
                <span className="hidden items-center gap-1.5 sm:inline-flex">
                  <Sparkles className="h-3.5 w-3.5 text-violet-400" />
                  Learning full stack @ Programming Hero
                </span>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="relative hidden lg:block"
            >
              <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[90px]" />
              <div className="animate-spin-slow absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-violet-400/15" />

              <div
                data-reveal="scale"
                style={delay(200)}
                className="glass-strong relative mx-auto w-full max-w-[470px] overflow-hidden rounded-3xl shadow-[0_30px_90px_-20px_rgba(0,0,0,0.8)]"
              >
                <div className="flex items-center justify-between border-b border-white/[0.07] bg-white/[0.02] px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-white/45">
                    <Terminal className="h-3 w-3" />
                    aziz.ts
                  </span>
                  <span className="font-mono text-[10px] tracking-widest text-violet-300/70">
                    TS
                  </span>
                </div>

                <pre className="overflow-x-auto px-4 py-5 font-mono text-[12.5px] leading-[1.75] text-white/75 sm:text-[13px]">
                  <code>
                    {codeLines.map((line, index) => (
                      <span key={index} className="flex">
                        <span className="mr-4 w-4 shrink-0 select-none text-right text-white/20">
                          {index + 1}
                        </span>
                        <span className="whitespace-pre">{line.content}</span>
                      </span>
                    ))}
                  </code>
                </pre>

                <div className="border-t border-white/[0.07] bg-black/30 px-4 py-3 font-mono text-[11.5px]">
                  <div className="flex items-center gap-2 text-white/60">
                    <span className="text-emerald-400">$</span>
                    <span>npm run dev</span>
                    <span className="animate-blink inline-block h-3 w-[6px] bg-violet-300" />
                  </div>
                  <div className="mt-1.5 flex items-center gap-2 text-emerald-300/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    ready — compiled successfully
                  </div>
                </div>
              </div>

              <div className="animate-float-slow absolute -left-5 top-16">
                <div className="glass flex items-center gap-2 rounded-xl px-3 py-2 text-[12px] font-medium text-white/85 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
                  <ReactIcon className="h-4 w-4 text-sky-300" />
                  React
                </div>
              </div>

              <div className="animate-float-slow absolute -right-3 top-40 [animation-delay:1.4s]">
                <div className="glass flex items-center gap-2 rounded-xl px-3 py-2 text-[12px] font-medium text-white/85 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white text-[9px] font-black text-black">
                    N
                  </span>
                  Next.js
                </div>
              </div>

              <div className="animate-float-slow absolute -left-2 bottom-24 [animation-delay:2.2s]">
                <div className="glass flex items-center gap-2 rounded-xl px-3 py-2 text-[12px] font-medium text-white/85 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
                  <span className="text-emerald-300">◆</span>
                  MongoDB
                </div>
              </div>

              <div className="animate-float-slow absolute -right-1 bottom-10 [animation-delay:0.8s]">
                <div className="glass flex items-center gap-2 rounded-xl px-3 py-2 text-[12px] font-medium text-white/85 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
                  <span className="rounded bg-[#3178c6] px-1 text-[9px] font-bold text-white">
                    TS
                  </span>
                  TypeScript
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-between gap-4">
            <a
              href="#about"
              className="group inline-flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.28em] text-white/40 transition-colors hover:text-white/70"
            >
              <span className="relative flex h-8 w-5 items-start justify-center rounded-full border border-white/20 p-1">
                <span className="animate-scroll-dot h-1.5 w-1.5 rounded-full bg-violet-300" />
              </span>
              Scroll to explore
            </a>
            <span className="hidden font-mono text-[11px] tracking-[0.28em] text-white/25 sm:block">
              PORTFOLIO / 2026
            </span>
          </div>
        </div>
      </div>

      <div className="relative z-10 overflow-hidden border-y border-white/[0.06] bg-white/[0.015] py-3.5">
        <div className="marquee-track flex w-max items-center">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
              {tickerWords.map((word) => (
                <span
                  key={`${copy}-${word}`}
                  className="flex items-center gap-8 px-8 font-mono text-[11px] uppercase tracking-[0.35em] text-white/35"
                >
                  {word}
                  <Sparkles className="h-3 w-3 text-violet-400/70" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

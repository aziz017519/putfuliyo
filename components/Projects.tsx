"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  ExternalLink,
  Layers,
  MonitorSmartphone,
  Server,
  Sparkles,
} from "lucide-react";
import { projectFilters, projects, type Project } from "@/lib/data";

const delay = (ms: number) =>
  ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

const projectIcons: Record<string, typeof Code2> = {
  portfolio: Code2,
  layers: Layers,
  api: Server,
  layout: MonitorSmartphone,
};

const accents: Record<
  Project["accent"],
  { card: string; icon: string; glow: string; bar: string }
> = {
  violet: {
    card: "from-violet-600/25 via-[#0b0620]/80 to-fuchsia-600/10",
    icon: "bg-violet-500/15 text-violet-200 border-violet-400/25",
    glow: "bg-violet-500/25",
    bar: "from-violet-500 to-fuchsia-400",
  },
  indigo: {
    card: "from-indigo-600/25 via-[#0b0620]/80 to-violet-600/10",
    icon: "bg-indigo-500/15 text-indigo-200 border-indigo-400/25",
    glow: "bg-indigo-500/25",
    bar: "from-indigo-500 to-violet-400",
  },
  fuchsia: {
    card: "from-fuchsia-600/20 via-[#0b0620]/80 to-purple-600/15",
    icon: "bg-fuchsia-500/15 text-fuchsia-200 border-fuchsia-400/25",
    glow: "bg-fuchsia-500/25",
    bar: "from-fuchsia-500 to-pink-400",
  },
  blue: {
    card: "from-blue-600/20 via-[#0b0620]/80 to-cyan-600/10",
    icon: "bg-blue-500/15 text-blue-200 border-blue-400/25",
    glow: "bg-blue-500/25",
    bar: "from-blue-500 to-cyan-400",
  },
};

const statusStyles: Record<Project["status"], string> = {
  Live: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
  "In Progress": "border-amber-400/30 bg-amber-400/10 text-amber-200",
  Practice: "border-sky-400/30 bg-sky-400/10 text-sky-200",
};

export default function Projects() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("All");

  const visible = projects.filter((project) => {
    if (filter === "All") return true;
    if (filter === "In Progress") return project.status === "In Progress";
    return project.category === filter;
  });

  return (
    <section
      id="projects"
      className="relative z-10 scroll-mt-20 overflow-hidden py-24 lg:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_0%,rgba(124,58,237,0.16),transparent_55%)]" />
        <div className="absolute -left-32 bottom-1/4 h-[420px] w-[420px] rounded-full bg-fuchsia-700/10 blur-[150px]" />
        <div className="noise-overlay absolute inset-0" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p
              data-reveal
              className="font-mono text-[12px] tracking-[0.35em] text-violet-300/80"
            >
              <span className="text-violet-400/60">{"// "}</span>02. PROJECTS
            </p>
            <h2
              data-reveal
              style={delay(80)}
              className="font-display mt-5 text-[clamp(2.2rem,4.6vw,3.6rem)] font-extrabold leading-[1.05] tracking-tight text-white"
            >
              Projects that solve
              <br />
              <span className="text-gradient-tomorrow">real problems.</span>
            </h2>
            <p
              data-reveal
              style={delay(140)}
              className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-white/60 sm:text-base"
            >
              A blend of creativity, technology and purpose. Everything here is
              either live, in progress, or a deliberate practice build — no
              filler.
            </p>
          </div>

          <div
            data-reveal
            style={delay(180)}
            className="flex items-center gap-4 sm:gap-6"
          >
            {["Ideas", "Code", "Impact"].map((word, index) => (
              <div key={word} className="flex items-center gap-4 sm:gap-6">
                {index > 0 && (
                  <Sparkles className="h-3.5 w-3.5 text-violet-400/60" />
                )}
                <span className="font-mono text-[13px] uppercase tracking-[0.22em] text-white/40">
                  {word}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          data-reveal
          style={delay(200)}
          className="mt-10 flex flex-wrap items-center gap-2.5"
        >
          {projectFilters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              aria-pressed={filter === item}
              className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-all duration-300 ${
                filter === item
                  ? "border-violet-300/50 bg-violet-500/20 text-white shadow-[0_0_24px_rgba(139,92,246,0.3)]"
                  : "border-white/10 bg-white/[0.03] text-white/55 hover:border-violet-400/35 hover:bg-violet-500/[0.08] hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
          <span className="ml-auto font-mono text-[11px] tracking-[0.2em] text-white/35">
            {visible.length} / {projects.length} SHOWN
          </span>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {visible.map((project, index) => {
            const Icon = projectIcons[project.icon] ?? Code2;
            const accent = accents[project.accent];
            return (
              <article
                key={project.title}
                data-reveal="scale"
                style={delay(index * 70)}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0b0620]/70 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-[0_24px_70px_-20px_rgba(139,92,246,0.5)]"
              >
                <div
                  className={`relative h-40 overflow-hidden border-b border-white/10 bg-gradient-to-br ${accent.card}`}
                >
                  <div className="grid-lines absolute inset-0 opacity-40" />
                  <div
                    className={`absolute -right-8 -top-8 h-32 w-32 rounded-full ${accent.glow} blur-2xl transition-all duration-500 group-hover:scale-125`}
                  />
                  <span className="font-display absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[120px] font-black leading-none text-white/[0.045]">
                    0{index + 1}
                  </span>
                  <span
                    className={`absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl border ${accent.icon} backdrop-blur-md transition-transform duration-500 group-hover:scale-110`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span
                    className={`absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10.5px] font-medium ${statusStyles[project.status]}`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    {project.status}
                  </span>
                  <div className="absolute inset-x-5 bottom-4 flex items-center justify-between">
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.25em] text-white/40">
                      {project.kicker}
                    </span>
                    <span className="font-mono text-[10.5px] text-white/35">
                      {project.year}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-[21px] font-bold leading-tight tracking-tight text-white">
                      {project.title}
                    </h3>
                    <span className="mt-1 shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[10.5px] text-white/50">
                      {project.category}
                    </span>
                  </div>

                  <p className="mt-3 flex-1 text-[14px] leading-relaxed text-white/55">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[10.5px] tracking-wide text-violet-200/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-white/[0.07] pt-4">
                    {project.href ? (
                      <a
                        href={project.href}
                        className="group/link inline-flex items-center gap-2 text-[13px] font-medium text-violet-200 transition-colors hover:text-white"
                      >
                        {project.linkLabel ?? "View Project"}
                        <ExternalLink className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-[12.5px] text-white/35">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-400/70" />
                        Building in public
                      </span>
                    )}
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/45 transition-all duration-300 group-hover:border-violet-300/60 group-hover:bg-violet-500/15 group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <a
          href="#contact"
          data-reveal
          style={delay(120)}
          className="group relative mt-6 flex flex-col items-start justify-between gap-6 overflow-hidden rounded-3xl border border-violet-400/25 bg-gradient-to-br from-violet-600/25 via-[#0b0620]/85 to-indigo-600/20 p-6 backdrop-blur-xl transition-all duration-300 hover:border-violet-300/50 hover:shadow-[0_20px_60px_rgba(139,92,246,0.3)] sm:flex-row sm:items-center sm:p-7"
        >
          <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-300/70 to-transparent" />
          <div>
            <p className="font-mono text-[10.5px] uppercase tracking-[0.3em] text-violet-200/60">
              The next build
            </p>
            <p className="font-hand animate-neon-flicker mt-2 text-[27px] font-semibold leading-[1.05] text-violet-200 sm:text-[30px]">
              Better projects <br className="sm:hidden" />
              ahead...
            </p>
            <p className="mt-2 max-w-md text-[13.5px] leading-relaxed text-white/55">
              I&apos;m building every single week. If you have something worth
              building, let&apos;s talk about it.
            </p>
          </div>
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-violet-300/50 text-white transition-all duration-300 group-hover:bg-violet-500/25 group-hover:shadow-[0_0_24px_rgba(139,92,246,0.6)]">
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </a>
      </div>
    </section>
  );
}

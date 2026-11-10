"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import {
  Braces,
  Code2,
  Database,
  FileCode2,
  FileText,
  GitBranch,
  Hexagon,
  Monitor,
  Palette,
  Server,
  Sparkles,
  Table2,
  Triangle,
  Wind,
} from "lucide-react";
import { profile, skillCategories, skills } from "@/lib/data";
import { GithubIcon, ReactIcon } from "./BrandIcons";

const delay = (ms: number) =>
  ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

const skillIcon = (name: string) => {
  switch (name) {
    case "html":
      return Code2;
    case "css":
      return Palette;
    case "js":
      return Braces;
    case "ts":
      return FileCode2;
    case "tailwind":
      return Wind;
    case "react":
      return ReactIcon;
    case "next":
      return Triangle;
    case "node":
      return Hexagon;
    case "express":
      return Server;
    case "mongo":
      return Database;
    case "git":
      return GitBranch;
    case "github":
      return GithubIcon;
    case "vscode":
      return Monitor;
    case "word":
      return FileText;
    case "excel":
      return Table2;
    default:
      return Sparkles;
  }
};

const iconTint: Record<string, string> = {
  html: "text-orange-300",
  css: "text-sky-300",
  js: "text-yellow-300",
  ts: "text-blue-300",
  tailwind: "text-cyan-300",
  react: "text-sky-300",
  next: "text-white",
  node: "text-emerald-300",
  express: "text-white/80",
  mongo: "text-emerald-300",
  git: "text-orange-300",
  github: "text-white/85",
  vscode: "text-sky-300",
  word: "text-blue-300",
  excel: "text-emerald-300",
};

export default function Skills() {
  const [category, setCategory] =
    useState<(typeof skillCategories)[number]>("All");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(false);
    const timer = window.setTimeout(() => setAnimate(true), 120);
    return () => window.clearTimeout(timer);
  }, [category]);

  const visible =
    category === "All"
      ? skills
      : skills.filter((skill) => skill.category === category);

  return (
    <section
      id="skills"
      className="relative z-10 scroll-mt-20 overflow-x-clip py-24 lg:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_10%,rgba(99,102,241,0.16),transparent_55%)]" />
        <div className="absolute right-0 top-1/2 h-[460px] w-[460px] rounded-full bg-violet-700/10 blur-[150px]" />
        <div className="noise-overlay absolute inset-0" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p
            data-reveal
            className="font-mono text-[12px] tracking-[0.35em] text-violet-300/80"
          >
            <span className="text-violet-400/60">{"// "}</span>03. SKILLS
          </p>
          <h2
            data-reveal
            style={delay(80)}
            className="font-display mt-5 text-[clamp(2.2rem,4.6vw,3.6rem)] font-extrabold leading-[1.05] tracking-tight text-white"
          >
            Skills that build
            <br />
            <span className="text-gradient-tomorrow">possibilities.</span>
          </h2>
          <p
            data-reveal
            style={delay(140)}
            className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-white/60 sm:text-base"
          >
            A curated set of technologies, tools and skills I use to turn ideas
            into reality — from the first commit to the final deploy.
          </p>
        </div>

        <div
          data-reveal
          style={delay(180)}
          className="glass relative mt-10 flex flex-col gap-4 overflow-hidden rounded-2xl border-violet-400/20 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
        >
          <span
            aria-hidden="true"
            className="animate-lightning-sweep absolute left-0 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-violet-200 to-transparent shadow-[0_0_12px_rgba(167,139,250,0.9)]"
          />
          <div className="flex items-start gap-3.5">
            <span className="animate-glow-breathe flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
              <Sparkles className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[10.5px] font-mono uppercase tracking-[0.28em] text-violet-200/60">
                Currently levelling up
              </p>
              <p className="mt-1 text-[14.5px] font-semibold text-white">
                {profile.course.title} · {profile.course.provider}
              </p>
              <p className="mt-0.5 text-[12.5px] text-white/45">
                {profile.course.period} — {profile.course.status}
              </p>
            </div>
          </div>
          <div className="w-full sm:w-[240px]">
            <div className="flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/40">
              <span>Learning path</span>
              <span>45%</span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div className="animate-gradient-pan h-full w-[45%] rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-400 to-indigo-400 shadow-[0_0_14px_rgba(139,92,246,0.7)]" />
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-2.5">
          {skillCategories.map((item) => {
            const count =
              item === "All"
                ? skills.length
                : skills.filter((skill) => skill.category === item).length;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                aria-pressed={category === item}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-medium transition-all duration-300 ${
                  category === item
                    ? "border-violet-300/50 bg-violet-500/20 text-white shadow-[0_0_24px_rgba(139,92,246,0.3)]"
                    : "border-white/10 bg-white/[0.03] text-white/55 hover:border-violet-400/35 hover:bg-violet-500/[0.08] hover:text-white"
                }`}
              >
                {item}
                <span
                  className={`rounded-full px-1.5 py-0.5 font-mono text-[10px] ${
                    category === item
                      ? "bg-white/15 text-white/80"
                      : "bg-white/[0.06] text-white/40"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((skill, index) => {
            const Icon = skillIcon(skill.icon);
            return (
              <article
                key={skill.name}
                data-reveal="scale"
                style={delay(index * 45)}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0620]/60 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-[0_18px_50px_-16px_rgba(139,92,246,0.45)]"
              >
                <span className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-violet-500/10 blur-2xl transition-colors duration-300 group-hover:bg-violet-500/20" />
                <div className="relative flex items-start justify-between">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] ${
                      iconTint[skill.icon] ?? "text-violet-300"
                    } transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-[12px] text-white/50">
                    {skill.level}
                    <span className="text-white/25">%</span>
                  </span>
                </div>
                <h3 className="relative mt-3.5 text-[14.5px] font-semibold leading-snug text-white">
                  {skill.name}
                </h3>
                <p className="relative mt-0.5 text-[11px] text-white/40">
                  {skill.label}
                </p>
                <div className="relative mt-3 h-1 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-violet-500 via-violet-400 to-indigo-400 shadow-[0_0_12px_rgba(139,92,246,0.6)] transition-[width] duration-700 ease-out"
                    style={{ width: animate ? `${skill.level}%` : "0%" }}
                  />
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-6 font-mono text-[11.5px] tracking-[0.18em] text-white/35">
          SHOWING <span className="text-violet-300">{visible.length}</span> OF{" "}
          {skills.length}
          {category === "All"
            ? " — PICK A CATEGORY TO EXPLORE."
            : ` — ${category.toUpperCase()} STACK.`}
        </p>
      </div>
    </section>
  );
}

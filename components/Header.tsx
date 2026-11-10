"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { profile } from "@/lib/data";
import { GithubIcon } from "./BrandIcons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("top");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = profile.nav
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-42% 0px -52% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.06] bg-[#05010f]/80 shadow-[0_10px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Abdul Aziz — home">
          <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-violet-500 via-violet-600 to-indigo-600 shadow-[0_0_20px_rgba(139,92,246,0.45)] transition-transform duration-300 group-hover:scale-105">
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_60%)]" />
            <span className="font-display relative text-[15px] font-extrabold tracking-tight text-white">
              AA
            </span>
          </span>
          <span className="font-display text-xl font-semibold tracking-tight text-white">
            Abdul Aziz
          </span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {profile.nav.map((item) => {
            const id = item.href.slice(1);
            const isActive = active === id;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`group relative text-[15px] font-medium transition-colors ${
                    isActive ? "text-violet-300" : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-gradient-to-r from-indigo-400 to-violet-400 shadow-[0_0_12px_rgba(139,92,246,0.9)] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="group shimmer-sweep btn-primary-glow inline-flex items-center gap-2 rounded-full border border-violet-400/40 bg-violet-600/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-md transition-colors hover:border-violet-300/70 hover:bg-violet-600/25"
          >
            Let&apos;s Connect
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="glass flex h-11 w-11 items-center justify-center rounded-xl text-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-white/[0.06] bg-[#070214]/95 backdrop-blur-2xl transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? "max-h-[440px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 pb-6 pt-3 sm:px-8">
          <ul className="flex flex-col">
            {profile.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-white/[0.06] py-3.5 text-[15px] text-white/80 transition-colors hover:text-white"
                >
                  {item.label}
                  <ArrowRight className="h-4 w-4 text-violet-400" />
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex items-center gap-3">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary-glow inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-indigo-500 px-5 py-3 text-sm font-semibold text-white"
            >
              Let&apos;s Connect
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="glass flex h-11 w-11 items-center justify-center rounded-xl text-white/80"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

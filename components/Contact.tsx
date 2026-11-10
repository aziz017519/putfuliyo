"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Mail,
  MapPin,
  Phone,
  RadioTower,
  Send,
} from "lucide-react";
import { contactSubjects, profile } from "@/lib/data";
import { revealDelay } from "@/lib/style";
import { GithubIcon } from "./BrandIcons";

const mailHref = `mailto:${profile.email}`;
const mapsHref =
  "https://www.google.com/maps/search/?api=1&query=Moulvibazar%2C%20Bangladesh";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "General Question");
    const message = String(data.get("message") ?? "").trim();

    const body = [
      `Hi Abdul Aziz,`,
      "",
      message,
      "",
      "—",
      `From: ${name}`,
      `Email: ${email}`,
    ].join("\n");

    window.location.href = `${mailHref}?subject=${encodeURIComponent(
      `[Portfolio] ${subject}`,
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
    window.setTimeout(() => setSent(false), 5000);
  };

  const cards = [
    {
      label: "Email",
      value: profile.email,
      href: mailHref,
      icon: Mail,
      tint: "from-violet-500 to-indigo-600 text-white",
      glow: "shadow-[0_0_30px_rgba(124,58,237,0.22)]",
    },
    {
      label: "GitHub",
      value: profile.github,
      href: profile.githubUrl,
      icon: GithubIcon,
      tint: "bg-white/10 text-white",
      glow: "shadow-[0_0_30px_rgba(59,130,246,0.2)]",
    },
    {
      label: "Phone",
      value: profile.phone,
      href: profile.phoneHref,
      icon: Phone,
      tint: "from-emerald-500 to-teal-600 text-white",
      glow: "shadow-[0_0_30px_rgba(16,185,129,0.2)]",
    },
    {
      label: "Location",
      value: profile.location,
      href: mapsHref,
      icon: MapPin,
      tint: "from-violet-500 to-indigo-600 text-white",
      glow: "shadow-[0_0_30px_rgba(124,58,237,0.22)]",
    },
  ];

  return (
    <section
      id="contact"
      className="relative z-10 scroll-mt-20 overflow-hidden py-24 lg:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_30%,rgba(109,40,217,0.22),transparent_55%)]" />
        <div className="absolute -left-24 bottom-0 h-[420px] w-[420px] rounded-full bg-indigo-700/15 blur-[150px]" />
        <div className="grid-lines absolute inset-0 opacity-20" />
        <div className="noise-overlay absolute inset-0" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#05010f] to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-y-14 md:flex-row md:items-start md:justify-between md:gap-x-10">
          <div className="min-w-0 md:w-[47%] lg:w-[42%] lg:max-w-[560px]">
            <p
              data-reveal
              className="font-mono text-[12px] tracking-[0.35em] text-violet-300/80"
            >
              <span className="text-violet-400/60">{"// "}</span>04. CONTACT
            </p>
            <h2
              data-reveal
              style={revealDelay(80)}
              className="font-display mt-5 text-[clamp(2.2rem,4.4vw,3.4rem)] font-extrabold leading-[1.06] tracking-tight text-white"
            >
              Let&apos;s Build
              <br />
              Something
              <br />
              Amazing <span className="text-gradient-tomorrow">Together.</span>
            </h2>
            <p
              data-reveal
              style={revealDelay(140)}
              className="mt-4 max-w-[475px] text-[15.5px] leading-[1.7] text-white/65 sm:text-[16px]"
            >
              Have a project idea, a role to fill, or just want to connect?
              I&apos;d love to hear from you. Whether it&apos;s a junior position,
              an internship, or a collaboration — let&apos;s turn ideas into
              reality.
            </p>

            <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {cards.map((card, index) => {
                const Icon = card.icon;
                const external = card.href.startsWith("http");
                return (
                  <a
                    key={card.label}
                    href={card.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    data-reveal
                    style={revealDelay(180 + index * 60)}
                    className={`group relative flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-3.5 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/45 hover:bg-violet-500/10 sm:gap-3.5 sm:p-4 ${card.glow}`}
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br sm:h-10 sm:w-10 ${card.tint}`}
                    >
                      <Icon className="h-[17px] w-[17px]" />
                    </span>
                    <span className="min-w-0">
                      <span className="block pr-5 text-[14px] font-bold text-white sm:text-[15px]">
                        {card.label}
                      </span>
                      <span className="mt-0.5 block break-words text-[11.5px] text-white/50 sm:text-[12.5px]">
                        {card.value}
                      </span>
                    </span>
                    <ArrowUpRight className="absolute right-3 top-3 h-4 w-4 text-white/35 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-200" />
                  </a>
                );
              })}
            </div>

            <figure
              data-reveal
              style={revealDelay(420)}
              className="mt-9"
            >
              <blockquote className="font-hand text-[27px] leading-tight text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.65)] sm:text-[31px]">
                &ldquo;Let&apos;s turn ideas into reality.&rdquo;
              </blockquote>
              <figcaption className="mt-2 font-mono text-[10.5px] tracking-[0.3em] text-white/50">
                — ABDUL AZIZ
              </figcaption>
            </figure>
          </div>

          <div
            data-reveal="right"
            style={revealDelay(120)}
            className="min-w-0 md:w-[49%] lg:w-[52%] lg:max-w-[640px]"
          >
            <form
              onSubmit={handleSubmit}
              className="mx-auto w-full rounded-3xl border border-violet-300/15 bg-[#0a051c]/75 p-6 shadow-[0_0_70px_-15px_rgba(139,92,246,0.4)] backdrop-blur-xl sm:p-8"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-500/20 text-violet-300 shadow-[0_0_16px_rgba(139,92,246,0.4)]">
                  <RadioTower className="h-3.5 w-3.5" />
                </span>
                <span className="font-mono text-[11px] tracking-[0.3em] text-white/70">
                  SEND A MESSAGE
                </span>
              </div>

              <h3 className="font-display mt-3 text-[clamp(1.8rem,2.6vw,2.4rem)] font-extrabold leading-tight tracking-tight text-white">
                I&apos;m all{" "}
                <span className="text-gradient-tomorrow">ears!</span>
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-white/55">
                Fill out the form below and I&apos;ll get back to you as soon as
                possible.
              </p>

              <div className="mt-6 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-[13px] font-medium text-white/75"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      className="mt-2 h-11 w-full rounded-lg border border-white/10 bg-black/40 px-3.5 text-[14px] text-white outline-none transition placeholder:text-white/30 focus:border-violet-400/60 focus:bg-black/55 focus:ring-1 focus:ring-violet-400/30"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-[13px] font-medium text-white/75"
                    >
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="mt-2 h-11 w-full rounded-lg border border-white/10 bg-black/40 px-3.5 text-[14px] text-white outline-none transition placeholder:text-white/30 focus:border-violet-400/60 focus:bg-black/55 focus:ring-1 focus:ring-violet-400/30"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-[13px] font-medium text-white/75"
                  >
                    Subject
                  </label>
                  <div className="relative">
                    <select
                      id="contact-subject"
                      name="subject"
                      required
                      defaultValue=""
                      className="mt-2 h-11 w-full appearance-none rounded-lg border border-white/10 bg-black/40 px-3.5 pr-10 text-[14px] text-white/75 outline-none transition focus:border-violet-400/60 focus:bg-black/55 focus:ring-1 focus:ring-violet-400/30"
                    >
                      <option value="" disabled className="bg-[#0a051c] text-white/40">
                        Select a subject
                      </option>
                      {contactSubjects.map((subject) => (
                        <option
                          key={subject}
                          value={subject}
                          className="bg-[#0a051c] text-white"
                        >
                          {subject}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3.5 top-[calc(50%+4px)] h-4 w-4 -translate-y-1/2 text-white/40" />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-[13px] font-medium text-white/75"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    minLength={10}
                    placeholder="Tell me about your idea, project, or just say hi!"
                    className="mt-2 h-[110px] w-full resize-none rounded-lg border border-white/10 bg-black/40 px-3.5 py-2.5 text-[14px] text-white outline-none transition placeholder:text-white/30 focus:border-violet-400/60 focus:bg-black/55 focus:ring-1 focus:ring-violet-400/30"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-5 flex h-11 w-full items-center justify-center gap-2.5 rounded-lg bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 text-[15px] font-semibold text-white shadow-[0_0_30px_rgba(109,80,246,0.45)] transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_40px_rgba(124,58,237,0.65)] active:scale-[0.99]"
              >
                {sent ? (
                  <>
                    Email app opened
                    <ArrowRight className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>

              <p className="mt-3 text-center text-[11.5px] leading-relaxed text-white/35">
                This opens your default email app with the message pre-filled.
                Nothing is stored on this site.
              </p>
            </form>

            <div className="mx-auto mt-8 w-full">
              <p className="font-mono text-[11px] tracking-[0.3em] text-white/55">
                OTHER WAYS TO CONNECT
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-[42px] items-center gap-2.5 rounded-full border border-white/10 bg-[#0b0716]/65 px-5 text-[13.5px] font-medium text-white/85 backdrop-blur-md transition-all duration-300 hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-white hover:shadow-[0_0_24px_rgba(139,92,246,0.25)]"
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                  <ArrowRight className="h-3.5 w-3.5 text-white/40 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
                <a
                  href={mailHref}
                  className="group flex h-[42px] items-center gap-2.5 rounded-full border border-white/10 bg-[#0b0716]/65 px-5 text-[13.5px] font-medium text-white/85 backdrop-blur-md transition-all duration-300 hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-white hover:shadow-[0_0_24px_rgba(139,92,246,0.25)]"
                >
                  <Mail className="h-4 w-4 text-violet-300" />
                  Email
                  <ArrowRight className="h-3.5 w-3.5 text-white/40 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
                <a
                  href={profile.phoneHref}
                  className="group flex h-[42px] items-center gap-2.5 rounded-full border border-white/10 bg-[#0b0716]/65 px-5 text-[13.5px] font-medium text-white/85 backdrop-blur-md transition-all duration-300 hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-white hover:shadow-[0_0_24px_rgba(139,92,246,0.25)]"
                >
                  <Phone className="h-4 w-4 text-emerald-300" />
                  Call
                  <ArrowRight className="h-3.5 w-3.5 text-white/40 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

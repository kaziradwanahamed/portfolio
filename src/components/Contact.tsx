"use client";

import { Github, Mail, ArrowUpRight } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { MagneticButton } from "./ui/MagneticButton";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="container-rhythm scroll-mt-24 py-20 sm:py-28"
    >
      <Reveal>
        <div className="card-surface relative overflow-hidden px-6 py-14 text-center sm:px-10 sm:py-20">
          {/* glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-64 w-[480px] max-w-full -translate-x-1/2 rounded-full bg-accent/20 blur-[100px]"
          />

          <div className="relative">
            <p className="mono-label">05 — Contact</p>
            <h2
              id="contact-title"
              className="mx-auto mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl"
            >
              Let&apos;s build something{" "}
              <span className="text-gradient">intelligent</span>.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              I&apos;m open to AI/ML engineering, research collaborations, and
              full-stack work. Have an idea or a role in mind? My inbox is always
              open.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <MagneticButton
                href={`mailto:${profile.email}`}
                variant="primary"
              >
                <Mail size={16} /> Email me
              </MagneticButton>
              <MagneticButton
                href={profile.github}
                variant="ghost"
                external
              >
                <Github size={16} /> GitHub
              </MagneticButton>
            </div>

            <a
              href={`mailto:${profile.email}`}
              className="mt-7 inline-flex items-center gap-1.5 font-mono text-sm text-[var(--muted)] transition-colors hover:text-accent"
            >
              {profile.email}
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

"use client";

import { Github, Mail } from "lucide-react";
import { navLinks, profile } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--line)]">
      <div className="container-rhythm py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent/15 font-mono text-sm text-accent ring-1 ring-accent/30">
                KR
              </span>
              Kazi Radwan Ahamed
            </a>
            <p className="mt-3 max-w-sm text-sm text-[var(--muted)]">
              {profile.headline} — building agentic AI, ML research, and
              full-stack products.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-sm text-[var(--muted)]"
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col-reverse items-start justify-between gap-5 border-t border-[var(--line)] pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-[var(--muted)]">
            © {year} Kazi Radwan Ahamed. Built with{" "}
            <span className="text-[var(--fg)]">Next.js</span>,{" "}
            <span className="text-[var(--fg)]">TypeScript</span>,{" "}
            <span className="text-[var(--fg)]">Tailwind CSS</span> &{" "}
            <span className="text-[var(--fg)]">Framer Motion</span>.
          </p>
          <div className="flex items-center gap-2">
            <a
              href={profile.github}
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] text-[var(--muted)] transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent"
            >
              <Github size={17} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] text-[var(--muted)] transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent"
            >
              <Mail size={17} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

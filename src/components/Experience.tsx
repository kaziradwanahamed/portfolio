"use client";

import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <Section id="experience" num="04" title="Experience" kicker="Where I've worked">
      <div className="relative">
        {/* vertical line */}
        <div
          className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-[var(--line)] to-transparent sm:left-[9px]"
          aria-hidden
        />
        <div className="space-y-8">
          {experience.map((exp, i) => (
            <Reveal key={exp.role} delay={i * 0.08} as="div">
              <div className="relative pl-8 sm:pl-10">
                {/* node */}
                <span
                  className={`absolute left-0 top-1.5 grid h-[15px] w-[15px] place-items-center rounded-full border-2 sm:h-[19px] sm:w-[19px] ${
                    exp.current
                      ? "border-accent bg-accent/20"
                      : "border-[var(--muted)]/50 bg-[var(--bg)]"
                  }`}
                  aria-hidden
                >
                  {exp.current && (
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent sm:h-2 sm:w-2" />
                  )}
                </span>

                <div className="card-surface p-5 transition-colors hover:border-accent/40 sm:p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-display text-lg font-semibold sm:text-xl">
                      {exp.role}
                    </h3>
                    <span
                      className={`font-mono text-xs ${
                        exp.current ? "text-accent" : "text-[var(--muted)]"
                      }`}
                    >
                      {exp.period}
                    </span>
                  </div>
                  {exp.org && (
                    <p className="mt-0.5 text-sm font-medium text-accent/90">
                      {exp.org}
                    </p>
                  )}
                  <ul className="mt-4 space-y-2">
                    {exp.points.map((pt, j) => (
                      <li
                        key={j}
                        className="flex gap-2.5 text-sm leading-relaxed text-[var(--muted)]"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

"use client";

import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionProps = {
  id: string;
  num: string;
  title: string;
  kicker?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  num,
  title,
  kicker,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`container-rhythm scroll-mt-24 py-20 sm:py-28 ${className}`}
    >
      <Reveal>
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center gap-3">
            <span className="section-number">{num}</span>
            <span className="h-px w-10 bg-accent/40" aria-hidden />
            {kicker && <span className="mono-label">{kicker}</span>}
          </div>
          <h2
            id={`${id}-title`}
            className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            {title}
          </h2>
        </div>
      </Reveal>
      {children}
    </section>
  );
}

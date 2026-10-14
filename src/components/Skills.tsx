"use client";

import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <Section id="skills" num="02" title="Tech Stack" kicker="What I build with">
      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.07}>
            <div className="card-surface h-full p-6 transition-colors hover:border-accent/40">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold">
                  {group.label}
                </h3>
                <span className="font-mono text-xs text-accent/60">
                  /{group.tag}
                </span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-[var(--line)] bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-[var(--fg)] transition-colors hover:border-accent/50 hover:text-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

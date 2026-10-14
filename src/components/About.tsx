"use client";

import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { about } from "@/lib/data";
import { Brain, Cpu, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    label: "Agentic AI & LLMs",
    desc: "Tool-use, MCP, and safety for autonomous agents.",
  },
  {
    icon: Cpu,
    label: "ML Research",
    desc: "RL and LLM routing under non-stationarity.",
  },
  {
    icon: Rocket,
    label: "Ships to Production",
    desc: "Full-stack & mobile delivery for real users.",
  },
];

export function About() {
  return (
    <Section id="about" num="01" title="About" kicker="Who I am">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5">
          {about.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-4 self-start">
          {highlights.map((h, i) => (
            <Reveal key={h.label} delay={0.1 + i * 0.08}>
              <div className="card-surface group flex items-start gap-4 p-5 transition-colors hover:border-accent/40">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20 transition-transform group-hover:scale-105">
                  <h.icon size={20} />
                </span>
                <div>
                  <p className="font-display font-semibold">{h.label}</p>
                  <p className="mt-0.5 text-sm text-[var(--muted)]">{h.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

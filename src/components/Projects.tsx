"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight, Github, Lock, Star } from "lucide-react";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { projects, secondaryProjects, profile } from "@/lib/data";
import type { Project } from "@/lib/data";

export function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <Section id="work" num="03" title="Featured Projects" kicker="Selected work">
      <div className="grid gap-5 md:grid-cols-2">
        {featured.map((p, i) => (
          <Reveal
            key={p.title}
            delay={(i % 2) * 0.08}
            className={p.flagship ? "md:col-span-2" : ""}
          >
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>

      {/* Secondary grid */}
      <Reveal delay={0.1}>
        <div className="mt-14">
          <div className="mb-5 flex items-center gap-3">
            <span className="mono-label">More on GitHub</span>
            <span className="h-px flex-1 bg-[var(--line)]" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {secondaryProjects.map((s) => (
              <a
                key={s.title}
                href={s.github}
                target="_blank"
                rel="noopener noreferrer"
                className="card-surface group flex flex-col gap-2 p-5 transition-all hover:-translate-y-0.5 hover:border-accent/40"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-display font-semibold">{s.title}</h4>
                  <ArrowUpRight
                    size={16}
                    className="text-[var(--muted)] transition-colors group-hover:text-accent"
                  />
                </div>
                <p className="text-sm text-[var(--muted)]">{s.blurb}</p>
                <span className="mt-1 font-mono text-[11px] text-accent/70">
                  {s.lang}
                </span>
              </a>
            ))}
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-[var(--line)] p-5 text-center transition-colors hover:border-accent/50"
            >
              <Github
                size={22}
                className="text-[var(--muted)] transition-colors group-hover:text-accent"
              />
              <span className="text-sm font-medium">View all repositories</span>
              <span className="font-mono text-[11px] text-[var(--muted)]">
                @{profile.githubUser}
              </span>
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 150, damping: 15 });
  const sry = useSpring(ry, { stiffness: 150, damping: 15 });

  function onMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 6);
    rx.set(-py * 6);
  }
  function reset() {
    rx.set(0);
    ry.set(0);
  }

  const hasLink = Boolean(project.github || project.live);

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 1000 }}
      className={`card-surface group relative flex h-full flex-col overflow-hidden p-6 transition-colors hover:border-accent/40 sm:p-7 ${
        project.flagship ? "md:p-9" : ""
      }`}
    >
      {/* hover glow */}
      <div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex items-center gap-2">
          {project.flagship && (
            <span className="inline-flex items-center gap-1 rounded-full bg-accent/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent ring-1 ring-accent/30">
              <Star size={11} /> Flagship
            </span>
          )}
          {project.status && (
            <span className="inline-flex items-center gap-1 rounded-full border border-[var(--line)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
              <Lock size={10} /> {project.status}
            </span>
          )}
        </div>

        {hasLink ? (
          <div className="flex items-center gap-1.5">
            {project.github && (
              <IconBtn href={project.github} label={`${project.title} on GitHub`}>
                <Github size={16} />
              </IconBtn>
            )}
            {project.live && (
              <IconBtn href={project.live} label={`${project.title} live site`}>
                <ArrowUpRight size={16} />
              </IconBtn>
            )}
          </div>
        ) : null}
      </div>

      <h3
        className={`relative mt-4 font-display font-bold tracking-tight ${
          project.flagship ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
        }`}
      >
        {project.title}
      </h3>

      <p
        className={`relative mt-3 leading-relaxed text-[var(--muted)] ${
          project.flagship ? "max-w-2xl text-base sm:text-lg" : "text-sm sm:text-base"
        }`}
      >
        {project.blurb}
      </p>

      <ul className="relative mt-5 flex flex-wrap gap-2 pt-1">
        {project.tags.map((t) => (
          <li
            key={t}
            className="rounded-md border border-[var(--line)] bg-white/[0.02] px-2.5 py-1 font-mono text-[11px] text-[var(--muted)]"
          >
            {t}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function IconBtn({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="grid h-9 w-9 place-items-center rounded-full border border-[var(--line)] text-[var(--muted)] transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent"
    >
      {children}
    </a>
  );
}

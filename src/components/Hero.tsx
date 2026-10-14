"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Github, Mail, MapPin } from "lucide-react";
import { profile } from "@/lib/data";
import { MagneticButton } from "./ui/MagneticButton";

export function Hero() {
  const reduce = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.09, delayChildren: 0.1 },
    },
  };
  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  return (
    <section
      id="top"
      className="container-rhythm relative flex min-h-[100svh] items-center pt-28 pb-16 sm:pt-32"
    >
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.25fr_0.9fr] lg:gap-16">
        {/* LEFT: copy */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--card)] px-3 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-xs text-[var(--muted)]">
              Available for AI/ML & full-stack work
            </span>
          </motion.div>

          <motion.p
            variants={item}
            className="mono-label mt-7"
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-2 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl"
          >
            Kazi Radwan
            <br />
            <span className="text-gradient">Ahamed</span>
          </motion.h1>

          {/* animated rotating role */}
          <motion.div
            variants={item}
            className="mt-5 flex h-9 items-center gap-2 text-xl font-medium sm:text-2xl"
          >
            <span className="text-accent font-mono text-lg">{"<"}</span>
            <span className="relative inline-block min-w-[13ch]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, y: -14 }}
                  transition={{ duration: 0.35 }}
                  className="inline-block text-[var(--fg)]"
                >
                  {profile.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="text-accent font-mono text-lg">{"/>"}</span>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-[var(--muted)]"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={13} className="text-accent" /> {profile.location}
            </span>
            {profile.status.map((s) => (
              <span key={s} className="inline-flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-accent/60" />
                {s}
              </span>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <MagneticButton href="#work" variant="primary">
              View Work
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              Get in Touch
            </MagneticButton>

            <div className="ml-1 flex items-center gap-2">
              <IconLink
                href={profile.github}
                label="GitHub"
                external
              >
                <Github size={18} />
              </IconLink>
              <IconLink href={`mailto:${profile.email}`} label="Email">
                <Mail size={18} />
              </IconLink>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT: photo with premium frame */}
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative mx-auto w-full max-w-[340px] lg:max-w-none"
        >
          <div className="relative aspect-[4/5] w-full">
            {/* rotating gradient ring */}
            <motion.div
              aria-hidden
              className="absolute -inset-3 rounded-[2rem] opacity-70 blur-xl"
              style={{
                background:
                  "conic-gradient(from 0deg, #F2A33C, #FF6B4A, #FFC06B, #E0892B, #F2A33C)",
              }}
              animate={reduce ? undefined : { rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />
            {/* frame */}
            <div className="absolute inset-0 overflow-hidden rounded-[1.6rem] border border-white/10 bg-ink-900 shadow-glow">
              <Image
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                fill
                priority
                sizes="(max-width: 1024px) 340px, 420px"
                className="object-cover object-[center_20%]"
              />
              {/* subtle top sheen + bottom fade */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-white/5" />
            </div>

            {/* floating accent chip */}
            <motion.div
              className="glass absolute -bottom-4 -left-4 rounded-2xl border border-[var(--line)] px-4 py-3 shadow-card"
              animate={reduce ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
                Currently
              </p>
              <p className="text-sm font-medium">AI Engineer</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-[var(--muted)] lg:block"
        animate={reduce ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}

function IconLink({
  href,
  label,
  children,
  external,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="grid h-11 w-11 place-items-center rounded-full border border-[var(--line)] text-[var(--muted)] transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent"
    >
      {children}
    </a>
  );
}

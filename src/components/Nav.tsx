"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/lib/data";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "border-b border-[var(--line)] bg-[var(--bg)]/70 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <nav className="container-rhythm flex h-16 items-center justify-between sm:h-[72px]">
          <a
            href="#top"
            className="group flex items-center gap-2 font-display text-base font-bold tracking-tight"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent/15 font-mono text-sm text-accent ring-1 ring-accent/30 transition-colors group-hover:bg-accent/25">
              KR
            </span>
            <span className="hidden sm:inline">Kazi Radwan</span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
              >
                <span className="font-mono text-[10px] text-accent/60">
                  {l.num}
                </span>
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="#contact"
              className="hidden rounded-full border border-accent/40 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-ink-950 sm:inline-flex"
            >
              Let&apos;s talk
            </a>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] md:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="container-rhythm md:hidden"
          >
            <div className="mt-2 rounded-2xl border border-[var(--line)] bg-[var(--bg)]/95 p-3 backdrop-blur-xl">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-base text-[var(--fg)] transition-colors hover:bg-white/5"
                >
                  <span>{l.label}</span>
                  <span className="font-mono text-xs text-accent/60">
                    {l.num}
                  </span>
                </a>
              ))}
              <a
                href={`mailto:${profile.email}`}
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center rounded-xl bg-accent px-4 py-3 font-medium text-ink-950"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

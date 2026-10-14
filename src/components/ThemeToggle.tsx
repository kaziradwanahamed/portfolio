"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    setMounted(true);
    setLight(document.documentElement.classList.contains("light"));
  }, []);

  function toggle() {
    const next = !light;
    setLight(next);
    const root = document.documentElement;
    if (next) {
      root.classList.add("light");
      try {
        localStorage.setItem("theme", "light");
      } catch {}
    } else {
      root.classList.remove("light");
      try {
        localStorage.setItem("theme", "dark");
      } catch {}
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
      className="relative grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] text-[var(--fg)] transition-colors hover:border-accent/60 hover:text-accent"
    >
      <AnimatePresence mode="wait" initial={false}>
        {mounted && (
          <motion.span
            key={light ? "sun" : "moon"}
            initial={{ opacity: 0, rotate: -40, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 40, scale: 0.6 }}
            transition={{ duration: 0.25 }}
          >
            {light ? <Sun size={17} /> : <Moon size={17} />}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

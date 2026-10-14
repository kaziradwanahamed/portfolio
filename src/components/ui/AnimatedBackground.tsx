"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AnimatedBackground() {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* soft grid */}
      <div className="absolute inset-0 bg-grid" />

      {/* gradient mesh blobs */}
      <motion.div
        className="absolute -top-40 left-[8%] h-[520px] w-[520px] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(242,163,60,0.22), transparent 70%)",
        }}
        animate={
          reduce
            ? undefined
            : { x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.08, 0.96, 1] }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[18%] right-[4%] h-[460px] w-[460px] rounded-full blur-[130px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,107,74,0.16), transparent 70%)",
        }}
        animate={
          reduce
            ? undefined
            : { x: [0, -30, 20, 0], y: [0, 24, -18, 0], scale: [1, 0.95, 1.1, 1] }
        }
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[35%] h-[420px] w-[420px] rounded-full blur-[130px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,192,107,0.14), transparent 70%)",
        }}
        animate={
          reduce ? undefined : { x: [0, 24, -30, 0], y: [0, -16, 10, 0] }
        }
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* top + bottom vignette to seat content */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[var(--bg)] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--bg)] to-transparent" />
    </div>
  );
}

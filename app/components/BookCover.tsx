"use client";

import { motion } from "framer-motion";

export default function BookCover() {
  return (
    <section
      id="cover"
      className="notebook-bg relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Decorative maroon stripes — asymmetric */}
      <div
        className="absolute top-0 right-0 w-[40%] h-full opacity-[0.03] pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(135deg, #6b1a1a, #6b1a1a 2px, transparent 2px, transparent 20px)",
        }}
      />

      <div className="relative w-full flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20">
        <motion.div
          className="relative w-full max-w-[1100px]"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Spine shadow */}
          <div
            className="absolute top-0 -left-2 bottom-0 w-8 z-10 pointer-events-none hidden sm:block"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 40%, transparent 100%)",
              borderRadius: "8px 0 0 8px",
            }}
          />
          <div
            className="absolute top-3 -left-1 bottom-3 w-px z-10 pointer-events-none hidden sm:block"
            style={{ borderLeft: "2px dashed rgba(255,255,255,0.1)" }}
          />

          {/* Book cover */}
          <div className="book-cover relative rounded-lg overflow-hidden">
            {/* Content */}
            <div className="relative z-10 px-8 py-14 sm:px-14 sm:py-20 md:px-20 md:py-28 lg:px-24 lg:py-32">
              {/* Meta line — maroon accent */}
              <motion.p
                className="font-mono text-[10px] sm:text-[12px] tracking-[0.25em] uppercase"
                style={{ color: "rgba(255,255,255,0.35)" }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                A SKETCHBOOK&nbsp;&nbsp;·&nbsp;&nbsp;ISSUE #01&nbsp;&nbsp;·&nbsp;&nbsp;2026
              </motion.p>

              {/* Title */}
              <motion.h1
                className="mt-16 sm:mt-20 md:mt-24 font-serif leading-[0.92]"
                style={{
                  fontSize: "clamp(56px, 9vw, 120px)",
                  color: "rgba(255,255,255,0.88)",
                  letterSpacing: "-0.01em",
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                Ansh{" "}
                <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.4)" }}>
                  &amp;
                </em>{" "}
                code
                <span style={{ color: "#e74c3c" }}>.</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="mt-6 sm:mt-8 font-caveat max-w-lg"
                style={{
                  fontSize: "clamp(18px, 2.5vw, 28px)",
                  color: "rgba(255,255,255,0.42)",
                  lineHeight: 1.4,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
              >
                A full-stack developer&apos;s working notebook — code, ship, iterate.
              </motion.p>

              {/* Bottom metadata */}
              <motion.div
                className="mt-20 sm:mt-28 md:mt-36 flex flex-wrap items-center gap-y-3 font-mono text-[9px] sm:text-[11px] md:text-[12px] tracking-[0.2em] uppercase"
                style={{ color: "rgba(255,255,255,0.25)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <span>INDIA</span>
                <span className="mx-3 sm:mx-6" style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
                <span>NEXT.JS · REACT · NODE.JS</span>
                <a
                  href="#about"
                  className="ml-auto hover:text-white/50 transition-colors duration-200"
                >
                  SCROLL DOWN ↓
                </a>
              </motion.div>
            </div>
          </div>

          {/* Asymmetric label — intentional offset */}
          <motion.p
            className="font-caveat text-[14px] sm:text-[16px] mt-4 sm:ml-8 md:ml-12"
            style={{ color: "var(--accent-red)", opacity: 0.5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 1.2 }}
          >
            ↑ the cover · scroll to explore ↓
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

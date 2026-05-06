"use client";

import { motion } from "framer-motion";

export default function BookCover({ onOpen }: { onOpen: () => void }) {
  return (
    <section
      id="cover"
      className="notebook-bg relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Perspective container — full width, centered */}
      <div className="relative w-full flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20">
        <motion.div
          className="book-cover-wrapper relative w-full max-w-[1100px]"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Spine shadow — left edge */}
          <div
            className="absolute top-0 -left-2 bottom-0 w-8 z-10 pointer-events-none hidden sm:block"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 40%, transparent 100%)",
              borderRadius: "8px 0 0 8px",
            }}
          />

          {/* Dashed spine edge */}
          <div
            className="absolute top-3 -left-1 bottom-3 w-px z-10 pointer-events-none hidden sm:block"
            style={{
              borderLeft: "2px dashed rgba(255,255,255,0.1)",
            }}
          />

          {/* ─── BOOK COVER ─── */}
          <div
            className="relative rounded-lg overflow-hidden"
            style={{
              background:
                "linear-gradient(160deg, #8a2a2a 0%, #6b1a1a 25%, #5a1515 50%, #4a1010 80%, #3a0c0c 100%)",
              border: "2px solid rgba(255,255,255,0.06)",
              boxShadow: `
                inset 0 0 80px rgba(0, 0, 0, 0.25),
                inset 0 2px 0 rgba(255,255,255,0.04),
                0 25px 80px -10px rgba(0, 0, 0, 0.5),
                0 10px 30px -5px rgba(0, 0, 0, 0.3),
                0 0 0 1px rgba(255,255,255,0.03)
              `,
            }}
          >
            {/* Inner dashed frame */}
            <div
              className="absolute pointer-events-none z-0"
              style={{
                top: "20px",
                left: "20px",
                right: "20px",
                bottom: "20px",
                border: "1px dashed rgba(255,255,255,0.1)",
                borderRadius: "3px",
              }}
            />

            {/* Content */}
            <div className="relative z-10 px-8 py-14 sm:px-14 sm:py-20 md:px-20 md:py-28 lg:px-24 lg:py-32">
              {/* Header meta line */}
              <motion.p
                className="font-mono text-[10px] sm:text-[12px] md:text-[13px] tracking-[0.25em] text-white/35 uppercase"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                A SKETCHBOOK&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;ISSUE
                #01&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;2026
              </motion.p>

              {/* Main title — Instrument Serif, very large */}
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
                <em
                  style={{
                    fontStyle: "italic",
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  &amp;
                </em>{" "}
                code
                <span style={{ color: "#e74c3c" }}>.</span>
              </motion.h1>

              {/* Subtitle — Caveat handwritten */}
              <motion.p
                className="mt-6 sm:mt-8 font-caveat max-w-lg"
                style={{
                  fontSize: "clamp(18px, 2.5vw, 28px)",
                  color: "rgba(255,255,255,0.42)",
                  lineHeight: 1.4,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.55 }}
              >
                A full-stack developer&apos;s working notebook — code, ship,
                iterate.
              </motion.p>

              {/* Bottom metadata row */}
              <motion.div
                className="mt-20 sm:mt-28 md:mt-36 flex flex-wrap items-center gap-y-3 font-mono text-[9px] sm:text-[11px] md:text-[12px] tracking-[0.2em] text-white/25 uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <span>INDIA</span>
                <span className="mx-3 sm:mx-6 text-white/15">·</span>
                <span>NEXT.JS · REACT · NODE.JS</span>
                <span
                  className="ml-auto cursor-pointer hover:text-white/50 transition-colors duration-200"
                  onClick={onOpen}
                >
                  PRESS OPEN →
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ─── "open the book" CTA — bottom center ─── */}
      <motion.div
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      >
        <button onClick={onOpen} className="btn-primary">
          open the book ✎
        </button>
        <button
          onClick={onOpen}
          className="w-10 h-10 rounded-md border-2 border-[#d4a916] bg-[var(--accent-yellow)] flex items-center justify-center text-lg hover:scale-105 transition-transform"
          aria-label="Open canvas"
        >
          ✎
        </button>
      </motion.div>
    </section>
  );
}

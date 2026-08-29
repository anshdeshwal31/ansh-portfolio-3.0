"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="about"
      className="lined-paper margin-line relative py-16 sm:py-24 pb-8"
    >
      <div className="relative mx-auto max-w-5xl px-6 sm:px-12 lg:px-16">
        {/* Top Header */}
        <div className="flex justify-between items-start mb-10 sm:mb-14 relative">
          <div ref={ref}>
            <motion.p
              className="section-chapter"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
            >
              § 01 · PAGES 2–3
            </motion.p>
            <motion.h2
              className="section-title mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              About<span className="dot">.</span>
            </motion.h2>
          </div>
          <motion.p
            className="font-caveat text-[20px] sm:text-[24px] text-right"
            style={{ color: "var(--text-secondary)" }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            who's behind the commits
          </motion.p>

          {/* Yellow tape sticker at the top */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-6 bg-[var(--tape-yellow)] transform rotate-2 mix-blend-multiply rounded-sm" />
        </div>

        {/* Hero Bio Typography */}
        <motion.div
          className="max-w-4xl border-b border-[var(--border-light)] pb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-serif italic leading-none text-[#1a1a1a]" style={{ fontSize: "clamp(60px, 10vw, 120px)" }}>
            Hi, I'm
          </h3>
          <h3 className="font-serif italic leading-[0.8] text-[#1a1a1a]" style={{ fontSize: "clamp(80px, 14vw, 160px)" }}>
            Ansh Deshwal<span style={{ color: "var(--accent-red)" }}>.</span>
          </h3>

          <p className="mt-8 font-caveat text-[26px] sm:text-[34px] leading-[1.4] text-[#1a1a1a] max-w-3xl">
            Full-stack developer specializing in <span className="bg-[var(--tape-yellow)] px-2 mix-blend-multiply">production-grade web apps</span>, 
            microservices, and AI-powered infrastructure. I build robust, scalable systems that just work.
          </p>

          <p className="mt-4 font-caveat text-[20px] sm:text-[24px]" style={{ color: "var(--text-secondary)" }}>
            ~ currently at <span className="underline decoration-[var(--border-light)] underline-offset-4">Independent</span>, India. Ships code & ships coffee, in that order.
          </p>
          
          <div className="mt-10 flex flex-wrap items-center gap-3 font-mono text-[11px] sm:text-[13px] tracking-wider uppercase font-medium">
            <span className="bg-[#1a1a1a] text-[#f4ebcc] px-4 py-2 rounded-full flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-red)] animate-pulse" />
              AVAILABLE FOR WORK
            </span>
            <span className="border border-[var(--border)] px-4 py-2 rounded-full text-[#1a1a1a]">
              Full Stack . Devops · GenAi 
            </span>
            <span className="border border-[var(--border-light)] px-4 py-2 rounded-full text-[#1a1a1a]">
              INDIA
            </span>
          </div>
            {/* <span className="border border-[var(--border-light)] px-4 py-2 rounded-full text-[#1a1a1a]">
              2Y+ EXPERIENCE
            </span> */}
        </motion.div>
        {/* Bottom link */}
        <motion.a
          href="#work"
          className="inline-flex items-center gap-2 mt-10 font-caveat text-[19px] hover:text-[var(--accent-red)] transition-colors"
          style={{ color: "var(--text-secondary)" }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <span className="highlight">see my work history</span>
          <span className="font-mono text-[12px]" style={{ color: "var(--text-muted)" }}>
            /work →
          </span>
        </motion.a>
      </div>
    </section>
  );
}

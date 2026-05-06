"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "./SectionHeader";

/* ─── SOCIAL LINKS ─── */
const socialLinks = [
  { name: "GitHub", handle: "anshdeshwal31", url: "https://github.com/anshdeshwal31" },
  { name: "LinkedIn", handle: "anshdeshwal31", url: "https://www.linkedin.com/in/anshdeshwal31/" },
  { name: "X / Twitter", handle: "@marcus_313131", url: "https://x.com/marcus_313131" },
  { name: "LeetCode", handle: "anshdeshwal31", url: "https://leetcode.com/u/anshdeshwal31/" },
];

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" className="lined-paper margin-line relative py-20 sm:py-28 pb-32">
      <div ref={ref} className="relative mx-auto max-w-4xl px-6 sm:px-12 lg:px-16">
        <SectionHeader
          chapter="§ 05"
          pages="10–11"
          title="Let's"
          titleItalic="connect"
          subtitle="open to opportunities, collabs, and interesting conversations"
        />

        <motion.p
          className="text-[17px] sm:text-[19px] leading-[1.8] max-w-xl"
          style={{ color: "var(--text-secondary)" }}
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Open to full-time opportunities, freelance projects, and interesting
          ideas. Especially if it involves React, Node.js, or distributed systems.
        </motion.p>

        {/* Email CTA */}
        <motion.a
          href="mailto:anshdeshwal1234@gmail.com"
          className="mt-8 inline-flex items-center gap-2 font-mono text-[15px] sm:text-[16px] font-medium text-[var(--text-primary)] hover:text-[var(--accent-red)] transition-colors"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          <span className="text-lg">✉</span>
          anshdeshwal1234@gmail.com
        </motion.a>

        {/* Social links */}
        <motion.div
          className="mt-8 space-y-3"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 font-mono text-[14px] text-[var(--text-secondary)] hover:text-[var(--accent-red)] transition-colors"
            >
              <span className="font-semibold text-[var(--text-primary)]">
                {link.name}
              </span>
              <span className="text-[var(--text-muted)]">{link.handle}</span>
            </a>
          ))}
        </motion.div>

        {/* Quick links row */}
        <motion.div
          className="mt-12 flex flex-wrap gap-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          {[
            { label: "periodic table", path: "/skills", icon: "→" },
            { label: "grab the pen", path: "#cover", icon: "✎" },
            { label: "the projects", path: "#projects", icon: "→" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.path}
              className="inline-flex items-center gap-2 font-caveat text-[18px] text-[var(--text-secondary)] hover:text-[var(--accent-red)] transition-colors"
            >
              <span className="highlight">{item.label}</span>
              <span className="font-mono text-[12px] text-[var(--text-muted)]">
                {item.icon}
              </span>
            </a>
          ))}
        </motion.div>

        {/* Colophon */}
        <div className="section-divider mt-16" />
        <motion.div
          className="colophon mt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <h4 className="font-serif text-[18px] text-[var(--text-secondary)] mb-1">
            ~ colophon
          </h4>
          <p className="font-mono text-[12px] text-[var(--text-muted)] leading-[2]">
            <strong className="text-[var(--text-secondary)]">about this page</strong>
            <br />
            Handwritten in Next.js, Tailwind CSS & passion. No shortcuts.
            <br />
            Type: Instrument Serif · Kalam · Caveat · JetBrains Mono.
            <br />
            All opinions are mine. All bugs too.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import StatusBar from "./components/StatusBar";
import BookCover from "./components/BookCover";
import AboutSection from "./components/AboutSection";
import WorkSection from "./components/WorkSection";
import ProjectsSection from "./components/ProjectsSection";
import WritingSection from "./components/WritingSection";
import ContactSection from "./components/ContactSection";

const tocItems = [
  { ch: "§ 01", label: "About", page: "p.2", href: "#about" },
  { ch: "§ 02", label: "Things I built", page: "p.4", href: "#projects" },
  { ch: "§ 03", label: "Work history", page: "p.6", href: "#work" },
  { ch: "§ 04", label: "Certifications", page: "p.8", href: "#writing" },
  { ch: "§ 05", label: "Say hello", page: "p.10", href: "#contact" },
];

export default function Home() {
  return (
    <main className="min-h-screen notebook-bg">
      <Navbar />
      <StatusBar />

      {/* ═══ HERO ═══ */}
      <BookCover />

      {/* ═══ TABLE OF CONTENTS ═══ */}
      <section className="notebook-bg py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 sm:px-12 lg:px-16">
          <motion.h2
            className="font-kalam text-[28px] sm:text-[36px] font-bold"
            style={{ color: "var(--text-primary)" }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            AnshDeshwal~ ✎
          </motion.h2>

          <motion.p
            className="mt-3 text-[16px] sm:text-[18px] leading-relaxed max-w-xl"
            style={{ color: "var(--text-secondary)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Full-stack developer based in India. Writes React, Node, and the
            occasional side project at 1 am. Lives between VS Code and chai.
            You are welcome to read.
          </motion.p>

          {/* TOC entries — with asymmetric offset */}
          <nav className="mt-10 space-y-3 sm:ml-4">
            {tocItems.map((item, i) => (
              <motion.a
                key={item.ch}
                href={item.href}
                className="flex items-center gap-4 py-2 group"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <span
                  className="font-mono text-[13px] w-10 flex-shrink-0"
                  style={{ color: "var(--accent-red)" }}
                >
                  {item.ch}
                </span>
                <span className="font-serif text-[20px] sm:text-[22px] text-[var(--text-primary)] group-hover:text-[var(--accent-red)] transition-colors">
                  {item.label}
                </span>
                <span className="flex-1 border-b border-dotted border-[var(--border-light)]" />
                <span className="font-mono text-[12px] text-[var(--text-muted)]">
                  {item.page}
                </span>
              </motion.a>
            ))}
          </nav>
        </div>
      </section>

      {/* ═══ CONTENT SECTIONS ═══ */}
      <AboutSection />
      <ProjectsSection />
      <WorkSection />
      <WritingSection />
      <ContactSection />
    </main>
  );
}

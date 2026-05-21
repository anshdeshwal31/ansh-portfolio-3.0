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
    <main className="min-h-screen notebook-bg relative">
      {/* Background SVG Decorations */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden mix-blend-multiply opacity-30">
        <svg className="absolute top-[20%] left-[5%] w-24 h-24 text-[var(--text-secondary)] -rotate-12" viewBox="0 0 100 100">
          <path d="M 20 50 Q 50 10 80 50 T 20 80" fill="transparent" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <svg className="absolute top-[40%] right-[8%] w-16 h-16 text-[var(--accent-red)] rotate-45" viewBox="0 0 100 100">
          <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </svg>
        <svg className="absolute top-[70%] left-[12%] w-32 h-32 text-[var(--text-secondary)] rotate-12" viewBox="0 0 100 100">
           <circle cx="50" cy="50" r="40" fill="transparent" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4" />
        </svg>
        <svg className="absolute bottom-[10%] right-[15%] w-20 h-20 text-[var(--accent-yellow-deep)] -rotate-6" viewBox="0 0 100 100">
           <path d="M 10 90 L 50 10 L 90 90 Z" fill="transparent" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        </svg>
        <svg className="absolute top-[10%] right-[30%] w-12 h-12 text-[var(--text-secondary)] opacity-50" viewBox="0 0 100 100">
           <circle cx="50" cy="50" r="10" fill="currentColor" />
        </svg>
      </div>

      <div className="relative z-10">
        <Navbar />
        <StatusBar />

      {/* ═══ HERO ═══ */}
      <BookCover />

      {/* ═══ TABLE OF CONTENTS ═══ */}
      <section className="notebook-bg py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 sm:px-12 lg:px-16">
          {/* <motion.h2
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
          </motion.p> */}

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
      </div>
    </main>
  );
}

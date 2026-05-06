"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import StatusBar from "./components/StatusBar";
import BookCover from "./components/BookCover";
import AboutSection from "./components/AboutSection";
import WorkSection from "./components/WorkSection";
import ProjectsSection from "./components/ProjectsSection";
import WritingSection from "./components/WritingSection";
import ContactSection from "./components/ContactSection";
import WhatsAppWidget from "./components/WhatsAppWidget";

const tocItems = [
  { ch: "§ 01", label: "About", page: "p.2", href: "#about" },
  { ch: "§ 02", label: "Work history", page: "p.4", href: "#work" },
  { ch: "§ 03", label: "Things I built", page: "p.6", href: "#projects" },
  { ch: "§ 04", label: "Certifications & Achievements", page: "p.8", href: "#writing" },
  { ch: "§ 05", label: "Say hello", page: "p.10", href: "#contact" },
];

export default function Home() {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleOpenBook = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen notebook-bg">
      <Navbar />
      <StatusBar />

      {/* ═══ BOOK COVER — Hero ═══ */}
      <BookCover onOpen={handleOpenBook} />

      {/* ═══ TABLE OF CONTENTS ═══ */}
      <section ref={contentRef} className="notebook-bg py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 sm:px-12 lg:px-16">
          <motion.h2
            className="font-kalam text-[28px] sm:text-[36px] font-bold text-[var(--text-primary)]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            AnshDeshwal~ ✎
          </motion.h2>

          <motion.p
            className="mt-3 text-[16px] sm:text-[18px] leading-relaxed max-w-xl"
            style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Full-stack developer at LPU, India. Writes React, Node, and the
            occasional side project at 1 am. Lives between VS Code and chai.
            You are welcome to read.
          </motion.p>

          {/* TOC entries */}
          <nav className="mt-10 space-y-3">
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
                <span className="font-mono text-[13px] text-[var(--text-muted)] w-10 flex-shrink-0">
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
      <WorkSection />
      <ProjectsSection />
      <WritingSection />
      <ContactSection />

      {/* WhatsApp Widget */}
      <WhatsAppWidget phone="919627660757" />
    </main>
  );
}

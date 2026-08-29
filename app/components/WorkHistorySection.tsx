"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "./SectionHeader";

/* ─── INTERNSHIP DATA ─── */
const internships = [
  {
    company: "Mind Forge Labs",
    role: "Full Stack Developer Intern",
    period: "FEB '26 – APR '26",
    location: "REMOTE",
    techStack: ["Node.js", "Next.js", "TypeScript", "RAG", "LangChain", "PostgreSQL"],
    highlights: [
      {
        title: "AI-Native LMS",
        desc: "Built and contributed to an AI-native Learning Management System (LMS) with LLM-powered content generation and feedback features, reducing manual content creation effort by ~40%.",
        stat: { value: "~40%", label: "less manual work" },
      },
      {
        title: "Backend APIs",
        desc: "Developed backend APIs and services (Node.js) supporting AI workflows and user interactions, handling hundreds of daily requests with consistently low response times for core endpoints.",
      },
      {
        title: "RAG Pipelines",
        desc: "Implemented RAG-based pipelines for context-aware query handling, improving answer relevance by ~25% based on internal testing and evaluation.",
        stat: { value: "~25%", label: "better relevance" },
      },
      {
        title: "AI Workflows",
        desc: "Integrated LLM-powered feedback systems and automated content pipelines, enabling educators to generate, review, and ship course material at scale.",
      },
    ],
  },
];

export default function WorkHistorySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="work" className="lined-paper margin-line relative py-16 sm:py-24">
      <div ref={ref} className="relative mx-auto max-w-5xl px-6 sm:px-12 lg:px-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-2">
          <SectionHeader
            chapter="§ 03"
            pages="6–7"
            title="Work"
            titleItalic="history"
            subtitle=""
          />
          <p className="font-caveat text-[16px] sm:text-[18px] text-[var(--accent-red)] sm:pb-3">
            hands-on, production experience
          </p>
        </div>

        {/* Internship cards */}
        <div className="space-y-6 mt-4">
          {internships.map((intern, i) => (
            <motion.div
              key={intern.company}
              className="work-card"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <h3 className="font-serif italic text-[32px] sm:text-[40px] font-normal leading-tight">
                    {intern.company}
                  </h3>
                  <p
                    className="mt-1 font-kalam text-[18px] font-bold"
                    style={{ color: "var(--accent-red)" }}
                  >
                    {intern.role}
                  </p>
                </div>
                <div className="font-mono text-[11px] tracking-[0.12em] text-[var(--text-muted)] uppercase flex-shrink-0 sm:text-right flex flex-col items-end gap-1 mt-2 sm:mt-0">
                  <span>{intern.period}</span>
                  {intern.location && <span>{intern.location}</span>}
                </div>
              </div>

              {/* Tech stack tags */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {intern.techStack.map((s) => (
                  <span
                    key={s}
                    className="skill-tag"
                    style={{ padding: "3px 10px", fontSize: "13px" }}
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* 2-column highlights grid */}
              <div className="project-grid">
                {intern.highlights.map((hl) => (
                  <div key={hl.title} className="project-cell">
                    <h4>{hl.title}</h4>
                    <p>
                      {hl.desc}
                      {hl.stat && (
                        <span className="stat-callout">
                          <span className="value">{hl.stat.value}</span>
                          <span className="label">{hl.stat.label}</span>
                        </span>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom link */}
        <motion.a
          href="#skills"
          className="inline-flex items-center gap-2 mt-8 font-caveat text-[19px] hover:text-[var(--accent-red)] transition-colors"
          style={{ color: "var(--text-secondary)" }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <span className="highlight">see what I know</span>
          <span className="font-mono text-[12px] text-[var(--text-muted)]">/skills →</span>
        </motion.a>
      </div>
    </section>
  );
}

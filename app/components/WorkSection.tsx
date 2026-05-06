"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import SectionHeader from "./SectionHeader";

/* ─── ALL 6 PROJECTS (priority order) ─── */
const allProjects = [
  {
    name: "Convorbit AI",
    role: "AI Meeting Intelligence SaaS",
    techStack: ["Next.js", "TypeScript", "Prisma", "OpenAI", "AWS", "Razorpay"],
    period: "JUN '25 – MAR '26",
    highlights: [
      {
        title: "RAG Pipeline",
        desc: "Auto-joins Zoom/Meet/Teams, generates transcripts & summaries via OpenAI + Pinecone RAG pipeline.",
      },
      {
        title: "Production Integrations",
        desc: "Google Calendar, Slack, Jira/Asana/Trello, Razorpay subscriptions with full webhook handling.",
        stat: { value: "5+", label: "integrations" },
      },
    ],
  },
  {
    name: "BugHop AI",
    role: "GitHub AI Code Review Assistant",
    techStack: ["TypeScript", "Next.js", "Qdrant", "Inngest", "Prisma"],
    period: "JAN '26 – MAR '26",
    highlights: [
      {
        title: "Semantic Code Retrieval",
        desc: "End-to-end RAG pipeline: embeddings + Qdrant vector search for automated PR/issue review feedback.",
      },
      {
        title: "SaaS Controls",
        desc: "Clerk auth, per-plan usage metering, analytics dashboards, Polar-based billing.",
        stat: { value: "-40%", label: "review time" },
      },
    ],
  },
  {
    name: "PingNova",
    role: "Website Monitoring Platform",
    techStack: ["TypeScript", "Next.js", "Express", "Bun", "Redis", "PostgreSQL"],
    period: "FEB '26 – MAR '26",
    highlights: [
      {
        title: "Event-Driven Pipeline",
        desc: "Redis Streams + consumer groups: periodic ingestion, async health checks, batched tick persistence.",
      },
      {
        title: "Production Backend",
        desc: "JWT auth, bcrypt hashing, schema validation, integration tests, unified uptime dashboard.",
      },
    ],
  },
  {
    name: "Hospitrix",
    role: "Hospital Management Platform",
    techStack: ["React.js", "Node.js", "MongoDB", "Razorpay"],
    period: "2024",
    highlights: [
      {
        title: "Full-Stack Platform",
        desc: "Patient scheduling, records management, Razorpay payment integration, JWT authentication.",
      },
      {
        title: "RESTful Architecture",
        desc: "Clean API design with Express.js, middleware chains, and MongoDB aggregation pipelines.",
      },
    ],
  },
  {
    name: "Briefly",
    role: "AI PDF Summarizer",
    techStack: ["Next.js", "LangChain", "Gemini", "FAISS"],
    period: "2024",
    highlights: [
      {
        title: "Document Intelligence",
        desc: "Upload, process, and summarize PDFs with LangChain + Gemini, cutting reading time by 70%.",
        stat: { value: "-70%", label: "reading time" },
      },
      {
        title: "Semantic Search",
        desc: "FAISS-based vector search with embedding-level caching, reducing repeat-query latency by 50%.",
      },
    ],
  },
  {
    name: "QueryForge",
    role: "SQL Query Builder",
    techStack: ["React.js", "TypeScript", "PostgreSQL"],
    period: "2024",
    highlights: [
      {
        title: "Visual Query Builder",
        desc: "Drag-and-drop interface for building complex SQL queries without writing raw SQL.",
      },
      {
        title: "Schema Explorer",
        desc: "Auto-detection of database schema with relationship visualization and query optimization hints.",
      },
    ],
  },
];

export default function WorkSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 3);

  return (
    <section id="work" className="lined-paper margin-line relative py-16 sm:py-24">
      <div ref={ref} className="relative mx-auto max-w-5xl px-6 sm:px-12 lg:px-16">
        {/* Asymmetric subtitle placement */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-2">
          <SectionHeader
            chapter="§ 03"
            pages="6–7"
            title="Work"
            titleItalic="history"
            subtitle=""
          />
          <p className="font-caveat text-[16px] sm:text-[18px] text-[var(--accent-red)] sm:pb-3">
            {allProjects.length} projects, a lot of shipped code
          </p>
        </div>

        {/* Project cards */}
        <div className="space-y-6 mt-4">
          {visibleProjects.map((proj, i) => (
            <motion.div
              key={proj.name}
              className="work-card"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <h3 className="font-serif text-[26px] sm:text-[32px] font-normal leading-tight">
                    {proj.name}
                  </h3>
                  <p
                    className="mt-1 font-kalam text-[16px] font-bold"
                    style={{ color: "var(--accent-red)" }}
                  >
                    {proj.role}
                  </p>
                </div>
                <span className="font-mono text-[11px] tracking-[0.12em] text-[var(--text-muted)] uppercase flex-shrink-0 sm:text-right">
                  {proj.period}
                </span>
              </div>

              {/* Tech skills row */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {proj.techStack.map((s) => (
                  <span
                    key={s}
                    className="skill-tag"
                    style={{ padding: "3px 10px", fontSize: "13px" }}
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* 2-column project highlights grid — matching reference */}
              <div className="project-grid">
                {proj.highlights.map((hl) => (
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

        {/* Show more / less button */}
        <AnimatePresence>
          {!showAll && (
            <motion.div
              className="mt-8 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button
                onClick={() => setShowAll(true)}
                className="btn-show-more"
              >
                show {allProjects.length - 3} more projects ↓
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {showAll && (
          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <button
              onClick={() => setShowAll(false)}
              className="btn-show-more"
            >
              show less ↑
            </button>
          </motion.div>
        )}

        {/* Bottom link */}
        <motion.a
          href="#contact"
          className="inline-flex items-center gap-2 mt-8 font-caveat text-[19px] hover:text-[var(--accent-red)] transition-colors"
          style={{ color: "var(--text-secondary)" }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <span className="highlight">what I&apos;m up to right now</span>
          <span className="font-mono text-[12px] text-[var(--text-muted)]">/now →</span>
        </motion.a>
      </div>
    </section>
  );
}

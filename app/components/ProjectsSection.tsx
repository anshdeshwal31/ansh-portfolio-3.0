"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import SectionHeader from "./SectionHeader";

/* ─── PROJECTS from resume screenshot ─── */
const projects = [
  {
    id: "01",
    name: "Convorbit AI",
    caption: "Convorbit AI",
    techStack: "Next.js · TypeScript · Prisma · OpenAI API · AWS (Lambda + S3)",
    period: "Jun '25 – Mar '26",
    description:
      "A full-stack AI meeting intelligence SaaS that auto-joins Zoom/Google Meet/Teams calls, generates transcripts, summaries, and action items, and enables users to chat with meeting content using a RAG pipeline (OpenAI + Pinecone).",
    bullets: [
      "Engineered production-grade integrations across Google Calendar, Slack, Jira/Asana/Trello, and Razorpay subscriptions/webhooks.",
      "Developed and deployed a scalable Next.js 15 + TypeScript platform with Clerk auth, Prisma/PostgreSQL, and AWS services (Lambda/S3/EventBridge).",
    ],
    image: "/projects/briefly.png",
    url: "https://convorbit.vercel.app/",
    github: "https://github.com/anshdeshwal31",
    pinColor: "#dc2626",
    rotation: -2,
  },
  {
    id: "02",
    name: "BugHop AI",
    caption: "BugHop AI",
    techStack: "TypeScript · Next.js · PostgreSQL · Qdrant · Inngest · Prisma",
    period: "Jan '26 – Mar '26",
    description:
      "A CodeRabbit-style end-to-end AI GitHub assistant (Next.js + Prisma) that ingests repository events, performs semantic code retrieval, and posts automated PR/issue review feedback with custom team rules.",
    bullets: [
      "Designed a production-style RAG pipeline using embeddings and vector search (OpenAI + Qdrant + async workflows).",
      "Implemented SaaS platform controls including Clerk auth, per-plan usage metering, analytics dashboards, and Polar-based subscription billing.",
    ],
    image: "/projects/queryforge.png",
    url: "https://bughop.vercel.app/",
    github: "https://github.com/anshdeshwal31",
    pinColor: "#eab308",
    rotation: 1.5,
  },
  {
    id: "03",
    name: "PingNova",
    caption: "PingNova",
    techStack: "TypeScript · Next.js · Express.js · Bun · Prisma · PostgreSQL · Redis (Streams)",
    period: "Feb '26 – Mar '26",
    description:
      "A BetterUptime-style website monitoring platform using Next.js, Express, Bun, Prisma, and PostgreSQL — real-time uptime and response-time health in a unified dashboard.",
    bullets: [
      "Engineered an event-driven monitoring pipeline with Redis Streams and consumer groups: periodic website ingestion, async health checks, and batched tick persistence.",
      "Implemented production-style backend with JWT authentication, bcrypt password hashing, schema validation, and integration tests.",
    ],
    image: "/projects/hospitrix.png",
    url: "https://pingnova.vercel.app/",
    github: "https://github.com/anshdeshwal31",
    pinColor: "#2563eb",
    rotation: -1,
  },
];

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="projects" className="notebook-bg relative py-16 sm:py-24">
      <div
        ref={ref}
        className="relative mx-auto max-w-5xl px-6 sm:px-12 lg:px-16"
      >
        <SectionHeader
          chapter="§ 03"
          pages="6–7"
          title="Things I"
          titleItalic="built"
          subtitle="weekend projects, taped to the page · click to explore"
        />

        {/* Polaroid grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-7">
          {projects.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="polaroid group block relative"
              style={{ transform: `rotate(${project.rotation}deg)` }}
              initial={{ opacity: 0, y: 30, rotate: project.rotation }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, rotate: project.rotation }
                  : {}
              }
              transition={{ duration: 0.5, delay: 0.15 * i }}
              whileHover={{
                scale: 1.04,
                rotate: 0,
                boxShadow: "0 12px 32px rgba(0,0,0,0.15)",
                transition: { duration: 0.3 },
              }}
            >
              {/* Colored pin */}
              <div
                className="polaroid-pin"
                style={{ background: project.pinColor }}
              />

              {/* Label */}
              <span className="polaroid-label">
                #{project.id} · {project.name.toUpperCase()}
              </span>

              {/* Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Caption */}
              <p className="polaroid-caption">{project.caption}</p>
            </motion.a>
          ))}
        </div>

        {/* Detailed project cards — beneath polaroids */}
        <div className="mt-12 space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={`detail-${project.id}`}
              className="work-card"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.12 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <h3 className="font-serif text-[24px] sm:text-[28px] font-normal leading-tight">
                    {project.name}
                  </h3>
                  <p className="mt-1 font-kalam text-[15px] text-red-700 font-bold">
                    {project.techStack}
                  </p>
                </div>
                <span className="font-mono text-[11px] tracking-[0.1em] text-[var(--text-muted)] uppercase flex-shrink-0">
                  {project.period}
                </span>
              </div>

              <p className="mt-3 text-[15px] leading-relaxed text-[var(--text-secondary)]">
                {project.description}
              </p>

              <div className="mt-4 space-y-2">
                {project.bullets.map((bullet, bi) => (
                  <div key={bi} className="work-bullet">
                    <p className="text-[14px] leading-relaxed text-[var(--text-secondary)]">
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex gap-3">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[12px] font-semibold text-[var(--accent-red)] hover:underline"
                >
                  Open ↗
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[12px] font-semibold text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                >
                  GitHub ↗
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom link */}
        <motion.a
          href="https://github.com/anshdeshwal31"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 mt-8 font-caveat text-[19px] text-[var(--text-secondary)] hover:text-[var(--accent-red)] transition-colors"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
        >
          <span className="highlight">the full wall</span>
          <span className="font-mono text-[12px] text-[var(--text-muted)]">
            /projects →
          </span>
        </motion.a>
      </div>
    </section>
  );
}

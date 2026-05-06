"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "./SectionHeader";

/* ─── DATA ─── */
const experiences = [
  {
    company: "Personal / Freelance Projects",
    role: "Full Stack Developer",
    period: "2024 – PRESENT",
    location: "INDIA",
    skills: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "AWS", "Docker", "Redis", "LangChain"],
    highlights: [
      {
        title: "Convorbit AI — Meeting Intelligence SaaS",
        desc: "Built a full-stack AI meeting intelligence SaaS with RAG pipeline, production-grade integrations (Google Calendar, Slack, Jira, Razorpay), and AWS services (Lambda/S3/EventBridge).",
      },
      {
        title: "BugHop AI — GitHub AI Assistant",
        desc: "Built a CodeRabbit-style end-to-end AI GitHub assistant with semantic code retrieval, automated PR/issue review, and SaaS billing via Polar.",
      },
      {
        title: "PingNova — Website Monitoring",
        desc: "Engineered an event-driven website monitoring platform with Redis Streams, async health checks, JWT auth, and a unified uptime dashboard.",
      },
    ],
    stat: { value: "3+", label: "shipped SaaS products" },
  },
  {
    company: "Smart India Hackathon",
    role: "Finalist — Team Lead",
    period: "SEPT 2025",
    location: "NATIONAL LEVEL",
    skills: ["React.js", "Node.js", "MongoDB"],
    highlights: [
      {
        title: "36-Hour National Sprint",
        desc: "Developed a complete Ayurveda platform in a 36-hour hackathon sprint, reaching the national finals of Smart India Hackathon.",
      },
    ],
    stat: { value: "Top", label: "national finalist" },
  },
];

export default function WorkSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="work" className="lined-paper margin-line relative py-16 sm:py-24">
      <div ref={ref} className="relative mx-auto max-w-4xl px-6 sm:px-12 lg:px-16">
        <SectionHeader
          chapter="§ 02"
          pages="4–5"
          title="Work"
          titleItalic="history"
          subtitle="building things, one commit at a time"
        />

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              className="work-card"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <h3 className="font-serif text-[26px] sm:text-[30px] font-normal leading-tight">
                    {exp.company}
                  </h3>
                  <p className="mt-1 font-kalam text-[17px] text-red-700 font-bold">
                    {exp.role}
                  </p>
                </div>
                <div className="text-right font-mono text-[11px] tracking-[0.1em] text-[var(--text-muted)] uppercase flex-shrink-0">
                  <p>{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>

              {/* Skills */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {exp.skills.map((skill) => (
                  <span key={skill} className="skill-tag text-[11px]" style={{ padding: "4px 10px" }}>
                    {skill}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <div className="mt-5 space-y-2.5">
                {exp.highlights.map((hl) => (
                  <div key={hl.title} className="work-bullet">
                    <h4 className="font-serif text-[17px] font-normal text-[var(--text-primary)]">
                      {hl.title}
                    </h4>
                    <p className="mt-1 text-[14px] leading-relaxed text-[var(--text-secondary)]">
                      {hl.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Stat callout */}
              {exp.stat && (
                <div className="mt-4 inline-flex items-baseline gap-2">
                  <span className="font-caveat text-[26px] text-red-600 line-through decoration-red-400 decoration-2">
                    {exp.stat.value}
                  </span>
                  <span className="font-caveat text-[17px] text-[var(--text-muted)]">
                    {exp.stat.label}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom link */}
        <motion.a
          href="#contact"
          className="inline-flex items-center gap-2 mt-8 font-caveat text-[19px] text-[var(--text-secondary)] hover:text-[var(--accent-red)] transition-colors"
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

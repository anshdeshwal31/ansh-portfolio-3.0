"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "./SectionHeader";

/* ─── SKILL ICON MAP ─── */
const iconMap: Record<string, string> = {
  "C++": "https://icon.icepanel.io/Technology/svg/C%2B%2B-%28CPlusPlus%29.svg",
  JavaScript: "https://icon.icepanel.io/Technology/svg/JavaScript.svg",
  TypeScript: "https://icon.icepanel.io/Technology/svg/TypeScript.svg",
  SQL: "https://icon.icepanel.io/Technology/svg/MySQL.svg",
  "Next.js": "https://icon.icepanel.io/Technology/svg/Next.js.svg",
  "React.js": "https://icon.icepanel.io/Technology/svg/React.svg",
  "Express.js": "https://icon.icepanel.io/Technology/svg/Express.svg",
  "Node.js": "https://icon.icepanel.io/Technology/svg/Node.js.svg",
  Prisma: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
  "Tailwind CSS": "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
  AWS: "https://icon.icepanel.io/Technology/svg/AWS.svg",
  Docker: "https://icon.icepanel.io/Technology/svg/Docker.svg",
  Kubernetes: "https://icon.icepanel.io/Technology/svg/Kubernetes.svg",
  "CI/CD": "https://icon.icepanel.io/Technology/svg/GitHub-Actions.svg",
  Prometheus: "https://icon.icepanel.io/Technology/svg/Prometheus.svg",
  Grafana: "https://icon.icepanel.io/Technology/svg/Grafana.svg",
  Helm: "https://icon.icepanel.io/Technology/svg/Helm.svg",
  ArgoCD: "https://icon.icepanel.io/Technology/svg/Argo-CD.svg",
  Kafka: "https://icon.icepanel.io/Technology/svg/Apache-Kafka.svg",
  LangChain: "https://cdn.simpleicons.org/langchain/1a1a1a",
  n8n: "https://cdn.simpleicons.org/n8n/1a1a1a",
  Inngest: "https://cdn.simpleicons.org/inngest/1a1a1a",
  MongoDB: "https://icon.icepanel.io/Technology/svg/MongoDB.svg",
  PostgreSQL: "https://icon.icepanel.io/Technology/svg/PostgresSQL.svg",
  Redis: "https://icon.icepanel.io/Technology/svg/Redis.svg",
  Qdrant: "https://raw.githubusercontent.com/qdrant/qdrant/master/docs/logo.svg",
  Pinecone: "https://cdn.simpleicons.org/pinecone/1a1a1a",
};

/* ─── SKILLS DATA ─── */
const skillCategories = [
  {
    name: "LANGUAGES",
    skills: [
      { name: "C++", highlighted: false },
      { name: "JavaScript", highlighted: false },
      { name: "TypeScript", highlighted: true },
      { name: "SQL", highlighted: false },
    ],
  },
  {
    name: "FRAMEWORKS",
    skills: [
      { name: "Next.js", highlighted: true },
      { name: "React.js", highlighted: false },
      { name: "Express.js", highlighted: false },
      { name: "Node.js", highlighted: true },
      { name: "Prisma", highlighted: false },
      { name: "Tailwind CSS", highlighted: false },
      { name: "shadcn/ui", highlighted: false },
    ],
  },
  {
    name: "DATABASES",
    skills: [
      { name: "PostgreSQL", highlighted: true },
      { name: "Redis", highlighted: false },
      { name: "MongoDB", highlighted: false },
      { name: "Qdrant", highlighted: false },
      { name: "Pinecone", highlighted: false },
    ],
  },
  {
    name: "CLOUD & INFRA",
    skills: [
      { name: "AWS", highlighted: false },
      { name: "Kubernetes", highlighted: true },
      { name: "Docker", highlighted: true },
      { name: "CI/CD", highlighted: false },
      { name: "Prometheus", highlighted: false },
      { name: "Grafana", highlighted: false },
      { name: "Helm", highlighted: false },
      { name: "ArgoCD", highlighted: false },
      { name: "Kafka", highlighted: false },
    ],
  },
  {
    name: "AI / ML",
    skills: [
      { name: "LangChain", highlighted: true },
      { name: "RAG", highlighted: true },
      { name: "n8n", highlighted: false },
      { name: "Inngest", highlighted: false },
      { name: "MCP", highlighted: false },
    ],
  },
];

const aboutText =
  "Full-stack developer specializing in building production-grade web applications, cloud-native infrastructure, and AI-powered automation. I build systems that ship fast and scale well.";

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

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

        {/* ─── THE TOOLBOX ─── */}
        <motion.div
          className="mt-14"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.35 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3
              className="font-serif text-[28px] sm:text-[36px] italic"
              style={{ color: "var(--text-primary)" }}
            >
              — <em>the toolbox</em>
              <span style={{ color: "var(--accent-red)" }}>.</span>
            </h3>
            <motion.p
              className="font-caveat hidden sm:block"
              style={{ color: "var(--accent-red)", fontSize: "28px", fontWeight: 600 }}
              animate={{ rotate: [-1, 1, -1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              hover the <span className="highlight text-black">sticker</span> pills ↓
            </motion.p>
          </div>

          {/* Skills rows — horizontal layout like reference */}
          <div className="relative">
            {/* Large watermark icon behind */}
            {hoveredIcon && (
              <motion.img
                key={hoveredIcon}
                src={hoveredIcon}
                alt=""
                className="skills-watermark visible"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.2, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  position: "absolute",
                  right: "5%",
                  top: "10%",
                  width: "380px",
                  height: "380px",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />
            )}

            {skillCategories.map((cat, ci) => (
              <motion.div
                key={cat.name}
                className="skills-row"
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.4 + ci * 0.06 }}
              >
                <span className="cat-label">{cat.name}</span>
                <div className="flex flex-wrap gap-3 relative z-10">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`skill-tag ${skill.highlighted ? "highlighted" : ""}`}
                      onMouseEnter={() =>
                        setHoveredIcon(iconMap[skill.name] || null)
                      }
                      onMouseLeave={() => setHoveredIcon(null)}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
                {/* Dashed separator */}
                <div
                  className="col-span-2"
                  style={{
                    gridColumn: "1 / -1",
                    height: "1px",
                    background:
                      "repeating-linear-gradient(to right, var(--border-light) 0, var(--border-light) 8px, transparent 8px, transparent 14px)",
                    marginTop: "4px",
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom link */}
        <motion.a
          href="#skills"
          className="inline-flex items-center gap-2 mt-6 font-caveat text-[19px] hover:text-[var(--accent-red)] transition-colors"
          style={{ color: "var(--text-secondary)" }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <span className="highlight">the full periodic table</span>
          <span className="font-mono text-[12px]" style={{ color: "var(--text-muted)" }}>
            /skills →
          </span>
        </motion.a>
      </div>
    </section>
  );
}

"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

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
  "GitHub Actions": "https://icon.icepanel.io/Technology/svg/GitHub-Actions.svg",
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
      { name: "GitHub Actions", highlighted: false },
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

export default function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  return (
    <section id="skills" className="lined-paper margin-line relative py-16 sm:py-24 pb-8">
      <div ref={ref} className="relative mx-auto max-w-5xl px-6 sm:px-12 lg:px-16">
        {/* ─── THE TOOLBOX ─── */}
        <motion.div
          className="mt-2"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
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

          {/* Skills rows */}
          <div className="relative">
            {/* Large watermark icon behind */}
            <AnimatePresence>
            {hoveredIcon && (
              <motion.img
                key={hoveredIcon}
                src={hoveredIcon}
                alt=""
                className="skills-watermark visible"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.2, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
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
            </AnimatePresence>

            {skillCategories.map((cat, ci) => (
              <motion.div
                key={cat.name}
                className="skills-row"
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + ci * 0.06 }}
              >
                <span className="cat-label">{cat.name}</span>
                <div className="flex flex-wrap gap-3 relative z-10">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`skill-tag ${skill.highlighted ? "highlighted" : ""}`}
                      onMouseEnter={() => setHoveredIcon(iconMap[skill.name] || null)}
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
          href="#projects"
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

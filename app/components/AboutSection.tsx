"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import SectionHeader from "./SectionHeader";

/* ─── SKILL ICON MAP (icepanel + devicon CDNs) ─── */
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
  "shadcn/ui": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  AWS: "https://icon.icepanel.io/Technology/svg/AWS.svg",
  "EC2": "https://icon.icepanel.io/Technology/svg/AWS.svg",
  "ECS": "https://icon.icepanel.io/Technology/svg/AWS.svg",
  Docker: "https://icon.icepanel.io/Technology/svg/Docker.svg",
  Kubernetes: "https://icon.icepanel.io/Technology/svg/Kubernetes.svg",
  "CI/CD": "https://icon.icepanel.io/Technology/svg/GitHub-Actions.svg",
  Prometheus: "https://icon.icepanel.io/Technology/svg/Prometheus.svg",
  Grafana: "https://icon.icepanel.io/Technology/svg/Grafana.svg",
  Helm: "https://icon.icepanel.io/Technology/svg/Helm.svg",
  ArgoCD: "https://icon.icepanel.io/Technology/svg/Argo-CD.svg",
  Kafka: "https://icon.icepanel.io/Technology/svg/Apache-Kafka.svg",
  LangChain: "/skills/langchain.svg",
  n8n: "/skills/n8n.png",
  MongoDB: "https://icon.icepanel.io/Technology/svg/MongoDB.svg",
  PostgreSQL: "https://icon.icepanel.io/Technology/svg/PostgresSQL.svg",
  Redis: "https://icon.icepanel.io/Technology/svg/Redis.svg",
  RAG: "https://icon.icepanel.io/Technology/svg/OpenAI.svg",
  MCP: "https://icon.icepanel.io/Technology/svg/OpenAI.svg",
  "Vector Databases": "https://icon.icepanel.io/Technology/svg/PostgresSQL.svg",
  Terraform: "https://icon.icepanel.io/Technology/svg/Terraform.svg",
  Lambda: "https://icon.icepanel.io/Technology/svg/AWS-Lambda.svg",
};

/* ─── SKILLS DATA (from resume screenshot) ─── */
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
    name: "FRAMEWORKS & LIBRARIES",
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
    name: "CLOUD & DEVOPS",
    skills: [
      { name: "AWS", highlighted: false },
      { name: "Docker", highlighted: true },
      { name: "Kubernetes", highlighted: true },
      { name: "CI/CD", highlighted: false },
      { name: "Prometheus", highlighted: false },
      { name: "Grafana", highlighted: false },
      { name: "Helm", highlighted: false },
      { name: "ArgoCD", highlighted: false },
      { name: "Kafka", highlighted: false },
    ],
  },
  {
    name: "AI & DATA ENGINEERING",
    skills: [
      { name: "LangChain", highlighted: true },
      { name: "RAG", highlighted: true },
      { name: "n8n", highlighted: false },
      { name: "MCP", highlighted: false },
    ],
  },
  {
    name: "DATABASES",
    skills: [
      { name: "MongoDB", highlighted: false },
      { name: "PostgreSQL", highlighted: true },
      { name: "Vector Databases", highlighted: false },
      { name: "Redis", highlighted: false },
    ],
  },
];

const coursework = [
  "DSA",
  "OOP",
  "Operating System",
  "Computer Networks",
  "Software Engineering",
  "DBMS",
];

const aboutText =
  "Full-stack developer specializing in building production-grade web applications, cloud-native infrastructure, and AI-powered automation. I build systems that ship fast and scale well.";

/* ─── Skill Pill with icon on hover ─── */
function SkillPill({
  name,
  highlighted,
}: {
  name: string;
  highlighted: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const icon = iconMap[name];

  return (
    <motion.span
      className={`skill-tag ${highlighted ? "highlighted" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      layout
    >
      <AnimatePresence mode="popLayout">
        {hovered && icon && (
          <motion.img
            key="icon"
            src={icon}
            alt=""
            className="inline-block h-4 w-4 mr-1.5 flex-shrink-0"
            initial={{ opacity: 0, scale: 0.5, width: 0, marginRight: 0 }}
            animate={{ opacity: 1, scale: 1, width: 16, marginRight: 6 }}
            exit={{ opacity: 0, scale: 0.5, width: 0, marginRight: 0 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
        )}
      </AnimatePresence>
      {name}
    </motion.span>
  );
}

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="about"
      className="lined-paper margin-line relative py-16 sm:py-24 pb-8"
    >
      <div className="relative mx-auto max-w-4xl px-6 sm:px-12 lg:px-16">
        <SectionHeader
          chapter="§ 01"
          pages="2–3"
          title="Hi, I'm"
          titleItalic="Ansh Deshwal"
          subtitle="full-stack dev with a thing for clean code & creative UI"
        />

        {/* Bio */}
        <motion.p
          ref={ref}
          className="text-[16px] sm:text-[18px] leading-[1.7] max-w-2xl"
          style={{
            color: "var(--text-secondary)",
            fontFamily: "var(--font-body)",
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {aboutText}
        </motion.p>

        <motion.p
          className="mt-3 font-caveat text-[17px] sm:text-[19px]"
          style={{ color: "var(--text-muted)" }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          ~ currently studying at LPU, India. Ships code &amp; sips chai, in
          that order.
        </motion.p>

        {/* Skills grid — tighter spacing */}
        <div className="mt-10 space-y-5">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: 0.25 + ci * 0.08 }}
            >
              <p className="font-mono text-[11px] font-semibold tracking-[0.12em] text-[var(--text-muted)] uppercase mb-2">
                {cat.name}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <SkillPill
                    key={skill.name}
                    name={skill.name}
                    highlighted={skill.highlighted}
                  />
                ))}
              </div>
              {/* Dashed separator */}
              <div
                className="section-divider"
                style={{ margin: "16px 0 0" }}
              />
            </motion.div>
          ))}

          {/* Coursework */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.35, delay: 0.7 }}
          >
            <p className="font-mono text-[11px] font-semibold tracking-[0.12em] text-[var(--text-muted)] uppercase mb-2">
              COURSEWORK
            </p>
            <div className="flex flex-wrap gap-2">
              {coursework.map((c) => (
                <span
                  key={c}
                  className="skill-tag text-[12px]"
                  style={{ padding: "4px 12px" }}
                >
                  {c}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Link to full skills */}
        <motion.a
          href="#skills"
          className="inline-flex items-center gap-2 mt-6 font-caveat text-[19px] text-[var(--text-secondary)] hover:text-[var(--accent-red)] transition-colors"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <span className="highlight">the full periodic table</span>
          <span className="font-mono text-[12px] text-[var(--text-muted)]">
            /skills →
          </span>
        </motion.a>
      </div>
    </section>
  );
}

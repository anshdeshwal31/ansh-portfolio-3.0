"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "./SectionHeader";

/* ─── DATA ─── */
const certifications = [
  {
    date: "2025 / MAY",
    tag: "AWS",
    tagHighlighted: true,
    title: "AWS AI Practitioner (AIF-C01)",
    description:
      "AWS Certified AI Practitioner — covers foundational AI/ML concepts, generative AI, responsible AI, and AWS AI/ML services.",
    link: "https://aws.amazon.com/certification/certified-ai-practitioner/",
  },
  {
    date: "2026 / MAY",
    tag: "AWS",
    tagHighlighted: false,
    title: "AWS Cloud Practitioner (CLF-C02)",
    description:
      "AWS Certified Cloud Practitioner — validates cloud fluency across core AWS services, security, architecture, pricing, and support.",
    link: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
  },
  {
    date: "2026 / MAY",
    tag: "ORACLE",
    tagHighlighted: true,
    title: "Oracle Certified AI Foundations Associate",
    description:
      "Oracle Certified AI Foundations Associate — demonstrates understanding of AI, ML, deep learning, and Oracle AI services and solutions.",
    link: "https://education.oracle.com/oracle-ai-foundations-associate/pexam_1Z0-1122",
  },
];

const achievements = [
  {
    date: "2026 / MAR",
    tag: "COMPETITIVE",
    tagHighlighted: true,
    title: "500+ DSA Problems Solved",
    description:
      "Solved 500+ DSA problems across LeetCode, GeeksForGeeks, and CodingNinjas — sharpening algorithmic thinking and problem-solving skills.",
  },
  {
    date: "2025 / SEPT",
    tag: "HACKATHON",
    tagHighlighted: false,
    title: "Smart India Hackathon — Finalist",
    description:
      "Developed a complete Ayurveda platform in a 36-hour national hackathon sprint and reached the finals of Smart India Hackathon.",
  },
];

export default function WritingSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="writing" className="notebook-bg relative py-20 sm:py-28">
      <div ref={ref} className="relative mx-auto max-w-4xl px-6 sm:px-12 lg:px-16">
        <SectionHeader
          chapter="§ 04"
          pages="8–9"
          title="Ink"
          titleItalic="& Accolades"
          subtitle="certifications, achievements, and milestones"
        />

        {/* Certifications */}
        <div className="mt-8 space-y-6">
            {certifications.map((cert, i) => (
              <motion.a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noreferrer"
              className="blog-card block group border border-[var(--border-light)] shadow-[0_4px_12px_rgba(0,0,0,0.06)]"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-[12px] tracking-[0.1em] text-[var(--text-muted)] uppercase">
                    {cert.date}
                  </span>
                  <span
                    className="inline-block w-10 h-1 rounded"
                    style={{ background: "var(--accent-yellow)" }}
                  />
                </div>
                <span className={`blog-tag ${cert.tagHighlighted ? "highlighted" : ""}`}>
                  {cert.tag}
                </span>
                <h3 className="mt-3 font-serif text-[24px] sm:text-[28px] leading-tight text-[var(--text-primary)] group-hover:text-[var(--accent-red)] transition-colors">
                  {cert.title}
                </h3>
                <p className="mt-2 text-[15px] sm:text-[16px] leading-relaxed text-[var(--text-secondary)]">
                  {cert.description}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Achievements */}
        <div className="mt-14">
          <p className="font-mono text-[12px] font-semibold tracking-[0.12em] text-[var(--text-muted)] uppercase mb-6">
            ACHIEVEMENTS
          </p>
          <div className="space-y-6">
              {achievements.map((ach, i) => (
                <motion.div
                  key={ach.title}
                  className="blog-card border border-[var(--border-light)] shadow-[0_4px_12px_rgba(0,0,0,0.06)]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + i * 0.1,
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-[12px] tracking-[0.1em] text-[var(--text-muted)] uppercase">
                      {ach.date}
                    </span>
                    <span
                      className="inline-block w-10 h-1 rounded"
                      style={{ background: "var(--accent-yellow)" }}
                    />
                  </div>
                  <span className={`blog-tag ${ach.tagHighlighted ? "highlighted" : ""}`}>
                    {ach.tag}
                  </span>
                  <h3 className="mt-3 font-serif text-[24px] sm:text-[28px] leading-tight">
                    {ach.title}
                  </h3>
                  <p className="mt-2 text-[15px] sm:text-[16px] leading-relaxed text-[var(--text-secondary)]">
                    {ach.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
      </div>
    </section>
  );
}

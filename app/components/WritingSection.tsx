"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "./SectionHeader";

/* ─── DATA ─── */
const certifications = [
  {
    date: "2024 / DEC",
    tag: "DSA",
    tagHighlighted: true,
    title: "Data Structures and Algorithm",
    description:
      "Certified in DSA (iamneo) — covering problem solving, algorithmic thinking, and C++ implementation.",
    link: "https://drive.google.com/file/d/1RGlHtnjF3M8EkLoKx3DvffMSE2ecQKAy/view?usp=sharing",
  },
  {
    date: "2025 / MAY",
    tag: "JAVA",
    tagHighlighted: false,
    title: "Java Programming",
    description:
      "Certified in Java Programming (iamneo) — OOP, Collections, Multithreading, and design patterns.",
    link: "https://drive.google.com/file/d/1cCur8MMnBFB5aVmu3fZ7HYbmv35K4Q9p/view?usp=sharing",
  },
  {
    date: "2024 / DEC",
    tag: "OOP",
    tagHighlighted: true,
    title: "Object Oriented Programming",
    description:
      "Certified in OOP (iamneo) — abstraction, polymorphism, design patterns, and SOLID principles.",
    link: "https://drive.google.com/file/d/19ZBfi7WJq6kdi_KYUSAml4eM6OBy9Bbc/view?usp=sharing",
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

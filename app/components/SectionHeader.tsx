"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionHeaderProps {
  chapter: string;
  pages: string;
  title: string;
  titleItalic: string;
  subtitle: string;
}

export default function SectionHeader({
  chapter,
  pages,
  title,
  titleItalic,
  subtitle,
}: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="mb-10 sm:mb-14">
      <motion.p
        className="section-chapter"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
      >
        {chapter} · PAGES {pages}
      </motion.p>

      <motion.h2
        className="section-title mt-2"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {title}{" "}
        <em className="font-serif italic">{titleItalic}</em>
        <span className="dot">.</span>
      </motion.h2>

      <motion.p
        className="section-subtitle mt-3"
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {subtitle}
      </motion.p>
    </div>
  );
}

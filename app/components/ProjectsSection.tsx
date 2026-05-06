"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import SectionHeader from "./SectionHeader";

/* ─── ALL 6 PROJECTS ─── */
const projects = [
  {
    id: "01",
    name: "Convorbit AI",
    caption: "Convorbit AI",
    hasImage: false,
    image: "",
    url: "https://convorbit.vercel.app/",
    pinColor: "#dc2626",
    rotation: -2.5,
  },
  {
    id: "02",
    name: "BugHop AI",
    caption: "BugHop AI",
    hasImage: false,
    image: "",
    url: "https://bughop.vercel.app/",
    pinColor: "#eab308",
    rotation: 1.5,
  },
  {
    id: "03",
    name: "PingNova",
    caption: "PingNova",
    hasImage: false,
    image: "",
    url: "https://pingnova.vercel.app/",
    pinColor: "#2563eb",
    rotation: -1,
  },
  {
    id: "04",
    name: "Hospitrix",
    caption: "Hospitrix",
    hasImage: true,
    image: "/projects/hospitrix.png",
    url: "#",
    pinColor: "#16a34a",
    rotation: 2,
  },
  {
    id: "05",
    name: "Briefly",
    caption: "Briefly",
    hasImage: true,
    image: "/projects/briefly.png",
    url: "#",
    pinColor: "#dc2626",
    rotation: -1.8,
  },
  {
    id: "06",
    name: "QueryForge",
    caption: "QueryForge",
    hasImage: true,
    image: "/projects/queryforge.png",
    url: "#",
    pinColor: "#eab308",
    rotation: 1.2,
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
          chapter="§ 02"
          pages="4–5"
          title="Things I"
          titleItalic="built"
          subtitle="weekend projects, taped to the page · click to explore"
        />

        {/* Polaroid grid — 2 columns on desktop to make them larger, 1 on mobile */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
          {projects.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.url}
              target={project.url !== "#" ? "_blank" : undefined}
              rel="noreferrer"
              className="polaroid group block relative"
              style={{ transform: `rotate(${project.rotation}deg)` }}
              initial={{ opacity: 0, y: 30, rotate: project.rotation }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, rotate: project.rotation }
                  : {}
              }
              transition={{ duration: 0.5, delay: 0.1 * i }}
              whileHover={{
                scale: 1.04,
                rotate: 0,
                boxShadow: "0 12px 32px rgba(0,0,0,0.15)",
                transition: { duration: 0.3 },
              }}
            >
              {/* Pin */}
              <div
                className="polaroid-pin"
                style={{ background: project.pinColor }}
              />

              {/* Label */}
              <span className="polaroid-label">
                #{project.id} · {project.name.toUpperCase()}
              </span>

              {/* Image or placeholder */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-gray-100">
                {project.hasImage ? (
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="polaroid-placeholder w-full h-full">
                    image to be displayed
                  </div>
                )}
              </div>

              {/* Caption */}
              <p className="polaroid-caption">{project.caption}</p>
            </motion.a>
          ))}
        </div>

        {/* GitHub link */}
        <motion.a
          href="https://github.com/anshdeshwal31"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 mt-8 font-caveat text-[19px] hover:text-[var(--accent-red)] transition-colors"
          style={{ color: "var(--text-secondary)" }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <span className="highlight">the full wall</span>
          <span className="font-mono text-[12px]" style={{ color: "var(--text-muted)" }}>
            /projects →
          </span>
        </motion.a>
      </div>
    </section>
  );
}

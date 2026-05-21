"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Work", href: "#work" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileOpen, setMobileOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const sections = navItems.map((item) =>
      document.querySelector(item.href)
    );

    let scrollTimeout: ReturnType<typeof setTimeout> | undefined;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1, rootMargin: "-20% 0px -60% 0px" }
    );

    sections.forEach((section) => {
      if (section) observerRef.current?.observe(section);
    });

    return () => {
      observerRef.current?.disconnect();
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    setActiveSection(href.replace("#", ""));
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Logo — top-left */}
      <motion.a
        href="#cover"
        className="fixed top-4 left-4 z-[1001] flex items-center gap-1.5 rounded-lg px-4 py-2"
        style={{
          background: "#1a1a1a",
          fontFamily: "var(--font-kalam)",
          fontSize: "26px",
          fontWeight: 700,
          color: "white",
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
      >
        Ansh{" "}
        <span style={{ fontSize: "18px" }}>✎</span>
      </motion.a>

      {/* Resume button — top-right */}
      <motion.a
        href="/resume/resume.pdf"
        download
        className="btn-resume fixed top-4 right-4 z-[1001] hidden md:inline-flex items-center gap-1.5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Résumé ↗
      </motion.a>

      {/* Desktop navigation pills */}
      <motion.nav
        className="fixed top-4 left-1/2 z-[1000] hidden md:block"
        style={{ transform: "translateX(-50%)" }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="nav-pill flex items-center gap-1 px-1.5 py-1.5">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className={`nav-item ${
                activeSection === item.href.replace("#", "") ? "active" : ""
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </motion.nav>

      {/* Mobile hamburger */}
      <motion.button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 right-4 z-[1001] md:hidden flex flex-col items-center justify-center gap-[5px] w-10 h-10 rounded-lg"
        style={{ background: "#1a1a1a" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        aria-label="Toggle menu"
      >
        <motion.span
          className="block w-4 h-[2px] bg-white rounded"
          animate={mobileOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="block w-4 h-[2px] bg-white rounded"
          animate={mobileOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.2 }}
        />
      </motion.button>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed top-16 left-4 right-4 z-[999] rounded-2xl shadow-xl border border-black/5 overflow-hidden md:hidden"
            style={{ background: "rgba(255, 255, 255, 0.96)", backdropFilter: "blur(20px)" }}
            initial={{ opacity: 0, y: -10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col p-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleClick(item.href)}
                  className="text-left px-4 py-3 rounded-xl text-[16px] transition-colors hover:bg-black/5"
                  style={{
                    fontFamily: "var(--font-serif)",
                    color:
                      activeSection === item.href.replace("#", "")
                        ? "var(--accent-red)"
                        : "var(--text-secondary)",
                  }}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="/resume/resume.pdf"
                download
                className="btn-resume text-center mt-2 mx-2 mb-1"
              >
                Résumé ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BookCover() {
  return (
    <section
      id="cover"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{ background: "var(--bg-cover)" }}
    >
      {/* Intentional imbalance: Rotated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Hand-drawn scribble SVG in background */}
        <motion.svg
          className="absolute top-[15%] right-[5%] w-64 h-64 text-[#fdfcf0] opacity-20 rotate-12"
          viewBox="0 0 200 200"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <path
            d="M 20 100 Q 50 20 100 100 T 180 100"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M 40 120 Q 80 50 120 120 T 160 120"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </motion.svg>
        
        {/* Another random scribble */}
        <svg className="absolute bottom-[10%] left-[10%] w-32 h-32 text-[#fdfcf0] opacity-20 -rotate-12" viewBox="0 0 100 100">
           <circle cx="50" cy="50" r="40" fill="transparent" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
        </svg>
      </div>

      <div className="relative w-full flex flex-col md:flex-row items-center justify-center px-6 sm:px-12 md:px-20 py-20 z-10 max-w-6xl gap-12">
        
        {/* Left column: Text & Typography */}
        <motion.div
          className="flex-1 w-full relative"
          initial={{ opacity: 0, x: -20, rotate: -1 }}
          animate={{ opacity: 1, x: 0, rotate: -2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* A small hand-written note above the title */}
          <motion.div
            className="absolute -top-10 -left-4 font-caveat text-[34px] sm:text-[42px] text-[#fdfcf0] opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span className="inline-block transform -rotate-12">hello, world! ↗</span>
          </motion.div>

          <h1
            className="font-serif leading-[0.85] text-[#fdfcf0]"
            style={{ fontSize: "clamp(80px, 12vw, 160px)", letterSpacing: "-0.02em" }}
          >
            Ansh <br />
            <em className="text-[#fdfcf0] italic opacity-90">Deshwal</em>
            <span className="text-[#fef08a]">.</span>
          </h1>

          <p
            className="mt-8 font-caveat text-[24px] sm:text-[32px] text-[#fdfcf0] opacity-80 leading-[1.3] max-w-lg"
            style={{ transform: "rotate(1deg)" }}
          >
            A full-stack developer's working notebook. <br/>
            Code, ship, iterate, <span className="highlight text-black">drink chai</span>.
          </p>

          <motion.div
            className="mt-12 flex items-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a href="#projects" className="btn-resume text-[20px] px-6 py-2 shadow-lg bg-[#fdfcf0] text-[#6b1a1a] hover:bg-[#e8e3d8]">
              Explore Projects
            </a>
            <span className="font-kalam text-[24px] sm:text-[28px] text-[#fdfcf0] opacity-70 rotate-3 hover:scale-110 transition-transform">
              or just scroll down ↓
            </span>
          </motion.div>
        </motion.div>

        {/* Right column: Taped Polaroid/Note (Asymmetrical & Imbalanced) */}
        <motion.div
          className="relative w-full max-w-[320px] hidden md:block"
          initial={{ opacity: 0, y: 30, rotate: 6 }}
          animate={{ opacity: 1, y: 0, rotate: 4 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ rotate: 2, scale: 1.02 }}
        >
          {/* Tape */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-[var(--tape-yellow)] z-20 transform -rotate-3 opacity-90 shadow-sm mix-blend-multiply rounded-sm"></div>
          
          <div className="bg-white p-4 pb-12 rounded-sm shadow-[0_12px_24px_rgba(0,0,0,0.12)] border border-[var(--border-light)] relative z-10">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#f4f2e6] border border-dashed border-[#ccc]">
              <Image
                src="/ansh/ansh_image.jpg"
                alt="Ansh Deshwal"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            <p className="absolute bottom-3 left-0 w-full text-center font-kalam text-[18px] text-[var(--text-secondary)] font-bold">
              Status: Available
            </p>
          </div>

          {/* Random sticker */}
          <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-[var(--accent-red)] rounded-full flex items-center justify-center text-white font-serif italic text-[14px] shadow-lg transform rotate-12 border-2 border-dashed border-white">
            100%<br/>Code
          </div>
        </motion.div>

      </div>
    </section>
  );
}

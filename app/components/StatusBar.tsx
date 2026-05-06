"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function StatusBar() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;
      setScrollPercent(pct);
    };

    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          timeZoneName: "short",
        })
      );
    };

    updateScroll();
    updateTime();

    window.addEventListener("scroll", updateScroll, { passive: true });
    const timeInterval = setInterval(updateTime, 30000);

    return () => {
      window.removeEventListener("scroll", updateScroll);
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <motion.div
      className="status-bar fixed bottom-0 left-0 right-0 z-[999] flex items-center justify-between px-4 sm:px-6 py-2.5"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      {/* Left: Location + Time + Available */}
      <div className="flex items-center gap-2 sm:gap-3">
        <span className="blink-dot h-2 w-2 rounded-full bg-red-500 flex-shrink-0" />
        <span className="hidden sm:inline">INDIA</span>
        <span className="text-[10px] text-[var(--text-muted)]">·</span>
        <span>{currentTime}</span>
        <span className="text-[10px] text-[var(--text-muted)]">·</span>
        <span className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
          AVAILABLE
        </span>
      </div>

      {/* Right: Scroll indicator */}
      <div className="flex items-center gap-3">
        <span className="hidden sm:inline text-[11px]">SCROLL</span>
        <div className="scroll-track">
          <div
            className="scroll-handle"
            style={{ left: `${Math.max(7, Math.min(93, scrollPercent))}%` }}
          />
        </div>
        <span className="text-[11px] tabular-nums w-8 text-right">
          {scrollPercent}%
        </span>
      </div>
    </motion.div>
  );
}

"use client";
import { useRef, useState, useEffect } from "react";
import { honors, skills } from "@/lib/content";

const DRIFT_DELAYS = [0, 1.2, 2.4, 0.6, 1.8, 3.0, 0.3, 1.5, 2.7, 0.9, 2.1, 3.3];
const DRIFT_DURATIONS = [7, 9, 6, 8, 10, 7.5, 8.5, 6.5, 9.5, 7, 8, 11];

function SkillPill({ label, i }: { label: string; i: number }) {
  return (
    <span
      className="inline-block px-4 py-2 rounded-full text-sm font-medium text-white/70 select-none"
      style={{
        background: "#111111",
        border: "1px solid rgba(255,255,255,0.08)",
        animation: `drift ${DRIFT_DURATIONS[i % DRIFT_DURATIONS.length]}s ease-in-out infinite`,
        animationDelay: `${DRIFT_DELAYS[i % DRIFT_DELAYS.length]}s`,
      }}
    >
      {label}
    </span>
  );
}

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const allSkills = [
    ...skills.languages,
    ...skills.frameworks,
    ...skills.tools,
  ];

  return (
    <section id="skills" ref={ref} className="py-24 md:py-36 px-6 md:px-12 max-w-6xl mx-auto">
      <div
        className="text-center mb-16 transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)" }}
      >
        <p className="text-[#00A8FF] text-sm tracking-[0.2em] uppercase font-semibold mb-3">
          Recognition & Skills
        </p>
        <h2
          className="font-black text-white"
          style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "clamp(32px, 4vw, 48px)" }}
        >
          Wins & Tools
        </h2>
      </div>

      {/* Honors */}
      <div
        className="grid md:grid-cols-3 gap-6 mb-20 transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transitionDelay: "100ms" }}
      >
        {honors.map((h, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl animate-pulse-glow flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "#111111",
              border: "1px solid rgba(0,168,255,0.3)",
              boxShadow: "0 0 20px rgba(0,168,255,0.08)",
            }}
          >
            <div className="text-3xl">{h.emoji}</div>
            <div
              className="font-bold text-white text-lg"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              {h.title}
            </div>
            <div className="text-white/50 text-sm leading-relaxed">{h.org}</div>
            <div className="text-[#00A8FF]/60 text-xs font-mono">{h.year}</div>
          </div>
        ))}
      </div>

      {/* Floating skill cloud */}
      <div
        className="mb-12 transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transitionDelay: "200ms" }}
      >
        <h3
          className="text-white/40 text-sm tracking-[0.15em] uppercase mb-6 text-center"
        >
          Tech Stack
        </h3>
        <div className="flex flex-wrap gap-3 justify-center">
          {allSkills.map((s, i) => (
            <SkillPill key={s} label={s} i={i} />
          ))}
        </div>
      </div>

      {/* Currently Learning */}
      <div
        className="transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transitionDelay: "300ms" }}
      >
        <h3 className="text-white/40 text-sm tracking-[0.15em] uppercase mb-6 text-center">
          Currently Learning
        </h3>
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.learning.map((s) => (
            <span
              key={s}
              className="px-4 py-2 rounded-full text-sm font-semibold text-[#00A8FF] animate-pulse"
              style={{
                background: "rgba(0,168,255,0.1)",
                border: "1px solid rgba(0,168,255,0.4)",
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { personal, stats } from "@/lib/content";
import { useCountUp } from "@/hooks/useCountUp";

const AboutScene = dynamic(() => import("@/components/AboutScene"), { ssr: false });

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const count = useCountUp(value, 1800, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <div
        className="font-black text-[#00A8FF] leading-none"
        style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "clamp(36px, 5vw, 56px)" }}
      >
        {count}{suffix}
      </div>
      <div className="text-white/50 text-sm mt-1 tracking-wide">{label}</div>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-36 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div
          className="transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)" }}
        >
          <p className="text-[#00A8FF] text-sm tracking-[0.2em] uppercase font-semibold mb-4">
            About
          </p>
          <h2
            className="font-black text-white mb-6 leading-tight"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "clamp(32px, 4vw, 48px)",
            }}
          >
            Building at the{" "}
            <span className="text-[#00A8FF]">intersection</span> of math and product.
          </h2>
          <p className="text-white/60 leading-relaxed text-base md:text-lg mb-10">
            {personal.bio}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </div>

        {/* Right — 3D scene or mobile fallback */}
        <div
          className="relative h-64 md:h-96 rounded-2xl overflow-hidden transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transitionDelay: "150ms",
            background: "radial-gradient(ellipse at center, rgba(0,168,255,0.05) 0%, transparent 70%)",
            border: "1px solid rgba(0,168,255,0.1)",
          }}
        >
          {!isMobile ? (
            <AboutScene />
          ) : (
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(0,168,255,0.15) 0%, rgba(0,168,255,0.03) 60%, transparent 100%)",
              }}
            />
          )}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="text-center"
              style={{ opacity: isMobile ? 1 : 0 }}
            >
              <div
                className="text-6xl font-black text-[#00A8FF]/20"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                VG
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

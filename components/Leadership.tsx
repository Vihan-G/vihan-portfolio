"use client";
import { useRef, useState, useEffect } from "react";
import { leadership } from "@/lib/content";

export default function Leadership() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="leadership" ref={ref} className="py-24 md:py-36 px-6 md:px-12 max-w-6xl mx-auto">
      <div
        className="mb-16 transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)" }}
      >
        <p className="text-[#00A8FF] text-sm tracking-[0.2em] uppercase font-semibold mb-3">
          Leadership
        </p>
        <h2
          className="font-black text-white"
          style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "clamp(32px, 4vw, 48px)" }}
        >
          Leading & Founding
        </h2>
      </div>

      <div className="flex flex-col gap-5">
        {leadership.map((item, i) => (
          <div
            key={i}
            className="flex gap-5 p-6 rounded-2xl transition-all duration-700 hover:border-[#00A8FF]/20 group"
            style={{
              background: "#111111",
              border: "1px solid rgba(255,255,255,0.06)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-30px)",
              transitionDelay: `${i * 120}ms`,
            }}
          >
            {/* Emoji */}
            <div className="text-2xl flex-shrink-0 mt-0.5">{item.emoji}</div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-baseline gap-2 mb-1">
                <span
                  className="font-bold text-white text-base group-hover:text-[#00A8FF] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {item.role}
                </span>
                <span className="text-white/40 text-sm">·</span>
                <span className="text-white/60 text-sm">{item.org}</span>
              </div>
              <div className="text-white/30 text-xs mb-2 font-mono">{item.period}</div>
              <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

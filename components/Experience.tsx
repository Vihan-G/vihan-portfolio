"use client";
import { useRef, useState, useEffect } from "react";
import { experience } from "@/lib/content";

function ExperienceEntry({
  entry,
  index,
}: {
  entry: (typeof experience)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const isLeft = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative flex md:items-center gap-0 md:gap-8 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } flex-col`}
    >
      {/* Card */}
      <div
        className={`w-full md:w-[calc(50%-24px)] transition-all duration-700 ${
          isLeft ? "md:text-right" : "md:text-left"
        }`}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible
            ? "translateX(0)"
            : isLeft
            ? "translateX(-40px)"
            : "translateX(40px)",
          transitionDelay: "100ms",
        }}
      >
        <div
          className="p-6 rounded-2xl hover:border-[#00A8FF]/30 transition-all duration-300"
          style={{
            background: "#111111",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className={`flex flex-wrap gap-2 items-start mb-3 ${isLeft ? "md:justify-end" : "justify-start"}`}>
            <span
              className="text-[#00A8FF] font-bold text-lg"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              {entry.title}
            </span>
          </div>
          <div className={`mb-1 font-semibold text-white ${isLeft ? "md:text-right" : ""}`}>
            {entry.company}
          </div>
          <div className={`text-white/40 text-sm mb-4 flex gap-3 flex-wrap ${isLeft ? "md:justify-end" : ""}`}>
            <span>{entry.period}</span>
            <span>·</span>
            <span>{entry.location}</span>
          </div>
          <ul className={`space-y-2 ${isLeft ? "md:text-right" : ""}`}>
            {entry.points.map((point, i) => (
              <li key={i} className={`text-white/60 text-sm leading-relaxed flex gap-2 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                <span className="text-[#00A8FF] mt-1.5 flex-shrink-0">▸</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Center dot (desktop) */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#00A8FF] border-2 border-[#080808] z-10 shadow-[0_0_12px_rgba(0,168,255,0.6)]" />

      {/* Spacer for other side */}
      <div className="hidden md:block w-[calc(50%-24px)]" />
    </div>
  );
}

export default function Experience() {
  const headingRef = useRef<HTMLDivElement>(null);
  const [headingVisible, setHeadingVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setHeadingVisible(true); },
      { threshold: 0.3 }
    );
    if (headingRef.current) observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-24 md:py-36 px-6 md:px-12 max-w-6xl mx-auto">
      <div
        ref={headingRef}
        className="text-center mb-20 transition-all duration-700"
        style={{ opacity: headingVisible ? 1 : 0, transform: headingVisible ? "translateY(0)" : "translateY(30px)" }}
      >
        <p className="text-[#00A8FF] text-sm tracking-[0.2em] uppercase font-semibold mb-3">
          Experience
        </p>
        <h2
          className="font-black text-white"
          style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "clamp(32px, 4vw, 48px)" }}
        >
          Where I&apos;ve Built Things
        </h2>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 timeline-line opacity-40" />

        <div className="flex flex-col gap-12">
          {experience.map((entry, i) => (
            <ExperienceEntry key={i} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

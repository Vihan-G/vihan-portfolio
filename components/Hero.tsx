"use client";
import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import { personal } from "@/lib/content";
import { useTypewriter } from "@/hooks/useTypewriter";

const HeroScene = dynamic(() => import("@/components/HeroScene"), { ssr: false });

const GLITCH_CHARS = "!@#$%^&*<>?/|\\[]{}0123456789ABCXYZ";

function useGlitchText(finalText: string) {
  const [text, setText] = useState(finalText);
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    setGlitching(true);
    let iter = 0;
    const interval = setInterval(() => {
      setText(
        finalText
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < iter) return finalText[i];
            return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
          })
          .join("")
      );
      iter += 1.2;
      if (iter >= finalText.length) {
        setText(finalText);
        setGlitching(false);
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [finalText]);

  return { text, glitching };
}

export default function Hero() {
  const { text: glitchedName } = useGlitchText(personal.name.toUpperCase());
  const { displayed: typedTagline, done: taglineDone } = useTypewriter(personal.tagline, 45, 1200);
  const [subVisible, setSubVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    if (taglineDone) {
      const t = setTimeout(() => setSubVisible(true), 300);
      return () => clearTimeout(t);
    }
  }, [taglineDone]);

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Three.js background — desktop only */}
      {!isMobile && (
        <div className="absolute inset-0 z-0">
          <HeroScene />
        </div>
      )}

      {/* Mobile gradient bg */}
      {isMobile && (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,168,255,0.08) 0%, #080808 70%)",
          }}
        />
      )}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(8,8,8,0) 30%, rgba(8,8,8,0.7) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1
          className="font-black text-white leading-none tracking-tight mb-4"
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "clamp(52px, 10vw, 120px)",
            letterSpacing: "-0.02em",
          }}
        >
          {glitchedName}
        </h1>

        <p
          className="text-[#00A8FF] font-medium mb-3 min-h-[1.6em]"
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "clamp(16px, 2.5vw, 26px)",
          }}
        >
          {typedTagline}
          <span className="animate-pulse ml-0.5">|</span>
        </p>

        <p
          className="text-white/50 mb-10 transition-all duration-700"
          style={{
            fontSize: "clamp(13px, 1.5vw, 18px)",
            opacity: subVisible ? 1 : 0,
            transform: subVisible ? "translateY(0)" : "translateY(12px)",
          }}
        >
          {personal.subtagline}
        </p>

        <div
          className="flex flex-wrap gap-4 justify-center transition-all duration-700"
          style={{
            opacity: subVisible ? 1 : 0,
            transform: subVisible ? "translateY(0)" : "translateY(16px)",
          }}
        >
          <button
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="glass px-7 py-3 rounded-full text-sm font-semibold text-white hover:text-[#00A8FF] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(0,168,255,0.25)]"
          >
            View My Work
          </button>
          <a
            href={`mailto:${personal.email}`}
            className="glass px-7 py-3 rounded-full text-sm font-semibold text-[#00A8FF] border-[#00A8FF]/30 hover:border-[#00A8FF]/60 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(0,168,255,0.35)]"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce-chevron">
        <span className="text-white/30 text-xs tracking-widest uppercase">scroll</span>
        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="text-white/30">
          <path d="M1 1L10 10L19 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    </section>
  );
}

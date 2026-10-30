"use client";

import { useEffect, useRef, useState } from "react";
import TrollLoader from "./components/TrollLoader";

const TYPING_PHRASES = [
  "PRANK! WEBNYA BELUM JADI 😜",
  "KENA TROLL KAN LU 😹",
  "LAGI MALES NGODING 😝",
  "PRANK! WEBNYA BELUM JADI 😜",
];

interface CyberStar {
  x: number;
  y: number;
  size: number;
  color: string;
  twinkleSpeed: number;
  twinklePhase: number;
  alpha: number;
}

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Loading & Troll State
  const [isLoading, setIsLoading] = useState(true);

  // Typing effect state
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  // Canvas starfield animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener("resize", handleResize);

    const colors = ["#00f0ff", "#ff007f", "#ffe600", "#7928ca", "#ffffff"];
    let stars: CyberStar[] = [];

    const initStars = () => {
      stars = [];
      const count = Math.floor((width * height) / 8000);
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 2 + 0.8,
          color: colors[Math.floor(Math.random() * colors.length)],
          twinkleSpeed: Math.random() * 0.05 + 0.015,
          twinklePhase: Math.random() * Math.PI * 2,
          alpha: Math.random(),
        });
      }
    };

    initStars();

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render blinking / twinkling cyber particles
      for (const star of stars) {
        star.twinklePhase += star.twinkleSpeed;
        const currentAlpha = 0.2 + (Math.sin(star.twinklePhase) + 1) * 0.4;

        ctx.save();
        ctx.fillStyle = star.color;
        ctx.globalAlpha = Math.min(1, Math.max(0.05, currentAlpha));

        // Add soft neon bloom for larger stars
        if (star.size > 1.8) {
          ctx.shadowColor = star.color;
          ctx.shadowBlur = 8;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Text typing effect loop focused on coming soon clarity
  useEffect(() => {
    const currentPhrase = TYPING_PHRASES[phraseIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));

        if (displayText.length + 1 === currentPhrase.length) {
          // Pause longer on completed word so people easily read it
          setTypingSpeed(2400);
          setIsDeleting(true);
        } else {
          setTypingSpeed(90 + Math.random() * 40);
        }
      } else {
        // Deleting backwards
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));

        if (displayText.length === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % TYPING_PHRASES.length);
          setTypingSpeed(400);
        } else {
          setTypingSpeed(45);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex, typingSpeed]);

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#06060c] px-4 select-none">
      {/* Troll Loading Screen */}
      {isLoading && <TrollLoader onFinish={() => setIsLoading(false)} />}

      {/* Background Canvas: Blinking / Twinkling Cyber Stars */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0"
      />

      {/* Cyber Grid Horizon at bottom */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-72 cyber-grid pointer-events-none opacity-40 z-0 mask-gradient"
        style={{
          maskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* CRT Scanline Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 cyber-scanlines pointer-events-none z-10 opacity-35"
      />

      {/* Vignette glow shadows */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(6, 6, 12, 0.85) 100%)",
        }}
      />

      {/* Center Cyberpunk HUD Box */}
      <div className="relative z-20 w-full max-w-xl mx-auto flex flex-col items-center">
        {/* Top HUD bar */}
        <div className="w-full flex items-center justify-between border-b border-[#00f0ff]/30 pb-3 mb-6 text-xs font-mono tracking-widest text-[#00f0ff]/80">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ff007f] animate-ping" />
            <span className="text-[#00f0ff] font-bold">STATUS: 100% KENA PRANK 😹</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsLoading(true)}
              title="Kena Prank Lagi (Troll Loader)"
              type="button"
              className="text-[11px] text-zinc-400 hover:text-[#ffe600] transition-colors cursor-pointer border border-zinc-800 hover:border-[#ffe600] px-2 py-0.5 flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ffe600]"
            >
              <span>😼</span>
              <span className="hidden sm:inline">Kena Prank Lagi</span>
            </button>
            <span className="text-zinc-500">DONJUAN</span>
          </div>
        </div>

        {/* Main Box */}
        <div className="w-full bg-[#0b0b18]/85 backdrop-blur-md border border-[#00f0ff]/40 p-7 sm:p-11 relative neon-border-cyan">
          {/* Decorative cyberpunk corner accents */}
          <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#ff007f]" />
          <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#00f0ff]" />
          <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#ffe600]" />
          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#ff007f]" />

          {/* Tag */}
          <p className="text-xs uppercase tracking-widest text-[#ffe600] font-mono mb-3 flex items-center gap-2">
            <span>[ SYSTEM NOTICE: WEBNYA EMANG BELUM JADI ]</span>
          </p>

          {/* Large Typing Text */}
          <div className="min-h-[72px] sm:min-h-[84px] flex items-center">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-mono break-words neon-glow-cyan">
              {displayText}
              <span className="inline-block w-[3px] sm:w-[5px] h-8 sm:h-12 ml-2 bg-[#00f0ff] align-middle animate-cursor" />
            </h1>
          </div>

          {/* Explicit description */}
          <p className="mt-5 text-sm sm:text-base text-zinc-300 font-mono leading-relaxed">
            Udah disuruh nungguin loading lama-lama... eh ternyata webnya emang belum dibikin wkwkwk 😜 Balik lagi nanti kalau adminnya udah mood ngoding ya!
          </p>

          {/* Share prank button */}
          <div className="mt-7 pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
            <div className="text-xs text-zinc-400 text-center sm:text-left">
              Kena troll? Kirim ke teman lu biar ikutan kesel:
            </div>
            <button
              type="button"
              onClick={() => {
                if (typeof window !== "undefined") {
                  navigator.clipboard?.writeText(window.location.href);
                  alert("Link berhasil disalin! Kirim ke teman lu buat ngetroll 😹");
                }
              }}
              className="w-full sm:w-auto text-center px-4 py-2.5 bg-[#ffe600] hover:bg-[#ff007f] text-black hover:text-white font-black text-xs uppercase tracking-wider transition-all duration-150 border-2 border-black shadow-[3px_3px_0px_#000] cursor-pointer"
            >
              Salin Link Prank 🔗
            </button>
          </div>
        </div>

        {/* Footer Meta / Copyright */}
        <div className="w-full mt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-zinc-500">
          <span className="text-zinc-600">DONJUAN // DEV PREVIEW</span>
          <p className="text-center sm:text-right">
            &copy; 2026 Developed by{" "}
            <a
              href="https://ferryhendriawan.my.id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00f0ff] hover:text-[#ffe600] transition-colors duration-150 underline decoration-[#00f0ff]/40 hover:decoration-[#ffe600] underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff] rounded-xs px-1"
            >
              Ferry Hendriawan
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}

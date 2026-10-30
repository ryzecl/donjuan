"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface TrollLoaderProps {
  onFinish?: () => void;
}

export default function TrollLoader({ onFinish }: TrollLoaderProps) {
  // isPrank: fase ketika loading selesai dan muncul "PRANK WEBNYA BELUM JADI 😜"
  const [isPrank, setIsPrank] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // 1. Roasting dulu selama ~5.2 detik dengan spinner & kucing ketawa
    const prankTimer = setTimeout(() => {
      setIsPrank(true);
    }, 5200);

    // 2. Tampilkan teks prank selama ~2.2 detik, lalu fade-out ke halaman
    const finishTimer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        onFinish?.();
      }, 700);
    }, 7400);

    return () => {
      clearTimeout(prankTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  const handleSkip = () => {
    if (!isPrank) {
      setIsPrank(true);
      setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => onFinish?.(), 500);
      }, 1400);
    } else {
      setIsExiting(true);
      setTimeout(() => onFinish?.(), 400);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Loading Screen"
      onClick={handleSkip}
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#06060c] px-4 cursor-pointer select-none transition-all duration-700 ${
        isExiting
          ? "opacity-0 pointer-events-none scale-102"
          : "opacity-100 scale-100"
      }`}
    >
      {/* Background Subtle Glow & Scanlines */}
      <div
        aria-hidden="true"
        className="absolute inset-0 cyber-scanlines pointer-events-none opacity-20"
      />
      <div
        aria-hidden="true"
        className="absolute w-80 h-80 rounded-full bg-[#00f0ff]/5 blur-3xl pointer-events-none"
      />

      {/* Main Centered Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-sm mx-auto space-y-5 animate-in fade-in duration-500">
        
        {!isPrank ? (
          /* Fase 1: Roasting Spek Kentang + Spinner + Gambar Kucing Ketawa */
          <>
            {/* Sleek Professional Dual-Ring Spinner */}
            <div className="relative w-14 h-14">
              <div className="absolute inset-0 rounded-full border-2 border-zinc-800" />
              <div className="absolute inset-0 rounded-full border-2 border-t-[#00f0ff] border-r-transparent border-b-transparent border-l-transparent animate-spin" />
              <div
                className="absolute inset-1.5 rounded-full border-2 border-b-[#ff007f] border-t-transparent border-r-transparent border-l-transparent animate-spin"
                style={{ animationDirection: "reverse", animationDuration: "1.2s" }}
              />
            </div>

            {/* Gambar Kucing Ketawa / Mengece */}
            <div className="relative group">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#ffe600] shadow-[0_0_20px_rgba(255,230,0,0.3)] bg-black">
                <Image
                  src="/images/kucing-ngece.jpg"
                  alt="Kucing Ketawa - Device Lu Kentang"
                  width={112}
                  height={112}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute -bottom-2 -right-2 bg-[#ff007f] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-sm border border-black font-mono shadow-[2px_2px_0px_#000]">
                😹 100% Kentang
              </span>
            </div>

            {/* Roasting Text (Pure Roast, Zero Portfolio) */}
            <div className="space-y-1.5 font-mono">
              <h2 className="text-base sm:text-lg font-bold text-[#ffe600] tracking-tight">
                Sabar ya ngab... 😹
              </h2>
              <p className="text-xs sm:text-sm text-white font-medium leading-relaxed max-w-xs">
                Kalau loadingnya lama, fix device lu{" "}
                <span className="text-[#ff007f] font-bold underline decoration-[#ffe600] underline-offset-2">
                  kentank
                </span>{" "}
                wkwkwk
              </p>
              <p className="text-[11px] text-zinc-400">
                (Kipas laptop/HP lu udah mulai berisik belum? 🥔)
              </p>
            </div>
          </>
        ) : (
          /* Fase 2 (Abis Loading): PRANK WEBNYA BELUM JADI 😜 */
          <div className="flex flex-col items-center space-y-4 animate-in zoom-in-95 duration-400 font-mono">
            {/* Gambar Kucing dengan Border Pink Neon */}
            <div className="relative">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#ff007f] shadow-[0_0_25px_rgba(255,0,127,0.45)] bg-black">
                <Image
                  src="/images/kucing-ngece.jpg"
                  alt="Kucing Ketawa Melet"
                  width={112}
                  height={112}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute -bottom-2 -right-2 bg-[#ffe600] text-black text-[10px] font-black px-2 py-0.5 rounded-sm border border-black shadow-[2px_2px_0px_#000]">
                😜 KENA TROLL
              </span>
            </div>

            {/* Prank Reveal Headline */}
            <div className="space-y-1.5">
              <h2 className="text-xl sm:text-2xl font-black text-[#ffe600] tracking-tight neon-glow-cyan animate-bounce">
                PRANK! WEBNYA BELUM JADI 😜
              </h2>
              <p className="text-xs sm:text-sm text-zinc-200 font-medium">
                Udah nungguin loading lama-lama... eh ternyata zonk wkwkwk 😝
              </p>
            </div>
          </div>
        )}

        {/* Subtle Skip Hint */}
        <p className="text-[10px] text-zinc-600 font-mono pt-1 tracking-wider hover:text-zinc-400 transition-colors">
          [ Klik di mana saja untuk lanjut ]
        </p>
      </div>
    </div>
  );
}

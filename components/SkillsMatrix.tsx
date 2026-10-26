"use client";

import React, { useState } from "react";
import { skillsData } from "@/lib/data";
import { Terminal, Code2, Server, Database, Sparkles, Check } from "lucide-react";

export function SkillsMatrix() {
  const [copiedTech, setCopiedTech] = useState<string | null>(null);

  const handleCopyTech = (tech: string) => {
    navigator.clipboard.writeText(tech);
    setCopiedTech(tech);
    setTimeout(() => setCopiedTech(null), 1500);
  };

  const groupAccents = [
    { bg: "bg-[#FFE600]", border: "border-black", tag: "LANGUAGES" },
    { bg: "bg-[#00F0FF]", border: "border-black", tag: "FRONTEND" },
    { bg: "bg-[#FF5B5B]", border: "border-black", tag: "BACKEND" },
    { bg: "bg-[#22C55E]", border: "border-black", tag: "DATA_DEV" },
  ];

  return (
    <section id="skills" className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t-[3px] border-black dark:border-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div className="inline-block mb-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider bg-[#00F0FF] text-black px-2.5 py-1 border-2 border-black brutal-shadow-sm">
              TECHNICAL INVENTORY · 03
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-black dark:text-white">
            Stack & Capabilities
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 max-w-xl font-medium">
            Verified technologies applied in production client work, academic systems, and personal development. Click any chip to copy its identifier.
          </p>
        </div>

        <div className="font-mono text-xs font-bold text-neutral-600 dark:text-neutral-400 bg-white dark:bg-[#1f1f1f] border-2 border-black dark:border-white p-2.5 brutal-shadow-sm">
          <span>PARTS COUNT: 19 ACTIVE TECHNOLOGIES</span>
        </div>
      </div>

      {/* Grid of Modular Tech Racks */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillsData.map((group, groupIdx) => {
          const accent = groupAccents[groupIdx % groupAccents.length];

          return (
            <div
              key={group.title}
              className="bg-white dark:bg-[#1a1a1a] border-[3px] border-black dark:border-white brutal-shadow p-5 flex flex-col justify-between"
            >
              <div>
                {/* Group Tag & Title */}
                <div className="flex items-center justify-between border-b-2 border-black dark:border-white pb-3 mb-4">
                  <span className={`font-mono text-[10px] font-black uppercase px-2 py-0.5 border border-black ${accent.bg} text-black`}>
                    {accent.tag}
                  </span>
                  <span className="font-mono text-xs font-bold text-neutral-500">
                    SET_0{group.priority}
                  </span>
                </div>

                <h3 className="text-lg font-black uppercase text-black dark:text-white mb-4">
                  {group.title}
                </h3>

                {/* Badges Matrix */}
                <div className="flex flex-col gap-2">
                  {group.technologies.map((tech) => {
                    const isCopied = copiedTech === tech;

                    return (
                      <button
                        key={tech}
                        type="button"
                        onClick={() => handleCopyTech(tech)}
                        title={`Click to copy "${tech}"`}
                        className={`w-full text-left font-mono text-xs font-bold p-2.5 border-2 border-black dark:border-neutral-700 brutal-shadow-sm flex items-center justify-between transition-all ${
                          isCopied
                            ? "bg-[#22c55e] text-black"
                            : "bg-[#FFFDF5] dark:bg-[#242424] text-black dark:text-white hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-black dark:bg-[#FFE600] inline-block"></span>
                          <span>{tech}</span>
                        </span>

                        {isCopied ? (
                          <Check className="w-3.5 h-3.5 text-black" />
                        ) : (
                          <span className="text-[10px] text-neutral-400">COPY</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Card Footer Stamp */}
              <div className="mt-6 pt-3 border-t-2 border-neutral-200 dark:border-neutral-800 flex justify-between font-mono text-[10px] text-neutral-500">
                <span>VERIFIED SKILL</span>
                <span>PRODUCTION GRADE</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

import React from "react";
import { experienceData, siteData } from "@/lib/data";
import { Briefcase, GraduationCap, ArrowUpRight, CheckSquare } from "lucide-react";

export function ExperienceDossier() {
  const exp = experienceData[0];
  const edu = siteData.education[0];

  return (
    <section id="experience" className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t-[3px] border-black dark:border-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div className="inline-block mb-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider bg-[#FF5B5B] text-black px-2.5 py-1 border-2 border-black brutal-shadow-sm">
              TRACK RECORD · 04
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-black dark:text-white">
            Experience & Education
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 max-w-xl font-medium">
            Bridging rigorous academic grounding in Information Systems with real client deliveries in modern agency workflows.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Professional Practice Card (7 cols) */}
        <div className="lg:col-span-7 bg-white dark:bg-[#1a1a1a] border-[3px] border-black dark:border-white brutal-shadow p-6 sm:p-8">
          <div className="flex items-center justify-between border-b-2 border-black dark:border-white pb-4 mb-6">
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-black dark:text-[#FFE600]" />
              <span className="font-mono text-xs font-black uppercase tracking-wider text-black dark:text-white">
                INDUSTRY POSITION
              </span>
            </div>
            <span className="font-mono text-xs font-bold px-2 py-0.5 bg-[#22c55e] text-black border border-black">
              PRESENT / ACTIVE
            </span>
          </div>

          <div className="mb-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-2xl font-black uppercase text-black dark:text-white">
                {exp.organization}
              </h3>
              <span className="font-mono text-xs font-bold text-neutral-500">
                {exp.type}
              </span>
            </div>
            <p className="font-mono text-sm font-bold text-black dark:text-[#FFE600] mt-0.5">
              {exp.role}
            </p>
          </div>

          <p className="text-sm sm:text-base text-neutral-800 dark:text-neutral-200 leading-relaxed mb-6 font-medium">
            {exp.summary}
          </p>

          <div className="mb-6">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
              Direct Responsibilities:
            </h4>
            <div className="space-y-2">
              {exp.responsibilities.map((resp, i) => (
                <div key={i} className="flex items-start gap-2.5 p-2 bg-[#FFFDF5] dark:bg-[#222] border border-black dark:border-neutral-700">
                  <CheckSquare className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-neutral-900 dark:text-neutral-100 font-medium">
                    {resp}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
              Applied Technologies in Workflow:
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {exp.technologies.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs font-bold px-2.5 py-1 bg-[#FFE600] text-black border border-black"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Academic Grounding & About Focus (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Education Card */}
          <div className="bg-white dark:bg-[#1a1a1a] border-[3px] border-black dark:border-white brutal-shadow p-6">
            <div className="flex items-center justify-between border-b-2 border-black dark:border-white pb-3 mb-4">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-black dark:text-[#00F0FF]" />
                <span className="font-mono text-xs font-black uppercase tracking-wider text-black dark:text-white">
                  ACADEMIC RECORD
                </span>
              </div>
              <span className="font-mono text-xs font-bold text-neutral-500">
                2024 (ACTIVE)
              </span>
            </div>

            <h3 className="text-xl font-black uppercase text-black dark:text-white">
              {edu.institution}
            </h3>
            <p className="font-mono text-sm font-bold text-neutral-700 dark:text-neutral-300 mb-4">
              {edu.program}
            </p>

            <div className="bg-[#FFE600] border-2 border-black p-3.5 mb-4">
              <span className="font-mono text-[10px] font-bold text-black uppercase block mb-0.5">
                CUMULATIVE GRADE POINT AVERAGE
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-3xl font-black text-black">
                  {edu.gpa}
                </span>
                <span className="font-mono text-sm font-bold text-black/80">
                  / 4.00 SCALE
                </span>
              </div>
            </div>

            <p className="font-mono text-xs text-neutral-600 dark:text-neutral-400">
              Active coursework includes Database Management, Systems Analysis, Web Engineering, and Business Process Modeling.
            </p>
          </div>

          {/* Philosophy / About Pill */}
          <div className="bg-[#FFFDF5] dark:bg-[#141414] border-[3px] border-black dark:border-white brutal-shadow p-6">
            <span className="font-mono text-xs font-black uppercase tracking-wider bg-[#00F0FF] text-black px-2 py-0.5 border border-black inline-block mb-3">
              DEVELOPMENT FOCUS
            </span>

            <h4 className="text-lg font-black uppercase text-black dark:text-white mb-2">
              {siteData.about.heading}
            </h4>

            <p className="text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 leading-relaxed mb-4">
              {siteData.about.paragraphs[0]}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {siteData.about.focus.map((f) => (
                <span
                  key={f}
                  className="font-mono text-[11px] font-bold px-2 py-1 bg-white dark:bg-[#252525] text-black dark:text-white border border-black dark:border-neutral-600"
                >
                  #{f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

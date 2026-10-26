"use client";

import React, { useState } from "react";
import { projectsData, ProjectItem } from "@/lib/data";
import { Layers, Terminal, ChevronRight, CheckCircle2, ShieldCheck, Cpu } from "lucide-react";

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ["ALL", "Client Project", "Personal / Academic"];

  const filteredProjects = activeCategory === "ALL"
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t-[3px] border-black dark:border-white">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div className="inline-block mb-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider bg-[#FFE600] text-black px-2.5 py-1 border-2 border-black brutal-shadow-sm">
              ENGINEERING RECORD · 02
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-black dark:text-white">
            Selected Works & Systems
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 max-w-xl font-medium">
            Real software built for real needs, ranging from corporate CMS platforms to transactional booking systems and mobile tools.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const count = cat === "ALL"
              ? projectsData.length
              : projectsData.filter((p) => p.category === cat).length;
            const isActive = activeCategory === cat;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`font-mono text-xs font-bold uppercase px-3.5 py-2 border-2 border-black dark:border-white transition-all ${
                  isActive
                    ? "bg-[#FFE600] text-black brutal-shadow-sm font-black"
                    : "bg-white dark:bg-[#222] text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-[#333]"
                }`}
              >
                {cat === "ALL" ? "All Works" : cat} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Editorial Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {filteredProjects.map((project, idx) => {
          const isBrava = project.slug === "brava";
          const isSport = project.slug === "sm-sport-center";

          return (
            <div
              key={project.slug}
              className={`flex flex-col justify-between bg-white dark:bg-[#1a1a1a] border-[3px] border-black dark:border-white brutal-shadow p-6 relative brutal-card-hover ${
                idx === 0 ? "lg:col-span-2" : "lg:col-span-1"
              }`}
            >
              {/* Card Header Stamp */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4 border-b-2 border-black dark:border-white pb-3">
                  <span className="font-mono text-[11px] font-black uppercase tracking-wider px-2 py-0.5 border border-black bg-[#00F0FF] text-black">
                    {project.category}
                  </span>

                  <span className="font-mono text-[11px] font-bold text-neutral-600 dark:text-neutral-400">
                    STATUS: {project.status.toUpperCase()}
                  </span>
                </div>

                <div className="flex items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-xl sm:text-2xl font-black uppercase text-black dark:text-white">
                    {project.title}
                  </h3>
                </div>

                <p className="font-mono text-xs font-bold text-neutral-600 dark:text-neutral-300 mb-4">
                  ROLE: {project.role.toUpperCase()}
                </p>

                <p className="text-sm text-neutral-800 dark:text-neutral-200 leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Architecture Highlights & Pills */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="mb-6 bg-[#FFFDF5] dark:bg-[#121212] border-2 border-black dark:border-white p-3.5">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block mb-2">
                      Key Highlights:
                    </span>
                    <ul className="space-y-1.5 font-mono text-xs text-neutral-800 dark:text-neutral-200">
                      {project.highlights.slice(0, 4).map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#22c55e] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Technologies Stack + Action */}
              <div className="mt-4 pt-4 border-t-2 border-black dark:border-white flex flex-col gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] font-bold px-2 py-0.5 bg-neutral-100 dark:bg-[#252525] text-black dark:text-white border border-black dark:border-neutral-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2.5 px-4 bg-[#FFE600] text-black font-mono font-black text-xs uppercase tracking-wider border-2 border-black brutal-shadow-sm active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all flex items-center justify-center gap-2"
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Inspect Architecture & Dossier</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Project Deep-Dive Modal (R-26, R-32: Esc closes, Tab accessible) */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#FFFDF5] dark:bg-[#181818] border-[3.5px] border-black dark:border-white brutal-shadow-lg p-6 animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b-2 border-black dark:border-white pb-3 mb-4">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider bg-[#00F0FF] text-black px-2 py-0.5 border border-black inline-block mb-1">
                  {selectedProject.category}
                </span>
                <h3 id="modal-project-title" className="text-2xl font-black uppercase text-black dark:text-white">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close dialog"
                className="p-1.5 bg-white dark:bg-[#222] border-2 border-black dark:border-white brutal-shadow-sm font-mono font-bold text-xs active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
              >
                CLOSE [✕]
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-4 font-mono text-xs">
              <div className="bg-white dark:bg-[#222] border-2 border-black dark:border-white p-3.5">
                <span className="font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block mb-1">
                  Executive Description
                </span>
                <p className="font-sans text-sm text-neutral-900 dark:text-neutral-100 leading-relaxed font-medium">
                  {selectedProject.description}
                </p>
              </div>

              {selectedProject.problem && (
                <div className="bg-white dark:bg-[#222] border-2 border-black dark:border-white p-3.5">
                  <span className="font-bold uppercase tracking-wider text-[#FF5B5B] block mb-1">
                    Problem Context
                  </span>
                  <p className="font-sans text-sm text-neutral-900 dark:text-neutral-100 leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>
              )}

              {selectedProject.solution && (
                <div className="bg-white dark:bg-[#222] border-2 border-black dark:border-white p-3.5">
                  <span className="font-bold uppercase tracking-wider text-[#22c55e] block mb-1">
                    Delivered Solution
                  </span>
                  <p className="font-sans text-sm text-neutral-900 dark:text-neutral-100 leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              )}

              {selectedProject.architecture && selectedProject.architecture.length > 0 && (
                <div className="bg-white dark:bg-[#222] border-2 border-black dark:border-white p-3.5">
                  <span className="font-bold uppercase tracking-wider text-black dark:text-[#FFE600] block mb-2">
                    System Architecture Layers:
                  </span>
                  <div className="flex flex-col gap-1.5">
                    {selectedProject.architecture.map((layer, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-1.5 bg-[#FFFDF5] dark:bg-[#141414] border border-black dark:border-neutral-700">
                        <span className="w-5 h-5 bg-[#FFE600] text-black font-black flex items-center justify-center border border-black">
                          {idx + 1}
                        </span>
                        <span className="font-mono text-xs font-bold text-black dark:text-white">
                          {layer}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-white dark:bg-[#222] border-2 border-black dark:border-white p-3.5">
                <span className="font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block mb-2">
                  Full Tech Stack
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.technologies.map((t) => (
                    <span key={t} className="px-2 py-1 bg-[#FFE600] text-black border border-black font-bold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-6 pt-3 border-t-2 border-black dark:border-white flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 bg-black text-white dark:bg-white dark:text-black font-mono font-bold text-xs uppercase border-2 border-black dark:border-white brutal-shadow-sm active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
              >
                Close Dossier
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteData } from "@/lib/data";
import { MessageSquare, Mail, Check, ArrowDown, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Hero() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteData.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="top" className="w-full pt-8 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Top Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b-2 border-black dark:border-white">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white dark:bg-[#1a1a1a] border-2 border-black dark:border-white font-mono text-xs font-bold uppercase tracking-wider brutal-shadow-sm text-black dark:text-white">
          <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] inline-block animate-pulse"></span>
          <span>{siteData.identity.statusLabel}</span>
        </div>

        <div className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
          LOCATION: {siteData.identity.location.toUpperCase()} · 2026 EDITION
        </div>
      </div>

      {/* Main Grid Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Bold Typography & Actions (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="inline-block">
            <span className="font-mono font-black text-xs sm:text-sm bg-[#00F0FF] text-black px-3 py-1 border-2 border-black uppercase tracking-wider brutal-shadow-sm">
              {siteData.hero.eyebrow}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-black dark:text-white uppercase">
            Shaping the practical into{" "}
            <span className="bg-[#FFE600] text-black px-2 py-0.5 inline-block border-[2.5px] border-black brutal-shadow-sm rotate-[-1deg] mt-1">
              intuitive
            </span>{" "}
            digital presence.
          </h1>

          <p className="text-base sm:text-lg font-medium text-neutral-800 dark:text-neutral-200 leading-relaxed max-w-2xl border-l-4 border-black dark:border-[#FFE600] pl-4 py-1">
            {siteData.hero.description}
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#FFE600] text-black font-mono font-black text-sm uppercase tracking-wider brutal-btn"
            >
              <span>{siteData.hero.primaryCta.label}</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white dark:bg-[#1e1e1e] text-black dark:text-white font-mono font-bold text-sm uppercase tracking-wider brutal-btn"
            >
              <span>{siteData.hero.secondaryCta.label}</span>
            </a>
          </div>

          {/* Social Quick Connect Badges */}
          <div className="pt-4 flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
              Direct Channels:
            </span>

            <a
              href={siteData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 bg-white dark:bg-[#222] text-black dark:text-white border-2 border-black dark:border-white brutal-shadow-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all flex items-center gap-1.5 font-mono text-xs font-bold"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href={siteData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 bg-white dark:bg-[#222] text-black dark:text-white border-2 border-black dark:border-white brutal-shadow-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all flex items-center gap-1.5 font-mono text-xs font-bold"
            >
              <LinkedinIcon className="w-4 h-4 text-[#0077B5]" />
              <span>LinkedIn</span>
            </a>

            <a
              href={siteData.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Chat"
              className="p-2.5 bg-[#25D366] text-black border-2 border-black brutal-shadow-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all flex items-center gap-1.5 font-mono text-xs font-bold"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              aria-label="Copy Email Address"
              className="p-2.5 bg-white dark:bg-[#222] text-black dark:text-white border-2 border-black dark:border-white brutal-shadow-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all flex items-center gap-1.5 font-mono text-xs font-bold"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-[#22c55e]" />
                  <span className="text-[#22c55e]">Email Copied!</span>
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Column: Neo-Brutalist Developer ID Card (5 cols) */}
        <div className="lg:col-span-5">
          <div className="relative bg-white dark:bg-[#1a1a1a] border-[3.5px] border-black dark:border-white brutal-shadow-lg p-5">
            {/* Header Stamp */}
            <div className="flex items-center justify-between border-b-[2.5px] border-black dark:border-white pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-[#FF5B5B] border border-black inline-block"></span>
                <span className="w-3 h-3 bg-[#FFE600] border border-black inline-block"></span>
                <span className="w-3 h-3 bg-[#00F0FF] border border-black inline-block"></span>
                <span className="font-mono text-xs font-black tracking-widest text-black dark:text-white uppercase pl-2">
                  DEV_DOSSIER #01
                </span>
              </div>
              <span className="font-mono text-[11px] font-bold bg-[#FFE600] text-black px-2 py-0.5 border border-black">
                VERIFIED
              </span>
            </div>

            {/* Photo & Identity Core */}
            <div className="flex flex-col sm:flex-row gap-5 items-center mb-5">
              <div className="relative w-40 h-40 shrink-0 bg-[#FFE600] border-[2.5px] border-black brutal-shadow overflow-hidden group">
                <Image
                  src="/images/ferry.png"
                  alt="Ferry Noer Hendriawan photo"
                  width={160}
                  height={160}
                  priority
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-200"
                />
                <div className="absolute bottom-0 inset-x-0 bg-black/80 text-white font-mono text-[10px] text-center py-0.5">
                  FNH.ID
                </div>
              </div>

              <div className="flex flex-col gap-1 text-center sm:text-left">
                <span className="font-mono text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase">
                  Subject Profile
                </span>
                <h2 className="text-xl font-black text-black dark:text-white leading-tight">
                  {siteData.identity.name}
                </h2>
                <p className="font-mono text-xs text-neutral-700 dark:text-neutral-300">
                  {siteData.identity.title}
                </p>
                <div className="mt-2">
                  <span className="inline-block font-mono text-[11px] font-bold px-2 py-0.5 bg-[#00F0FF] text-black border border-black">
                    JDNirwana Co-founder
                  </span>
                </div>
              </div>
            </div>

            {/* Data Sheet Matrix */}
            <div className="font-mono text-xs border-[2px] border-black dark:border-white divide-y-2 divide-black dark:divide-white bg-[#FFFDF5] dark:bg-[#141414]">
              <div className="flex justify-between p-2.5">
                <span className="font-bold text-neutral-600 dark:text-neutral-400">INSTITUTION</span>
                <span className="font-bold text-black dark:text-white text-right">
                  {siteData.education[0]?.institution || "Horizon University Indonesia"}
                </span>
              </div>

              <div className="flex justify-between p-2.5">
                <span className="font-bold text-neutral-600 dark:text-neutral-400">PROGRAM</span>
                <span className="font-bold text-black dark:text-white">
                  {siteData.education[0]?.program || "Information Systems"}
                </span>
              </div>

              <div className="flex justify-between p-2.5">
                <span className="font-bold text-neutral-600 dark:text-neutral-400">ACADEMIC GPA</span>
                <span className="font-bold bg-[#FFE600] text-black px-1.5 py-0.2 border border-black">
                  {siteData.education[0]?.gpa} / 4.00
                </span>
              </div>

              <div className="flex justify-between p-2.5">
                <span className="font-bold text-neutral-600 dark:text-neutral-400">EXPERIENCE</span>
                <span className="font-bold text-black dark:text-white">Client Projects & Web Apps</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

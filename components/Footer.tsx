"use client";

import React from "react";
import { siteData } from "@/lib/data";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-white dark:bg-[#0f0f0f] border-t-[3.5px] border-black dark:border-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b-2 border-black dark:border-white pb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2.5 py-1 bg-[#FFE600] text-black font-mono font-black text-lg border-2 border-black brutal-shadow-sm">
                {siteData.identity.wordmark}
              </span>
              <span className="font-mono text-sm font-black uppercase text-black dark:text-white">
                {siteData.footer.copyrightName}
              </span>
            </div>
            <p className="font-mono text-xs text-neutral-600 dark:text-neutral-400">
              {siteData.identity.title} · Indonesia
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-base font-black text-black dark:text-white uppercase tracking-tight">
              &ldquo;{siteData.footer.closingLine}&rdquo;
            </p>
            <p className="font-mono text-xs text-neutral-500 mt-1">
              BUILT WITH NEXT.JS 16, TAILWIND CSS & BUN
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 font-mono text-xs text-neutral-600 dark:text-neutral-400">
          <div>
            © 2026 {siteData.footer.copyrightName}. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-4">
            <span>TIMEZONE: ASIA/JAKARTA (WIB)</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FFE600] text-black font-mono font-bold text-xs uppercase border-2 border-black brutal-shadow-sm active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

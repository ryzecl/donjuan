"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import { siteData } from "@/lib/data";
import { Sun, Moon, Menu, X, FileDown, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close on Escape key (R-32)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FFFDF5] dark:bg-[#121212] border-b-[3px] border-black dark:border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Wordmark Badge */}
        <Link
          href="#top"
          className="group flex items-center gap-2 p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white"
        >
          <span className="px-3 py-1 bg-[#FFE600] text-black font-mono font-black text-xl border-[2.5px] border-black brutal-shadow-sm group-hover:translate-x-[1px] group-hover:translate-y-[1px] group-hover:shadow-none transition-all">
            {siteData.identity.wordmark}
          </span>
          <span className="hidden sm:inline-block font-black text-sm tracking-tight uppercase text-black dark:text-white">
            {siteData.identity.name}
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
          <a
            href="#projects"
            className="font-bold text-sm uppercase tracking-wider text-black dark:text-white hover:bg-[#FFE600] dark:hover:text-black px-2 py-1 transition-colors border-b-2 border-transparent hover:border-black dark:hover:border-white"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="font-bold text-sm uppercase tracking-wider text-black dark:text-white hover:bg-[#FFE600] dark:hover:text-black px-2 py-1 transition-colors border-b-2 border-transparent hover:border-black dark:hover:border-white"
          >
            Skills & Stack
          </a>
          <a
            href="#experience"
            className="font-bold text-sm uppercase tracking-wider text-black dark:text-white hover:bg-[#FFE600] dark:hover:text-black px-2 py-1 transition-colors border-b-2 border-transparent hover:border-black dark:hover:border-white"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="font-bold text-sm uppercase tracking-wider text-black dark:text-white hover:bg-[#FFE600] dark:hover:text-black px-2 py-1 transition-colors border-b-2 border-transparent hover:border-black dark:hover:border-white"
          >
            Contact
          </a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* CV Download CTA */}
          <a
            href={siteData.contact.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white dark:bg-[#1f1f1f] text-black dark:text-white font-mono font-bold text-xs uppercase border-2 border-black dark:border-white brutal-shadow-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
          >
            <FileDown className="w-4 h-4 text-black dark:text-[#FFE600]" />
            <span>Resume</span>
          </a>

          {/* Theme Switcher Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            className="w-10 h-10 flex items-center justify-center bg-[#FFE600] dark:bg-[#2a2a2a] border-2 border-black dark:border-white brutal-shadow-sm active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all text-black dark:text-[#FFE600]"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5 fill-black" />
            ) : (
              <Sun className="w-5 h-5 fill-[#FFE600]" />
            )}
          </button>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile menu"
            className="md:hidden w-10 h-10 flex items-center justify-center bg-white dark:bg-[#2a2a2a] border-2 border-black dark:border-white brutal-shadow-sm active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all text-black dark:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 top-[73px] z-40 bg-black/60 backdrop-blur-none md:hidden flex flex-col justify-start"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-full bg-[#FFFDF5] dark:bg-[#181818] border-b-4 border-black dark:border-white p-6 brutal-shadow-lg flex flex-col gap-4 animate-in slide-in-from-top duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 border-b-2 border-black dark:border-white pb-2 flex justify-between">
              <span>Navigation Menu</span>
              <span>ESC to close</span>
            </div>

            <nav className="flex flex-col gap-2">
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 bg-white dark:bg-[#222] border-2 border-black dark:border-white font-bold text-base uppercase brutal-shadow-sm active:translate-x-[1px] active:translate-y-[1px] active:shadow-none text-black dark:text-white flex justify-between items-center"
              >
                <span>Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#skills"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 bg-white dark:bg-[#222] border-2 border-black dark:border-white font-bold text-base uppercase brutal-shadow-sm active:translate-x-[1px] active:translate-y-[1px] active:shadow-none text-black dark:text-white flex justify-between items-center"
              >
                <span>Skills & Stack</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#experience"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 bg-white dark:bg-[#222] border-2 border-black dark:border-white font-bold text-base uppercase brutal-shadow-sm active:translate-x-[1px] active:translate-y-[1px] active:shadow-none text-black dark:text-white flex justify-between items-center"
              >
                <span>Experience</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 bg-[#FFE600] text-black border-2 border-black dark:border-white font-black text-base uppercase brutal-shadow-sm active:translate-x-[1px] active:translate-y-[1px] active:shadow-none flex justify-between items-center"
              >
                <span>Contact Station</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </nav>

            <div className="pt-2">
              <a
                href={siteData.contact.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 p-3 bg-white dark:bg-[#222] text-black dark:text-white font-mono font-bold text-sm uppercase border-2 border-black dark:border-white brutal-shadow-sm"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

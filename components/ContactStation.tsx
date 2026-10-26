"use client";

import React, { useState } from "react";
import { siteData } from "@/lib/data";
import { Mail, MessageSquare, Send, Check, Copy, ExternalLink, ArrowRight } from "lucide-react";

export function ContactStation() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(siteData.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleMailto = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${siteData.contact.email}?subject=${encodeURIComponent(
      subject || `Message from ${name || "Portfolio Visitor"}`
    )}&body=${encodeURIComponent(
      `Name: ${name}\n\nMessage:\n${message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  const handleWhatsApp = () => {
    const text = `Hello Ferry, my name is ${name || "Visitor"}.${
      subject ? ` Regarding: ${subject}.` : ""
    } ${message ? ` Message: ${message}` : ""}`;
    const waUrl = `https://wa.me/6283161218295?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t-[3px] border-black dark:border-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div className="inline-block mb-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider bg-[#FFE600] text-black px-2.5 py-1 border-2 border-black brutal-shadow-sm">
              TRANSMISSION TERMINAL · 05
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-black dark:text-white">
            Initiate Contact
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 max-w-xl font-medium">
            Open for internship inquiries, contract collaborations, or technical questions. Pick your channel or dispatch a direct draft.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Interactive Quick Channels (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Email Quick Action Card */}
          <div className="bg-white dark:bg-[#1a1a1a] border-[3px] border-black dark:border-white brutal-shadow p-5">
            <div className="flex items-center justify-between border-b-2 border-black dark:border-white pb-2 mb-3">
              <span className="font-mono text-xs font-black uppercase text-neutral-600 dark:text-neutral-400">
                DIRECT INBOX
              </span>
              <span className="font-mono text-[11px] font-bold text-[#22c55e]">
                ACTIVE
              </span>
            </div>

            <p className="font-mono text-sm sm:text-base font-bold text-black dark:text-white break-all mb-4">
              {siteData.contact.email}
            </p>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="flex-1 py-2 px-3 bg-[#FFE600] text-black font-mono font-black text-xs uppercase border-2 border-black brutal-shadow-sm active:translate-x-[1px] active:translate-y-[1px] active:shadow-none flex items-center justify-center gap-1.5"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${siteData.contact.email}`}
                className="py-2 px-3 bg-white dark:bg-[#2a2a2a] text-black dark:text-white font-mono font-bold text-xs uppercase border-2 border-black dark:border-white brutal-shadow-sm active:translate-x-[1px] active:translate-y-[1px] active:shadow-none flex items-center justify-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Launch Mail</span>
              </a>
            </div>
          </div>

          {/* WhatsApp Direct Card */}
          <div className="bg-[#25D366] text-black border-[3px] border-black brutal-shadow p-5">
            <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-3">
              <span className="font-mono text-xs font-black uppercase text-black">
                INSTANT MESSAGING
              </span>
              <span className="font-mono text-[11px] font-bold text-black bg-white px-1.5 border border-black">
                WHATSAPP
              </span>
            </div>

            <p className="font-mono text-sm font-bold text-black mb-4">
              +62 831-6121-8295 (Direct Business & Chat)
            </p>

            <a
              href={siteData.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 bg-white text-black font-mono font-black text-xs uppercase border-2 border-black brutal-shadow-sm active:translate-x-[1px] active:translate-y-[1px] active:shadow-none flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Professional Profiles */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href={siteData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 bg-white dark:bg-[#1a1a1a] text-black dark:text-white border-2 border-black dark:border-white brutal-shadow-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all flex flex-col justify-between"
            >
              <span className="font-mono text-[10px] font-bold text-neutral-500 uppercase">
                CODE REPOSITORY
              </span>
              <span className="font-mono text-xs font-black uppercase flex items-center justify-between mt-2">
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </span>
            </a>

            <a
              href={siteData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 bg-white dark:bg-[#1a1a1a] text-black dark:text-white border-2 border-black dark:border-white brutal-shadow-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all flex flex-col justify-between"
            >
              <span className="font-mono text-[10px] font-bold text-neutral-500 uppercase">
                NETWORK PROFILE
              </span>
              <span className="font-mono text-xs font-black uppercase flex items-center justify-between mt-2">
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3" />
              </span>
            </a>
          </div>
        </div>

        {/* Right: Dispatch Desk Form (7 cols) */}
        <div className="lg:col-span-7 bg-white dark:bg-[#1a1a1a] border-[3.5px] border-black dark:border-white brutal-shadow p-6 sm:p-8">
          <div className="flex items-center justify-between border-b-2 border-black dark:border-white pb-3 mb-6">
            <span className="font-mono text-xs font-black uppercase text-black dark:text-white">
              DISPATCH DESK (COMPOSE MESSAGE)
            </span>
            <span className="font-mono text-[10px] bg-[#FFE600] text-black px-2 py-0.5 border border-black font-bold">
              TWO CHANNELS
            </span>
          </div>

          <form onSubmit={handleMailto} className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-mono text-xs font-bold uppercase text-black dark:text-white mb-1.5">
                Your Name / Organization
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. John Doe, Tech Recruiter"
                required
                className="w-full p-3 bg-[#FFFDF5] dark:bg-[#121212] border-2 border-black dark:border-white font-mono text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#FFE600]"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block font-mono text-xs font-bold uppercase text-black dark:text-white mb-1.5">
                Inquiry Topic / Subject
              </label>
              <input
                id="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="e.g. Internship Inquiry / Web Development Project"
                required
                className="w-full p-3 bg-[#FFFDF5] dark:bg-[#121212] border-2 border-black dark:border-white font-mono text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#FFE600]"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-mono text-xs font-bold uppercase text-black dark:text-white mb-1.5">
                Message Brief
              </label>
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Detail the scope, timeline, or position requirements..."
                required
                className="w-full p-3 bg-[#FFFDF5] dark:bg-[#121212] border-2 border-black dark:border-white font-mono text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#FFE600]"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 py-3 px-4 bg-[#FFE600] text-black font-mono font-black text-xs uppercase tracking-wider border-2 border-black brutal-shadow-sm active:translate-x-[1px] active:translate-y-[1px] active:shadow-none flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Send via Default Email</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsApp}
                className="flex-1 py-3 px-4 bg-[#00F0FF] text-black font-mono font-black text-xs uppercase tracking-wider border-2 border-black brutal-shadow-sm active:translate-x-[1px] active:translate-y-[1px] active:shadow-none flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send via WhatsApp</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

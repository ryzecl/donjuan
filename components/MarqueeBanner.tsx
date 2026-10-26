import React from "react";

export function MarqueeBanner() {
  const content = (
    <div className="flex items-center gap-6 font-mono font-black text-sm uppercase tracking-wider text-black">
      <span>⚡ FERRY NOER HENDRIAWAN</span>
      <span className="w-2 h-2 bg-black inline-block"></span>
      <span>INFORMATION SYSTEMS & SOFTWARE DEV</span>
      <span className="w-2 h-2 bg-black inline-block"></span>
      <span className="bg-black text-[#FFE600] px-2 py-0.5 font-bold">OPEN TO INTERNSHIP</span>
      <span className="w-2 h-2 bg-black inline-block"></span>
      <span>NEXT.JS · LARAVEL · TYPESCRIPT · FLUTTER · GO</span>
      <span className="w-2 h-2 bg-black inline-block"></span>
      <span>BASED IN INDONESIA</span>
      <span className="w-2 h-2 bg-black inline-block"></span>
    </div>
  );

  return (
    <div className="w-full bg-[#FFE600] border-b-[3px] border-black overflow-hidden py-2 select-none">
      <div className="flex w-max animate-marquee">
        <div className="flex items-center gap-6 pr-6">{content}</div>
        <div className="flex items-center gap-6 pr-6">{content}</div>
        <div className="flex items-center gap-6 pr-6">{content}</div>
        <div className="flex items-center gap-6 pr-6">{content}</div>
      </div>
    </div>
  );
}

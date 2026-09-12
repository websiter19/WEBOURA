import React from 'react';
import { motion } from 'motion/react';
import { SubtleMaroonFlowLine } from './SignatureVisual';
import { STUDIO_CONFIG } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const scrollTo = (target: string) => {
    const el = (target === '#contact' ? document.querySelector('#project-inquiry-form') : null) || document.querySelector(target);
    if (el) {
      const headerOffset = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      if (target === '#contact' || target === '#project-inquiry-form') {
        const input = el.querySelector('input');
        if (input) setTimeout(() => (input as HTMLInputElement).focus(), 400);
      }
    }
  };

  return (
    <section 
      id="top" 
      className="relative pt-32 sm:pt-40 lg:pt-44 pb-16 sm:pb-24 lg:pb-28 overflow-hidden border-b border-[#121110]/10"
    >
      {/* Subtle background flow accent */}
      <div className="absolute top-20 right-0 left-0 -z-10 pointer-events-none opacity-40">
        <SubtleMaroonFlowLine />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Editorial Meta Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 sm:pb-8 border-b border-[#121110]/10 gap-3">
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2.5"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-[#4E121D]" />
            <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#121110]">
              INDEPENDENT DIGITAL STUDIO
            </span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 sm:gap-6 text-xs tracking-[0.12em] uppercase text-[#7E7973]"
          >
            <span>EST. 2025 // GLOBAL</span>
            <span className="hidden md:inline-block w-1 h-1 rounded-full bg-[#121110]/20" />
            <span className="hidden md:inline-block text-[#121110]/80">SELECTED WORKS (03)</span>
          </motion.div>
        </div>

        {/* Hero Core */}
        <div className="pt-10 sm:pt-14 lg:pt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Main Headline (Left, Columns 1-8) */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-extrabold uppercase tracking-tight leading-[0.92] text-[#121110]">
                <span className="block">WE BUILD</span>
                <span className="block text-[#121110]">DIGITAL</span>
                <span className="block text-[#121110]">
                  EXPERIENCES<span className="text-[#4E121D]">.</span>
                </span>
              </h1>
            </motion.div>
          </div>

          {/* Supporting Column & Studio Details (Right, Columns 9-12) */}
          <div className="lg:col-span-4 lg:pt-2 flex flex-col justify-between space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-5"
            >
              {/* Studio indicator */}
              <div className="hidden lg:flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#8B1417]" />
                <span className="text-[11px] uppercase tracking-[0.14em] text-[#7E7973] font-semibold">
                  BESPOKE CODE & DESIGN
                </span>
              </div>

              {/* Exact user requested supporting text */}
              <p className="text-base sm:text-lg text-[#121110]/80 leading-relaxed font-normal">
                WEBOURA designs and develops modern websites for businesses, brands, and ideas that deserve a stronger digital presence.
              </p>

              <div className="pt-2 flex flex-col gap-2.5 text-xs text-[#7E7973]">
                <div className="flex items-center justify-between border-b border-[#121110]/10 pb-2">
                  <span className="uppercase tracking-wider">DISCIPLINE</span>
                  <span className="text-[#121110] font-medium">DESIGN & CODE</span>
                </div>
                <div className="flex items-center justify-between border-b border-[#121110]/10 pb-2">
                  <span className="uppercase tracking-wider">AVAILABILITY</span>
                  <span className="text-[#8B1417] font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B1417]" />
                    ACCEPTING NEW CLIENTS
                  </span>
                </div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2"
            >
              {/* EXPLORE OUR WORK ↘ */}
              <button
                type="button"
                onClick={() => scrollTo('#work')}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#121110] bg-[#EFECE6] hover:bg-[#E4DED3] border border-[#121110]/15 transition-all duration-200 cursor-pointer rounded-[2px]"
              >
                <span>EXPLORE OUR WORK</span>
                <span className="transition-transform duration-200 group-hover:translate-y-0.5 group-hover:translate-x-0.5 text-sm">
                  ↘
                </span>
              </button>

              {/* START A PROJECT ↘ */}
              <button
                type="button"
                onClick={() => scrollTo('#project-inquiry-form')}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#FBF9F5] bg-[#121110] hover:bg-[#8B1417] border border-[#121110] hover:border-[#8B1417] transition-all duration-200 cursor-pointer rounded-[2px] shadow-sm"
              >
                <span>START A PROJECT</span>
                <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5 text-sm text-[#F5C7C7]">
                  ↘
                </span>
              </button>
            </motion.div>
          </div>
        </div>

        {/* Studio Bottom Coordinates Bar */}
        <div className="mt-14 sm:mt-20 pt-6 border-t border-[#121110]/10 flex flex-wrap items-center justify-between text-xs tracking-[0.14em] uppercase text-[#7E7973] gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[#8B1417]">✦</span>
            <span>HIGH-IMPACT DIGITAL ARCHITECTURE</span>
          </div>
          <div className="hidden sm:block">
            SCROLL TO EXPLORE ARCHIVE
          </div>
          <div>
            PORTFOLIO // VOL. 2026
          </div>
        </div>
      </div>
    </section>
  );
};

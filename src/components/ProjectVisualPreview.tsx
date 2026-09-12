import React from 'react';
import { Project } from '../types';

export const ProjectVisualPreview: React.FC<{ project: Project }> = ({ project }) => {
  if (project.id === 'ember-cafe') {
    return (
      <div className="w-full h-full min-h-[360px] sm:min-h-[440px] lg:min-h-[480px] bg-[#221510] text-[#F5ECE1] p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden select-none">
        {/* Warm glow accents */}
        <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full bg-[#D48955]/15 blur-3xl pointer-events-none" />
        <div className="absolute -left-10 -bottom-10 w-80 h-80 rounded-full bg-[#4E121D]/25 blur-3xl pointer-events-none" />
        
        {/* Browser Top Bar */}
        <div className="flex items-center justify-between border-b border-white/15 pb-4 z-10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E57A58]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4B07B]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#87A878]" />
            <span className="ml-3 text-[11px] uppercase tracking-[0.14em] text-[#D4B07B] font-medium">
              EMBER CAFÉ // ROASTERY
            </span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.14em] text-white/60 font-medium hidden sm:inline-block">
            LIVE PREVIEW
          </span>
        </div>

        {/* Main Content Showcase */}
        <div className="my-auto py-6 sm:py-8 z-10 max-w-lg">
          <span className="inline-block px-3 py-1 bg-[#D48955]/20 text-[#E7A574] text-[10px] uppercase tracking-[0.14em] mb-4 border border-[#D48955]/30 font-semibold rounded-[2px]">
            SPECIALTY POUR-OVER & ARTISAN ROASTS
          </span>
          <h4 className="text-2xl sm:text-4xl lg:text-5xl font-editorial italic font-normal tracking-wide text-[#FAF1E6] leading-tight mb-3">
            Slow roasted. Gather softly.
          </h4>
          <p className="text-xs sm:text-sm text-white/75 leading-relaxed max-w-sm mb-6">
            A warm, sensory-driven digital showcase crafted with intimate editorial layouts and artisanal storytelling.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <div className="px-4 py-2 bg-[#FAF1E6] text-[#221510] text-[11px] font-semibold tracking-[0.12em] uppercase rounded-[2px]">
              TASTE PROFILE
            </div>
            <div className="px-4 py-2 border border-white/25 text-white/90 text-[11px] uppercase tracking-[0.12em] rounded-[2px]">
              DAILY HARVEST
            </div>
          </div>
        </div>

        {/* Bottom Metadata Bar */}
        <div className="flex items-center justify-between border-t border-white/10 pt-4 text-[11px] text-white/55 z-10">
          <span>ORIGIN: ETHIOPIA & GUATEMALA</span>
          <span>CURATED RELEASE</span>
        </div>
      </div>
    );
  }

  if (project.id === 'hospital') {
    return (
      <div className="w-full h-full min-h-[360px] sm:min-h-[440px] lg:min-h-[480px] bg-[#F2F6F7] text-[#132A29] p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden select-none">
        {/* Clean clinical tone accent */}
        <div className="absolute right-0 top-0 w-80 h-80 bg-[#1B5E55]/10 blur-3xl pointer-events-none" />
        
        {/* Browser Top Bar */}
        <div className="flex items-center justify-between border-b border-[#132A29]/15 pb-4 z-10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#276F64]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#132A29]/30" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#132A29]/20" />
            <span className="ml-3 text-[11px] uppercase tracking-[0.14em] text-[#1B5E55] font-semibold">
              CARE+ HEALTH PLATFORM
            </span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.14em] text-[#132A29]/60 font-medium hidden sm:inline-block">
            ACCESSIBILITY AAA
          </span>
        </div>

        {/* Main Content Showcase */}
        <div className="my-auto py-6 sm:py-8 z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7">
              <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-[#1B5E55] mb-3 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#276F64]" />
                IMMEDIATE SPECIALIST TRIAGE
              </span>
              <h4 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-[#132A29] leading-tight mb-3">
                HUMAN-CENTERED HEALTHCARE BOOKING.
              </h4>
              <p className="text-xs sm:text-sm text-[#132A29]/75 leading-relaxed max-w-sm mb-5">
                Streamlined clinical triage and frictionless appointment scheduling across 34 hospital departments.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1B5E55] text-[#F2F6F7] text-[11px] font-semibold uppercase tracking-[0.12em] rounded-[2px]">
                FIND SPECIALIST & BOOK
              </div>
            </div>

            {/* Clean Schedule Confirmation Card */}
            <div className="md:col-span-5 bg-white p-4 sm:p-5 shadow-sm border border-[#132A29]/10 space-y-2 rounded-[2px]">
              <div className="text-[10px] uppercase tracking-wider text-[#7E7973] font-medium">NEXT AVAILABLE</div>
              <div className="text-xs sm:text-sm font-bold text-[#132A29]">Dr. Alistair Wright</div>
              <div className="text-[11px] text-[#1B5E55] font-medium">Cardiology • Confirmed Slot Today</div>
              <div className="h-1.5 w-full bg-[#EBF1F0] rounded-full overflow-hidden mt-1">
                <div className="h-full bg-[#1B5E55] w-3/4 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metadata Bar */}
        <div className="flex items-center justify-between border-t border-[#132A29]/10 pt-4 text-[11px] text-[#132A29]/60 z-10">
          <span>SECURE TELEMETRY & ENCRYPTION</span>
          <span>SYSTEM VERIFIED</span>
        </div>
      </div>
    );
  }
 if (project.id === 'vellore-pharma') {
  return (
    <div className="w-full h-full min-h-[360px] overflow-hidden">
      <img
        src="YOUR_IMAGE_LINK_HERE"
        alt="Vellore Pharma"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
  // Gym / Iron Strength Portfolio
  return (
    <div className="w-full h-full min-h-[360px] sm:min-h-[440px] lg:min-h-[480px] bg-[#0E0F10] text-[#E8E8E8] p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden select-none">
      {/* Athletics high-energy accents */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#C41C2B]/15 blur-3xl pointer-events-none" />
      <div className="absolute left-1/4 top-1/4 w-72 h-72 bg-[#E58925]/10 blur-3xl pointer-events-none" />

      {/* Browser Top Bar */}
      <div className="flex items-center justify-between border-b border-white/15 pb-4 z-10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#C41C2B]" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <span className="ml-3 text-[11px] uppercase tracking-[0.14em] text-[#C41C2B] font-bold">
            IRON STRENGTH HUB
          </span>
        </div>
        <span className="text-[10px] uppercase tracking-[0.14em] text-white/60 font-medium hidden sm:inline-block">
          ATHLETIC PERFORMANCE
        </span>
      </div>

      {/* Main Content Showcase */}
      <div className="my-auto py-6 sm:py-8 z-10">
        <span className="inline-block px-3 py-1 bg-[#C41C2B]/20 text-[#FF4655] text-[10px] uppercase tracking-[0.14em] mb-4 border border-[#C41C2B]/30 font-bold rounded-[2px]">
          HIGH-INTENSITY TRAINING // ATHLETIC GYM
        </span>
        <h4 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-none mb-3">
          DISCIPLINE<br />OVER MOTIVATION<span className="text-[#C41C2B]">.</span>
        </h4>
        <p className="text-xs sm:text-sm text-white/75 leading-relaxed max-w-sm mb-6">
          Elite coaching, powerlifting rigs, and metabolic conditioning engineered for relentless physical transformation.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <div className="px-5 py-2.5 bg-[#C41C2B] text-white text-[11px] font-bold uppercase tracking-[0.14em] rounded-[2px]">
            7-DAY PASS
          </div>
          <div className="px-5 py-2.5 border border-white/30 text-white/90 text-[11px] uppercase tracking-[0.14em] rounded-[2px]">
            SCHEDULE
          </div>
        </div>
      </div>

      {/* Bottom Metadata Bar */}
      <div className="flex items-center justify-between border-t border-white/10 pt-4 text-[11px] text-white/55 z-10">
        <span>FACILITY ACCESS: 24/7/365</span>
        <span>PEAK HYPERTROPHY</span>
      </div>
    </div>
  );
};

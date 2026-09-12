import React from 'react';
import { STUDIO_CONFIG, NAV_LINKS } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121110] text-[#FBF9F5] pt-16 sm:pt-24 pb-12 sm:pb-16 border-t border-[#121110]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Footer Tier */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-14 sm:pb-20 border-b border-white/15 items-start">
          
          {/* Studio Brand & Tagline */}
          <div className="md:col-span-6 space-y-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center text-left focus:outline-none group cursor-pointer"
              aria-label="WEBOURA - Scroll to top"
            >
              <span className="text-2xl sm:text-3xl font-black tracking-[0.18em] uppercase text-[#FBF9F5] group-hover:text-[#D98282] transition-colors duration-200 select-none">
                WEBOURA
              </span>
            </button>
            <p className="text-xs sm:text-sm uppercase tracking-[0.14em] text-[#D98282] font-semibold pt-1">
              {STUDIO_CONFIG.tagline}
            </p>
            <p className="text-xs sm:text-sm text-white/60 max-w-sm leading-relaxed pt-1 font-normal">
              Independent digital studio engineering modern websites with uncompromising aesthetic precision and fluid interaction.
            </p>
          </div>

          {/* Navigation Directory */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-[0.14em] text-white/40 block mb-3 font-semibold">
              INDEX
            </span>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="text-xs font-semibold tracking-[0.14em] uppercase text-white/75 hover:text-white inline-block transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Direct Details */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs uppercase tracking-[0.14em] text-white/40 block mb-2 font-semibold">
              CONNECT
            </span>
            
            {/* Clickable Email */}
            <div>
              <a
                href={`mailto:${STUDIO_CONFIG.email}`}
                className="text-sm text-white/90 hover:text-[#D98282] transition-colors block font-medium"
              >
                {STUDIO_CONFIG.email}
              </a>
              <span className="text-xs text-white/40">INQUIRIES & COLLABORATIONS</span>
            </div>

            {/* Instagram Link */}
            <div className="pt-1">
              <a
                href={STUDIO_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WEBOURA Instagram Profile"
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-white/5 hover:bg-white/15 border border-white/15 text-xs text-white/80 hover:text-white transition-all rounded-[2px] group"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:scale-110"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span>{STUDIO_CONFIG.instagramUsername}</span>
                <span className="text-xs text-white/40 group-hover:text-white transition-colors">↗</span>
              </a>
            </div>

            {/* Back to top button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={scrollToTop}
                className="text-xs uppercase tracking-wider text-white/50 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>BACK TO TOP</span>
                <span>↑</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Tier & Copyright */}
        <div className="pt-8 sm:pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-white/40 gap-4">
          <div>
            © {STUDIO_CONFIG.year} {STUDIO_CONFIG.name}. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <span>DESIGN & CODE: {STUDIO_CONFIG.name}</span>
            <span className="text-white/20">|</span>
            <span className="text-[#D98282]">EDITION 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

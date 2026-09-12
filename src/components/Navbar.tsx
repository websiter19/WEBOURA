import React, { useState, useEffect } from 'react';
import { NAV_LINKS, STUDIO_CONFIG } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (href === '#top') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      if (href === '#project-inquiry-form' || href === '#contact') {
        const input = targetElement.querySelector('input');
        if (input) setTimeout(() => (input as HTMLInputElement).focus(), 400);
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 sm:py-3.5 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#121110]/10 shadow-[0_4px_20px_rgba(0,0,0,0.02)]'
            : 'py-4 sm:py-6 bg-[#FBF9F5]/80 backdrop-blur-[2px]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Studio Clean Text Logo */}
          <a
            href="#top"
            onClick={(e) => handleScrollTo(e, '#top')}
            className="group flex items-center focus:outline-none py-1 cursor-pointer"
            aria-label="WEBOURA Home - Scroll to top"
          >
            <span className="text-xl sm:text-2xl font-black tracking-[0.05em] uppercase text-[#121110] group-hover:text-[#8B1417] transition-colors duration-200 select-none">
              WEBOURA
            </span>
          </a>

          {/* Center / Right Editorial Navigation (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="relative py-1 text-xs font-semibold tracking-[0.14em] uppercase text-[#121110]/75 hover:text-[#121110] transition-colors group cursor-pointer"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#8B1417] transition-all duration-200 ease-out group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#project-inquiry-form"
              onClick={(e) => handleScrollTo(e, '#project-inquiry-form')}
              className="group hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#FBF9F5] bg-[#121110] hover:bg-[#8B1417] transition-colors duration-200 border border-[#121110] hover:border-[#8B1417] rounded-[2px] shadow-sm cursor-pointer"
            >
              <span>START A PROJECT</span>
              <span className="text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5">
                ↘
              </span>
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 text-[#121110] focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between items-end">
                <span
                  className={`h-0.5 bg-[#121110] transition-all duration-300 ${
                    mobileMenuOpen ? 'w-6 -rotate-45 translate-y-2' : 'w-6'
                  }`}
                />
                <span
                  className={`h-0.5 bg-[#121110] transition-all duration-200 ${
                    mobileMenuOpen ? 'opacity-0' : 'w-4'
                  }`}
                />
                <span
                  className={`h-0.5 bg-[#121110] transition-all duration-300 ${
                    mobileMenuOpen ? 'w-6 rotate-45 -translate-y-2.5' : 'w-5'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className="fixed inset-0 bg-[#121110]/50 backdrop-blur-sm" 
          onClick={() => setMobileMenuOpen(false)} 
        />
        <div
          className={`fixed top-0 right-0 bottom-0 w-[84%] max-w-sm bg-[#FBF9F5] border-l border-[#121110]/10 p-6 sm:p-8 pt-20 flex flex-col justify-between transition-transform duration-300 ease-out z-10 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="space-y-6">
            <div className="pb-4 border-b border-[#121110]/10">
              <span className="text-xl font-black tracking-[0.18em] uppercase text-[#121110] block mb-1 select-none">
                WEBOURA
              </span>
              <span className="text-[10px] uppercase tracking-[0.16em] text-[#7E7973] block font-medium">
                DIRECTORY // DIGITAL STUDIO
              </span>
            </div>
            <div className="flex flex-col space-y-1">
              {NAV_LINKS.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-xl font-bold tracking-tight text-[#121110] hover:text-[#8B1417] py-3.5 border-b border-[#121110]/10 flex items-center justify-between cursor-pointer"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#7E7973]">0{idx + 1}</span>
                </a>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#project-inquiry-form"
                onClick={(e) => handleScrollTo(e, '#project-inquiry-form')}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#FBF9F5] bg-[#121110] hover:bg-[#8B1417] transition-colors rounded-[2px] cursor-pointer"
              >
                <span>START A PROJECT</span>
                <span className="text-xs">↘</span>
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-[#121110]/10">
            <p className="text-xs text-[#7E7973] mb-1 font-medium uppercase tracking-wider">DIRECT INQUIRIES</p>
            <a
              href={`mailto:${STUDIO_CONFIG.email}`}
              className="text-sm font-semibold text-[#121110] hover:text-[#8B1417] block mb-4 transition-colors"
            >
              {STUDIO_CONFIG.email}
            </a>
            <div className="flex items-center justify-between text-xs text-[#7E7973]">
              <span>© {STUDIO_CONFIG.year} {STUDIO_CONFIG.name}</span>
              <a 
                href={STUDIO_CONFIG.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#121110] font-medium transition-colors"
              >
                {STUDIO_CONFIG.instagramUsername} ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

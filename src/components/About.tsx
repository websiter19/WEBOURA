import React from 'react';
import { motion } from 'motion/react';
import { STUDIO_CONFIG } from '../data/portfolioData';

export const About: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = (href === '#contact' ? document.querySelector('#project-inquiry-form') : null) || document.querySelector(href);
    if (target) {
      const headerOffset = 90;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="about" className="py-20 sm:py-28 lg:py-36 border-b border-[#121110]/10 relative bg-[#F6F3ED]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Top Meta */}
        <div className="flex items-center justify-between pb-6 sm:pb-8 border-b border-[#121110]/10 mb-10 sm:mb-14">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#8B1417]" />
            <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#7E7973]">
              ABOUT THE STUDIO
            </span>
          </div>
          <span className="text-xs tracking-[0.14em] uppercase text-[#7E7973] font-medium hidden sm:block">
            PHILOSOPHY // 001
          </span>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Headline & Studio Spec Card */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#121110] leading-[0.95]">
                NOT JUST<br />
                <span className="text-[#121110]">
                  A WEBSITE<span className="text-[#8B1417]">.</span>
                </span>
              </h2>
            </motion.div>

            {/* Clean Studio Spec Card */}
            <div className="p-6 sm:p-8 bg-[#EFEBE3] border border-[#121110]/15 rounded-[2px] space-y-6">
              <div className="flex items-center justify-between border-b border-[#121110]/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#8B1417]" />
                  <span className="text-xs uppercase tracking-[0.14em] text-[#121110] font-bold">
                    {STUDIO_CONFIG.name} SPECIFICATION
                  </span>
                </div>
                <span className="text-xs uppercase tracking-wider text-[#7E7973]">CRAFT & CODE</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs text-[#7E7973]">
                <div>
                  <span className="block text-xs uppercase tracking-wider text-[#121110] font-bold mb-1">
                    01 // PURPOSEFUL MOTION
                  </span>
                  <p className="leading-relaxed">Every interaction is calibrated for natural fluidity and responsive feedback.</p>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-[#121110] font-bold mb-1">
                    02 // TYPOGRAPHIC FORCE
                  </span>
                  <p className="leading-relaxed">Editorial clarity and spatial harmony that make exploring intuitive.</p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#121110]/10 flex items-center justify-between text-xs text-[#7E7973]">
                <span>INDEPENDENT PRODUCTION</span>
                <span className="text-[#4E121D] font-medium">100% BESPOKE ARCHITECTURE</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Copy & Studio Values */}
          <div className="lg:col-span-6 space-y-8 lg:pt-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-4"
            >
              <p className="text-lg sm:text-xl text-[#121110] leading-relaxed font-normal">
                WEBOURA is an independent creative web studio focused on building digital experiences that look good, work properly, and feel memorable.
              </p>

              <p className="text-base text-[#121110]/75 leading-relaxed font-normal">
                From the first idea to launch and beyond, we combine design and functionality to create websites built around your business.
              </p>
            </motion.div>

            {/* Studio Pillars */}
            <div className="space-y-5 pt-2 border-t border-[#121110]/10">
              <div className="flex items-start gap-3.5">
                <span className="text-xs text-[#8B1417] mt-1 font-bold">01</span>
                <div>
                  <h4 className="text-base font-bold uppercase tracking-tight text-[#121110]">
                    Craft Over Templates
                  </h4>
                  <p className="text-sm text-[#121110]/70 mt-1 leading-relaxed">
                    We start every single project from zero lines of bloat, custom styling each typography pairing and interactive rhythm.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="text-xs text-[#8B1417] mt-1 font-bold">02</span>
                <div>
                  <h4 className="text-base font-bold uppercase tracking-tight text-[#121110]">
                    Form Equals Function
                  </h4>
                  <p className="text-sm text-[#121110]/70 mt-1 leading-relaxed">
                    Aesthetics don’t matter if your website is slow or confusing. We build ultra-responsive platforms with instant load speeds.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="text-xs text-[#8B1417] mt-1 font-bold">03</span>
                <div>
                  <h4 className="text-base font-bold uppercase tracking-tight text-[#121110]">
                    Direct Studio Collaboration
                  </h4>
                  <p className="text-sm text-[#121110]/70 mt-1 leading-relaxed">
                    You work directly with the designers and engineers who shape your platform — no middle managers or diluted vision.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action */}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="group inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#121110] bg-[#EFECE6] hover:bg-[#E4DED3] border border-[#121110]/15 transition-all duration-200 rounded-[2px]"
              >
                <span>LET’S DISCUSS YOUR VISION</span>
                <span className="text-sm transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5 text-xs">
                  ↘
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

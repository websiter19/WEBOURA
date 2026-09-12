import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SERVICES_DATA } from '../data/portfolioData';

export const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

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
    <section id="services" className="py-20 sm:py-28 lg:py-36 border-b border-[#121110]/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 sm:pb-14 border-b border-[#121110]/10 gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
              <span className="w-2 h-2 rounded-full bg-[#8B1417]" />
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#7E7973]">
                WHAT WE DO
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#121110] leading-[0.98]">
              SERVICES &<br />
              <span className="text-[#121110]">
                DISCIPLINES<span className="text-[#8B1417]">.</span>
              </span>
            </h2>
          </div>

          <div className="max-w-xs text-xs sm:text-sm text-[#7E7973] leading-relaxed">
            <p>
              We engineer comprehensive digital presences from strategic inception to continuous post-launch performance.
            </p>
          </div>
        </div>

        {/* Four Numbered Services List */}
        <div className="divide-y divide-[#121110]/15">
          {SERVICES_DATA.map((service, index) => {
            const isHovered = activeService === index;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
                className="group py-10 sm:py-14 transition-all duration-300 relative cursor-pointer"
              >
                {/* Background tint on hover */}
                <div 
                  className={`absolute inset-0 bg-[#EFECE6]/40 -z-10 transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`} 
                />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-start">
                  {/* Number */}
                  <div className="md:col-span-2">
                    <span className="text-2xl sm:text-4xl font-light text-[#7E7973] group-hover:text-[#4E121D] transition-colors duration-300">
                      {service.number}
                    </span>
                  </div>

                  {/* Service Title */}
                  <div className="md:col-span-4">
                    <h3 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#121110] group-hover:text-[#4E121D] transition-all duration-300">
                      {service.title}
                    </h3>
                  </div>

                  {/* Service Description */}
                  <div className="md:col-span-6 flex flex-col justify-between space-y-4">
                    <p className="text-base text-[#121110]/80 leading-relaxed font-normal">
                      {service.description}
                    </p>

                    {/* Deliverables list */}
                    <div className="pt-2">
                      <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#7E7973]">
                        {service.deliverables.map((item) => (
                          <span key={item} className="inline-flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#4E121D]/70" />
                            <span>{item}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtle active line indicator */}
                <div 
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#4E121D] transition-all duration-500 ease-out ${
                    isHovered ? 'w-full' : 'w-0'
                  }`} 
                />
              </motion.div>
            );
          })}
        </div>

        {/* Redesigned Studio Commitment Section */}
        <div className="mt-14 sm:mt-20 p-6 sm:p-10 lg:p-12 bg-[#F6F3ED] border border-[#121110]/15 rounded-[2px] flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B1417]" />
              <span className="text-xs uppercase tracking-[0.14em] font-semibold text-[#8B1417]">
                OUR COMMITMENT
              </span>
            </div>
            <blockquote className="text-lg sm:text-2xl lg:text-3xl font-dmsans font-medium text-[#121110] max-w-2xl leading-snug tracking-[-0.01em]">
              “We reject boilerplate templates. Every digital surface is architected with purpose, clarity, and uncompromising execution.”
            </blockquote>
          </div>

          <div className="pt-2 md:pt-0 shrink-0">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#FBF9F5] bg-[#121110] hover:bg-[#8B1417] border border-[#121110] hover:border-[#8B1417] transition-all duration-200 rounded-[2px] shadow-sm whitespace-nowrap group"
            >
              <span>INQUIRE FOR YOUR PROJECT</span>
              <span className="text-sm transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5 text-[#F5C7C7]">
                ↘
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

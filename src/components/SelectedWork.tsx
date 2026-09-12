import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectVisualPreview } from './ProjectVisualPreview';

export const SelectedWork: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = (href === '#contact' ? document.querySelector('#project-inquiry-form') : null) || document.querySelector(href);
    if (targetElement) {
      const headerOffset = 90;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="work" className="py-20 sm:py-28 lg:py-36 border-b border-[#121110]/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 sm:pb-14 border-b border-[#121110]/10 gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
              <span className="w-2 h-2 rounded-full bg-[#8B1417]" />
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#7E7973]">
                SELECTED WORK
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#121110] leading-[0.98]">
              MADE TO BE<br />
              <span className="text-[#121110]">
                EXPERIENCED<span className="text-[#8B1417]">.</span>
              </span>
            </h2>
          </div>

          <div className="max-w-xs text-xs sm:text-sm text-[#7E7973] leading-relaxed">
            <p>
              A curation of digital environments designed with intentional rhythm, clean typography, and fluid engineering.
            </p>
          </div>
        </div>

        {/* Three Large Editorial Project Presentations */}
        <div className="divide-y divide-[#121110]/10">
          {PROJECTS_DATA.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                data-cursor="view"
                className="py-14 sm:py-20 lg:py-28"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Visual Preview Showcase Area */}
                  <div
                    className={`lg:col-span-7 ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block relative overflow-hidden border border-[#121110]/15 shadow-sm hover:shadow-md hover:border-[#8B1417]/40 transition-all duration-300 rounded-[2px] focus:outline-none"
                      aria-label={`View live project: ${project.title} (opens in new tab)`}
                    >
                      <div className="transform transition-transform duration-500 ease-out group-hover:scale-[1.015]">
                        <ProjectVisualPreview project={project} />
                      </div>
                    </a>
                  </div>

                  {/* Editorial Project Information Column */}
                  <div
                    className={`lg:col-span-5 flex flex-col justify-between space-y-6 ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    {/* Category & Project Number */}
                    <div className="flex items-center justify-between border-b border-[#121110]/10 pb-3">
                      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8B1417]">
                        {project.category}
                      </span>
                      <span className="text-xs uppercase tracking-wider text-[#7E7973] font-medium">
                        VOL. {project.number}
                      </span>
                    </div>

                    {/* Large Project Name */}
                    <div>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-block"
                      >
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-[#121110] group-hover:text-[#8B1417] transition-colors leading-[1.1]">
                          {project.title}
                        </h3>
                      </a>
                      
                      {/* Short Description */}
                      <p className="mt-3 text-base text-[#121110]/80 leading-relaxed font-normal">
                        {project.description}
                      </p>
                    </div>

                    {/* Project Specifications - Clean responsive vertical stacking on mobile */}
                    <div className="space-y-2.5 text-xs text-[#7E7973] border-t border-[#121110]/10 pt-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <span className="uppercase tracking-wider font-medium text-[#7E7973]">YEAR</span>
                        <span className="text-[#121110] font-medium">{project.details.year}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <span className="uppercase tracking-wider font-medium text-[#7E7973]">ROLE</span>
                        <span className="text-[#121110] font-medium">{project.details.role}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <span className="uppercase tracking-wider font-medium text-[#7E7973]">FOCUS</span>
                        <span className="text-[#121110] font-medium">{project.theme.badgeText}</span>
                      </div>
                    </div>

                    {/* Prominent VIEW PROJECT ↗ Button */}
                    <div className="pt-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#FBF9F5] bg-[#121110] hover:bg-[#8B1417] border border-[#121110] hover:border-[#8B1417] transition-all duration-200 rounded-[2px] shadow-sm"
                      >
                        <span>VIEW PROJECT</span>
                        <span className="text-sm transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#F5C7C7]">
                          ↗
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Portfolio Bottom Note */}
        <div className="pt-10 sm:pt-14 border-t border-[#121110]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#7E7973] gap-4">
          <p className="font-normal">
            MORE BESPOKE CASE STUDIES & ARCHIVE RELEASES CURRENTLY IN PRODUCTION.
          </p>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="text-[#121110] hover:text-[#8B1417] font-semibold tracking-[0.14em] uppercase transition-colors cursor-pointer"
          >
            DISCUSS A CUSTOM BUILD ↘
          </a>
        </div>
      </div>
    </section>
  );
};

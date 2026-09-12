import React from 'react';
import { motion } from 'motion/react';
import { PROCESS_DATA } from '../data/portfolioData';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 sm:py-28 lg:py-36 border-b border-[#121110]/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 sm:pb-14 border-b border-[#121110]/10 gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
              <span className="w-2 h-2 rounded-full bg-[#8B1417]" />
              <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#7E7973]">
                OUR PROCESS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#121110] leading-[0.98]">
              FROM IDEA<br />
              <span className="text-[#121110]">
                TO ONLINE<span className="text-[#8B1417]">.</span>
              </span>
            </h2>
          </div>

          <div className="max-w-xs text-xs sm:text-sm text-[#7E7973] leading-relaxed">
            <p>
              A transparent, four-phase trajectory that eliminates ambiguity and delivers calibrated digital artifacts on schedule.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative pt-10 sm:pt-14">
          {/* Continuous vertical timeline line for desktop */}
          <div className="hidden lg:block absolute top-14 bottom-14 left-[24px] w-[1px] bg-[#121110]/15" />

          <div className="space-y-10 sm:space-y-14 lg:space-y-16">
            {PROCESS_DATA.map((step, index) => {
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 items-start">
                    
                    {/* Step Number & Node on timeline */}
                    <div className="lg:col-span-2 flex items-center lg:items-start gap-3.5">
                      <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-[#FBF9F5] border border-[#121110]/20 group-hover:border-[#8B1417] group-hover:bg-[#8B1417] transition-all duration-200 rounded-[2px]">
                        <span className="text-xs font-bold text-[#121110] group-hover:text-[#FBF9F5] transition-colors">
                          {step.number}
                        </span>
                      </div>
                      <span className="lg:hidden text-xs uppercase tracking-wider text-[#7E7973] font-medium">
                        PHASE {step.number}
                      </span>
                    </div>

                    {/* Step Title */}
                    <div className="lg:col-span-4">
                      <span className="text-xs uppercase tracking-[0.14em] text-[#8B1417] font-semibold block mb-1">
                        PHASE {step.number}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#121110] group-hover:text-[#8B1417] transition-colors">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-xs text-[#7E7973]">
                        {step.focus}
                      </p>
                    </div>

                    {/* Step Description */}
                    <div className="lg:col-span-6 lg:border-l lg:border-[#121110]/10 lg:pl-8 py-1">
                      <p className="text-base text-[#121110]/80 leading-relaxed max-w-xl font-normal">
                        {step.description}
                      </p>

                      <div className="mt-3 flex items-center gap-2 text-xs text-[#7E7973]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8B1417]" />
                        <span>DIRECT COMMUNICATIVE SYNC AT EVERY MILESTONE</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Process Bottom Assurance */}
        <div className="mt-14 sm:mt-20 pt-6 border-t border-[#121110]/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7E7973] gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#8B1417]" />
            <span>AVERAGE SPRINT TIMELINE: 2 TO 4 WEEKS PER RELEASE</span>
          </div>
          <div className="uppercase tracking-wider font-medium">
            100% IN-HOUSE STUDIO CRAFT
          </div>
        </div>
      </div>
    </section>
  );
};

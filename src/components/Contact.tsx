import React, { useState } from 'react';
import { motion } from 'motion/react';
import { STUDIO_CONFIG } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [inquiryType, setInquiryType] = useState('New Website');
  const [senderName, setSenderName] = useState('');
  const [budgetRange, setBudgetRange] = useState('₹5,000 – ₹10,000');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(STUDIO_CONFIG.email)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2500);
        })
        .catch(() => fallbackCopy());
    } else {
      fallbackCopy();
    }
  };

  const fallbackCopy = () => {
    const textArea = document.createElement('textarea');
    textArea.value = STUDIO_CONFIG.email;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // ignore
    }
    document.body.removeChild(textArea);
  };

  const scrollToInquiryForm = () => {
    const formEl = document.querySelector('#project-inquiry-form');
    if (formEl) {
      const headerOffset = 90;
      const elementPosition = formEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      const nameInput = formEl.querySelector('input');
      if (nameInput) {
        setTimeout(() => (nameInput as HTMLInputElement).focus(), 350);
      }
    }
  };

  const handleCustomMailto = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry: ${inquiryType} - ${senderName || 'Studio Brief'}`);
    const body = encodeURIComponent(
      `Hello WEBOURA Team,\n\nI would like to discuss a new digital project with your studio.\n\nProject Scope: ${inquiryType}\nBudget Range: ${budgetRange}\nName / Brand: ${senderName || 'Not specified'}\n\nProject Notes:\n${message || 'Looking forward to scheduling an initial consultation.'}\n\nBest regards,\n${senderName || 'Prospective Client'}`
    );
    window.location.href = `mailto:${STUDIO_CONFIG.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-28 lg:py-36 relative bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 sm:pb-8 border-b border-[#121110]/10 mb-10 sm:mb-14">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#8B1417]" />
            <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#7E7973]">
              GET IN TOUCH
            </span>
          </div>
          <span className="text-xs tracking-[0.14em] uppercase text-[#7E7973] font-medium hidden sm:block">
            DIRECT INQUIRIES // 2026
          </span>
        </div>

        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Bold Editorial Call to Action */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#121110] leading-[0.95]">
                LET’S BUILD<br />
                SOMETHING<br />
                <span className="text-[#121110]">
                  BETTER<span className="text-[#8B1417]">.</span>
                </span>
              </h2>
            </motion.div>

            <p className="text-base sm:text-lg text-[#121110]/80 leading-relaxed max-w-xl font-normal">
              Have an idea, business, or project in mind? Let’s create a digital experience for it.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                type="button"
                onClick={scrollToInquiryForm}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 text-xs font-semibold tracking-[0.14em] uppercase text-[#FBF9F5] bg-[#121110] hover:bg-[#8B1417] border border-[#121110] hover:border-[#8B1417] transition-all duration-200 rounded-[2px] shadow-sm cursor-pointer"
              >
                <span>START A PROJECT</span>
                <span className="text-sm transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5 text-[#F5C7C7]">
                  ↘
                </span>
              </button>

              {/* Copy Email Button */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 text-xs font-semibold tracking-wider uppercase border border-[#121110]/20 hover:border-[#8B1417] text-[#121110] hover:text-[#8B1417] bg-[#F3EFEA] hover:bg-[#EBE5DC] transition-all rounded-[2px] cursor-pointer"
              >
                <span className={`w-1.5 h-1.5 rounded-full ${copied ? 'bg-emerald-600' : 'bg-[#8B1417]'}`} />
                <span className="min-w-[140px] text-center font-medium">
                  {copied ? 'EMAIL COPIED ✓' : 'COPY EMAIL ADDRESS'}
                </span>
              </button>
            </div>

            {/* Prominently Displayed Direct Email Address */}
            <div className="pt-6 border-t border-[#121110]/10">
              <span className="text-[11px] uppercase tracking-[0.14em] text-[#7E7973] block mb-1.5 font-medium">
                DIRECT INBOX
              </span>
              <a
                href={`mailto:${STUDIO_CONFIG.email}`}
                className="text-xl sm:text-3xl font-extrabold text-[#121110] hover:text-[#8B1417] transition-colors inline-block tracking-tight"
              >
                {STUDIO_CONFIG.email}
              </a>
              <p className="text-xs text-[#7E7973] mt-1.5">
                Typical reply time within 24 hours Monday – Friday.
              </p>
            </div>

            {/* Instagram Social Connection */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-3">
              <span className="text-xs uppercase tracking-[0.14em] text-[#7E7973] font-medium">
                SOCIAL ARCHIVE:
              </span>
              <a
                href={STUDIO_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit WEBOURA on Instagram (@weboura) in a new tab"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-[#EFEBE3] hover:bg-[#8B1417] hover:text-[#FBF9F5] border border-[#121110]/15 text-xs font-semibold uppercase tracking-wider text-[#121110] transition-all duration-200 rounded-[2px] group w-fit"
              >
                <svg
                  width="16"
                  height="16"
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
                <span className="text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Quick Brief Composer */}
          <div 
            id="project-inquiry-form" 
            className="lg:col-span-5 bg-[#F6F3ED] border border-[#121110]/15 p-6 sm:p-8 rounded-[2px] shadow-sm scroll-mt-28"
          >
            <div className="flex items-center justify-between border-b border-[#121110]/10 pb-3 mb-5">
              <span className="text-xs uppercase tracking-[0.14em] text-[#121110] font-bold">
                PROJECT INQUIRY FORM
              </span>
              <span className="text-xs text-[#8B1417] font-semibold">PRE-FILL MAILTO</span>
            </div>

            <form onSubmit={handleCustomMailto} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#7E7973] mb-1.5 font-medium">
                  YOUR NAME / BRAND
                </label>
                <input
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g. Studio Partner or Founder"
                  className="w-full px-3.5 py-2.5 bg-[#FBF9F5] border border-[#121110]/15 text-sm text-[#121110] placeholder:text-[#7E7973]/50 focus:outline-none focus:border-[#8B1417] rounded-[2px]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#7E7973] mb-1.5 font-medium">
                  PROJECT SCOPE
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['New Website', 'Redesign', 'Web Experience', 'Full Retainer'].map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setInquiryType(type)}
                      className={`px-3 py-2 text-xs uppercase text-left border transition-colors rounded-[2px] cursor-pointer ${
                        inquiryType === type
                          ? 'bg-[#121110] text-[#FBF9F5] border-[#121110] font-semibold'
                          : 'bg-[#FBF9F5] text-[#121110] border-[#121110]/15 hover:border-[#121110]/40'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#7E7973] mb-1.5 font-medium">
                  ESTIMATED BUDGET
                </label>
                <div className="grid grid-cols-1 min-[440px]:grid-cols-3 gap-2">
                  {['₹5,000 – ₹10,000', '₹10,000 – ₹20,000', '₹20,000+'].map((range) => (
                    <button
                      type="button"
                      key={range}
                      onClick={() => setBudgetRange(range)}
                      className={`px-2.5 py-2.5 text-xs text-center border transition-colors rounded-[2px] cursor-pointer whitespace-nowrap font-medium ${
                        budgetRange === range
                          ? 'bg-[#8B1417] text-[#FBF9F5] border-[#8B1417] font-semibold shadow-xs'
                          : 'bg-[#FBF9F5] text-[#121110] border-[#121110]/15 hover:border-[#121110]/40'
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#7E7973] mb-1.5 font-medium">
                  BRIEF MESSAGE / VISION
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share a brief overview of your business, timeline, or questions..."
                  className="w-full px-3.5 py-2.5 bg-[#FBF9F5] border border-[#121110]/15 text-sm text-[#121110] placeholder:text-[#7E7973]/50 focus:outline-none focus:border-[#8B1417] resize-none rounded-[2px]"
                />
              </div>

              <button
                type="submit"
                className="group w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 text-xs font-semibold tracking-[0.14em] uppercase text-[#FBF9F5] bg-[#121110] hover:bg-[#8B1417] transition-colors rounded-[2px] cursor-pointer shadow-sm"
              >
                <span>OPEN EMAIL COMPOSER</span>
                <span className="text-sm transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </button>

              <p className="text-[11px] text-center text-[#7E7973]">
                Direct recipient: <span className="text-[#121110] font-semibold">{STUDIO_CONFIG.email}</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

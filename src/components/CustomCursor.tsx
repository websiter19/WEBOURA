import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'view' | 'link'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      const clickableProject = target?.closest('[data-cursor="view"]');
      const clickableLink = target?.closest('a, button, [role="button"]');

      if (clickableProject) {
        setCursorType('view');
      } else if (clickableLink) {
        setCursorType('link');
      } else {
        setCursorType('default');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer subtle tracker */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center pointer-events-none"
        animate={{
          x: position.x - (cursorType === 'view' ? 44 : 16),
          y: position.y - (cursorType === 'view' ? 44 : 16),
          width: cursorType === 'view' ? 88 : cursorType === 'link' ? 36 : 32,
          height: cursorType === 'view' ? 88 : cursorType === 'link' ? 36 : 32,
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 300,
          mass: 0.5,
        }}
      >
        {cursorType === 'view' ? (
          <div className="w-full h-full rounded-full bg-[#121110] text-[#FBF9F5] shadow-2xl flex flex-col items-center justify-center border border-[#4E121D]/40 backdrop-blur-sm">
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase font-body flex items-center gap-1">
              VIEW <span className="text-[#D98282]">↗</span>
            </span>
          </div>
        ) : cursorType === 'link' ? (
          <div className="w-full h-full rounded-full border border-[#4E121D] bg-[#4E121D]/10 backdrop-blur-[1px] transition-all" />
        ) : (
          <div className="w-2 h-2 rounded-full bg-[#121110]/60 transition-all" />
        )}
      </motion.div>
    </div>
  );
};

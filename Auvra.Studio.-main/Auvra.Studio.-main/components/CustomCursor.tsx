import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 250 };
  const edgeSpringX = useSpring(cursorX, springConfig);
  const edgeSpringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <motion.div
        className="w-4 h-4 bg-white rounded-full mix-blend-difference"
        style={{
          x: edgeSpringX,
          y: edgeSpringY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHovering ? 2.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
      />
      <motion.div
        className="w-10 h-10 border border-white/20 rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHovering ? 1.5 : 1,
          opacity: isVisible ? 0.5 : 0,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      />
    </div>
  );
};
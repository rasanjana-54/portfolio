import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on non-touch desktop devices
    if ('ontouchstart' in window) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
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
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div
        className="fixed pointer-events-none z-50 rounded-full transition-transform duration-100 ease-out hidden md:block"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          width: isHovered ? '48px' : '24px',
          height: isHovered ? '48px' : '24px',
          transform: 'translate(-50%, -50%)',
          background: isHovered
            ? 'rgba(59, 130, 246, 0.15)'
            : 'rgba(139, 92, 246, 0.2)',
          border: '1px solid rgba(59, 130, 246, 0.5)',
          backdropFilter: 'blur(2px)',
        }}
      />
      <div
        className="fixed pointer-events-none z-50 rounded-full bg-blue-500 hidden md:block"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          width: '6px',
          height: '6px',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};

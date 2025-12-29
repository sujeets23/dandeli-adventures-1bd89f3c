import React, { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  animationType?: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale';
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
  id?: string;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  className = '',
  animationType = 'fadeIn',
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
  id,
}) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold,
    triggerOnce,
    delay,
  });

  const animationClasses = {
    fadeIn: 'animate-fade-in',
    slideUp: 'animate-slide-up',
    slideDown: 'animate-slide-down',
    slideLeft: 'animate-slide-left',
    slideRight: 'animate-slide-right',
    scale: 'animate-scale-in',
  };

  return (
    <div
      id={id}
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`${className} ${isVisible ? animationClasses[animationType] : 'opacity-0'}`}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;


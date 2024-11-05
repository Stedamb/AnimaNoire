import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FadeInAnimationProps {
  children: React.ReactNode;
  triggerRef: React.RefObject<HTMLElement>;
  delay?: number;
}

const FadeInAnimation: React.FC<FadeInAnimationProps> = ({ children, triggerRef, delay = 0 }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (triggerRef.current && elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          delay,
        }
      );
    }
  }, [triggerRef, delay]);

  return (
    <div ref={elementRef} className="opacity-0">
      {children}
    </div>
  );
};

export default FadeInAnimation;
import { useEffect } from 'react';
import { gsap } from 'gsap';

interface AnimationOptions {
  repeat?: number;
  yoyo?: boolean;
  repeatDelay?: number;
  duration?: number;
  ease?: string;
  delay?: number;
  stagger?: number;
}

const RevealAnimation = (
  className: string,
  options: AnimationOptions = {}
) => {
  useEffect(() => {
    const elements = document.querySelectorAll(`.${className}`);

    gsap.fromTo(
      elements,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: options.duration ?? 1,
        ease: options.ease ?? 'power3.out',
        repeat: options.repeat ?? 0,
        yoyo: options.yoyo ?? false,
        repeatDelay: options.repeatDelay ?? 0,
        delay: options.delay ?? 0,
        stagger: options.stagger ?? 0.1,
      }
    );

    return () => {
      gsap.killTweensOf(elements);
    };
  // Add specific dependencies here to avoid re-triggering unnecessarily
  }, [className, options.duration, options.ease, options.repeat, options.yoyo, options.repeatDelay, options.delay, options.stagger]);
};

export default RevealAnimation;

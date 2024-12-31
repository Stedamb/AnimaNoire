import { animate, inView } from "motion";

const defaultTiming = {
  duration: 0.7,
  easing: [0.17, 0.67, 0.83, 0.67],
};

const animations = {
  fadeInLeft: {
    animate: {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 }
    },
    timing: defaultTiming,
  },
  fadeInUp: {
    animate: {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 }
    },
    timing: defaultTiming,
  },
  fadeInDown: {
    animate: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 }
    },
    timing: defaultTiming,
  },
  fadeInScale: {
    animate: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 }
    },
    timing: { ...defaultTiming, duration: 0.8 },
  },
  fadeIn: {
    animate: {
      initial: { opacity: 0 },
      animate: { opacity: 1 }
    },
    timing: defaultTiming,
  },
} as const;

type AnimationType = keyof typeof animations;

const animateElement = (element: HTMLElement) => {
  const animationType = element.dataset.animation as AnimationType;
  const delay = Number(element.dataset.delay ?? 0);

  if (!animationType || !animations[animationType]) return;

  const { animate: target } = animations[animationType].animate;
  
  element.style.opacity = '0';
  animate(
    element,
    target,
    { ...animations[animationType].timing, delay }
  );
};

export const setupAnimations = (container: HTMLElement) => {
  const elements = container.querySelectorAll('[data-animation]');
  elements.forEach(el => {
    inView(el as HTMLElement, () => {
      animateElement(el as HTMLElement);
    });
  });
};
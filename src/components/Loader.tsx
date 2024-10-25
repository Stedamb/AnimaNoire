import RevealAnimation from './ui/animations/animations';
import { useState, useEffect } from 'react';

const Loader = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Trigger RevealAnimation on mount
    RevealAnimation('RevealAnimation');
    RevealAnimation('RevealAnimationDelay', { delay: 1 });

    // Set a timer to hide the loader after 2 seconds
    const timer = setTimeout(() => {
      setIsHidden(true);
    }, 2000);

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this only runs once

  return (
    <div className={`Loader fixed w-screen h-screen bg-background z-50 ${isHidden ? 'hidden' : ''}`}>
      <div className="Logo opacity-0 mix-blend-lighten absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-150 z-10">
        <img 
          src="/logo.svg"
          alt="Logo"
          width="640" 
          height="640" 
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Loader;

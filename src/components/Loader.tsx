import React, { useEffect } from 'react';

const Loader = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add('overflow-hidden');

      const timer = setTimeout(() => {
        document.body.classList.remove('overflow-hidden');
      }, 2500);
      
      const timer2 = setTimeout(() => {
        document.querySelector(".Loader")?.classList.add("hidden");
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="Loader">
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

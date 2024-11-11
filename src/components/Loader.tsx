import Cookies from 'js-cookie';
import { useEffect } from 'react';

const Loader = () => {
  useEffect(() => {
    const hasSeenLoader = Cookies.get('hasSeenLoader');

    if (!hasSeenLoader) {
      window.scrollTo(0, 0);
      document.body.classList.add('overflow-hidden');
      Cookies.set('hasSeenLoader', 'true');

      const windowScrolltimer = setTimeout(() => {
          document.body.classList.remove('overflow-hidden');
        }, 2500);
        
        const hideLoaderTimer = setTimeout(() => {
            document.querySelector(".Loader")?.classList.add("hidden");
      }, 3000);

      return () => {
        clearTimeout(windowScrolltimer);
        clearTimeout(hideLoaderTimer);
      };
    }
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

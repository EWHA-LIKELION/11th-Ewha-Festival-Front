import { useEffect } from 'react';

function useScroll(sessionStorageKey, isScroll) {
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      sessionStorage.setItem(sessionStorageKey, currentScrollY);
    };

    const scrollPosition = sessionStorage.getItem(sessionStorageKey);
    if (isScroll) {
      window.addEventListener('scroll', handleScroll);
      setTimeout(() => window.scrollTo(0, scrollPosition));
      document.querySelector('body').scrollTo(0, scrollPosition);
    }
  }, []);
}

export default useScroll;

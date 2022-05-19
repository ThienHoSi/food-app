import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 300,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
};

export default useScrollTop;

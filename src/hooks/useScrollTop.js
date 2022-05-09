import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  return null;
};

export default useScrollTop;

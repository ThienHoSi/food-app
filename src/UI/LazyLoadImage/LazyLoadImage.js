import { useRef, useEffect } from 'react';

import styles from './LazyLoadImage.module.scss';

const LazyLoadImage = ({ url, alt }) => {
  const imgRef = useRef();
  useEffect(() => {
    const img = imgRef.current;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        img.setAttribute('src', url);
        img.classList.add(styles.active);
      }
    });
    if (img) observer.observe(img);

    return () => {
      if (img) observer.unobserve(img);
    };
  }, []);
  return <img alt={alt} ref={imgRef} className={styles.lazyLoad} />;
};

export default LazyLoadImage;

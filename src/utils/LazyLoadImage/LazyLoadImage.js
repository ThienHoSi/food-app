import React, { useRef, useEffect } from 'react';

import styles from './LazyLoadImage.module.scss';

const LazyLoadImage = ({ src, alt }) => {
  const imgRef = useRef();
  useEffect(() => {
    const img = imgRef.current;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        img.setAttribute('src', src);
        img.classList.add(styles.active);
      }
    });
    if (img) observer.observe(img);

    return () => {
      if (img) observer.unobserve(img);
    };
  }, [src]);
  return <img alt={alt} ref={imgRef} className={styles.lazyLoad} />;
};

export default LazyLoadImage;

import React, { useRef, useEffect } from 'react';

import styles from './LazyLoadImage.module.scss';

const LazyLoadImage = ({ src, alt }) => {
  const imgRef = useRef();
  const spanRef = useRef();
  useEffect(() => {
    const img = imgRef.current;
    const span = spanRef.current;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        img.setAttribute('src', src);
        span.classList.add(styles.active);
      }
    });
    if (img) observer.observe(img);

    return () => {
      if (img) observer.unobserve(img);
    };
  }, [src]);
  return (
    <span ref={spanRef} className={styles.container}>
      <img alt={alt} ref={imgRef} className={styles.lazyLoad} />
    </span>
  );
};

export default LazyLoadImage;

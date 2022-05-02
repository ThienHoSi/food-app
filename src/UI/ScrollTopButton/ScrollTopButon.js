import React, { useState} from 'react';

import styles from './ScrollTopButon.module.scss';
import { IoIosArrowUp } from 'react-icons/io';

const ScrollTopButon = () => {
  const [isShow, setIsShow] = useState(false);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

    window.addEventListener('scroll', () => {
        setIsShow(window.scrollY > 800)
    });

  return (
    <button
      onClick={handleScrollTop}
      className={`${styles.scrollTopBtn} ${isShow ? styles.show : ''}`}
    >
      <IoIosArrowUp />
    </button>
  );
};

export default ScrollTopButon;

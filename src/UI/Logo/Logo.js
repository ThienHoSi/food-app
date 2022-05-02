import React from 'react';

import styles from './Logo.module.scss';
import logoSVG from './../../assets/img/svg/logo.svg';

const Logo = ({ lgSize }) => {
  return (
    <a href="/" className={styles.logo}>
      <img
        src={logoSVG}
        alt="logo"
        className={`${styles.logo__img} ${lgSize ? styles.lgSize : ''}`}
      />
    </a>
  );
};

export default Logo;

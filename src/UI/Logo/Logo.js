import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Logo.module.scss';
import logoSVG from './../../assets/img/svg/logo.svg';

const Logo = ({ lgSize }) => {
  return (
    <Link to="/" className={styles.logo}>
      <img
        src={logoSVG}
        alt="logo"
        className={`${styles.logo__img} ${lgSize ? styles.lgSize : ''}`}
      />
    </Link>
  );
};

export default Logo;

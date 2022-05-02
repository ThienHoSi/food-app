import React from 'react';

import styles from './Button.module.scss';

const Button = ({ primary, stSize, children }) => {
  return (
    <button className={`${styles.button} ${primary ? styles.primary : ''} ${stSize ? styles.stSize : ''}`}>
      {children}
    </button>
  );
};

export default Button;

import React from 'react';

import styles from './Button.module.scss';

const Button = ({ primary, stSize, mdSize, children }) => {
  return (
    <button
      className={`${styles.button} ${primary ? styles.primary : ''} ${
        stSize ? styles.stSize : ''
      } ${mdSize ? styles.mdSize : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;

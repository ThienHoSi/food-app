import React from 'react';
import {useNavigate} from 'react-router-dom'

import styles from './Button.module.scss';

const Button = ({ primary, stSize, mdSize, page, children }) => {
  const navigate = useNavigate();

  const handleToShop = () => {
    if (page === 'shop') {
        navigate('/shop/best-foods');
      }
  };

  return (
    <button
      onClick={handleToShop}
      className={`${styles.button} ${primary ? styles.primary : ''} ${
        stSize ? styles.stSize : ''
      } ${mdSize ? styles.mdSize : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;

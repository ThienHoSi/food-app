import React from 'react';

import styles from './ShopBanner.module.scss';
import shopBanner from './../../assets/img/shop-banner.jpg';

const ShopBanner = () => {
  return (
    <div className={styles.container}>
      <div
        className={styles.banner}
        style={{ backgroundImage: `url(${shopBanner})` }}
      />
    </div>
  );
};

export default ShopBanner;

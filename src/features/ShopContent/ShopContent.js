import React from 'react';

import styles from './ShopContent.module.scss';
import Filter from './Filter/Filter';
import ShopProducts from './ShopProducts/ShopProducts';

const ShopContent = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <Filter />
        <ShopProducts />
      </div>
    </section>
  );
};

export default ShopContent;

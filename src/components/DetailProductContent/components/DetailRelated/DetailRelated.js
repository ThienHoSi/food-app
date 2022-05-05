import React from 'react';

import styles from './DetailRelated.module.scss';
import Products from '../../../ShopContent/ShopProducts/Products/Products';

const DetailRelated = () => {
  return (
    <section className={styles.container}>
      <div className={styles.relatedProducts}>
        <h2 className={styles.relatedProducts__title}>Related Products</h2>
        <Products />
      </div>
    </section>
  );
};

export default DetailRelated;

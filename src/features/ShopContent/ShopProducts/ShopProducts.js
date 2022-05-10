import React from 'react';

import styles from './ShopProducts.module.scss';

import Handle from './Handle/Handle';
import Products from './Products/Products';
import Pagination from './Pagination/Pagination';

const ShopProducts = () => {
  return (
    <section className={styles.container}>
      <Handle />
      <Products />
      <Pagination />
    </section>
  );
};

export default ShopProducts;

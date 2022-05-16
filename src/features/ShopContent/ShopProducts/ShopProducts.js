import React from 'react';

import styles from './ShopProducts.module.scss';

import Handle from './Handle/Handle';
import Products from './Products/Products';
import Pagination from './Pagination/Pagination';
import { useSelector } from 'react-redux';
import { productListSelector } from '../../../app/selectors';

const ShopProducts = () => {
  const products = useSelector(productListSelector);
  return (
    <section className={styles.container}>
      <Handle />
      <Products />
      {products.length > 0 && <Pagination />}
    </section>
  );
};

export default ShopProducts;

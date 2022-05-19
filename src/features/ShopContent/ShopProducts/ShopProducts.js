import React from 'react';

import styles from './ShopProducts.module.scss';

import Handle from './Handle/Handle';
import Product from './Product/Product';
import Pagination from './Pagination/Pagination';
import { useSelector } from 'react-redux';
import {
  loadingStatusSelector,
  productListSelector,
} from '../../../app/selectors';
import EmptyShop from './EmptyShop/EmptyShop';

const ShopProducts = () => {
  const productList = useSelector(productListSelector);
  const status = useSelector(loadingStatusSelector);

  return (
    <section className={styles.container}>
      <Handle />
      {status === 'pending' && (
        <div className={styles.loading}>
          <span />
        </div>
      )}
      {status === 'fulfilled' && (
        <div className={styles.shopProducts}>
          {productList && productList.length <= 0 && <EmptyShop />}
          {productList &&
            productList.map((item, idx) => <Product key={idx} {...item} />)}
        </div>
      )}
      {productList.length > 0 && <Pagination />}
    </section>
  );
};

export default ShopProducts;

import React, { useEffect } from 'react';

import styles from './ShopContent.module.scss';
import Filter from './Filter/Filter';
import ShopProducts from './ShopProducts/ShopProducts';
import { useParams } from 'react-router-dom';

import { fetchPagination, fetchProducts } from './thunk';
import { useDispatch, useSelector } from 'react-redux';
import { pageAndLimitSelector } from '../../app/selectors';

const ShopContent = () => {
  const dispatch = useDispatch();
  // const nameActive = useSelector(nameActiveSelector);
  const params = useSelector(pageAndLimitSelector);
  const { name } = useParams();

  useEffect(() => {
    dispatch(fetchProducts({ name: name, params }));
    dispatch(fetchPagination(name));
  }, [params, name, dispatch]);

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

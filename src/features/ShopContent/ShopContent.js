import React, { useEffect } from 'react';

import styles from './ShopContent.module.scss';
import Filter from './Filter/Filter';
import ShopProducts from './ShopProducts/ShopProducts';

import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchPagination, fetchProducts } from './thunk';
import {
  setPrevName,
  setNameActive,
  setSelectedRadio,
  setPrevSeletedDrop,
} from './Filter/FilterSlice';

const ShopContent = () => {
  const dispatch = useDispatch();
  const { name } = useParams();

  useEffect(() => {
    dispatch(fetchProducts({ name: name }));
    dispatch(fetchPagination());
    dispatch(setPrevName(null));
    dispatch(setNameActive(name));
    dispatch(setSelectedRadio(null));
    dispatch(setPrevSeletedDrop('Featured'));
  }, [name, dispatch]);

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

import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { foodListSelector } from '../../app/selectors';
import { fetchProductDetail } from '../ShopContent/ShopContentSlice';
import styles from './DetailProductContent.module.scss';
import DetailImage from './components/DetailImage/DetailImage';
import DetailInfo from './components/DetailInfo/DetailInfo';
import DetailTab from './components/DetailTab/DetailTab';
import DetailRelated from './components/DetailRelated/DetailRelated';

const DetailProductContent = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(foodListSelector);
  useEffect(() => {
    if (productId && productId !== '') {
      dispatch(fetchProductDetail(productId));
    }
  }, [productId, dispatch]);
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.product}>
          <DetailImage product={product} />
          <DetailInfo product={product} />
        </div>
        <DetailTab />
        <DetailRelated />
      </div>
    </section>
  );
};

export default DetailProductContent;

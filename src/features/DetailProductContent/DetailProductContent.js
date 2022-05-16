import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { detailProductSelector, nameActiveSelector } from '../../app/selectors';
import { fetchProductDetail } from '../ShopContent/thunk';
import styles from './DetailProductContent.module.scss';

import DetailImage from './components/DetailImage/DetailImage';
import DetailInfo from './components/DetailInfo/DetailInfo';
import DetailTab from './components/DetailTab/DetailTab';
import DetailRelated from './components/DetailRelated/DetailRelated';

const DetailProductContent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detailProduct = useSelector(detailProductSelector);
  const nameActive = useSelector(nameActiveSelector);

  useEffect(() => {
    const params = { id: id };
    dispatch(fetchProductDetail({ name: nameActive, params }));
  }, [id, dispatch, nameActive]);
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.product}>
          <DetailImage product={detailProduct} id={id} />
          <DetailInfo product={detailProduct} id={id} />
        </div>
        <DetailTab />
        <DetailRelated />
      </div>
    </section>
  );
};

export default DetailProductContent;

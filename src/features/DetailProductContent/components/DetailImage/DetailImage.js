import React from 'react';

import styles from './DetailImage.module.scss';
import ContentLoader from 'react-content-loader';
import { useSelector } from 'react-redux';
import { detailProductStatusSelector } from '../../../../app/selectors';

const DetailImage = (props) => {
  const { product } = props;
  const status = useSelector(detailProductStatusSelector);

  const contentLoader = () => (
    <ContentLoader viewBox="0 0 100 100">
      <rect x="0" y="0" width="100%" height="100%" />
    </ContentLoader>
  );

  return (
    <div className={styles.container}>
      {status === 'pending' && contentLoader()}
      {status === 'fulfilled' && (
        <div className={styles.main}>
          <img src={product.img} alt="Food" className={styles.main__img} />
        </div>
      )}
    </div>
  );
};

export default DetailImage;

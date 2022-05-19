import React from 'react';

import styles from './DetailImage.module.scss';

const DetailImage = (props) => {
  const { product } = props;
  const { img } = product ? product : '';

  return (
    <div className={styles.container}>
      {img && (
        <div className={styles.main}>
          <img src={product.img} alt="Food" className={styles.main__img} />
        </div>
      )}
    </div>
  );
};

export default DetailImage;

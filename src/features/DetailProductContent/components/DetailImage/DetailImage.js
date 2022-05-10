import React from 'react';

import styles from './DetailImage.module.scss';
import momofuku from './../../../../assets/img/Momofuku.avif';

const DetailImage = ({ product }) => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <img
          src={product.img}
          alt={product.name}
          className={styles.main__img}
        />
      </div>
    </div>
  );
};

export default DetailImage;

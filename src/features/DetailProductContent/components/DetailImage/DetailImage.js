import React from 'react';

import styles from './DetailImage.module.scss';
import momofuku from './../../../../assets/img/Momofuku.avif';

const DetailImage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <img src={momofuku} alt="Momofuku" className={styles.main__img} />
      </div>
    </div>
  );
};

export default DetailImage;

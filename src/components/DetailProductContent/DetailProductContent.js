import React from 'react';

import styles from './DetailProductContent.module.scss';
import DetailImage from './components/DetailImage/DetailImage';
import DetailInfo from './components/DetailInfo/DetailInfo';
import DetailTab from './components/DetailTab/DetailTab';
import DetailRelated from './components/DetailRelated/DetailRelated';

const DetailProductContent = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.product}>
          <DetailImage />
          <DetailInfo />
        </div>
        <DetailTab />
        <DetailRelated />
      </div>
    </section>
  );
};

export default DetailProductContent;

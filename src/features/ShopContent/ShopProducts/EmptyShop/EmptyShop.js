import React from 'react';

import styles from './EmptyShop.module.scss';
import emptyShopSVG from '../../../../assets/img/svg/empty-shop.svg';

const EmptyShop = () => {
  return (
    <div className={styles.empty}>
      <img src={emptyShopSVG} alt="Empty Shop" className={styles.empty__img} />
      <h3 className={styles.empty__title}>
        There is no product you are looking for
      </h3>
    </div>
  );
};

export default EmptyShop;

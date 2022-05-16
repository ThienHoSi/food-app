import React from 'react';

import styles from './DetailImage.module.scss';

const DetailImage = ({ product, id }) => {
  return (
    <div className={styles.container}>
      {product.map((item, idx) => (
        <div key={idx} className={styles.main}>
          {item.id === id && (
            <img src={item.img} alt={item.name} className={styles.main__img} />
          )}
        </div>
      ))}
    </div>
  );
};

export default DetailImage;

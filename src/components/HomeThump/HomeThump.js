import React from 'react';

import styles from './HomeThump.module.scss';
import sandwichIMG from './../../assets/img/sandwich.jpg';

const HomeThump = () => {
  return (
    <section className={styles.container}>
      <div
        className={styles.homeThump}
        style={{ backgroundImage: `url(${sandwichIMG})` }}
      >
        <a href="/" className={styles.homeThump__content}>
          <span>
            Sandwich <strong>$45</strong>
          </span>
        </a>
      </div>
    </section>
  );
};

export default HomeThump;

import React from 'react';

import styles from './Pagination.module.scss';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const Pagination = ({ emptyShop }) => {
  return (
    <section className={`${styles.container} ${emptyShop ? styles.empty : ''}`}>
      <ul className={styles.pagination}>
        <li className={styles.pagination__item}>
          <a href="/" className={styles.pagination__item__link}>
            <MdKeyboardArrowLeft />
          </a>
        </li>
        <li className={`${styles.pagination__item} ${styles.selected}`}>
          <a href="/" className={styles.pagination__item__link}>
            1
          </a>
        </li>
        <li className={styles.pagination__item}>
          <a href="/" className={styles.pagination__item__link}>
            2
          </a>
        </li>
        <li className={styles.pagination__item}>
          <a href="/" className={styles.pagination__item__link}>
            3
          </a>
        </li>
        <li className={styles.pagination__item}>
          <a href="/" className={styles.pagination__item__link}>
            4
          </a>
        </li>
        <li className={styles.pagination__item}>
          <a href="/" className={styles.pagination__item__link}>
            <MdKeyboardArrowRight />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Pagination;

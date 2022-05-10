import React from 'react';

import styles from './Filter.module.scss';

import { BsStarFill, BsStar } from 'react-icons/bs';
import { shopFilterInfo } from '../../../constants/shopFilterInfo';
import { priceOptions } from '../../../constants/priceOptions';

const Filter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <div className={styles.filter__popular}>
          <h3 className={styles.filter__popular__title}>Popular</h3>
          <ul className={styles.filter__popular__list}>
            {shopFilterInfo.map((info) => (
              <li key={info.id} className={styles.filter__popular__list__item}>
                <img
                  src={info.img}
                  alt={info.name}
                  className={styles.filter__popular__list__item__img}
                />
                <span className={styles.filter__popular__list__item__name}>
                  {info.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.filter__price}>
          <h3 className={styles.filter__price__title}>Price</h3>
          <form className={styles.filter__price__form}>
            {priceOptions.map((opt) => (
              <label
                key={opt.id}
                className={styles.filter__price__form__checkbox}
              >
                <span
                  className={styles.filter__price__form__checkbox__checkmark}
                />
                <input
                  className={styles.filter__price__form__checkbox__input}
                  type="radio"
                  name="Radio"
                  value={opt.content}
                />
                <span>{opt.content}</span>
              </label>
            ))}
          </form>
        </div>
        <div className={styles.filter__rate}>
          <h3 className={styles.filter__rate__title}>Rate</h3>
          <span className={styles.filter__rate__stars}>
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStar />
          </span>
          <span className={styles.filter__rate__stars}>
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStar />
          </span>
          <span className={styles.filter__rate__stars}>
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStar />
            <BsStar />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Filter;

import React from 'react';

import styles from './HomeWork.module.scss';
import { homeWorkInfo } from './../../constants/homeWorkInfo';

const HomeWork = () => {
  return (
    <div className={styles.container}>
      <div className={styles.homeWork}>
        <div className={styles.homeWork__title}>
          <span>Order now!</span>
          <h3>How it works</h3>
        </div>

        <div className={styles.homeWork__content}>
          {homeWorkInfo.map((info) => (
            <div key={info.id} className={styles.homeWork__content__step}>
              <span>{info.step}</span>
              <img
                src={info.img}
                alt={info.step}
                className={styles.homeWork__content__step__img}
              />
              <h4 className={styles.homeWork__content__step__title}>
                {info.title}
              </h4>
              <div
                className={styles.homeWork__content__step__arrow}
                style={{ backgroundImage: `url(${info.arrow})` }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeWork;

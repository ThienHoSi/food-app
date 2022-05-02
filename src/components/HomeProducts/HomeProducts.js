import React from 'react';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/pagination';

import styles from './HomeProducts.module.scss';
import { homeProducts } from './../../constants/homeProducts';

const HomeProducts = () => {
  return (
    <section className={styles.container}>
      <div className={styles.homeProducts}>
        <div className={styles.homeProducts__heading}>
          <span>Quality Products</span>
          <h3>
            Burger as expected <strong>dilicious</strong> one
          </h3>
        </div>
        <div className={styles.homeProducts__cards}>
          {homeProducts.map((info) => {
            return (
              <div key={info.id} className={styles.homeProducts__cards__item}>
                <div className={styles.homeProducts__cards__item__heading}>
                  <img src={info.img} alt={info.name} />
                  <span
                    className={styles.homeProducts__cards__item__heading__deal}
                  >
                    BEST DEAL
                  </span>
                </div>
                <div className={styles.homeProducts__cards__item__body}>
                  <h4 className={styles.homeProducts__cards__item__body__name}>
                    {info.name}
                  </h4>
                  <p className={styles.homeProducts__cards__item__body__descr}>
                    Buarning do amet contur dicivt suia non nuamelus velit
                  </p>
                  <span
                    className={styles.homeProducts__cards__item__body__price}
                  >
                    {info.price}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;

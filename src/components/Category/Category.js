import React from 'react';

import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';

import styles from './Category.module.scss';
import { categoryInfo } from './../../constants/categoryInfo';

const Category = () => {
  return (
    <div className={styles.container}>
      <div className={styles.category}>
        <div className={styles.category__heading}>
          <span>What we have?</span>
          <h3>Browse food category</h3>
        </div>
        <div className={styles.category__cards}>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              600: {
                slidesPerView: 4,
              },
              900: {
                slidesPerView: 7,
              },
            }}
          >
            {categoryInfo.map((info) => (
              <SwiperSlide key={info.id}>
                <div className={styles.category__card}>
                  <div className={styles.category__card__img}>
                    <img src={info.img} alt={info.name} />
                  </div>
                  <span className={styles.category__card__descr}>
                    {info.name}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Category;

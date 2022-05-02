import React from 'react';
import Button from '../../UI/Button/Button';

import styles from './HomeBanner.module.scss';
import './HomeBanner.scss';
import { MdAddShoppingCart } from 'react-icons/md';
import { sliderInfo } from '../../constants/slideInfo';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/pagination';

const Banner = () => {
  return (
    <div className={styles.SliderWrapper}>
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        speed={600}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
      >
        {sliderInfo.map((info) => (
          <SwiperSlide key={info.id}>
            <div
              className={styles.banner}
              style={{ backgroundImage: `url(${info.img})` }}
            >
              <div className={styles.banner__container}>
                <h2 className={styles.banner__container__title}>
                  {info.title}
                </h2>
                <div className={styles.banner__container__content}>
                  <span>{info.content}</span>
                  <strong>{info.subContent}</strong>
                </div>
                <Button primary stSize>
                  <MdAddShoppingCart />
                  <span>ORDER NOW</span>
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;

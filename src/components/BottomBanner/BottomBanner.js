import React from 'react';

import styles from './BottomBanner.module.scss';
import { bottomBannerInfo } from './../../constants/bottomBanner';
import appStoreSVG from './../../assets/img/svg/appStore.svg';
import googlePlaySVG from './../../assets/img/svg/googlePlay.svg';

const BottomBanner = () => {
  return (
    <section className={styles.container}>
      <div className={styles.bottomBanner}>
        {bottomBannerInfo.map((info) => (
          <div key={info.id} className={styles.bottomBanner__content}>
            <img
              src={info.img}
              alt={info.title}
              className={styles.bottomBanner__content__img}
            />
            <div className={styles.bottomBanner__content__descr}>
              <h4 className={styles.bottomBanner__content__descr__title}>
                {info.title}
              </h4>
              <p className={styles.bottomBanner__content__descr__text}>
                {info.descr}
              </p>
              <div className={styles.bottomBanner__content__download}>
                <a href="/">
                  <img src={appStoreSVG} alt="App Store" />
                </a>
                <a href="/">
                  <img src={googlePlaySVG} alt="Google Play" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BottomBanner;

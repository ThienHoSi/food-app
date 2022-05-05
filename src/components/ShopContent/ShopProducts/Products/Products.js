import React from 'react';

import styles from './Products.module.scss';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsCart3, BsStarFill } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';
import emptyShopSVG from './../../../../assets/img/svg/emptyShop.svg';
import mofukuImg from './../../../../assets/img/Momofuku.avif';

const Products = ({ emptyShop }) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.products} ${emptyShop ? styles.empty : ''}`}>
        <a href="/" className={styles.products__item}>
          <div
            className={styles.products__item__img}
            style={{ backgroundImage: `url(${mofukuImg})` }}
          >
            <span className={styles.products__item__img__favourite}>
              Favourite
            </span>
            <div className={styles.products__item__img__btns}>
              <button>
                <AiOutlineHeart />
              </button>
              <button>
                <BsCart3 />
              </button>
            </div>
            <span className={styles.products__item__img__rate}>
              <BsStarFill />
              <strong>4</strong>
            </span>
          </div>
          <h1 className={styles.products__item__name}>Momofuku</h1>
          <p className={styles.products__item__descr}>
            Half Bo Ssam Dinner for 4-6
          </p>
          <div className={styles.products__item__footer}>
            <span className={styles.products__item__footer__location}>
              <MdLocationPin />
              New York, NY
            </span>
            <span className={styles.products__item__footer__price}>$169</span>
          </div>
        </a>
        <div className={styles.products__empty}>
          <img
            src={emptyShopSVG}
            alt="Empty Shop"
            className={styles.products__empty__img}
          />
          <h3 className={styles.products__empty__title}>
            There is no product you are looking for
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Products;

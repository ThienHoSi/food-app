import React from 'react';

import styles from './Products.module.scss';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { AiOutlineHeart } from 'react-icons/ai';
import { BsCart3, BsStarFill } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';
import emptyShopSVG from '../../../../assets/img/svg/empty-shop.svg';

import { useSelector } from 'react-redux';
import {
  foodListSelector,
  loadingStatusSelector,
} from '../../../../app/selectors';

const Products = () => {
  const shopProducts = useSelector(foodListSelector);
  const loading = useSelector(loadingStatusSelector);

  return (
    <div className={styles.container}>
      {loading === 'pending' && (
        <div className={styles.loading}>
          <span />
        </div>
      )}
      {loading === 'fulfilled' && (
        <div className={styles.products}>
          {shopProducts.length > 0 ? (
            shopProducts.map(
              ({ id, img, name, dsc, price, rate, country }, idx) => (
                <Link
                  to={`/detail-product/${id}`}
                  key={idx}
                  className={styles.products__item}
                >
                  <div className={styles.products__item__main}>
                    <LazyLoadImage
                      src={img}
                      alt={name}
                      className={styles.products__item__main__img}
                      effect="blur"
                      width="100%"
                      height="100%"
                    ></LazyLoadImage>

                    <span className={styles.products__item__main__rate}>
                      <BsStarFill />
                      <strong>{rate}</strong>
                    </span>
                  </div>

                  <div className={styles.products__item__btns}>
                    <button>
                      <AiOutlineHeart />
                    </button>
                    <button>
                      <BsCart3 />
                    </button>
                  </div>

                  <div className={styles.products__item__info}>
                    <h1 className={styles.products__item__info__name}>
                      {name}
                    </h1>
                    <p className={styles.products__item__info__descr}>{dsc}</p>
                    <div className={styles.products__item__info__footer}>
                      <span
                        className={
                          styles.products__item__info__footer__location
                        }
                      >
                        <MdLocationPin />
                        {country}
                      </span>
                      <span
                        className={styles.products__item__info__footer__price}
                      >
                        ${price}
                      </span>
                    </div>
                  </div>

                  <span className={styles.products__item__favourite}>
                    Favourite
                  </span>
                </Link>
              )
            )
          ) : (
            <div className={styles.empty}>
              <img
                src={emptyShopSVG}
                alt="Empty Shop"
                className={styles.empty__img}
              />
              <h3 className={styles.empty__title}>
                There is no product you are looking for
              </h3>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Products;

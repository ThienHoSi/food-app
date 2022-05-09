import React, { useEffect, useState } from 'react';

import styles from './Products.module.scss';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsCart3, BsStarFill } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';
import emptyShopSVG from '../../../../assets/img/svg/empty-shop.svg';

import { fetchProductList } from '../../ShopContentSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
  foodListSelector,
  fetchProductsStatus,
} from '../../../../app/selectors';

const Products = () => {
  const shopProducts = useSelector(foodListSelector);
  const status = useSelector(fetchProductsStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductList());
  }, []);

  return (
    <div className={styles.container}>
      {shopProducts.length > 0 ? (
        <div className={styles.products}>
          {shopProducts.map(({ id, img, name, dsc, price, rate, country }) => (
            <a key={id} href="/" className={styles.products__item}>
              <div
                className={styles.products__item__img}
                style={{ backgroundImage: `url(${img})` }}
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
                  <strong>{rate}</strong>
                </span>
              </div>
              <div className={styles.products__item__info}>
                <h1 className={styles.products__item__info__name}>{name}</h1>
                <p className={styles.products__item__info__descr}>{dsc}</p>
                <div className={styles.products__item__info__footer}>
                  <span
                    className={styles.products__item__info__footer__location}
                  >
                    <MdLocationPin />
                    {country}
                  </span>
                  <span className={styles.products__item__info__footer__price}>
                    ${price}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
        // <div className={styles.empty}>
        //   <img
        //     src={emptyShopSVG}
        //     alt="Empty Shop"
        //     className={styles.empty__img}
        //   />
        //   <h3 className={styles.empty__title}>
        //     There is no product you are looking for
        //   </h3>
        // </div>
      )}
    </div>
  );
};

export default Products;

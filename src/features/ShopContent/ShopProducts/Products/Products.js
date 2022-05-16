import React from 'react';

import styles from './Products.module.scss';
import { useNavigate } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsCart3, BsStarFill } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';
import emptyShopSVG from '../../../../assets/img/svg/empty-shop.svg';

import { useSelector } from 'react-redux';
import {
  productListSelector,
  loadingStatusSelector,
} from '../../../../app/selectors';

const Products = () => {
  const products = useSelector(productListSelector);
  const loading = useSelector(loadingStatusSelector);
  const navigate = useNavigate();

  const handleToDetail = (id) => {
    navigate(`/product-detail/${id}`);
  };

  return (
    <div className={styles.container}>
      {loading === 'pending' && (
        <div className={styles.loading}>
          <span />
        </div>
      )}

      {loading === 'fulfilled' && (
        <div className={styles.products}>
          {products.length > 0 ? (
            products.map(
              ({ id, img, name, rate, dsc, country, price }, idx) => (
                <div key={idx} className={styles.products__item}>
                  <div
                    className={styles.products__item__main}
                    onClick={() => handleToDetail(id)}
                  >
                    <img
                      src={img}
                      alt={name}
                      className={styles.products__item__main__img}
                    />

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
                  <div
                    className={styles.products__item__info}
                    onClick={() => handleToDetail(id)}
                  >
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
                </div>
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

import React from 'react';

import styles from './Product.module.scss';
import { useNavigate } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsCart3, BsStarFill } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';
import LazyLoadImage from '../../../../utils/LazyLoadImage/LazyLoadImage';

import { useSelector } from 'react-redux';
import { nameActiveSelector } from '../../../../app/selectors';

const Product = (props) => {
  const navigate = useNavigate();
  const nameActive = useSelector(nameActiveSelector);

  const { id, img, name, dsc, price, rate, country } = props;

  const handleToDetail = (id) => {
    navigate(`/${nameActive}/${id}`);
  };

  return (
    <div className={styles.container}>
      <div id={id} className={styles.products}>
        <div className={styles.products__item}>
          <div
            className={styles.products__item__main}
            onClick={() => handleToDetail(id)}
          >
            <LazyLoadImage
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
            <h1 className={styles.products__item__info__name}>{name}</h1>
            <p className={styles.products__item__info__descr}>{dsc}</p>
            <div className={styles.products__item__info__footer}>
              <span className={styles.products__item__info__footer__location}>
                <MdLocationPin />
                {country}
              </span>
              <span className={styles.products__item__info__footer__price}>
                ${price}
              </span>
            </div>
          </div>
          <span className={styles.products__item__favourite}>Favourite</span>
        </div>
      </div>
    </div>
  );
};

export default Product;

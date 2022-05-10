import React from 'react';

import styles from './DetailInfo.module.scss';
import Button from '../../../../UI/Button/Button';
import { BsStarFill, BsStar } from 'react-icons/bs';
import { CgMathMinus, CgMathPlus } from 'react-icons/cg';
import { AiOutlineHeart } from 'react-icons/ai';
import { RiTruckLine, RiCalendarCheckLine } from 'react-icons/ri';
import { GoTag } from 'react-icons/go';

const DetailInfo = ({ product }) => {
  return (
    <section className={styles.container}>
      <div className={styles.product}>
        <div className={styles.product__info}>
          <h1 className={styles.product__info__name}>{product.name}</h1>
          <span className={styles.product__info__rate}>
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            {product.rate === 5 ? <BsStarFill /> : <BsStar />}
          </span>
          <span className={styles.product__info__price}>${product.price}</span>
          <div className={styles.product__info__ca}>
            <span className={styles.product__info__ca__item}>
              Category:<strong>Best Foods</strong>
            </span>
            <span className={styles.product__info__ca__item}>
              Address:<strong>{product.country}</strong>
            </span>
          </div>
          <p className={styles.product__info__descr}>{product.dsc}</p>
          <form className={styles.product__info__form}>
            <span className={styles.product__info__form__title}>
              Choose your options
            </span>
            <label className={styles.product__info__form__checkbox}>
              <input
                className={styles.product__info__form__checkbox__input}
                type="radio"
                name="Radio"
                value="Buy 2 get 15 percent off"
              />
              Buy 2 get 15 percent off
            </label>
            <label className={styles.product__info__form__checkbox}>
              <input
                className={styles.product__info__form__checkbox__input}
                type="radio"
                name="Radio"
                value="Buy 3 get 25 percent off"
              />
              Buy 3 get 25 percent off
            </label>
            <label className={styles.product__info__form__checkbox}>
              <input
                className={styles.product__info__form__checkbox__input}
                type="radio"
                name="Radio"
                value="Buy 5 get 50 percent off"
              />
              Buy 5 get 50 percent off
            </label>
          </form>
        </div>
        <div className={styles.button}>
          <div className={styles.button__handle}>
            <button className={styles.button__handle__decr}>
              <CgMathMinus />
            </button>
            <span className={styles.button__handle__qnt}>1</span>
            <button className={styles.button__handle__incr}>
              <CgMathPlus />
            </button>
          </div>
          <div className={styles.button__add}>
            <Button primary mdSize>
              ADD TO CART
            </Button>
            <button className={styles.button__add__like}>
              <AiOutlineHeart />
            </button>
          </div>
        </div>
        <div className={styles.commits}>
          <span className={styles.commits__commit}>
            <RiTruckLine />
            Free global shipping on all orders
          </span>
          <span className={styles.commits__commit}>
            <RiCalendarCheckLine />2 hours easy returns if you change your mind
          </span>
          <span className={styles.commits__commit}>
            <GoTag />
            Order before noon for same day dispatch
          </span>
        </div>
      </div>
    </section>
  );
};

export default DetailInfo;

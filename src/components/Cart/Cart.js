import React, { useEffect, useRef } from 'react';

import styles from './Cart.module.scss';
import emptyCart from './../../assets/img/common/empty_cart.png';
import momofuku from './../../assets/img/Momofuku.avif';
import { MdShoppingCart, MdStoreMallDirectory } from 'react-icons/md';
import { CgClose, CgTrashEmpty, CgMathMinus, CgMathPlus } from 'react-icons/cg';
import Button from '../../UI/Button/Button';

const Cart = ({ show, setShow }) => {
  const overlayRef = useRef();

  useEffect(() => {
    const clickOnOverlay = (e) => {
      if (e.target === overlayRef.current) {
        setShow(false);
      }
    };
    window.addEventListener('click', clickOnOverlay);

    return () => {
      window.removeEventListener('click', clickOnOverlay);
    };
  }, [show, setShow]);

  return (
    <div className={`${styles.container} ${show ? styles.active : ''}`}>
      <div
        ref={overlayRef}
        className={`${styles.cart__overlay} ${show ? styles.active : ''}`}
      ></div>
      <div className={styles.cart}>
        <header className={styles.cart__header}>
          Your Cart
          <CgClose onClick={() => setShow(false)} />
        </header>
        <div className={styles.cart__empty}>
          <div className={styles.cart__empty__box}>
            <img
              className={styles.cart__empty__box__img}
              src={emptyCart}
              alt="Empty Cart"
            />
          </div>
          <span className={styles.cart__empty__title}>Your Cart Is Empty</span>
          <a href="/" className={styles.cart__empty__btn}>
            Buy Now
          </a>
        </div>
        <div className={styles.cart__box}>
          <ul className={styles.cart__products}>
            <li className={styles.cart__products__item}>
              <div className={styles.cart__products__item__content}>
                <img
                  src={momofuku}
                  alt="Momofuku"
                  className={styles.cart__products__item__content__img}
                />
                <div className={styles.cart__products__item__content__descr}>
                  <h3
                    className={
                      styles.cart__products__item__content__descr__name
                    }
                  >
                    Momofuku
                  </h3>
                  <span
                    className={
                      styles.cart__products__item__content__descr__price
                    }
                  >
                    $169
                  </span>
                  <div
                    className={
                      styles.cart__products__item__content__descr__handle
                    }
                  >
                    <button>
                      <CgMathMinus />
                    </button>
                    <span
                      className={
                        styles.cart__products__item__content__descr__handle__qnt
                      }
                    >
                      1
                    </span>
                    <button>
                      <CgMathPlus />
                    </button>
                  </div>
                </div>
              </div>
              <button className={styles.cart__products__item__delete}>
                <CgTrashEmpty />
              </button>
            </li>
          </ul>
          <footer className={styles.cart__products__footer}>
            <div className={styles.cart__products__footer__total}>
              <span>Total</span>
              <span>$169</span>
            </div>
            <div className={styles.cart__products__footer__btns}>
              <Button primary>
                <MdShoppingCart style={{ fontSize: '2rem', padding: 2 }} />
                checkout
              </Button>
              <Button>
                <MdStoreMallDirectory
                  style={{ fontSize: '2rem', padding: 2 }}
                />
                buy more
              </Button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Cart;

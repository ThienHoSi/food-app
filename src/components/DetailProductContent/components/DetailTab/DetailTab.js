import React, { useState, useRef, useEffect } from 'react';

import styles from './DetailTab.module.scss';
import {
  detailTableInfo,
  detailTableIngre,
} from '../../../../constants/detailTable';
import { BsStarFill } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';

const DetailTab = () => {
  const [isActive, setIsActive] = useState(true);
  const [offsetLeft, setOffsetLeft] = useState(0);
  const [offsetWidth, setOffsetWidth] = useState(0);
  const [btnElement, setBtnElement] = useState(null);

  const firstBtnRef = useRef();
  const secondBtnRef = useRef();
  let firstBtn = firstBtnRef.current;
  let secondBtn = secondBtnRef.current;

  const handleSelect = (pos) => {
    if (firstBtn && secondBtn) {
      setOffsetLeft((pos === 'first' ? firstBtn : secondBtn).offsetLeft);
      setOffsetWidth((pos === 'first' ? firstBtn : secondBtn).offsetWidth);
    }
    setIsActive(pos === 'first' ? true : false);
  };

  useEffect(() => {
    if (firstBtn) {
      setOffsetLeft(firstBtn.offsetLeft);
      setOffsetWidth(firstBtn.offsetWidth);
      setIsActive(true);
      setBtnElement(firstBtn);
    }

    const handleResizeWindow = () => {
      setOffsetLeft(btnElement && btnElement.offsetLeft);
      setOffsetWidth(btnElement && btnElement.offsetWidth);
      setIsActive(true);
    };

    window.addEventListener('resize', handleResizeWindow);

    handleResizeWindow();
  }, [firstBtn, btnElement]);

  return (
    <div className={styles.container}>
      <div className={styles.tab}>
        <div className={styles.tab__btns}>
          <div
            ref={firstBtnRef}
            className={`${styles.tab__btns__btn} ${
              isActive ? styles.active : ''
            }`}
            onClick={() => handleSelect('first')}
          >
            <span>Description</span>
          </div>
          <div
            ref={secondBtnRef}
            className={`${styles.tab__btns__btn} ${
              !isActive ? styles.active : ''
            }`}
            onClick={() => handleSelect('second')}
          >
            <span>Reviews(0)</span>
          </div>
          <div
            className={styles.tab__btns__bg}
            style={{ left: offsetLeft, width: offsetWidth }}
          />
        </div>
        <div
          className={`${styles.tab__background} ${isActive ? '' : styles.hide}`}
        >
          <p className={styles.tab__background__content}>
            Although the legendary Double Burger really needs no introduction,
            please allow us... Tucked in between three soft buns are two
            all-beef patties, cheddar cheese, ketchup, onion, pickles and
            iceberg lettuce. Hesburger's own paprika and cucumber mayonnaise add
            the crowing touch. Oh baby!
          </p>
          <div className={styles.tab__background__table}>
            <div className={styles.tab__background__table__info}>
              {detailTableInfo.map(({ id, title, descr }) => (
                <div
                  key={id}
                  className={styles.tab__background__table__info__descr}
                >
                  <span
                    className={
                      styles.tab__background__table__info__descr__title
                    }
                  >
                    <strong>{title}</strong> {descr}
                  </span>
                </div>
              ))}
            </div>
            <div className={styles.tab__background__table__ingre}>
              {detailTableIngre.map(({ id, title, descr }) => (
                <div
                  key={id}
                  className={styles.tab__background__table__ingre__descr}
                >
                  <span
                    className={
                      styles.tab__background__table__info__descr__title
                    }
                  >
                    <strong>{title}</strong> {descr}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className={`${styles.tab__altBackground} ${
            isActive ? styles.hide : ''
          }`}
        >
          <form className={styles.tab__altBackground__form}>
            <div className={styles.tab__altBackground__form__user}>
              <FaUserCircle />
            </div>
            <div className={styles.tab__altBackground__form__descr}>
              <div className={styles.tab__altBackground__form__descr__rate}>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
              </div>
              <textarea
                className={styles.tab__altBackground__form__descr__textarea}
                placeholder="Write your comment here..."
              />
              <button className={styles.tab__altBackground__form__descr__btn}>
                Post Comment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DetailTab;

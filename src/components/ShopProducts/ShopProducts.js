import React, { useState } from 'react';

import styles from './ShopProducts.module.scss';
import { BsStarFill, BsStar, BsCart3 } from 'react-icons/bs';
import { AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai';
import {
  MdKeyboardArrowDown,
  MdLocationPin,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from 'react-icons/md';
import { shopFilterInfo } from './../../constants/shopFilterInfo';
import mofukuImg from './../../assets/img/Momofuku.avif';

const ShopProducts = () => {
  const [dropListOpen, setDropListOpen] = useState(false);

  const handleToggleDropList = () => {
    setDropListOpen((p) => !p);
  };

  return (
    <section className={styles.container}>
      <div className={styles.shop}>
        <div className={styles.shop__filter}>
          <div className={styles.shop__filter__popular}>
            <h3 className={styles.shop__filter__popular__title}>Popular</h3>
            <ul className={styles.shop__filter__popular__list}>
              {shopFilterInfo.map((info) => (
                <li
                  key={info.id}
                  className={styles.shop__filter__popular__list__item}
                >
                  <img
                    src={info.img}
                    alt={info.name}
                    className={styles.shop__filter__popular__list__item__img}
                  />
                  <span
                    className={styles.shop__filter__popular__list__item__name}
                  >
                    {info.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.shop__filter__price}>
            <h3 className={styles.shop__filter__price__title}>Price</h3>
            <form className={styles.shop__filter__price__form}>
              <label className={styles.shop__filter__price__form__checkbox}>
                <span
                  className={
                    styles.shop__filter__price__form__checkbox__checkmark
                  }
                />
                <input
                  className={styles.shop__filter__price__form__checkbox__input}
                  type="radio"
                  name="Radio"
                  value="Under 100$"
                />
                <span>Under $100</span>
              </label>
              <label className={styles.shop__filter__price__form__checkbox}>
                <span
                  className={
                    styles.shop__filter__price__form__checkbox__checkmark
                  }
                />
                <input
                  className={styles.shop__filter__price__form__checkbox__input}
                  type="radio"
                  name="Radio"
                  value="50$ to 100$"
                />
                <span>50$ to 100$</span>
              </label>
              <label className={styles.shop__filter__price__form__checkbox}>
                <span
                  className={
                    styles.shop__filter__price__form__checkbox__checkmark
                  }
                />
                <input
                  className={styles.shop__filter__price__form__checkbox__input}
                  type="radio"
                  name="Radio"
                  value="Under 50$"
                />
                <span>Under $50</span>
              </label>
              <label className={styles.shop__filter__price__form__checkbox}>
                <span
                  className={
                    styles.shop__filter__price__form__checkbox__checkmark
                  }
                />
                <input
                  className={styles.shop__filter__price__form__checkbox__input}
                  type="radio"
                  name="Radio"
                  value="Above 100$"
                />
                <span>Above $100</span>
              </label>
            </form>
          </div>
          <div className={styles.shop__filter__rate}>
            <h3 className={styles.shop__filter__rate__title}>Rate</h3>
            <span className={styles.shop__filter__rate__stars}>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStar />
            </span>
            <span className={styles.shop__filter__rate__stars}>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStar />
            </span>
            <span className={styles.shop__filter__rate__stars}>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStar />
              <BsStar />
            </span>
          </div>
        </div>
        <div className={styles.shop__content}>
          <div className={styles.shop__content__handle}>
            <form className={styles.shop__content__handle__search}>
              <input
                placeholder="Search your product"
                className={styles.shop__content__handle__search__input}
              />
              <button className={styles.shop__content__handle__search__btn}>
                <AiOutlineSearch />
              </button>
            </form>
            <div className={styles.shop__content__handle__drop}>
              <div
                className={styles.shop__content__handle__drop__current}
                onClick={handleToggleDropList}
              >
                <span>Featured</span>
                <MdKeyboardArrowDown />
              </div>
              <ul
                className={`${styles.shop__content__handle__drop__list} ${
                  dropListOpen ? styles.show : ''
                }`}
              >
                <li className={styles.shop__content__handle__drop__list__item}>
                  Price: Low to High
                </li>
                <li className={styles.shop__content__handle__drop__list__item}>
                  Price: High to Low
                </li>
                <li className={styles.shop__content__handle__drop__list__item}>
                  Rate: Low to High
                </li>
                <li className={styles.shop__content__handle__drop__list__item}>
                  Rate: High to Low
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.shop__content__products}>
            <a href="/" className={styles.shop__content__products__item}>
              <div
                className={styles.shop__content__products__item__img}
                style={{ backgroundImage: `url(${mofukuImg})` }}
              >
                <span
                  className={
                    styles.shop__content__products__item__img__favourite
                  }
                >
                  Favourite
                </span>
                <div
                  className={styles.shop__content__products__item__img__btns}
                >
                  <button>
                    <AiOutlineHeart />
                  </button>
                  <button>
                    <BsCart3 />
                  </button>
                </div>
                <span
                  className={styles.shop__content__products__item__img__rate}
                >
                  <BsStarFill />
                  <strong>4</strong>
                </span>
              </div>
              <h1 className={styles.shop__content__products__item__name}>
                Momofuku
              </h1>
              <p className={styles.shop__content__products__item__descr}>
                Half Bo Ssam Dinner for 4-6
              </p>
              <div className={styles.shop__content__products__item__footer}>
                <span
                  className={
                    styles.shop__content__products__item__footer__location
                  }
                >
                  <MdLocationPin />
                  New York, NY
                </span>
                <span
                  className={
                    styles.shop__content__products__item__footer__price
                  }
                >
                  $169
                </span>
              </div>
            </a>
            <a href="/" className={styles.shop__content__products__item}>
              <div
                className={styles.shop__content__products__item__img}
                style={{ backgroundImage: `url(${mofukuImg})` }}
              >
                <span
                  className={
                    styles.shop__content__products__item__img__favourite
                  }
                >
                  Favourite
                </span>
                <div
                  className={styles.shop__content__products__item__img__btns}
                >
                  <button>
                    <AiOutlineHeart />
                  </button>
                  <button>
                    <BsCart3 />
                  </button>
                </div>
                <span
                  className={styles.shop__content__products__item__img__rate}
                >
                  <BsStarFill />
                  <strong>4</strong>
                </span>
              </div>
              <h1 className={styles.shop__content__products__item__name}>
                Momofuku
              </h1>
              <p className={styles.shop__content__products__item__descr}>
                Half Bo Ssam Dinner for 4-6
              </p>
              <div className={styles.shop__content__products__item__footer}>
                <span
                  className={
                    styles.shop__content__products__item__footer__location
                  }
                >
                  <MdLocationPin />
                  New York, NY
                </span>
                <span
                  className={
                    styles.shop__content__products__item__footer__price
                  }
                >
                  $169
                </span>
              </div>
            </a>
            <a href="/" className={styles.shop__content__products__item}>
              <div
                className={styles.shop__content__products__item__img}
                style={{ backgroundImage: `url(${mofukuImg})` }}
              >
                <span
                  className={
                    styles.shop__content__products__item__img__favourite
                  }
                >
                  Favourite
                </span>
                <div
                  className={styles.shop__content__products__item__img__btns}
                >
                  <button>
                    <AiOutlineHeart />
                  </button>
                  <button>
                    <BsCart3 />
                  </button>
                </div>
                <span
                  className={styles.shop__content__products__item__img__rate}
                >
                  <BsStarFill />
                  <strong>4</strong>
                </span>
              </div>
              <h1 className={styles.shop__content__products__item__name}>
                Momofuku
              </h1>
              <p className={styles.shop__content__products__item__descr}>
                Half Bo Ssam Dinner for 4-6
              </p>
              <div className={styles.shop__content__products__item__footer}>
                <span
                  className={
                    styles.shop__content__products__item__footer__location
                  }
                >
                  <MdLocationPin />
                  New York, NY
                </span>
                <span
                  className={
                    styles.shop__content__products__item__footer__price
                  }
                >
                  $169
                </span>
              </div>
            </a>
            <a href="/" className={styles.shop__content__products__item}>
              <div
                className={styles.shop__content__products__item__img}
                style={{ backgroundImage: `url(${mofukuImg})` }}
              >
                <span
                  className={
                    styles.shop__content__products__item__img__favourite
                  }
                >
                  Favourite
                </span>
                <div
                  className={styles.shop__content__products__item__img__btns}
                >
                  <button>
                    <AiOutlineHeart />
                  </button>
                  <button>
                    <BsCart3 />
                  </button>
                </div>
                <span
                  className={styles.shop__content__products__item__img__rate}
                >
                  <BsStarFill />
                  <strong>4</strong>
                </span>
              </div>
              <h1 className={styles.shop__content__products__item__name}>
                Momofuku
              </h1>
              <p className={styles.shop__content__products__item__descr}>
                Half Bo Ssam Dinner for 4-6
              </p>
              <div className={styles.shop__content__products__item__footer}>
                <span
                  className={
                    styles.shop__content__products__item__footer__location
                  }
                >
                  <MdLocationPin />
                  New York, NY
                </span>
                <span
                  className={
                    styles.shop__content__products__item__footer__price
                  }
                >
                  $169
                </span>
              </div>
            </a>
            <a href="/" className={styles.shop__content__products__item}>
              <div
                className={styles.shop__content__products__item__img}
                style={{ backgroundImage: `url(${mofukuImg})` }}
              >
                <span
                  className={
                    styles.shop__content__products__item__img__favourite
                  }
                >
                  Favourite
                </span>
                <div
                  className={styles.shop__content__products__item__img__btns}
                >
                  <button>
                    <AiOutlineHeart />
                  </button>
                  <button>
                    <BsCart3 />
                  </button>
                </div>
                <span
                  className={styles.shop__content__products__item__img__rate}
                >
                  <BsStarFill />
                  <strong>4</strong>
                </span>
              </div>
              <h1 className={styles.shop__content__products__item__name}>
                Momofuku
              </h1>
              <p className={styles.shop__content__products__item__descr}>
                Half Bo Ssam Dinner for 4-6
              </p>
              <div className={styles.shop__content__products__item__footer}>
                <span
                  className={
                    styles.shop__content__products__item__footer__location
                  }
                >
                  <MdLocationPin />
                  New York, NY
                </span>
                <span
                  className={
                    styles.shop__content__products__item__footer__price
                  }
                >
                  $169
                </span>
              </div>
            </a>
            <a href="/" className={styles.shop__content__products__item}>
              <div
                className={styles.shop__content__products__item__img}
                style={{ backgroundImage: `url(${mofukuImg})` }}
              >
                <span
                  className={
                    styles.shop__content__products__item__img__favourite
                  }
                >
                  Favourite
                </span>
                <div
                  className={styles.shop__content__products__item__img__btns}
                >
                  <button>
                    <AiOutlineHeart />
                  </button>
                  <button>
                    <BsCart3 />
                  </button>
                </div>
                <span
                  className={styles.shop__content__products__item__img__rate}
                >
                  <BsStarFill />
                  <strong>4</strong>
                </span>
              </div>
              <h1 className={styles.shop__content__products__item__name}>
                Momofuku
              </h1>
              <p className={styles.shop__content__products__item__descr}>
                Half Bo Ssam Dinner for 4-6
              </p>
              <div className={styles.shop__content__products__item__footer}>
                <span
                  className={
                    styles.shop__content__products__item__footer__location
                  }
                >
                  <MdLocationPin />
                  New York, NY
                </span>
                <span
                  className={
                    styles.shop__content__products__item__footer__price
                  }
                >
                  $169
                </span>
              </div>
            </a>
            <a href="/" className={styles.shop__content__products__item}>
              <div
                className={styles.shop__content__products__item__img}
                style={{ backgroundImage: `url(${mofukuImg})` }}
              >
                <span
                  className={
                    styles.shop__content__products__item__img__favourite
                  }
                >
                  Favourite
                </span>
                <div
                  className={styles.shop__content__products__item__img__btns}
                >
                  <button>
                    <AiOutlineHeart />
                  </button>
                  <button>
                    <BsCart3 />
                  </button>
                </div>
                <span
                  className={styles.shop__content__products__item__img__rate}
                >
                  <BsStarFill />
                  <strong>4</strong>
                </span>
              </div>
              <h1 className={styles.shop__content__products__item__name}>
                Momofuku
              </h1>
              <p className={styles.shop__content__products__item__descr}>
                Half Bo Ssam Dinner for 4-6
              </p>
              <div className={styles.shop__content__products__item__footer}>
                <span
                  className={
                    styles.shop__content__products__item__footer__location
                  }
                >
                  <MdLocationPin />
                  New York, NY
                </span>
                <span
                  className={
                    styles.shop__content__products__item__footer__price
                  }
                >
                  $169
                </span>
              </div>
            </a>
            <a href="/" className={styles.shop__content__products__item}>
              <div
                className={styles.shop__content__products__item__img}
                style={{ backgroundImage: `url(${mofukuImg})` }}
              >
                <span
                  className={
                    styles.shop__content__products__item__img__favourite
                  }
                >
                  Favourite
                </span>
                <div
                  className={styles.shop__content__products__item__img__btns}
                >
                  <button>
                    <AiOutlineHeart />
                  </button>
                  <button>
                    <BsCart3 />
                  </button>
                </div>
                <span
                  className={styles.shop__content__products__item__img__rate}
                >
                  <BsStarFill />
                  <strong>4</strong>
                </span>
              </div>
              <h1 className={styles.shop__content__products__item__name}>
                Momofuku
              </h1>
              <p className={styles.shop__content__products__item__descr}>
                Half Bo Ssam Dinner for 4-6
              </p>
              <div className={styles.shop__content__products__item__footer}>
                <span
                  className={
                    styles.shop__content__products__item__footer__location
                  }
                >
                  <MdLocationPin />
                  New York, NY
                </span>
                <span
                  className={
                    styles.shop__content__products__item__footer__price
                  }
                >
                  $169
                </span>
              </div>
            </a>
            <a href="/" className={styles.shop__content__products__item}>
              <div
                className={styles.shop__content__products__item__img}
                style={{ backgroundImage: `url(${mofukuImg})` }}
              >
                <span
                  className={
                    styles.shop__content__products__item__img__favourite
                  }
                >
                  Favourite
                </span>
                <div
                  className={styles.shop__content__products__item__img__btns}
                >
                  <button>
                    <AiOutlineHeart />
                  </button>
                  <button>
                    <BsCart3 />
                  </button>
                </div>
                <span
                  className={styles.shop__content__products__item__img__rate}
                >
                  <BsStarFill />
                  <strong>4</strong>
                </span>
              </div>
              <h1 className={styles.shop__content__products__item__name}>
                Momofuku
              </h1>
              <p className={styles.shop__content__products__item__descr}>
                Traditional Beef Empanadas with Llajua Sauce - 12 Pack
              </p>
              <div className={styles.shop__content__products__item__footer}>
                <span
                  className={
                    styles.shop__content__products__item__footer__location
                  }
                >
                  <MdLocationPin />
                  New York, NY
                </span>
                <span
                  className={
                    styles.shop__content__products__item__footer__price
                  }
                >
                  $169
                </span>
              </div>
            </a>
          </div>
          <ul className={styles.shop__content__pagination}>
            <li className={styles.shop__content__pagination__item}>
              <a
                href="/"
                className={styles.shop__content__pagination__item__link}
              >
                <MdKeyboardArrowLeft />
              </a>
            </li>
            <li className={`${styles.shop__content__pagination__item} ${styles.selected}`}>
              <a
                href="/"
                className={styles.shop__content__pagination__item__link}
              >
                1
              </a>
            </li>
            <li className={styles.shop__content__pagination__item}>
              <a
                href="/"
                className={styles.shop__content__pagination__item__link}
              >
                2
              </a>
            </li>
            <li className={styles.shop__content__pagination__item}>
              <a
                href="/"
                className={styles.shop__content__pagination__item__link}
              >
                3
              </a>
            </li>
            <li className={styles.shop__content__pagination__item}>
              <a
                href="/"
                className={styles.shop__content__pagination__item__link}
              >
                4
              </a>
            </li>
            <li className={styles.shop__content__pagination__item}>
              <a
                href="/"
                className={styles.shop__content__pagination__item__link}
              >
                <MdKeyboardArrowRight />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ShopProducts;

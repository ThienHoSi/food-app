import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { PrevFilterContext } from '../../../context/PrevFilterContext';
import { fetchProducts } from '../thunk';

import styles from './Filter.module.scss';
import { BsStarFill, BsStar } from 'react-icons/bs';
import { shopFilterInfo } from '../../../constants/shopFilterInfo';
import { priceOptions } from '../../../constants/priceOptions';

const Filter = () => {
  const { name } = useParams();

  const dispatch = useDispatch();
  const { handlePrevious } = useContext(PrevFilterContext);
  const { selectedRadio, nameActive } = handlePrevious();

  const handleFilterByName = (params) => {
    const { prevName, setPrevName, setSelectedRadio, setNameActive } =
      handlePrevious('name', params);

    if (params !== prevName) {
      dispatch(fetchProducts({ name: params }));
      setSelectedRadio(null);
    }
    setPrevName(params);
    setNameActive(params);
  };

  const handleOptChange = (e) => {
    const { setSelectedRadio } = handlePrevious();
    setSelectedRadio(e.target.value);
  };

  const handleFilterByPrice = (params) => {
    const { prevPrice, setPrevPrice } = handlePrevious('price', params);
    if (prevPrice !== params) {
      dispatch(fetchProducts({ name: nameActive, query: params }));
    }

    setPrevPrice(params);
  };

  const handleFilterByRate = (params) => {
    const stringParams = JSON.stringify(params);
    const { prevRate, setPrevRate } = handlePrevious('rate', params);

    if (prevRate !== stringParams) {
      dispatch(fetchProducts({ name: nameActive, query: params }));
    }
    setPrevRate(stringParams);
  };

  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <div className={styles.filter__popular}>
          <h3 className={styles.filter__popular__title}>Popular</h3>
          <ul className={styles.filter__popular__list}>
            {shopFilterInfo.map((info) => (
              <li
                onClick={() => handleFilterByName(info.name)}
                key={info.id}
                className={styles.filter__popular__list__item}
              >
                <img
                  src={info.img}
                  alt={info.name}
                  className={styles.filter__popular__list__item__img}
                />
                <span className={styles.filter__popular__list__item__name}>
                  {info.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.filter__price}>
          <h3 className={styles.filter__price__title}>Price</h3>
          <form className={styles.filter__price__form}>
            {priceOptions.map((opt) => (
              <label
                key={opt.id}
                className={styles.filter__price__form__checkbox}
              >
                <span
                  className={styles.filter__price__form__checkbox__checkmark}
                />
                <input
                  checked={selectedRadio === opt.content}
                  className={styles.filter__price__form__checkbox__input}
                  type="radio"
                  name="Radio"
                  value={opt.content}
                  onChange={handleOptChange}
                  onClick={() => handleFilterByPrice(opt.range)}
                />
                <span>{opt.content}</span>
              </label>
            ))}
          </form>
        </div>
        <div className={styles.filter__rate}>
          <h3 className={styles.filter__rate__title}>Rate</h3>
          <span
            onClick={() => handleFilterByRate({ rate_like: 5 })}
            className={styles.filter__rate__stars}
          >
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
          </span>
          <span
            onClick={() => handleFilterByRate({ rate_like: 4 })}
            className={styles.filter__rate__stars}
          >
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStar />
          </span>
          <span
            onClick={() => handleFilterByRate({ rate_like: 3 })}
            className={styles.filter__rate__stars}
          >
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStar />
            <BsStar />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Filter;

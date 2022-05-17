import { useDispatch, useSelector } from 'react-redux';

import { fetchProducts } from '../thunk';

import styles from './Filter.module.scss';
import { BsStarFill, BsStar } from 'react-icons/bs';
import { shopFilterInfo } from '../../../constants/shopFilterInfo';
import { priceOptions } from '../../../constants/priceOptions';

import {
  nameActiveSelector,
  prevNameSelector,
  prevPriceSelector,
  prevRateSelector,
  selectedRadioSelector,
} from '../../../app/selectors';
import {
  setNameActive,
  setPrevName,
  setPrevPrice,
  setPrevRate,
  setSelectedRadio,
  setParams,
} from './FilterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const prevName = useSelector(prevNameSelector);
  const prevPrice = useSelector(prevPriceSelector);
  const prevRate = useSelector(prevRateSelector);
  const selectedRadio = useSelector(selectedRadioSelector);
  const nameActive = useSelector(nameActiveSelector);

  const handleFilterByName = (params) => {
    if (params !== prevName) {
      dispatch(fetchProducts({ name: params }));
      dispatch(setSelectedRadio(null));
    }
    dispatch(setPrevName(params));
    dispatch(setNameActive(params));
    dispatch(setParams(null));
  };

  const handleOptChange = (e) => {
    dispatch(setSelectedRadio(e.target.value));
  };

  const handleFilterByPrice = (query) => {
    if (prevPrice !== query) {
      dispatch(fetchProducts({ name: nameActive, params: query }));
    }

    dispatch(setPrevPrice(query));
    dispatch(setParams(query));
  };

  const handleFilterByRate = (query) => {
    const stringQuery = JSON.stringify(query);

    if (prevRate !== stringQuery) {
      dispatch(fetchProducts({ name: nameActive, params: query }));
    }

    dispatch(setPrevRate(stringQuery));
    dispatch(setParams(query));
  };

  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <div className={styles.filter__popular}>
          <h3 className={styles.filter__popular__title}>Popular</h3>
          <ul className={styles.filter__popular__list}>
            {shopFilterInfo.map((info) => (
              <li
                onClick={() => handleFilterByName(info.type)}
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

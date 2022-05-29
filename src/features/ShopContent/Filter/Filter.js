import queryString from 'query-string';
import { BsStar, BsStarFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  nameActiveSelector,
  prevNameSelector,
  prevPriceSelector,
  prevRateSelector,
  selectedRadioSelector,
} from '../../../app/selectors';
import { priceOptions } from '../../../constants/priceOptions';
import { shopFilterInfo } from '../../../constants/shopFilterInfo';
import { fetchProducts } from '../thunk';
import styles from './Filter.module.scss';
import {
  setNameActive,
  setParams,
  setPrevName,
  setPrevPrice,
  setPrevRate,
  setSelectedRadio,
} from './FilterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name } = useParams();

  const prevName = useSelector(prevNameSelector);
  const prevPrice = useSelector(prevPriceSelector);
  const prevRate = useSelector(prevRateSelector);
  const selectedRadio = useSelector(selectedRadioSelector);
  const nameActive = useSelector(nameActiveSelector);

  const handleFilterByName = (params) => {
    if (params !== prevName) {
      dispatch(fetchProducts({ name: params })).then(() =>
        navigate({
          pathname: `/shop/${params}`,
          search: queryString.stringify({
            _limit: 16,
          }),
        })
      );
      dispatch(setSelectedRadio(null));
    }
    dispatch(setPrevName(params));
    dispatch(setNameActive(params));
    console.log('fetch api');
  };

  const handleOptChange = (e) => {
    dispatch(setSelectedRadio(e.target.value));
  };

  const handleFilterByPrice = (query) => {
    if (prevPrice !== query) {
      dispatch(fetchProducts({ name: name, params: query })).then(() =>
        navigate({
          pathname: `/shop/${name}`,
          search: queryString.stringify({
            _limit: 16,
            ...query,
          }),
        })
      );
    }

    dispatch(setPrevPrice(query));
    dispatch(setParams(query));
  };

  const handleFilterByRate = (query) => {
    const stringQuery = JSON.stringify(query);

    if (prevRate !== stringQuery) {
      dispatch(fetchProducts({ name: name, params: query })).then(() => {
        navigate({
          pathname: `/shop/${name}`,
          search: queryString.stringify({
            _limit: 16,
            ...query,
          }),
        });
      });
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
                className={`${styles.filter__popular__list__item} ${
                  nameActive === info.type ? styles.active : ''
                }`}
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

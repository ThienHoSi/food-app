import queryString from 'query-string';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectedDropSelector } from '../../../../app/selectors';
import { dataTypes } from '../../../../constants/handleDataTypes';
import {
  onSearch, setParams, setPrevSearch, setPrevSeletedDrop, setPrevSort
} from '../../Filter/FilterSlice';
import { sortProductsByOrder } from '../../ShopContentSlice';
import { fetchProducts } from '../../thunk';
import styles from './Handle.module.scss';

const Handle = () => {
  const selectedDrop = useSelector(selectedDropSelector);

  const [dropListOpen, setDropListOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const ref = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    dispatch(onSearch());
    e.preventDefault();

    if (!searchText) return;

    const params = { name_like: searchText };
    dispatch(fetchProducts({ name: 'our-foods', params })).then(() => {
      navigate({
        pathname: `/shop/our-foods`,
        search: queryString.stringify({
          _limit: 16,
          ...params,
        }),
      });
    });
    setSearchText('');
    dispatch(setPrevSearch(params));
    dispatch(setParams(params));
  };

  // close sort list when user clicks outsite
  useEffect(() => {
    const handleClickDrop = (e) => {
      const el = ref.current;

      if (el && el.contains(e.target)) {
        setDropListOpen(!dropListOpen);
      } else {
        setDropListOpen(false);
      }
    };

    window.addEventListener('click', handleClickDrop);
  }, [dropListOpen]);

  const onFilterBySort = (sort, value) => {
    dispatch(setPrevSort());
    dispatch(sortProductsByOrder(sort));
    dispatch(setPrevSeletedDrop(value));
  };

  return (
    <div className={styles.container}>
      <div className={styles.handle}>
        <a href='https://j.pn/'>Cyber cast</a>
        <form onSubmit={handleSearch} className={styles.handle__search}>
          <input
            value={searchText}
            placeholder="Search your product"
            className={styles.handle__search__input}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className={styles.handle__search__btn}>
            <AiOutlineSearch />
          </button>
        </form>

        <div className={styles.handle__drop}>
          <div ref={ref} className={styles.handle__drop__current}>
            <span>{selectedDrop}</span>
            <MdKeyboardArrowDown />
          </div>
          <ul
            className={`${styles.handle__drop__list} ${
              dropListOpen ? styles.show : ''
            }`}
          >
            {dataTypes.map(({ id, value, sort }) => (
              <li
                onClick={() => onFilterBySort(sort, value)}
                key={id}
                className={styles.handle__drop__list__item}
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Handle;

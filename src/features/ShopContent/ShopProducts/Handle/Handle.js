import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortProductsByOrder } from '../../ShopContentSlice';

import styles from './Handle.module.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { dataTypes } from '../../../../constants/handleDataTypes';

import { fetchProducts } from '../../thunk';
import { selectedDropSelector } from '../../../../app/selectors';
import {
  setPrevSearch,
  onSearch,
  setPrevSort,
  setPrevSeletedDrop,
  setNameActive,
} from '../../Filter/FilterSlice';

const Handle = () => {
  const selectedDrop = useSelector(selectedDropSelector);

  const [dropListOpen, setDropListOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const ref = useRef();

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(onSearch());
    e.preventDefault();

    if (!searchText) return;

    const params = { name_like: searchText };
    dispatch(fetchProducts({ name: 'our-foods', params }));
    setSearchText('');
    dispatch(setPrevSearch(params));
    dispatch(setNameActive('our-foods'));
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

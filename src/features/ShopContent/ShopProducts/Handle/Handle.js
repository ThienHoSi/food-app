import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { sortProductsByOrder, searchProducts } from '../../ShopContentSlice';

import styles from './Handle.module.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { dataTypes } from '../../../../constants/handleDataTypes';

const Handle = () => {
  const [dropListOpen, setDropListOpen] = useState(false);
  const [selectedValue, setSeletedValue] = useState('Featured');
  const [searchText, setSearchText] = useState('');
  const ref = useRef();
  const dispatch = useDispatch();

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
  }, []);

  const handleOnChange = (e) => {
    setSearchText(e.target.value);
    dispatch(searchProducts(e.target.value));
  };

  const onFilterBySort = (sort, value) => {
    setSeletedValue(value);
    dispatch(sortProductsByOrder(sort));
  };

  return (
    <div className={styles.container}>
      <div className={styles.handle}>
        <form className={styles.handle__search}>
          <input
            value={searchText}
            placeholder="Search your product"
            className={styles.handle__search__input}
            onChange={handleOnChange}
          />
          <button className={styles.handle__search__btn}>
            <AiOutlineSearch />
          </button>
        </form>

        {/* <div>
          <label for="sort">Featured</label>
          <select name="sort" id="sort">
            {dataTypes.map(({ id, value, sort }) => (
              <option key={id} value={sort}>
                {value}
              </option>
            ))}
          </select>
        </div> */}

        <div className={styles.handle__drop}>
          <div
            ref={ref}
            className={styles.handle__drop__current}
            // onClick={handleToggleDropList}
          >
            <span>{selectedValue}</span>
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

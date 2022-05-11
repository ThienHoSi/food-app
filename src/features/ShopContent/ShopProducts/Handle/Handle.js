import React, { useContext, useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { sortProductsByOrder } from '../../ShopContentSlice';

import styles from './Handle.module.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { dataTypes } from '../../../../constants/handleDataTypes';

import { PrevFilterContext } from '../../../../context/PrevFilterContext';
import { fetchProductsBySearch } from '../../thunk';

const Handle = () => {
  const { handlePrevious } = useContext(PrevFilterContext);
  const { selectedDrop, setSelectedDrop, setPrevSearch } = handlePrevious();

  const [dropListOpen, setDropListOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const ref = useRef();

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    handlePrevious('search');
    e.preventDefault();

    if (!searchText) return;

    const query = { name_like: searchText };
    dispatch(fetchProductsBySearch({ name: 'our-foods', query: searchText }));
    setSearchText('');
    setPrevSearch(query);
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
  }, []);

  const onFilterBySort = (sort, value) => {
    handlePrevious('sort');
    dispatch(sortProductsByOrder(sort));
    setSelectedDrop(value);
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
          <div
            ref={ref}
            className={styles.handle__drop__current}
            // onClick={handleToggleDropList}
          >
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

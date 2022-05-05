import React, { useState } from 'react';

import styles from './Handle.module.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { dataTypes } from './../../../../constants/handleDataTypes';

const Handle = () => {
  const [dropListOpen, setDropListOpen] = useState(false);

  const handleToggleDropList = () => {
    setDropListOpen((p) => !p);
  };

  return (
    <div className={styles.container}>
      <div className={styles.handle}>
        <form className={styles.handle__search}>
          <input
            placeholder="Search your product"
            className={styles.handle__search__input}
          />
          <button className={styles.handle__search__btn}>
            <AiOutlineSearch />
          </button>
        </form>
        <div className={styles.handle__drop}>
          <div
            className={styles.handle__drop__current}
            onClick={handleToggleDropList}
          >
            <span>Featured</span>
            <MdKeyboardArrowDown />
          </div>
          <ul
            className={`${styles.handle__drop__list} ${
              dropListOpen ? styles.show : ''
            }`}
          >
            {dataTypes.map(({ id, value, sort }) => (
              <li key={id} className={styles.handle__drop__list__item}>
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

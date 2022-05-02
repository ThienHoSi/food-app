import React from 'react';

import styles from './Nav.module.scss';
import { TiHome } from 'react-icons/ti';
import { GiKnifeFork } from 'react-icons/gi';
import { MdReviews } from 'react-icons/md';

const Nav = ({ isMenu }) => {
  return (
    <nav className={isMenu ? styles.menu__nav : styles.nav}>
      <ul>
        <li>
          <a href="/">
            <span>
              <TiHome />
            </span>
            Home
          </a>
        </li>
        <li>
          <a href="/">
            <span>
              <GiKnifeFork />
            </span>
            Order Online
          </a>
        </li>
        <li>
          <a href="/">
            <span>
              <MdReviews />
            </span>
            Reviews
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

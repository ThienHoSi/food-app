import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Nav.module.scss';
import { TiHome } from 'react-icons/ti';
import { GiKnifeFork } from 'react-icons/gi';

const Nav = ({ isMenu }) => {
  return (
    <nav className={isMenu ? styles.menu__nav : styles.nav}>
      <ul>
        <Link to="/home">
          <li>
            <span>
              <TiHome />
            </span>
            Home
          </li>
        </Link>
        <Link to="/shop/best-foods">
          <li>
            <span>
              <GiKnifeFork />
            </span>
            Order Online
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;

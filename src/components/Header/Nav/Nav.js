import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Nav.module.scss';
import { TiHome } from 'react-icons/ti';
import { GiKnifeFork } from 'react-icons/gi';
import { MdReviews } from 'react-icons/md';

const Nav = ({ isMenu }) => {
  return (
    <nav className={isMenu ? styles.menu__nav : styles.nav}>
      <ul>
        <Link to="/">
          <li>
            <span>
              <TiHome />
            </span>
            Home
          </li>
        </Link>
        <Link to="/shop">
          <li>
            <span>
              <GiKnifeFork />
            </span>
            Order Online
          </li>
        </Link>
        <Link to="/detail-product">
          <li>
            <span>
              <MdReviews />
            </span>
            Reviews
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;

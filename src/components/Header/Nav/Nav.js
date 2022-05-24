import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Nav.module.scss';
import { TiHome } from 'react-icons/ti';
import { GiKnifeFork } from 'react-icons/gi';

const Nav = ({ isMenu, setOpen }) => {
  const navigate = useNavigate();

  const handleToHome = () => {
    navigate('/home');
    if (isMenu) {
      setOpen(false);
    }
  };

  const handleToShop = () => {
    navigate('/shop/best-foods');
    if (isMenu) {
      setOpen(false);
    }
  };

  return (
    <nav className={isMenu ? styles.menu__nav : styles.nav}>
      <ul>
          <li onClick={handleToHome}>
            <span>
              <TiHome />
            </span>
            Home
          </li>
        <li onClick={handleToShop}>
          <span>
            <GiKnifeFork />
          </span>
          Order Online
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

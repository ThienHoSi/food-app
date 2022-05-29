import React from 'react';
import { GiKnifeFork } from 'react-icons/gi';
import { TiHome } from 'react-icons/ti';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchProducts } from '../../../features/ShopContent/thunk';
import styles from './Nav.module.scss';

const Nav = ({ isMenu, setOpen }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleToHome = () => {
    navigate('/home');
    if (isMenu) {
      setOpen(false);
    }
  };

  const handleToShop = () => {
    navigate('/shop/best-foods');
    dispatch(fetchProducts({ name: 'best-foods' }));
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

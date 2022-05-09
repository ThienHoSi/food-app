import React, { useEffect, useState } from 'react';

import styles from './Header.module.scss';
import { CgMenuLeft, CgClose } from 'react-icons/cg';
import { MdAccountCircle, MdShoppingCart } from 'react-icons/md';
import { RiLogoutBoxRLine, RiAccountPinBoxFill } from 'react-icons/ri';
import { AiOutlineTags } from 'react-icons/ai';
import Nav from './Nav/Nav';
import Logo from '../../UI/Logo/Logo';
import Cart from '../Cart/Cart';
import useWindowSize from '../../hooks/useWindowSize';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [headerActive, setHeaderActive] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size, menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 16) {
        setHeaderActive(true);
      } else {
        setHeaderActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggle = () => {
    setMenuOpen((p) => !p);
  };

  const menuToggle = !menuOpen ? (
    <CgMenuLeft onClick={handleToggle} />
  ) : (
    <CgClose onClick={handleToggle} />
  );

  return (
    <header className={`${styles.header} ${headerActive && styles.active}`}>
      <div className={styles.header__menu}>
        <div className={styles.header__menu__toggle}>{menuToggle}</div>
        <aside
          className={`${styles.header__menu__nav} ${menuOpen && styles.show}`}
        >
          <div className={styles.header__menu__nav__account}>
            <a href="/">
              <MdAccountCircle />
              Sign In
            </a>
            {/* <span>Log Out</span> */}
          </div>
          <Nav isMenu />
        </aside>
      </div>
      <div className={styles.header__grid}>
        <div className={styles.header__grid__left}>
          <div className={styles.header__grid__left__logo}>
            <Logo />
          </div>
          <Nav />
        </div>
        <div className={styles.header__grid__right}>
          <div
            className={styles.header__grid__right__cart}
            onClick={() => setShowCart(true)}
          >
            <MdShoppingCart />
            <div className={styles.header__grid__right__cart__qnt}>0</div>
          </div>
          <a href="/" className={styles.header__grid__right__account}>
            <MdAccountCircle />
            <span>Sign In</span>
            <ul className={styles.header__grid__right__account__info}>
              <li>
                <RiAccountPinBoxFill />
                <span>My account</span>
              </li>
              <li>
                <AiOutlineTags />
                <span>My cart</span>
              </li>
              <li>
                <RiLogoutBoxRLine />
                <span>Logout</span>
              </li>
            </ul>
          </a>
        </div>
      </div>
      <Cart show={showCart} setShow={setShowCart} />
    </header>
  );
};

export default Header;

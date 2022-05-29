import { signOut } from 'firebase/auth';
import { useContext, useEffect, useState } from 'react';
import { AiOutlineTags } from 'react-icons/ai';
import { CgClose, CgMenuLeft } from 'react-icons/cg';
import { MdAccountCircle, MdShoppingCart } from 'react-icons/md';
import { RiAccountPinBoxFill, RiLogoutBoxRLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { cartProductsSelector } from '../../app/selectors';
import { auth } from '../../configs/firebaseConfig';
import { AuthContext } from '../../contexts/AuthContext';
import useWindowSize from '../../hooks/useWindowSize';
import Logo from '../../UI/Logo/Logo';
import Cart from '../Cart';
import Dialog from '../Dialog';
import styles from './Header.module.scss';
import Nav from './Nav/Nav';

const Header = () => {
  const { user, setUser, hasHeader } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [totalQnt, setTotalQnt] = useState(0);
  const [headerActive, setHeaderActive] = useState(false);
  const [isShowDialog, setIsShowDialog] = useState(false);

  const cartProducts = useSelector(cartProductsSelector);

  const size = useWindowSize();
  const navigate = useNavigate();

  const ToggleCart = () => {
    user && setShowCart(true);
    !user && setIsShowDialog(true);
  };

  useEffect(() => {
    const totaQnt = cartProducts.reduce(
      (accu, product) => accu + product.qnt,
      0
    );
    setTotalQnt(totaQnt);
  }, [cartProducts]);

  const handleToLoginPage = () => {
    navigate('/login');
    setMenuOpen(false);
  };

  const handleLogOut = () => {
    signOut(auth).then(() => {
      setUser(false);
    });
  };

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
    <header
      className={`${styles.header} ${headerActive && styles.active}`}
      style={{ display: hasHeader ? 'flex' : 'none' }}
    >
      <div className={styles.header__menu}>
        <div className={styles.header__menu__toggle}>{menuToggle}</div>
        <aside
          className={`${styles.header__menu__nav} ${menuOpen && styles.show}`}
        >
          {user ? (
            <div className={styles.header__menu__nav__account}>
              <div className={styles.header__menu__nav__account__user}>
                <img
                  src={user.photoURL}
                  alt="avatar"
                  className={styles.header__menu__nav__account__user__avatar}
                />
                <span className={styles.header__menu__nav__account__user__name}>
                  {user.displayName}
                </span>
              </div>
              <span
                onClick={handleLogOut}
                className={styles.header__menu__nav__account__logout}
              >
                Log Out
              </span>
            </div>
          ) : (
            <div className={styles.header__menu__nav__account}>
              <span
                onClick={handleToLoginPage}
                className={styles.header__menu__nav__account__signin}
              >
                <MdAccountCircle />
                Sign In
              </span>
            </div>
          )}
          <Nav isMenu setOpen={setMenuOpen} />
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
            onClick={ToggleCart}
          >
            <MdShoppingCart />
            <div className={styles.header__grid__right__cart__qnt}>
              {user ? totalQnt : 0}
            </div>
          </div>
          {user ? (
            <div className={styles.header__grid__right__account}>
              <img
                src={user.photoURL}
                alt="avatar"
                className={styles.header__grid__right__account__avatar}
              />
              <div className={styles.header__grid__right__account__name}>
                {user.displayName}
              </div>
              <ul className={styles.header__grid__right__account__info}>
                <li>
                  <RiAccountPinBoxFill />
                  <span>My account</span>
                </li>
                <li>
                  <AiOutlineTags />
                  <span>My cart</span>
                </li>
                <li onClick={handleLogOut}>
                  <RiLogoutBoxRLine />
                  <span>Logout</span>
                </li>
              </ul>
            </div>
          ) : (
            <div>
              <Link to="/login" className={styles.header__grid__right__account}>
                <MdAccountCircle />
                <span>Sign In</span>
              </Link>
            </div>
          )}
        </div>
      </div>
      <Cart show={showCart} setShow={setShowCart} />
      <Dialog isShow={isShowDialog} setIsShow={setIsShowDialog} />
    </header>
  );
};

export default Header;

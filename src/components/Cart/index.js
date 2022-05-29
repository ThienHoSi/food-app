import { doc, onSnapshot } from 'firebase/firestore';
import { useContext, useEffect, useRef } from 'react';
import { CgClose } from 'react-icons/cg';
import { MdShoppingCart } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartProductsSelector } from '../../app/selectors';
import { db } from '../../configs/firebaseConfig';
import { AuthContext } from '../../contexts/AuthContext';
import usePrice from '../../hooks/usePrice';
import Button from '../../UI/Button/Button';
import emptyCart from './../../assets/img/common/empty_cart.png';
import styles from './Cart.module.scss';
import CartItems from './CartItems';
import { addToCart } from './CartSlice';

const Cart = ({ show, setShow }) => {
  const dispatch = useDispatch();
  const { user } = useContext(AuthContext);
  const cartProducts = useSelector(cartProductsSelector);
  const overlayRef = useRef();

  const totalPrice = usePrice();

  useEffect(() => {
    const clickOnOverlay = (e) => {
      if (e.target === overlayRef.current) {
        setShow(false);
      }
    };
    window.addEventListener('click', clickOnOverlay);

    return () => {
      window.removeEventListener('click', clickOnOverlay);
    };
  }, [show, setShow]);

  // get data from firebase
  useEffect(() => {
    if (user) {
      onSnapshot(doc(db, 'users', user.uid), (doc) => {
        if (doc.data()) {
          const cartData = doc.data().cart;
          dispatch(addToCart(cartData));
        }
      });
    }
  }, [dispatch, user]);

  return (
    <div className={`${styles.container} ${show ? styles.active : ''}`}>
      <div
        ref={overlayRef}
        className={`${styles.cart__overlay} ${show ? styles.active : ''}`}
      ></div>
      <div className={styles.cart}>
        <header className={styles.cart__header}>
          Your Cart
          <CgClose onClick={() => setShow(false)} />
        </header>
        {cartProducts.length <= 0 && (
          <div className={styles.cart__empty}>
            <div className={styles.cart__empty__box}>
              <img
                className={styles.cart__empty__box__img}
                src={emptyCart}
                alt="Empty Cart"
              />
            </div>
            <span className={styles.cart__empty__title}>
              Your Cart Is Empty
            </span>
            <Link
              to="/shop/best-foods"
              onClick={() => setShow(false)}
              className={styles.cart__empty__btn}
            >
              Buy Now
            </Link>
          </div>
        )}
        <CartItems />
        <footer className={styles.cart__footer}>
          <div className={styles.cart__footer__total}>
            <span>Total</span>
            <span>${totalPrice}</span>
          </div>
          <div className={styles.cart__footer__btns}>
            <Button primary>
              <MdShoppingCart style={{ fontSize: '2rem', padding: 2 }} />
              checkout
            </Button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Cart;

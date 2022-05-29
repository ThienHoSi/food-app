import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { cartProductsSelector } from '../../../app/selectors';
import { AuthContext } from '../../../contexts/AuthContext';
import useFirestoreProducts from '../../../hooks/useFirestoreProducts';
import CartItem from './CartItem';
import styles from './CartItems.module.scss';

const CartItems = () => {
  const cartProducts = useSelector(cartProductsSelector);
  const { user } = useContext(AuthContext);
  const { addToFirestore, removeFromFirestore } = useFirestoreProducts();

  const handleAddToFirestore = (product, action) => {
    addToFirestore(user.uid, {
      productInfo: product,
      action: action,
    });
  };

  const handleRemoveFromFirestore = (product) => {
    removeFromFirestore(user.uid, {
      productInfo: product,
    });
  };

  return (
    <ul className={styles.products}>
      {cartProducts.map((product) => (
        <CartItem
          key={product.id}
          product={product}
          handleAddToFirestore={handleAddToFirestore}
          handleRemoveFromFirestore={handleRemoveFromFirestore}
        />
      ))}
    </ul>
  );
};

export default CartItems;

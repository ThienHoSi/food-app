import { CgMathMinus, CgMathPlus, CgTrashEmpty } from 'react-icons/cg';
import styles from './CartItem.module.scss';

const CartItem = (props) => {
  const { product, handleAddToFirestore, handleRemoveFromFirestore } = props;
  const { img, name, price, qnt } = product;

  const onHandleAddToFirestore = (type) => {
    handleAddToFirestore(product, type);
  };

  const onHandleRemoveFromFirestore = () => {
    handleRemoveFromFirestore(product);
  };

  return (
    <li className={styles.product}>
      <div className={styles.product__content}>
        <img src={img} alt={name} className={styles.product__content__img} />
        <div className={styles.product__content__descr}>
          <h3 className={styles.product__content__descr__name}>{name}</h3>
          <span className={styles.product__content__descr__price}>
            ${price}
          </span>
          <div className={styles.product__content__descr__handle}>
            <button onClick={() => onHandleAddToFirestore('decrease')}>
              <CgMathMinus />
            </button>
            <span className={styles.product__content__descr__handle__qnt}>
              {qnt}
            </span>
            <button onClick={() => onHandleAddToFirestore('increase')}>
              <CgMathPlus />
            </button>
          </div>
        </div>
      </div>
      <button
        onClick={() => onHandleRemoveFromFirestore()}
        className={styles.product__delete}
      >
        <CgTrashEmpty />
      </button>
    </li>
  );
};

export default CartItem;

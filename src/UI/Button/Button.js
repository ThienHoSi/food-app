import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchProducts } from '../../features/ShopContent/thunk';

import styles from './Button.module.scss';

const Button = ({ primary, stSize, mdSize, page, setShow, children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleToShop = () => {
    if (page && page === 'shop') {
      navigate('/shop/best-foods');
      dispatch(fetchProducts({ name: 'best-foods' }));
    }
    if (setShow) {
      setShow(false);
    }
  };

  return (
    <button
      onClick={handleToShop}
      className={`${styles.button} ${primary ? styles.primary : ''} ${
        stSize ? styles.stSize : ''
      } ${mdSize ? styles.mdSize : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;

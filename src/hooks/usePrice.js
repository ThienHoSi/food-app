import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { cartProductsSelector } from '../app/selectors';

const usePrice = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const cartProducts = useSelector(cartProductsSelector);

  useEffect(() => {
    const totalPrice = cartProducts.reduce(
      (accu, product) => accu + product.price * product.qnt,
      0
    );
    const fixedTotalPrice = totalPrice.toFixed(2);
    setTotalPrice(fixedTotalPrice);
  }, [cartProducts]);

  return totalPrice;
};

export default usePrice;

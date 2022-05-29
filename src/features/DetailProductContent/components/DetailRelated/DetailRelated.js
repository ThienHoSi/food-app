import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { relatedProductsSelector } from '../../../../app/selectors';
import Product from '../../../ShopContent/ShopProducts/Product/Product';
import { fetchRelatedProducts } from '../../../ShopContent/thunk';
import styles from './DetailRelated.module.scss';
import Dialog from '../../../../components/Dialog';

const DetailRelated = () => {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [isShowDialog, setIsShowDialog] = useState(false);
  const productList = useSelector(relatedProductsSelector);
  const { name, id } = useParams();

  const openDialog = () => {
    setIsShowDialog(true);
  };

  useEffect(() => {
    dispatch(fetchRelatedProducts({ name: name }));
  }, [dispatch, name]);

  useEffect(() => {
    if (productList.length <= 0) return;

    const productFilter = productList.filter((product) => product.id !== id);
    const randomProducts = [];

    for (let i = 0; i < 5; i++) {
      const num = Math.floor(Math.random() * productList.length);
      randomProducts.push(productFilter[num]);
      productFilter.splice(num, 1);
    }
    setProducts(randomProducts);
  }, [productList, id]);

  return (
    <section className={styles.container}>
      <div className={styles.relatedProducts}>
        <h2 className={styles.relatedProducts__title}>Related Products</h2>
        <div className={styles.relatedProducts__content}>
          {products &&
            products.map((item, idx) => (
              <Product openDialog={openDialog} key={idx} {...item} />
            ))}
        </div>
      </div>
      <Dialog isShow={isShowDialog} setIsShow={setIsShowDialog} />
    </section>
  );
};

export default DetailRelated;

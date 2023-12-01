import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  productListSelector,
  shopStatusSelector,
} from '../../../app/selectors';
import Dialog from '../../../components/Dialog';
import EmptyShop from './EmptyShop/EmptyShop';
import Handle from './Handle/Handle';
import Pagination from './Pagination/Pagination';
import Product from './Product/Product';
import styles from './ShopProducts.module.scss';

const ShopProducts = () => {
  const productList = useSelector(productListSelector);
  const status = useSelector(shopStatusSelector);
  const [isShowDialog, setIsShowDialog] = useState(false);

  const openDialog = () => {
    setIsShowDialog(true);
  };

  return (
    <section className={styles.container}>
      <Handle />
      {status === 'pending' && (
        <div className={styles.loading}>
          <span />
        </div>
      )}
      {status === 'fulfilled' && (
        <div className={styles.shopProducts}>
          {productList && productList.length <= 0 && <EmptyShop />}
          {productList &&
            productList.map((item, idx) => (
              <Product openDialog={openDialog} key={idx} {...item} />
            ))}
        </div>
      )}
      {productList.length > 0 && <Pagination />}
      <Dialog isShow={isShowDialog} setIsShow={setIsShowDialog} />
    </section>
  );
};

export default ShopProducts;

import { useState } from 'react';

import styles from './ShopProducts.module.scss';
import Dialog from '../../../components/Dialog';
import Handle from './Handle/Handle';
import Product from './Product/Product';
import Pagination from './Pagination/Pagination';
import { useSelector } from 'react-redux';
import {
  loadingStatusSelector,
  productListSelector,
} from '../../../app/selectors';
import EmptyShop from './EmptyShop/EmptyShop';

const ShopProducts = () => {
  const productList = useSelector(productListSelector);
  const status = useSelector(loadingStatusSelector);
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

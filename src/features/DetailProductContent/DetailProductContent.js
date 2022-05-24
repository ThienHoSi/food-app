import { Fragment, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { detailProductSelector } from '../../app/selectors';
import { fetchProductDetail } from '../ShopContent/thunk';
import styles from './DetailProductContent.module.scss';

import DetailImage from './components/DetailImage/DetailImage';
import DetailInfo from './components/DetailInfo';
import DetailTab from './components/DetailTab/DetailTab';
import DetailRelated from './components/DetailRelated/DetailRelated';
import { AuthContext } from '../../Context/AuthContext';

const DetailProductContent = () => {
  const { name, id } = useParams();
  const dispatch = useDispatch();
  const detailProduct = useSelector(detailProductSelector);
  const { setHasHeader } = useContext(AuthContext);

  useEffect(() => {
    setHasHeader(true);
  }, [setHasHeader]);

  useEffect(() => {
    const params = { id: id };
    dispatch(fetchProductDetail({ name: name, params }));
  }, [id, dispatch, name]);
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.product}>
          {detailProduct && (
            <Fragment>
              <DetailImage product={detailProduct} />
              <DetailInfo product={detailProduct} />
            </Fragment>
          )}
        </div>
        <DetailTab />
        <DetailRelated />
      </div>
    </section>
  );
};

export default DetailProductContent;

import queryString from 'query-string';
import { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import Filter from './Filter/Filter';
import { onShopReload } from './Filter/FilterSlice';
import styles from './ShopContent.module.scss';
import ShopProducts from './ShopProducts/ShopProducts';
import { fetchProducts } from './thunk';

const ShopContent = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { setHasHeader } = useContext(AuthContext);

  useEffect(() => {
    setHasHeader(true);
  }, [setHasHeader]);

  window.addEventListener('load', () => {
    const param = location.search;

    if (param) {
      const params = JSON.parse(
        '{"' +
          decodeURI(param.slice(1).replace(/&/g, '","').replace(/=/g, '":"')) +
          '"}'
      );
      dispatch(fetchProducts({ name: name, params })).then(() => {
        navigate({
          pathname: `/shop/${name}`,
          search: param,
        });
      });
    } else {
      dispatch(fetchProducts({ name: name })).then(() => {
        navigate({
          pathname: `/shop/${name}`,
          search: queryString.stringify({
            _limit: 16,
          }),
        });
      });
      dispatch(onShopReload());
    }
  });

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <Filter />
        <ShopProducts />
      </div>
    </section>
  );
};

export default ShopContent;

import { useEffect } from 'react';
import queryString from 'query-string';
import styles from './ShopContent.module.scss';
import Filter from './Filter/Filter';
import ShopProducts from './ShopProducts/ShopProducts';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './thunk';

const ShopContent = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
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
    }
  }, [dispatch, location.search, name, navigate]);

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

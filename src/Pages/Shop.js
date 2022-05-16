import React, { Fragment } from 'react';
import ShopBanner from '../components/ShopBanner/ShopBanner';
import ShopContent from '../features/ShopContent/ShopContent';
import useScrollTop from '../hooks/useScrollTop';

const Shop = () => {
  useScrollTop();

  return (
    <Fragment>
      <ShopBanner />
      <ShopContent />
    </Fragment>
  );
};

export default Shop;

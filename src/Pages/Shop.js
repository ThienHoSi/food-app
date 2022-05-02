import React, { Fragment } from 'react';
import ShopBanner from '../components/ShopBanner/ShopBanner';
import ShopProducts from '../components/ShopProducts/ShopProducts';

const Shop = () => {
  return (
    <Fragment>
      <ShopBanner />
      <ShopProducts />
    </Fragment>
  );
};

export default Shop;

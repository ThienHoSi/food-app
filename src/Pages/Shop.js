import React, { Fragment } from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ShopBanner from '../components/ShopBanner/ShopBanner';
import ShopContent from '../features/ShopContent/ShopContent';
import useScrollTop from '../hooks/useScrollTop';

const Shop = () => {
  useScrollTop();

  return (
    <Fragment>
      <Header />
      <ShopBanner />
      <ShopContent />
      <Footer />
    </Fragment>
  );
};

export default Shop;

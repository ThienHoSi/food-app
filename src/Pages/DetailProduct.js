import React, { Fragment } from 'react';
import DetailProductContent from '../features/DetailProductContent/DetailProductContent';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ShopBanner from '../components/ShopBanner/ShopBanner';
import useScrollTop from '../hooks/useScrollTop';

const DetailProduct = () => {
  useScrollTop();

  return (
    <Fragment>
      <Header />
      <ShopBanner />
      <DetailProductContent />
      <Footer />
    </Fragment>
  );
};

export default DetailProduct;

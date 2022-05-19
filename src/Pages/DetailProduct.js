import React, { Fragment } from 'react';
import DetailProductContent from '../features/DetailProductContent/DetailProductContent';
import ShopBanner from '../components/ShopBanner/ShopBanner';
import useScrollTop from '../hooks/useScrollTop';

const DetailProduct = () => {
  useScrollTop();
  return (
    <Fragment>
      <ShopBanner />
      <DetailProductContent />
    </Fragment>
  );
};

export default DetailProduct;

import React, { Fragment } from 'react';
import DetailProductContent from '../components/DetailProductContent/DetailProductContent';
import ShopBanner from '../components/ShopBanner/ShopBanner';

const DetailProduct = () => {
  return (
    <Fragment>
      <ShopBanner />
      <DetailProductContent />
    </Fragment>
  );
};

export default DetailProduct;

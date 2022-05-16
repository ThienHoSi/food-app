import React, { Fragment } from 'react';
import Banner from '../components/HomeBanner/HomeBanner';
import BottomBanner from '../components/BottomBanner/BottomBanner';
import Category from '../components/Category/Category';
import Delivery from '../components/Delivery/Delivery';
import HomeProducts from '../components/HomeProducts/HomeProducts';
import HomeThump from '../components/HomeThump/HomeThump';
import HomeWork from '../components/HomeWork/HomeWork';
import useScrollTop from '../hooks/useScrollTop';

const Home = () => {
  useScrollTop();

  return (
    <Fragment>
      <Banner />
      <HomeWork />
      <Category />
      <Delivery />
      <HomeProducts />
      <HomeThump />
      <BottomBanner />
    </Fragment>
  );
};

export default Home;

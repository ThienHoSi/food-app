import { Fragment, useContext, useEffect } from 'react';
import Banner from '../components/HomeBanner/HomeBanner';
import BottomBanner from '../components/BottomBanner/BottomBanner';
import Category from '../components/Category/Category';
import Delivery from '../components/Delivery/Delivery';
import HomeProducts from '../components/HomeProducts/HomeProducts';
import HomeThump from '../components/HomeThump/HomeThump';
import HomeWork from '../components/HomeWork/HomeWork';
import { AuthContext } from '../Context/AuthContext';

const Home = () => {
  const { setHasHeader } = useContext(AuthContext);

  useEffect(() => {
    setHasHeader(true);
  }, [setHasHeader]);

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

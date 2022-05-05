import { Fragment } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// import Home from './Pages/Home';
import Shop from './Pages/Shop';
import DetailProduct from './Pages/DetailProduct';
import ScrollTopButton from './../src/UI/ScrollTopButton/ScrollTopButon';

function App() {
  return (
    <Fragment>
      <Header />
      {/* <Home /> */}
      <Shop />
      {/* <DetailProduct /> */}
      <ScrollTopButton />
      <Footer />
    </Fragment>
  );
}

export default App;

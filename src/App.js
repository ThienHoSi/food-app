import { Fragment } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// import Home from './Pages/Home';
import Shop from './Pages/Shop';
import ScrollTopButton from './../src/UI/ScrollTopButton/ScrollTopButon';

function App() {
  return (
    <Fragment>
      <Header />
      {/* <Home /> */}
      <Shop />
      <ScrollTopButton />
      <Footer />
    </Fragment>
  );
}

export default App;

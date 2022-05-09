import { Fragment, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollTopButton from './UI/ScrollTopButton/ScrollTopButon';

const Home = lazy(() => import('./Pages/Home'));
const Shop = lazy(() => import('./Pages/Shop'));
const DetailProduct = lazy(() => import('./Pages/DetailProduct'));

function App() {
  return (
    <Fragment>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/detail-product" element={<DetailProduct />} />
          </Routes>
          <ScrollTopButton />
        </Suspense>
      </Router>
    </Fragment>
  );
}

export default App;

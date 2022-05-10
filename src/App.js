import { Fragment, Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import ScrollTopButton from './UI/ScrollTopButton/ScrollTopButon';

const DetailProduct = lazy(() => import('./Pages/DetailProduct'));
const Home = lazy(() => import('./Pages/Home'));
const Shop = lazy(() => import('./Pages/Shop'));

function App() {
  return (
    <Fragment>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/shop" element={<Shop />}>
              <Route path=":name" element={<Outlet />} />
            </Route>
            <Route path="/detail-product" element={<DetailProduct />}>
              <Route path=":productId" element={<Outlet />} />
            </Route>
          </Routes>
          <ScrollTopButton />
        </Suspense>
      </Router>
    </Fragment>
  );
}

export default App;

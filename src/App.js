import { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import ScrollTopButton from './UI/ScrollTopButton/ScrollTopButon';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import DetailProductContent from './features/DetailProductContent/DetailProductContent';
// import ShopContent from './features/ShopContent/ShopContent';

const DetailProduct = lazy(() => import('./Pages/DetailProduct'));
const Home = lazy(() => import('./Pages/Home'));
const Shop = lazy(() => import('./Pages/Shop'));

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/:name/:id" element={<DetailProduct />} />
            <Route path="/shop/:name" element={<Shop />} />
          </Routes>
          <Footer />
          <ScrollTopButton />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;

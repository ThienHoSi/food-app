import { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import ScrollTopButton from './UI/ScrollTopButton/ScrollTopButton';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ApiProvider from './Context/ApiContext';

// const DetailProduct = lazy(() => import('./Pages/DetailProduct'));
// const Home = lazy(() => import('./Pages/Home'));
// const Shop = lazy(() => import('./Pages/Shop'));
const LoginPage = lazy(() => import('./Pages/LoginPage'));

function App() {
  return (
    <div className="App">
      <Router>
        <ApiProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <Header />
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              {/* <Route path="/home" element={<Home />} />
              <Route path="/shop/:name" element={<Shop />} />
              <Route path="/:name/:id" element={<DetailProduct />} /> */}
              <Route path="/login" element={<LoginPage />} />
            </Routes>
            <Footer />
            <ScrollTopButton />
          </Suspense>
        </ApiProvider>
      </Router>
    </div>
  );
}

export default App;

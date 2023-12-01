import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ApiProvider from './contexts/ApiContext';
import AuthProvider from './contexts/AuthContext';
import ScrollTopButton from './UI/ScrollTopButton/ScrollTopButton';

const DetailProduct = lazy(() => import('./Pages/DetailProduct'));
const Home = lazy(() => import('./Pages/Home'));
const Shop = lazy(() => import('./Pages/Shop'));
const LoginPage = lazy(() => import('./Pages/LoginPage'));
const NotFound = lazy(() => import('./components/NotFound'));

function App() {
  return (
    <div className="App">
      <Router>
        <ApiProvider>
          <AuthProvider>
            <Suspense fallback={<div>Loading...</div>}>
              <Header />
              <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Home />} />
                <Route path="/shop/:name" element={<Shop />} />
                <Route path="/shop/:name/:id" element={<DetailProduct />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
              <ScrollTopButton />
            </Suspense>
          </AuthProvider>
        </ApiProvider>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;

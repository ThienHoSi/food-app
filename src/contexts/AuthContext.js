import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { auth } from '../configs/firebaseConfig';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [hasHeader, setHasHeader] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubcribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({
          displayName,
          email,
          uid,
          photoURL,
        });

        if (pathname.includes('login')) {
          navigate('/home');
        }
      }
    });
    return () => {
      unsubcribed();
    };
  }, [navigate, pathname]);

  return (
    <AuthContext.Provider value={{ user, setUser, hasHeader, setHasHeader }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

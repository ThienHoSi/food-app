import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../configs/firebaseConfig';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [hasHeader, setHasHeader] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubcribed = onAuthStateChanged(auth, (user) => {
      console.log({ user });
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({
          displayName,
          email,
          uid,
          photoURL,
        });
        navigate('/home');
      }
    });
    return () => {
      unsubcribed();
    };
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ user, setUser, hasHeader, setHasHeader }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  FacebookAuthProvider,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: 'food-appl',
  storageBucket: 'food-appl.appspot.com',
  messagingSenderId: '349694974343',
  appId: '1:349694974343:web:debc774d743a0ab6105b22',
  measurementId: 'G-12W0DP88FM',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const fbProvider = new FacebookAuthProvider();
const ggProvider = new GoogleAuthProvider();

export { db, auth, analytics, fbProvider, ggProvider };

export default firebaseConfig;

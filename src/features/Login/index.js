import { signInWithPopup } from 'firebase/auth';
import { useContext, useEffect } from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import loginThumpSVG from '../../assets/img/svg/loginThump.svg';
import { auth, fbProvider, ggProvider } from '../../configs/firebaseConfig';
import { AuthContext } from '../../Context/AuthContext';
import LoginForm from './components';
import styles from './Login.module.scss';
import './Login.scss';

const Login = () => {
  const { setHasHeader } = useContext(AuthContext);

  const handleClosedFeature = () => {
    toast.info(
      'This feature is currently closed. Try login with Google or Facebook',
      {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        hideProgressBar: true,
        pauseOnHover: false,
      }
    );
  };

  const handleFbLogin = () => {
    signInWithPopup(auth, fbProvider);
  };
  const handleGgLogin = () => {
    signInWithPopup(auth, ggProvider);
  };

  useEffect(() => {
    setHasHeader(false);
  }, [setHasHeader]);

  return (
    <div className={styles.container}>
      <ToastContainer />
      <div className={styles.wrapper}>
        <div className={styles.thump}>
          <img
            className={styles.thump__img}
            src={loginThumpSVG}
            alt="LoginThump"
          />
        </div>
        <div className={styles.login}>
          <h2 className={styles.login__heading}>JOIN WITH US</h2>
          <p className={styles.login__title}>
            Don't have an account?
            <strong onClick={handleClosedFeature}>Create an account</strong>
          </p>
          <LoginForm />
          <div className={styles.login__separate}>
            <span className={styles.login__separate__text}>OR</span>
          </div>
          <div className={styles.login__socials}>
            <button
              onClick={handleGgLogin}
              className={styles.login__socials__btn}
            >
              <FcGoogle />
              Log in with Google
            </button>
            <button
              onClick={handleFbLogin}
              className={styles.login__socials__btn}
            >
              <AiFillFacebook />
              Log in with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

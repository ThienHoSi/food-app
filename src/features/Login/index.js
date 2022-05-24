import styles from './Login.module.scss';
import './Login.scss';
import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';
import loginThumpSVG from '../../assets/img/svg/loginThump.svg';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import LoginForm from './components';

const Login = () => {
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
            <button className={styles.login__socials__btn}>
              <FcGoogle />
              Log in with Google
            </button>
            <button className={styles.login__socials__btn}>
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

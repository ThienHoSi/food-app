import { useNavigate } from 'react-router-dom';

import styles from './Dialog.module.scss';

const Dialog = (props) => {
  const { isShow, setIsShow } = props;
  const navigate = useNavigate();

  const hideDialog = () => {
    setIsShow(false);
  };

  const handleToLoginPage = () => {
    setIsShow(false);
    navigate('/login');
  };

  return (
    <div className={`${styles.dialog} ${isShow ? styles.show : ''}`}>
      <div className={styles.dialog__overlay} />
      <div className={styles.dialog__content}>
        <h2 className={styles.dialog__content__title}>Join with us</h2>
        <p className={styles.dialog__content__desc}>
          You are not signed in. Please sign in to use this feature!
        </p>
        <div className={styles.dialog__content__btns}>
          <button
            onClick={hideDialog}
            className={styles.dialog__content__btns__item}
          >
            Cancel
          </button>
          <button
            onClick={handleToLoginPage}
            className={styles.dialog__content__btns__item}
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;

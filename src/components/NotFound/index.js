import { useContext, useEffect } from 'react';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { Link } from 'react-router-dom';
import NotFoundSVG from '../../assets/img/svg/404.svg';
import { AuthContext } from '../../contexts/AuthContext';
import styles from './NotFound.module.scss';

const NotFound = () => {
  const { setHasHeader } = useContext(AuthContext);

  useEffect(() => {
    setHasHeader(false);
  }, [setHasHeader]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <h3 className={styles.desc}>opps... page not found</h3>
      <div className={styles.notfound}>
        <img
          src={NotFoundSVG}
          alt="404 Not Found"
          className={styles.notfound__img}
        />
      </div>
      <Link to="/home" className={styles.link}>
        <MdOutlineArrowBackIosNew />
        <span>Return to home</span>
      </Link>
    </div>
  );
};

export default NotFound;

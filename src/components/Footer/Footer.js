import React from 'react';
import Logo from '../../UI/Logo/Logo';

import styles from './Footer.module.scss';
import { ImFacebook2 } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';
import { FaTwitterSquare } from 'react-icons/fa';

import appStoreSVG from '../../assets/img/svg/appStore.svg';
import googlePlaySVG from '../../assets/img/svg/googlePlay.svg';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.footer__logo}>
          <Logo lgSize />
        </div>
        <div className={styles.footer__info}>
          <ul className={styles.footer__info__col}>
            <li>
              About Food
            </li>
            <li>
              Blog
            </li>
          </ul>
          <ul className={styles.footer__info__col}>
            <li>
              Be a Food Merchant
            </li>
            <li>
              Drive With Food
            </li>
          </ul>
          <ul className={styles.footer__info__col}>
            <li>
              Help
            </li>
            <li>
              FAQs
            </li>
          </ul>
          <div className={styles.footer__info__socials}>
              <ImFacebook2 />
              <BsInstagram />
              <FaTwitterSquare />
          </div>
        </div>
        <div className={styles.footer__foot}>
          <div className={styles.footer__foot__app}>
            <span>
              <img src={appStoreSVG} alt="App Store" />
            </span>
            <span>
              <img src={googlePlaySVG} alt="Google Play" />
            </span>
          </div>
          <div className={styles.footer__foot__copyright}>
            <span>&copy; 2022 Food</span>
            <span>
              Terms of Service <strong>&bull;</strong>Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

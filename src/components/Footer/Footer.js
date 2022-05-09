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
              <a href="/">About Food</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
          </ul>
          <ul className={styles.footer__info__col}>
            <li>
              <a href="/">Be a Food Merchant</a>
            </li>
            <li>
              <a href="/">Drive With Food</a>
            </li>
          </ul>
          <ul className={styles.footer__info__col}>
            <li>
              <a href="/">Help</a>
            </li>
            <li>
              <a href="/">FAQs</a>
            </li>
          </ul>
          <div className={styles.footer__info__socials}>
            <a href="/">
              <ImFacebook2 />
            </a>
            <a href="/">
              <BsInstagram />
            </a>
            <a href="/">
              <FaTwitterSquare />
            </a>
          </div>
        </div>
        <div className={styles.footer__foot}>
          <div className={styles.footer__foot__app}>
            <a href="/">
              <img src={appStoreSVG} alt="App Store" />
            </a>
            <a href="/">
              <img src={googlePlaySVG} alt="Google Play" />
            </a>
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

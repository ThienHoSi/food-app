import React, { useState } from 'react';

import styles from './HomeThump.module.scss';
import Modal from '../../UI/Modal/Modal';
import sandwichIMG from './../../assets/img/sandwich.jpg';
import { VscTriangleRight } from 'react-icons/vsc';

const HomeThump = () => {
  const [isShow, setIsShow] = useState(false);

  const toggleModal = () => {
    setIsShow((p) => !p);
  };

  return (
    <section className={styles.container}>
      <div
        className={styles.homeThump}
        style={{ backgroundImage: `url(${sandwichIMG})` }}
      >
        <div onClick={toggleModal} className={styles.homeThump__content}>
          <div className={styles.homeThump__content__main}>
            <span className={styles.homeThump__content__main__name}>
              Sandwich
            </span>
            <span className={styles.homeThump__content__main__price}>$45</span>
          </div>
          <button className={styles.homeThump__content__btn}>
            <VscTriangleRight />
          </button>
          <span className={styles.homeThump__content__gooey} />
          <span className={styles.homeThump__content__gooey} />
          <span className={styles.homeThump__content__gooey} />
        </div>
      </div>
      <Modal show={isShow} toggle={toggleModal}>
        <iframe
          className={`${styles.video} ${isShow ? styles.active : ''}`}
          src="https://www.youtube.com/embed/jyMAW-1O8uI?mute=1"
          title="YouTube video player"
          frameborder="0"
          allow="fullscreen; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </Modal>
    </section>
  );
};

export default HomeThump;

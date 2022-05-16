import React from 'react';

import styles from './Modal.module.scss';

const Modal = ({ show, toggle, children }) => {
  return (
    <div className={`${styles.modal} ${show ? styles.active : ''}`}>
      <div onClick={toggle} className={styles.modal__overlay}>
      </div>
        {children}
    </div>
  );
};

export const ModalHeader = ({ children }) => {
  return <header className={styles.modal__header}>{children}</header>;
};

export const ModalBody = ({ children }) => {
  return <div className={styles.modal__body}>{children}</div>;
};

export const ModalFooter = ({ children }) => {
  return <footer className={styles.modal__footer}>{children}</footer>;
};

export default Modal;

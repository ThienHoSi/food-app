import Button from '../../UI/Button/Button';
import styles from './Delivery.module.scss';
import smallDelivery from './../../assets/img/svg/smallDelivery.svg';
import bigDelivery from './../../assets/img/svg/bigDelivery.svg';

const Delivery = () => {
  return (
    <div className={styles.container}>
      <div className={styles.delivery}>
        <div className={styles.delivery__content}>
          <div className={styles.delivery__content__descr}>
            <h3 className={styles.delivery__content__descr__title}>Delivery</h3>
            <div className={styles.delivery__content__descr__subtitle}>
              A Moment Of Delivered
              <span> On Right Time And Place</span>
            </div>
            <p className={styles.delivery__content__descr__text}>
              Food G is a restaurant, bar and coffee roastery located on a busy
              corner site in Farringdon's Exmouth Market. With glazed frontage
              on two sides of the building, overlooking the market and a
              bustling London inteon.
            </p>
          </div>
          <div className={styles.delivery__content__contact}>
            <img src={smallDelivery} alt="Delivery Img" />
            <span>
              Delivery Order Num
              <strong>123-77777777</strong>
            </span>
              <Button primary stSize page="shop">
                ORDER NOW
              </Button>
          </div>
        </div>
        <div className={styles.delivery__img}>
          <img src={bigDelivery} alt="Delivery Img" />
        </div>
      </div>
    </div>
  );
};

export default Delivery;

import styles from './DetailInfo.module.scss';
import Button from '../../../../UI/Button/Button';
import { dataOptions } from '../../../../constants/dataOptions';
import { BsStarFill, BsStar } from 'react-icons/bs';
import { CgMathMinus, CgMathPlus } from 'react-icons/cg';
import { AiOutlineHeart } from 'react-icons/ai';
import { RiTruckLine, RiCalendarCheckLine } from 'react-icons/ri';
import { GoTag } from 'react-icons/go';

const DetailInfo = (props) => {
  const { paramName, handleFuncs, selectedRadio, product, price, qnt } = props;

  const { name, dsc, rate, country } = product ? product : '';
  const { handleOptionChange, handleDecreaseQnt, handleIncreaseQnt } =
    handleFuncs;

  const onOptionChange = (e, quantity) => {
    handleOptionChange(e, quantity);
  };

  return (
    <section className={styles.container}>
      <div className={styles.product}>
        <div className={styles.product__info}>
          <h1 className={styles.product__info__name}>{name}</h1>
          <span className={styles.product__info__rate}>
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            {rate === 5 ? <BsStarFill /> : <BsStar />}
          </span>
          <span className={styles.product__info__price}>${price}</span>
          <div className={styles.product__info__ca}>
            <span className={styles.product__info__ca__item}>
              Category:<strong>{paramName}</strong>
            </span>
            <span className={styles.product__info__ca__item}>
              Address:<strong>{country}</strong>
            </span>
          </div>
          <p className={styles.product__info__descr}>{dsc}</p>
          <form className={styles.product__info__form}>
            <span className={styles.product__info__form__title}>
              Choose your options
            </span>
            {dataOptions.map(({ content, quantity }) => (
              <label
                key={content}
                className={styles.product__info__form__checkbox}
              >
                <input
                  className={styles.product__info__form__checkbox__input}
                  checked={selectedRadio === content}
                  type="radio"
                  name="Radio"
                  value={content}
                  onChange={(e) => onOptionChange(e, quantity)}
                />
                {content}
              </label>
            ))}
          </form>
        </div>
        <div className={styles.button}>
          <div className={styles.button__handle}>
            <button
              onClick={handleDecreaseQnt}
              className={styles.button__handle__decr}
            >
              <CgMathMinus />
            </button>
            <span className={styles.button__handle__qnt}>{qnt}</span>
            <button
              onClick={handleIncreaseQnt}
              className={styles.button__handle__incr}
            >
              <CgMathPlus />
            </button>
          </div>
          <div className={styles.button__add}>
            <Button primary mdSize>
              ADD TO CART
            </Button>
            <button className={styles.button__add__like}>
              <AiOutlineHeart />
            </button>
          </div>
        </div>
        <div className={styles.commits}>
          <span className={styles.commits__commit}>
            <RiTruckLine />
            Free global shipping on all orders
          </span>
          <span className={styles.commits__commit}>
            <RiCalendarCheckLine />2 hours easy returns if you change your mind
          </span>
          <span className={styles.commits__commit}>
            <GoTag />
            Order before noon for same day dispatch
          </span>
        </div>
      </div>
    </section>
  );
};

export default DetailInfo;

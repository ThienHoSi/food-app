import { useContext, useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsStar, BsStarFill } from 'react-icons/bs';
import { CgMathMinus, CgMathPlus } from 'react-icons/cg';
import { GoTag } from 'react-icons/go';
import { RiCalendarCheckLine, RiTruckLine } from 'react-icons/ri';
import Dialog from '../../../../components/Dialog';
import { dataOptions } from '../../../../constants/dataOptions';
import { AuthContext } from '../../../../Context/AuthContext';
import styles from './DetailInfo.module.scss';

const DetailInfo = (props) => {
  const [isShowDialog, setIsShowDialog] = useState(false);
  const { user } = useContext(AuthContext);

  const { paramName, handleFuncs, selectedRadio, product, price, qnt } = props;

  const { name, dsc, rate, country } = product ? product : '';
  const { handleOptionChange, handleDecreaseQnt, handleIncreaseQnt } =
    handleFuncs;

  const onHandleAddToFirestore = () => {
    if (!user) {
      setIsShowDialog(true);
      return;
    }
  };

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
            <button
              onClick={onHandleAddToFirestore}
              className={styles.button__add__cart}
            >
              ADD TO CART
            </button>
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
      <Dialog isShow={isShowDialog} setIsShow={setIsShowDialog} />
    </section>
  );
};

export default DetailInfo;

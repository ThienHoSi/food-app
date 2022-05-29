import { useContext } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsCart3, BsStarFill } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { AuthContext } from '../../../../contexts/AuthContext';
import useFirestoreProducts from '../../../../hooks/useFirestoreProducts';
import LazyLoadImage from '../../../../utils/LazyLoadImage/LazyLoadImage';
import styles from './Product.module.scss';

const Product = (props) => {
  const navigate = useNavigate();
  const params = useParams();

  const { user } = useContext(AuthContext);
  const { addToFirestore } = useFirestoreProducts();

  const { id, img, name, dsc, price, rate, country, openDialog } = props;

  const handleAddToFirestore = () => {
    const productInfo = { id, img, name, dsc, price, country };

    if (!user) {
      openDialog();
      return;
    }

    addToFirestore(user.uid, {
      productInfo,
      action: 'increase',
    });

    toast.success('The product has been added to cart', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      hideProgressBar: false,
      pauseOnHover: true,
      progress: undefined,
      draggable: true,
      closeOnClick: true,
      theme: 'colored',
    });
  };

  const handleToDetail = (id) => {
    navigate(`/shop/${params.name}/${id}`);
  };

  return (
    <div className={styles.container}>
      <div id={id} className={styles.products}>
        <div className={styles.products__item}>
          <div
            className={styles.products__item__main}
            onClick={() => handleToDetail(id)}
          >
            <LazyLoadImage
              src={img}
              alt={name}
              className={styles.products__item__main__img}
            />
            <span className={styles.products__item__main__rate}>
              <BsStarFill />
              <strong>{rate}</strong>
            </span>
          </div>

          <div className={styles.products__item__btns}>
            <button>
              <AiOutlineHeart />
            </button>
            <button onClick={handleAddToFirestore}>
              <BsCart3 />
            </button>
          </div>
          <div
            className={styles.products__item__info}
            onClick={() => handleToDetail(id)}
          >
            <h1 className={styles.products__item__info__name}>{name}</h1>
            <p className={styles.products__item__info__descr}>{dsc}</p>
            <div className={styles.products__item__info__footer}>
              <span className={styles.products__item__info__footer__location}>
                <MdLocationPin />
                {country}
              </span>
              <span className={styles.products__item__info__footer__price}>
                ${price}
              </span>
            </div>
          </div>
          <span className={styles.products__item__favourite}>Favourite</span>
        </div>
      </div>
    </div>
  );
};

export default Product;

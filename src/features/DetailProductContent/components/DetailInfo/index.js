import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailInfo from './DetailInfo';

const DetailMain = (props) => {
  const { product } = props;
  const { price } = product || 0;

  const [fixedPrice, setFixedPrice] = useState(price);
  const [prevId, setPrevId] = useState('');
  const [qnt, setQnt] = useState(1);
  const [selectedRadio, setSelectedRadio] = useState('');

  const params = useParams();
  const { name, id } = params;
  const paramName = name.replace('-', ' ');

  const handleFuncs = {
    handleOptionChange: (e, quantity) => {
      switch (quantity) {
        case 2:
          setQnt(2);
          break;
        case 3:
          setQnt(3);
          break;
        case 5:
          setQnt(5);
          break;
        default:
          return price;
      }

      setSelectedRadio(e.target.value);
    },
    handleDecreaseQnt: () => {
      qnt > 1 && setQnt(qnt - 1);
    },
    handleIncreaseQnt: () => {
      setQnt(qnt + 1);
    },
  };

  useEffect(() => {
    if (id !== prevId) {
      setQnt(1);
      setFixedPrice(price || 0 * qnt);
      setSelectedRadio(null);
    } else if (qnt === 4 || qnt > 5) {
      setFixedPrice((price * qnt).toFixed(2));
      setSelectedRadio(null);
    } else if (qnt === 5) {
      setFixedPrice((price * 5).toFixed(2));
      setSelectedRadio('Buy 5 products');
    } else if (qnt === 3) {
      setFixedPrice((price * 3).toFixed(2));
      setSelectedRadio('Buy 3 products');
    } else if (qnt === 2) {
      setFixedPrice((price * 2).toFixed(2));
      setSelectedRadio('Buy 2 products');
    } else {
      setFixedPrice(((price || 0) * 1).toFixed(2));
      setSelectedRadio(null);
    }
    setPrevId(id);
  }, [id, price, prevId, qnt]);

  // const handleAddToFirestore = () => {

  // }

  return (
    <DetailInfo
      paramName={paramName}
      handleFuncs={handleFuncs}
      selectedRadio={selectedRadio}
      product={product}
      price={fixedPrice || price}
      qnt={qnt}
    />
  );
};

export default DetailMain;

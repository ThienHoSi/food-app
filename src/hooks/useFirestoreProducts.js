import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../configs/firebaseConfig';

const useFirestoreProducts = () => {
  const checkProductExist = (data, productInfo) => {
    return data.some((item) => item.id === productInfo.id);
  };

  const handleAddToCart = (data, productInfo, action) => {
    const isProductExist = checkProductExist(data, productInfo);

    if (isProductExist) {
      const index = data.findIndex((item) => item.id === productInfo.id);
      const productQnt = data[index].qnt;

      const updateProduct = {
        ...data[index],
        qnt:
          action === 'increase'
            ? productQnt + 1
            : action === 'decrease'
            ? productQnt - 1 || 1
            : productQnt + productInfo.qnt || 1,
      };

      data[index] = updateProduct;
      return data;
    } else {
      return data.concat({ ...productInfo, qnt: productInfo.qnt || 1 });
    }
  };

  const addToFirestore = async (uid, product) => {
    const docRef = doc(db, 'users', uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const { productInfo, action } = product || '';
      const cartData = docSnap.data().cart;

      productInfo &&
        (await setDoc(docRef, {
          cart: handleAddToCart(cartData, productInfo, action),
        }));
    } else {
      await setDoc(docRef, {
        cart: [],
      });
    }
  };

  const removeFromFirestore = async (uid, product, option) => {
    const docRef = doc(db, 'users', uid);
    const docSnap = await getDoc(docRef);

    const { productInfo } = product;
    const cartData = docSnap.data().cart;

    const index = cartData.findIndex((item) => item.id === productInfo.id);
    cartData.splice(index, 1);

    productInfo &&
      (await setDoc(docRef, {
        cart: cartData,
      }));
  };

  return { addToFirestore, removeFromFirestore };
};

export default useFirestoreProducts;

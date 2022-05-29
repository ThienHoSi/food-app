const productListSelector = (state) => state.shop.productList;
const shopStatusSelector = (state) => state.shop.status;
const productQntSelector = (state) => state.shop.productQnt;
const productIdSelector = (state) => state.shop.productId;

const prevNameSelector = (state) => state.filter.prevName;
const prevPriceSelector = (state) => state.filter.prevPrice;
const prevRateSelector = (state) => state.filter.prevRate;
const prevSearchSelector = (state) => state.filter.prevSearch;
const selectedRadioSelector = (state) => state.filter.selectedRadio;
const selectedDropSelector = (state) => state.filter.selectedDrop;
const nameActiveSelector = (state) => state.filter.nameActive;
const paramsSelector = (state) => state.filter.params;
const paginationActiveSelector = (state) => state.filter.paginationActive;

const detailProductStatusSelector = (state) => state.detail.status;
const nameSelector = (state) => state.detail.name;
const relatedProductsSelector = (state) => state.detail.relatedProducts;
const detailProductSelector = (state) => state.detail.detailProduct;

const cartProductsSelector = (state) => state.cart;

export {
  productListSelector,
  shopStatusSelector,
  productQntSelector,
  productIdSelector,
  paginationActiveSelector,
  prevNameSelector,
  prevPriceSelector,
  prevRateSelector,
  prevSearchSelector,
  selectedRadioSelector,
  selectedDropSelector,
  nameActiveSelector,
  paramsSelector,
  detailProductStatusSelector,
  nameSelector,
  relatedProductsSelector,
  detailProductSelector,
  cartProductsSelector,
};

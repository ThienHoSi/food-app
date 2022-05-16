const productListSelector = (state) => state.shop.productList;
const loadingStatusSelector = (state) => state.shop.status;
const totalRowsSelector = (state) => state.shop.totalRows;
const pageAndLimitSelector = (state) => state.shop.pageAndLimit;
const detailProductSelector = (state) => state.shop.detailProduct;
const productIdSelector = (state) => state.shop.productId;

const prevNameSelector = (state) => state.filter.prevName;
const prevPriceSelector = (state) => state.filter.prevPrice;
const prevRateSelector = (state) => state.filter.prevRate;
const selectedRadioSelector = (state) => state.filter.selectedRadio;
const selectedDropSelector = (state) => state.filter.selectedDrop;
const nameActiveSelector = (state) => state.filter.nameActive;

export {
  productListSelector,
  loadingStatusSelector,
  totalRowsSelector,
  pageAndLimitSelector,
  detailProductSelector,
  productIdSelector,
  prevNameSelector,
  prevPriceSelector,
  prevRateSelector,
  selectedRadioSelector,
  selectedDropSelector,
  nameActiveSelector,
};

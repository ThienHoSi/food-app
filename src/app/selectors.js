const productListSelector = (state) => state.shop.productList;
const loadingStatusSelector = (state) => state.shop.status;
const totalRowsSelector = (state) => state.shop.totalRows;

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
  prevNameSelector,
  prevPriceSelector,
  prevRateSelector,
  selectedRadioSelector,
  selectedDropSelector,
  nameActiveSelector,
};

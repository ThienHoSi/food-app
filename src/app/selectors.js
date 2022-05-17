const productListSelector = (state) => state.shop.productList;
const loadingStatusSelector = (state) => state.shop.status;
const totalRowsSelector = (state) => state.shop.totalRows;
const pageNumSelector = (state) => state.shop.pageNum;
const detailProductSelector = (state) => state.shop.detailProduct;
const productQntSelector = (state) => state.shop.productQnt;
const productIdSelector = (state) => state.shop.productId;
const paginationActiveSelector = (state) => state.shop.paginationActive;

const prevNameSelector = (state) => state.filter.prevName;
const prevPriceSelector = (state) => state.filter.prevPrice;
const prevRateSelector = (state) => state.filter.prevRate;
const prevSearchSelector = (state) => state.filter.prevSearch;
const selectedRadioSelector = (state) => state.filter.selectedRadio;
const selectedDropSelector = (state) => state.filter.selectedDrop;
const nameActiveSelector = (state) => state.filter.nameActive;
const paramsSelector = (state) => state.filter.params;

export {
  productListSelector,
  loadingStatusSelector,
  totalRowsSelector,
  pageNumSelector,
  detailProductSelector,
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
};

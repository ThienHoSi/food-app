const productListSelector = (state) => state.shop.productList;
const loadingStatusSelector = (state) => state.shop.status;
const totalRowsSelector = (state) => state.shop.totalRows;

export { productListSelector, loadingStatusSelector, totalRowsSelector };

import shopApi from '../../apis/shopApi';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setPaginationActive } from './ShopContentSlice';
import { setName } from '../DetailProductContent/DetailSlice';

const fetchRelatedProducts = createAsyncThunk(
  'products/fetchRelatedProducts',
  async ({ name }) => {
    const res = await shopApi.getAll(name);
    return res;
  }
);

const fetchPagination = createAsyncThunk('shop/fetchPagination', async () => {
  const res = await shopApi.getAll('pagination');
  return res;
});

const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({ name, params, page }, { dispatch, getState }) => {
    name && dispatch(setName(name));
    page
      ? dispatch(setPaginationActive(Number(page) - 1))
      : dispatch(setPaginationActive(0));
    const res = await shopApi.getAll(name, {
      _limit: 16,
      _page: page,
      ...params,
    });
    return res;
  }
);

const fetchProductQnt = createAsyncThunk(
  'products/fetchProductQnt',
  async ({ name, params }) => {
    const res = await shopApi.getAll(name, {
      ...params,
    });
    return res.length;
  }
);

const fetchProductDetail = createAsyncThunk(
  'products/fetchDetailProduct',
  async ({ name, params }) => {
    const res = await shopApi.getAll(name, { ...params });
    return res[0];
  }
);

export {
  fetchRelatedProducts,
  fetchPagination,
  fetchProducts,
  fetchProductQnt,
  fetchProductDetail,
};

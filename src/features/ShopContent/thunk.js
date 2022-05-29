import shopApi from '../../apis/shopApi';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setPaginationActive } from './Filter/FilterSlice';

const fetchRelatedProducts = createAsyncThunk(
  'products/fetchRelatedProducts',
  async ({ name }) => {
    const res = await shopApi.getAll(name);
    return res;
  }
);

const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({ name, params, page }, { dispatch, getState }) => {
    page && dispatch(setPaginationActive(Number(page) - 1));
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
  fetchProducts,
  fetchProductQnt,
  fetchProductDetail,
};

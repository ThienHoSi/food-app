import shopApi from '../../apis/shopApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchPagination = createAsyncThunk(
  'shop/fetchPagination',
  async (name) => {
    const res = await shopApi.getAll('pagination');
    return res[name];
  }
);

const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({ name, params, query }, thunkAPI) => {
    const res = await shopApi.getAll(name, {
      _limit: 16,
      ...params,
    });

    return res;
  }
);

const fetchProductDetail = createAsyncThunk(
  'products/fetchDetailProduct',
  async ({ name, params }) => {
    const res = await shopApi.getAll(name, { ...params });
    return res;
  }
);

export {
  fetchPagination,
  fetchProducts,
  fetchProductDetail,
};

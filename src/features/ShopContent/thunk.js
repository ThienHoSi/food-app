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
  async ({ name, page, limit, query }, thunkAPI) => {
    const res = await shopApi.getAll(name, {
      _limit: 16,
      ...query,
    });

    return res;
  }
);

const fetchProductsBySearch = createAsyncThunk(
  'filter/fetchProductsBySearch',
  async ({ name, query }) => {
    const res = await shopApi.getAll(name, { name_like: query });
    return res;
  }
);

const fetchProductDetail = createAsyncThunk(
  'products/fetchDetailProduct',
  async (productId) => {
    const res = await shopApi.get(productId);
    return res;
  }
);

export {
  fetchPagination,
  fetchProducts,
  fetchProductsBySearch,
  fetchProductDetail,
};

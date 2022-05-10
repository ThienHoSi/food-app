import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import shopApi from '../../apis/shopApi';

export const shopContentSlice = createSlice({
  name: 'shop',
  initialState: {
    loading: null,
    filter: {
      _page: 1,
      _limit: 16,
    },
    shopProducts: [],
    name: null,
    foodById: [],
    totalRow: 0,
    selectedSort: 'Featured',
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    sortProductsByOrder: (state, action) => {
      switch (action.payload) {
        case 'price_lth':
          state.shopProducts.sort((a, b) => a.price - b.price);
          break;
        case 'price_htl':
          state.shopProducts.sort((a, b) => b.price - a.price);
          break;
        case 'rate_lth':
          state.shopProducts.sort((a, b) => a.rate - b.rate);
          break;
        case 'rate_htl':
          state.shopProducts.sort((a, b) => b.rate - a.rate);
          break;
        default:
          return state;
      }
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state, action) => {
        state.loading = 'pending';
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.shopProducts = action.payload;
        state.selectedSort = action.payload;
        state.loading = 'fulfilled';
      })
      .addCase(fetchPagination.pending, (state, action) => {
        state.loading = 'pending';
      })
      .addCase(fetchPagination.fulfilled, (state, action) => {
        state.loading = 'fulfilled';
        state.totalRow = action.payload;
      })
      .addCase(fetchProductDetail.pending, (state, action) => {
        state.loading = 'pending';
      })
      .addCase(fetchProductDetail.fulfilled, (state, action) => {
        state.shopProducts = action.payload;
        state.loading = 'fulfilled';
      });
  },
});

export const { setFilter, sortProductsByOrder, setName } =
  shopContentSlice.actions;

const shopContentReducer = shopContentSlice.reducer;

export const fetchProductById = createAsyncThunk(
  'products/fetchProductsByPag',
  async (params, { dispatch, getState }) => {
    const res = await shopApi.getAll('/best-foods', params);
    return res;
  }
);

export const fetchPagination = createAsyncThunk(
  '/products/fetchPagination',
  async (name) => {
    const res = await shopApi.getAll('pagination', { _page: 1, _limit: 16 });
    return res[name];
  }
);

export const fetchProductDetail = createAsyncThunk(
  '/products/fectchProductDetail',
  async (productId, thunkAPI) => {
    const res = await shopApi.get(productId);
    return res;
  }
);

export default shopContentReducer;

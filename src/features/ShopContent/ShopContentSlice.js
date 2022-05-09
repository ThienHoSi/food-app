import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import shopApi from '../../apis/shopApi';

export const shopContentSlice = createSlice({
  name: 'shop',
  initialState: {
    status: 'idle',
    filter: {
      _page: 1,
      _limit: 16,
    },
    shopProducts: [],
  },
  reducers: {
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
    searchProducts: (state, action) => {
      state.shopProducts.filter((product) =>
        product.name.includes(action.payload)
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductList.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchProductList.fulfilled, (state, action) => {
        state.shopProducts = action.payload;
        state.status = 'idle';
      });
  },
});

export const { setShopProducts, sortProductsByOrder, searchProducts } =
  shopContentSlice.actions;

const shopContentReducer = shopContentSlice.reducer;

export const fetchProductList = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const res = await shopApi.getAll('/best-foods', { _page: 1, _limit: 16 });
    return res;
  }
);

export default shopContentReducer;

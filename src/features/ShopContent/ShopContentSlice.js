import { createSlice } from '@reduxjs/toolkit';
import {
  fetchProducts,
  fetchProductDetail,
  fetchProductQnt,
} from './thunk';

export const shopContentSlice = createSlice({
  name: 'shop',
  initialState: {
    status: 'idle',
    productList: [],
    detailProduct: null,
    paginationActive: 0,
    productId: null,
    productQnt: 0,
  },
  reducers: {
    sortProductsByOrder: (state, action) => {
      switch (action.payload) {
        case 'price_lth':
          state.productList.sort((a, b) => a.price - b.price);
          break;
        case 'price_htl':
          state.productList.sort((a, b) => b.price - a.price);
          break;
        case 'rate_lth':
          state.productList.sort((a, b) => a.rate - b.rate);
          break;
        case 'rate_htl':
          state.productList.sort((a, b) => b.rate - a.rate);
          break;
        default:
          return state;
      }
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setProductId: (state, action) => {
      state.name = action.payload;
    },
    setPaginationActive: (state, action) => {
      state.paginationActive = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = 'pending';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.productList = action.payload;
      })
      .addCase(fetchProductQnt.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.productQnt = action.payload;
      })
      .addCase(fetchProductDetail.pending, (state, action) => {
        state.status = 'pending';
      })
      .addCase(fetchProductDetail.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.detailProduct = action.payload;
      });
  },
});

export const { setSelectedDrop, sortProductsByOrder, setPaginationActive } =
  shopContentSlice.actions;

const shopContentReducer = shopContentSlice.reducer;

export default shopContentReducer;

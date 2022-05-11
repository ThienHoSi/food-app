import { createSlice } from '@reduxjs/toolkit';
import {
  fetchPagination,
  fetchProducts,
  fetchProductDetail,
  fetchProductsBySearch,
} from './thunk';

export const shopContentSlice = createSlice({
  name: 'shop',
  initialState: {
    status: 'idle',
    productList: [],
    totalRows: 0,
    paginationActive: 0,
  },
  reducers: {
    setTotalRows: (state, action) => {
      state.totalRows = action.payload;
    },
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
      .addCase(fetchPagination.pending, (state, action) => {
        state.status = 'pending';
      })
      .addCase(fetchPagination.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.totalRows = action.payload;
      })
      .addCase(fetchProductsBySearch.pending, (state, action) => {
        state.status = 'pending';
      })
      .addCase(fetchProductsBySearch.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.productList = action.payload;
      })
      .addCase(fetchProductDetail.pending, (state, action) => {
        state.status = 'pending';
      })
      .addCase(fetchProductDetail.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.productList = action.payload;
      });
  },
});

export const { setTotalRows, setSelectedDrop, sortProductsByOrder, setName } =
  shopContentSlice.actions;

const shopContentReducer = shopContentSlice.reducer;

export default shopContentReducer;

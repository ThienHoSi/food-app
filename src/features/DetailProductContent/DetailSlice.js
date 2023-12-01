import { createSlice } from '@reduxjs/toolkit';
import { fetchRelatedProducts, fetchProductDetail } from '../ShopContent/thunk';

export const detailSlice = createSlice({
  name: 'detail',
  initialState: {
    status: null,
    detailProduct: null,
    relatedProducts: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetail.pending, (state, action) => {
        state.status = 'pending';
      })
      .addCase(fetchProductDetail.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.detailProduct = action.payload;
      })
      .addCase(fetchRelatedProducts.fulfilled, (state, action) => {
        state.relatedProducts = action.payload;
      });
  },
});

const detailReducer = detailSlice.reducer;

export default detailReducer;

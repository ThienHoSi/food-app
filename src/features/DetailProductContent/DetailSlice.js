import { createSlice } from '@reduxjs/toolkit';
import { fetchRelatedProducts } from '../ShopContent/thunk';

export const detailSlice = createSlice({
  name: 'detail',
  initialState: {
    name: null,
    relatedProducts: [],
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRelatedProducts.fulfilled, (state, action) => {
      state.relatedProducts = action.payload;
    });
  },
});

export const { setName } = detailSlice.actions;

const detailReducer = detailSlice.reducer;

export default detailReducer;

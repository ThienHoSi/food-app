import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => (state = action.payload),
  },
});

export const { addToCart } = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;

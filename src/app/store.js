import { configureStore } from '@reduxjs/toolkit';

import shopContentReducer from '../features/ShopContent/ShopContentSlice';

export const store = configureStore({
  reducer: {
    shop: shopContentReducer,
  },
});

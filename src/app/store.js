import { configureStore } from '@reduxjs/toolkit';
import filterSliceReducer from '../features/ShopContent/Filter/FilterSlice';

import shopContentReducer from '../features/ShopContent/ShopContentSlice';

export const store = configureStore({
  reducer: {
    shop: shopContentReducer,
    filter: filterSliceReducer,
  },
});

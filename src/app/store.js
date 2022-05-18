import { configureStore } from '@reduxjs/toolkit';

import shopContentReducer from '../features/ShopContent/ShopContentSlice';
import filterSliceReducer from '../features/ShopContent/Filter/FilterSlice';
import detailReducer from '../features/DetailProductContent/DetailSlice';

export const store = configureStore({
  reducer: {
    shop: shopContentReducer,
    filter: filterSliceReducer,
    detail: detailReducer,
  },
});

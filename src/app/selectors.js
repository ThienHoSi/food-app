// import { createSelector } from "@reduxjs/toolkit";

export const foodListSelector = (state) => state.shop.shopProducts;
export const fetchProductsStatus = (state) => state.shop.status;

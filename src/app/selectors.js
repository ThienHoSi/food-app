// import { createSelector } from "@reduxjs/toolkit";

export const foodListSelector = (state) => state.shop.shopProducts;
export const selectedSortSelector = (state) => state.shop.selectedSort;
export const loadingStatusSelector = (state) => state.shop.loading;
export const filterSelector = (state) => state.shop.filter;
export const nameSelector = (state) => state.shop.name;
export const totalRowSelector = (state) => state.shop.totalRow;

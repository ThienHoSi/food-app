import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    prevName: null,
    prevPrice: null,
    prevRate: null,
    prevSearch: null,
    selectedRadio: null,
    selectedDrop: 'Featured',
    nameActive: null,
    params: null,
    paginationActive: 0,
  },
  reducers: {
    setPrevName: (state, action) => {
      state.prevName = action.payload;
      state.prevPrice = null;
      state.prevRate = null;
      state.prevSearch = null;
      state.selectedDrop = 'Featured';
      state.params = null;
      state.paginationActive = 0;
    },
    setPrevPrice: (state, action) => {
      state.prevPrice = action.payload;
      state.prevRate = null;
      state.prevSearch = null;
      state.selectedDrop = 'Featured';
      state.paginationActive = 0;
    },
    setPrevRate: (state, action) => {
      state.prevRate = action.payload;
      state.prevPrice = null;
      state.prevSearch = null;
      state.selectedRadio = null;
      state.selectedDrop = 'Featured';
      state.paginationActive = 0;
    },
    setPrevSearch: (state, action) => {
      state.prevSearch = action.payload;
    },
    onSearch: (state, action) => {
      state.prevName = null;
      state.prevPrice = null;
      state.prevRate = null;
      state.selectedRadio = null;
      state.selectedDrop = 'Featured';
      state.nameActive = null;
      state.paginationActive = 0;
    },
    setPrevSort: (state, action) => {
      state.prevPrice = null;
      state.prevRate = null;
      state.selectedRadio = null;
      state.selectedDrop = 'Featured';
    },
    setSelectedRadio: (state, action) => {
      state.selectedRadio = action.payload;
    },
    setPrevSeletedDrop: (state, action) => {
      state.selectedDrop = action.payload;
    },
    setNameActive: (state, action) => {
      state.nameActive = action.payload;
    },
    onPagination: (state, action) => {
      state.prevName = null;
      state.selectedDrop = 'Featured';
    },
    setParams: (state, action) => {
      state.params = action.payload;
    },
    setPaginationActive: (state, action) => {
      state.paginationActive = action.payload;
    },
    onShopReload: (state, action) => {
      state.prevName = null;
      state.prevPrice = null;
      state.prevRate = null;
      state.prevSearch = null;
      state.selectedRadio = null;
      state.selectedDrop = 'Featured';
      state.nameActive = null;
      state.params = null;
      state.paginationActive = 0;
    },
  },
});

export const {
  setPrevName,
  setPrevPrice,
  setPrevRate,
  setPrevSearch,
  onSearch,
  setPrevSort,
  setSelectedRadio,
  setPrevSeletedDrop,
  setNameActive,
  onPagination,
  setParams,
  setPaginationActive,
  onShopReload,
} = filterSlice.actions;

const filterSliceReducer = filterSlice.reducer;

export default filterSliceReducer;

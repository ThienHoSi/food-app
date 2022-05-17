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
    nameActive: 'best-foods',
    params: null,
  },
  reducers: {
    setPrevName: (state, action) => {
      state.prevName = action.payload;
      state.prevPrice = null;
      state.prevRate = null;
      state.prevSearch = null;
      state.selectedDrop = 'Featured';
    },
    setPrevPrice: (state, action) => {
      state.prevPrice = action.payload;
      state.prevRate = null;
      state.prevSearch = null;
      state.selectedDrop = 'Featured';
    },
    setPrevRate: (state, action) => {
      state.prevRate = action.payload;
      state.prevPrice = null;
      state.prevSearch = null;
      state.selectedRadio = null;
      state.selectedDrop = 'Featured';
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
} = filterSlice.actions;

const filterSliceReducer = filterSlice.reducer;

export default filterSliceReducer;

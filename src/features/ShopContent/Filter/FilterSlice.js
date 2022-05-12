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
  },
  reducers: {
    setPrevName: (state, action) => {
      state.prevName = action.payload;
      state.prevPrice = null;
      state.prevRate = null;
      state.selectedDrop = 'Fetured';
    },
    setPrevPrice: (state, action) => {
      state.prevPrice = action.payload;
      state.prevRate = null;
      state.selectedDrop = 'Fetured';
    },
    setPrevRate: (state, action) => {
      state.prevRate = action.payload;
      state.prevPrice = null;
      state.selectedRadio = null;
      state.selectedDrop = 'Fetured';
    },
    setPrevSearch: (state, action) => {
      state.prevSearch = action.payload;
    },
    onSearch: (state, action) => {
      state.prevName = null;
      state.prevPrice = null;
      state.prevRate = null;
      state.selectedRadio = null;
      state.selectedDrop = 'Fetured';
      state.nameActive = null;
    },
    setPrevSort: (state, action) => {
      state.prevPrice = null;
      state.prevRate = null;
      state.selectedRadio = null;
      state.selectedDrop = 'Fetured';
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
} = filterSlice.actions;

const filterSliceReducer = filterSlice.reducer;

export default filterSliceReducer;

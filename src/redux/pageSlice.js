import { createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

const name = 'MypageSlice';

const initialState = {
  filter: 'all',
  filter_day: '수',
  filter_location: '정문',
  filter_category: '음식',
  filter_viewer: 'location',
};

export const mypageSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    initFilter: state => {
      state.filter = initialState.filter;
      state.filter_day = initialState.filter_day;
      state.filter_location = initialState.filter_location;
      state.filter_category = initialState.filter_category;
    },
    setFilter: (state, action) => {
      state.filter = action.payload.filter;
    },
    setFilterDay: (state, action) => {
      state.filter_day = action.payload.filter_day;
    },
    setFilterLocation: (state, action) => {
      state.filter_location = action.payload.filter_location;
    },
    setFilterCategory: (state, action) => {
      state.filter_category = action.payload.filter_category;
    },
    setFilterViewer: (state, action) => {
      state.filter_viewer = action.payload.filter_viewer;
    },
  },
  extraReducers: builder => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const {
  initFilter,
  setFilter,
  setFilterDay,
  setFilterLocation,
  setFilterCategory,
  setFilterViewer,
} = mypageSlice.actions;

export default mypageSlice.reducer;

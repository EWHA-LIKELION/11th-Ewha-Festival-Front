import { createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

const name = 'BoothSlice';

const initialState = {
  booth_id: 0,
};

export const boothSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    initBooth: state => {
      state.booth_id = initialState.booth_id;
    },
    setBooth_id: (state, action) => {
      state.booth_id = action.payload.booth_id;
    },
  },
  extraReducers: builder => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { setBooth_id, initBooth } = boothSlice.actions;

export default boothSlice.reducer;

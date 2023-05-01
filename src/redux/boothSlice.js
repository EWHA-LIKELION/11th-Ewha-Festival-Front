import { createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

const name = 'BoothSlice';

const initialState = {
  booth_id: 0,
  booth_name: '',
};

export const boothSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    initBooth: state => {
      state.booth_id = initialState.booth_id;
      state.booth_name = initialState.booth_name;
    },
    setBooth_id: (state, action) => {
      state.booth_id = action.payload.booth_id;
    },
    setBooth_name: (state, action) => {
      state.booth_name = action.payload.booth_name;
    },
  },
  extraReducers: builder => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { setBooth_id, initBooth, setBooth_name } = boothSlice.actions;

export default boothSlice.reducer;

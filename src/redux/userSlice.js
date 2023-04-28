import { createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

const name = 'UserSlice';

const initialState = {
  ID: '',
  PW: '',
  nickname: '',
  isBooth: false,
  isTF: false,
};

export const userSlice = createSlice({
  name: name,
  initialState,
  reducers: {
    initUser: state => {
      state.ID = initialState.ID;
      state.PW = initialState.PW;
      state.nickname = initialState.nickname;
    },
    setUser: (state, action) => {
      state.ID = action.payload.ID;
      state.PW = action.payload.PW;
      state.nickname = action.payload.nickname;
    },
    setUserTask: (state, action) => {
      state.isBooth = action.payload.isBooth;
      state.isTF = action.payload.isTF;
    },
  },
  extraReducers: builder => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { setUser, initUser, setUserTask } = userSlice.actions;

export default userSlice.reducer;

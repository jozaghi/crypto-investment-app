import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getCoins = createAsyncThunk('coins/getCoins', async () => {
  return fetch('http://127.0.0.1:5000/coins/').then((res) => res.json());
});

const coinListSlice = createSlice({
  name: 'coinList',
  initialState: {
    coins: [],
  },
  extraReducers: {
    [getCoins.fulfilled]: (state, { payload }) => {
      state.coins = payload.results;
    },
  },
});

export default coinListSlice.reducer;

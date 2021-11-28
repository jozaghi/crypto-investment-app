import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  latestPrice: 0,
  lastUpdateAt: null,
  priceHistory: [],
};

const coinLivePriceSlice = createSlice({
  name: 'coinLivePrice',
  initialState,
  reducers: {
    resetPriceFeed: () => initialState,
    updatePriceFeed: (state, action) => {
      state.lastUpdateAt = action.payload.lastUdatedAt;
      state.latestPrice = action.payload.latestPrice;
      state.priceHistory = [...state.priceHistory, action.payload.latestPrice];
    },
  },
});

export const { resetPriceFeed, updatePriceFeed } = coinLivePriceSlice.actions;

export default coinLivePriceSlice.reducer;

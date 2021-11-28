import { configureStore } from '@reduxjs/toolkit';
import coinListReducer from './coinListSlice';
import coinLivePriceSlice from './coinLivePriceSlice';

export const store = configureStore({
  reducer: {
    coinList: coinListReducer,
    coinLivePrice: coinLivePriceSlice,
  },
});

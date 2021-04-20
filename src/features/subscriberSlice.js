import { createSlice } from '@reduxjs/toolkit';

export const subscriberSlice = createSlice({
  name: 'subscription',
  initialState: {
    subscription: null,
  },
  reducers: {
    isSubscribed: (state, action) => {
      state.subscription = action.payload;
    },
    resetSubscribe: (state) => {
      state.subscription = null;
    },
  },
});

export const { isSubscribed, resetSubscribe } = subscriberSlice.actions;

export const subscriptionStatus = (state) => state.subscription.subscription;

export default subscriberSlice.reducer;

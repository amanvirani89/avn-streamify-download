import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import subscriptionReducer from '../features/subscriberSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    subscription: subscriptionReducer,
  },
});

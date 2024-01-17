import { configureStore } from '@reduxjs/toolkit';
import greetingSlice from './greetingSlice';

const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    greetings: greetingSlice,
  },
});

export default store;

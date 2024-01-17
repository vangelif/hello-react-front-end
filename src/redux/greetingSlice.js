// import axios from 'axios'
import { createSlice } from '@reduxjs/toolkit';
import fetchGreetings from './fetchGreetings';

const initialState = {
  data: '',
  status: 'idle',
  error: null,
};

const greetingSlice = createSlice({
  name: 'greetings',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreetings.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGreetings.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        console.log('PAYLOAD: ', action.payload);
      })
      .addCase(fetchGreetings.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default greetingSlice.reducer;

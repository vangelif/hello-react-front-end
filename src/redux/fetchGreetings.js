import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'http://127.0.0.1:3000/api/v1/greetings';

const fetchGreetings = createAsyncThunk('greetings/fetchGreetings', async (arg, { rejectWithValue }) => {
  try {
    const response = await axios.get(URL);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue(error.response.data);
  }
});

export default fetchGreetings;

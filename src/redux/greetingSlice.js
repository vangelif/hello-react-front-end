// import axios from 'axios'
import fetchGreetings from './fetchGreetings';
import { createSlice } from '@reduxjs/toolkit'

// const URL = 'http://127.0.0.1:3000/api/v1/greetings';

// export const fetchGreetings = createAsyncThunk('greetings/fetchGreetings', async (arg, { rejectWithValue }) => {
// try {
//     const response = await axios.get(URL);
//     console.log(response.data);
//     return response.data;
// } catch (error) {
//     console.log(error);
//     return rejectWithValue(error.response.data);
// }
// });

const initialState = {
    data: "",
    status: 'idle',
    error: null
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
                console.log("PAYLOAD: ",action.payload);
            })
            .addCase(fetchGreetings.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
});

export default greetingSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { cartype, initialState } from '../hooks/types';

export const fetchProducts = createAsyncThunk<cartype[]>('products/fetch', async (selectednum) => {
  try {
    const response = await fetch(`http://localhost:3000/cars?_page=${selectednum}&_limit=6`);
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
});

const fetchProductSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default fetchProductSlice.reducer;
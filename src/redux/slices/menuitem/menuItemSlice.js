import { createSlice } from '@reduxjs/toolkit';
import { fetchMenuItems } from  '../../thunks/menuitemThunk';

const menuItemsSlice = createSlice({
  name: 'menuItems',
  initialState: { items: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenuItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMenuItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
  
       
        state.items = action.payload;
      })
      .addCase(fetchMenuItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default menuItemsSlice.reducer;
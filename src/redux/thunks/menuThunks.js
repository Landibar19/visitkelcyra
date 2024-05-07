import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMenus = createAsyncThunk('menus/fetchMenus', async (query) => {
  try {
    const response = await fetch(`http://localhost:1337/api/menus?query=${query}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    
    return data;
    
  } catch (error) {
    console.error("A problem occurred when fetching the data: ", error);
    throw error;
  }
});
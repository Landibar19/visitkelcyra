import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMenus = createAsyncThunk('menus/fetchMenus', async (query) => {
  try {
    const url = query 
    ? `https://visitkelcyrastrapi.onrender.com/api/menus?query=${query}` 
    : 'https://visitkelcyrastrapi.onrender.com/api/menus';
  const response = await fetch(url);
    console.log(response)
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
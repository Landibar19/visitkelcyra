// store.js
import { configureStore } from '@reduxjs/toolkit';
import menusReducer from './slices/menu/menuSlice'
import menuItemsReducer from  './slices/menuitem/menuItemSlice'

export const store = configureStore({
  reducer: {
    menus: menusReducer,
    menuItems: menuItemsReducer,
  },
});
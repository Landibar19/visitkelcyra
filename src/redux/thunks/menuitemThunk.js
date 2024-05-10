import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMenuItems = createAsyncThunk('menuItems/fetchMenuItems', async () => {
  try {
    const response = await fetch('https://visitkelcyrastrapi.onrender.com/api/menus');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    const data = responseData.data;
    console.log(data);
    if (data && Array.isArray(data)) {
      const menuItems = data.map(item => ({
        id: item.id,
        menuitems: item.attributes.menuitems.map(menuitem => ({
          id: menuitem.id,
          link: menuitem.link,
          menuitemdetail: menuitem.menuitemdetail,
          title: menuitem.title,
        })),
      }));
      console.log(menuItems)
      return menuItems;
      
    } else {
      throw new Error('Unexpected data structure');
    }
  } catch (error) {
    console.error('Failed to fetch menu items:', error);
    throw error;
  }
});
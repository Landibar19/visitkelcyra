import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {fetchMenuItems} from '../../redux/thunks/menuitemThunk';
import { Box, Grid } from '@mui/material';

const MenuItem = () => {
  const { link } = useParams();

  const dispatch = useDispatch();
  const menuItems = useSelector(state => state.menuItems.items);
  const menuItemsStatus = useSelector(state => state.menuItems.status);
  const [menuItemsData, setMenuItemsData] = useState([]);
  console.log(menuItemsData)

  console.log(menuItems);
  useEffect(() => {
    if (menuItemsStatus === 'idle') {
      dispatch(fetchMenuItems());
    }
  }, [menuItemsStatus, dispatch]);
  
 
  useEffect(() => {
    if (menuItemsStatus === 'succeeded' && menuItems.length > 0) {
      let clickedMenuItem = null;
      menuItems.forEach(menuItem => {
        menuItem.menuitems.forEach(subMenuItem => {
          if (subMenuItem.link === link) {
            clickedMenuItem = subMenuItem;
          }
        });
      });
      setMenuItemsData(clickedMenuItem ? [clickedMenuItem] : []);
    }
  }, [menuItemsStatus, menuItems, link]);

  if (menuItemsStatus === 'loading') {
    return <div>Loading...</div>;
  }
  
  if (menuItemsStatus === 'failed') {
    return <div>Error loading menu items.</div>;
  }
  
  return (
    <Grid container spacing={3} sx={{padding: 5, marginBottom:'5%', marginTop:'5%' }}>
      {menuItemsData && menuItemsData.map((menuItem, index) => (
        <Grid item xs={12} key={index}>
          <Box sx={{ borderBottom: '5px solid rgba(144,179,25,255)'}}>
            <h1 style={{color: 'rgba(144,179,25,255)'}}>{menuItem.title}</h1> 
          </Box>
          <Grid container spacing={4}>
  {menuItem.menuitemdetail.map((detail, detailIndex) => {
    const imageUrl = detail.photos && detail.photos.data && detail.photos.data.length > 0 
      ? detail.photos.data[0].attributes.url
      : '';
    return (
      <Grid item xs={12} sm={6} md={4} key={detailIndex} >
        <Link to={`/menuitem/${menuItem.link}/${detail.link}`} style={{textDecoration: 'none'}}>
          <h2 style={{color: 'rgba(144,179,25,255)'}}>{detail.title}</h2>
          <img 
            src={imageUrl} 
            alt={detail.title} 
            style={{
              width:'100%', 
              height:"100%", 
              maxWidth:'400px', 
              maxHeight:"300px",
              borderRadius: '5px',
            }} 
          />
          <p style={{color:"ActiveBorder", marginBottom:'2%'}}>{detail.description}</p>
        </Link>
      </Grid>
    );
  })}
</Grid>
        </Grid>
      ))}
    </Grid>
  );

};

export default MenuItem;
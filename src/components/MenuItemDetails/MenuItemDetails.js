import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Grid  } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenuItems } from '../../redux/thunks/menuitemThunk';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

function MenuItemDetails() {
  const { link, detailLink } = useParams();

  const dispatch = useDispatch();
  const menuItems = useSelector(state => state.menuItems.items);
  console.log(menuItems);
  const [loading, setLoading] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);

  const menuItem = menuItems.flatMap(item => item.menuitems).find(item => item.link === link);
  const detailItem = menuItem?.menuitemdetail.find(detail => detail.link === detailLink);

  
  useEffect(() => {
    if (menuItems.length === 0) {
      dispatch(fetchMenuItems()).then(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [dispatch, menuItems.length]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Grid container spacing={3} p={5} sx={{display:'flex', flexDirection: 'row'}}>
      <Grid item xs={12} sm={6} md={4} sx={{alignItems: 'center', justifyContent: 'center', p:2, with:'100%', height:'100%'}}>
        {detailItem && <Typography variant="h4" mb={6}>{detailItem.title}</Typography>}
        {detailItem.photos && detailItem.photos.data && detailItem.photos.data.length > 0 
          ? <>
              <AwesomeSlider selected={activeSlide} >
                {detailItem.photos.data.map((photo, index) => (
                  <div key={index} data-src={`http://localhost:1337${photo.attributes.url}`} />
                ))}
              </AwesomeSlider>
              <div style={{display: 'flex', justifyContent: 'center',}}>
                {detailItem.photos.data.map((photo, index) => (
                  <img 
                    key={index} 
                    src={`http://localhost:1337${photo.attributes.url}`} 
                    alt={`${detailItem.title} ${index}`} 
                    style={{
                      width: '50px', 
                      height: '50px', 
                      objectFit: 'cover',
                       marginTop: 40, 
                       marginRight: '5x',
                      cursor: 'pointer', 
                      border: index === activeSlide ? '2px solid rgba(144,179,25,255)' : '2px solid #fff', 
                      borderRadius: '5px'
                    }}
                    onClick={() => setActiveSlide(index)}
                  />
                ))}
              </div>
            </>
          : ' No photo to show'}
      </Grid>
      <Grid item xs={12} sm={6} md={8} 
      sx={{
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center', 
        textAlign:'justify',
        p:5,
        marginTop: '10%', 
        width:'100%', 
        height:'100%'}}>
        <Typography sx={{margin: 'auto', width:'100%'}}>{detailItem.description}</Typography>
</Grid>
    </Grid>
  );
}

export default MenuItemDetails;
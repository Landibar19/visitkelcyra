import React from 'react';
import { Box, Grid, Typography, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import {data} from './Section4Content';


const useStyles = makeStyles({
  root: { 
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    border: '5px solid rgba(144,179,25,255)',
    borderRadius: '15px',
  },
  imageContainer: {
    width: '80%',
    height: '70%',
    alignItems: 'center',
    margin: '2% auto',
    paddingTop: '5%',
  },
  image: {
    width: '90%',
    height: '80%',
    borderRadius: '24px',
  },
  background: {
    backgroundColor: 'rgba(144,179,25,255)',
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '2% ',
  }
});

const Section4 = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  return (
    <div>
    {data.map((item, index) => (
      <Box key={index} p={3}>
        <Grid container spacing={1}  className={classes.root} >
          <Grid item xs={12} sm={7} className={classes.imageContainer}>
            <img src={item.image} alt={item.title} className={classes.image} />
          </Grid>
          <Grid item xs={12} sm={4} className={classes.background}>
            <Typography variant={isMobile ? "h5" : "h4"} style={{fontFamily: 'Madimi One, sans-serif'}}>{item.title}</Typography>
            <Typography variant= {isMobile ? "body2" : "body1"} style={{fontFamily: 'Madimi One, sans-serif'}} >{item.description}</Typography>
          </Grid>
      </Grid>
      </Box>
    ))}
  </div>
  );
};

export default Section4;
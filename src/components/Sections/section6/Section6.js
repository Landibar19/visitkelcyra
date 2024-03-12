import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Section6Content} from './Section6Content';

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    position: 'relative',
    padding: theme.spacing(2),
    border: '8px solid rgba(144,179,25,200)',
  },
  gridItem: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  div:{
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '20px',
    margin: '0 auto',
  },
  image: {
    width: '100%',
    maxWidth: '600px',
    transition: 'opacity 2s',
    opacity: 0,
  },
  imageActive: {
    opacity: 1,
  }
}));

const Section6 = () => {
  const classes = useStyles();
  const {data, description, title} = Section6Content;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
 

  useEffect(() => {
    const timer = setInterval(() => {
      setOpacity(0);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (opacity === 0) {
      setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % data.length);
        setOpacity(1);
      }, 2000);
    }
  }, [opacity, currentIndex, data.length]);

  return (
    <div className={classes.div} style={{flexDirection: isMobile ? 'column' : 'row',
  }}>
      <Box sx={{
      width: '95%',
      display: 'flex',
      justifyContent: 'center', 
      flexDirection: 'column',
      alignItems: 'center',
      border: '8px solid rgba(144,179,25,200)',
      padding:3
    }}>
      <Typography variant='h4'>
        {title}
      </Typography>
      <Typography variant="h5" style={{width: isMobile ?'100%' : '70%'}} >
        {description}
      </Typography>
    </Box>
      <Box>
        <Grid container className={classes.gridContainer}>
          <Grid item xs={12} className={classes.gridItem}>
            <img src={data[currentIndex].image} alt={data[currentIndex].label} className={classes.image} style={{opacity: opacity}}/>
            <div style={{color: 'black'}}>{data[currentIndex].label}</div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Section6;
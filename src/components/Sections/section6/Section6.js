import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, useMediaQuery, Container } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Section6Content} from './Section6Content';

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    position: 'relative',
    border: '8px solid rgba(144,179,25,200)',
  },
  gridItem: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  div:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '0 auto',
    textAlign: 'justify',
    gap:'10%',
  },
  image: {
    width: '100%',
    maxWidth: '640px',
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
    let timeoutId;
    if (opacity === 0) {
      timeoutId = setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % data.length);
        setOpacity(1);
      }, 2000);
    }
    return () => clearTimeout(timeoutId); 
  }, [opacity, currentIndex, data.length]);
return(
  <Container>
      <div className={classes.div} style={{flexDirection: isMobile ? 'column' : 'row'}}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center', 
          flexDirection: 'column',
          alignItems: 'center',
          border: '8px solid rgba(144,179,25,200)',
        }}>
          <Typography variant='h5' style={{fontWeight: 'bold'}}>
            {title}
          </Typography>
          <Typography variant="h6">
            {description}
          </Typography>
        </Box>
        <Box>
          <Grid container className={classes.gridContainer}>
            <Grid item xs={12}  className={classes.gridItem}>
              <img 
              src={data[currentIndex].image} 
              alt={data[currentIndex].label} 
              className={classes.image} 
              style={{opacity: opacity}}/>
              <div style={{color: 'black'}}>{data[currentIndex].label}</div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Container>
);
};

export default Section6;


import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Typography, Box } from '@mui/material';
import {Section5Content} from './Section5Content';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '80%',
    margin: '0 auto',
    textAlign: 'justify'
  },
  image: {
    borderRadius: '16px',
  },
  imageContainer: {
    width: '90%',
    height: '70%',
    margin: '2% auto',
    position: 'relative',
  },
  label: {
    position: 'absolute',
    top: '10px',
    left: '30%',
    color: 'white',
    backgroundColor: 'rgba(144,179,25,200)',
    padding: '10px',
    borderRadius: '8px',
    fontFamily: 'Madimi One, sans-serif',
    fontSize: '2.5vw',
  }
});

const Section5 = () => {
  const classes = useStyles();
  const renderThumb = (children) =>
    children.map((item, id) => <img  key={id} src={item.props.children[0].props.src}  alt=''/>);

  const {data, description} = Section5Content;
  return (
    <div className={classes.root}>
      <Typography variant="h4">Akomodimi dhe gastronomia</Typography>
      <Typography variant="body1">
        {description}
      </Typography>
      <Carousel renderThumbs={renderThumb}>
        
        {data.map((item , index) => (
          <div key={index} className={classes.imageContainer}>
            <img src={item.image} alt={item.label} className={classes.image} />
            <Box className={classes.label}>{item.label}</Box>
          </div>
        ))} 
      </Carousel>
    </div>
  );
};

export default Section5;
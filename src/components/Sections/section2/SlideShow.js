import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { makeStyles } from '@material-ui/core/styles';

import images from './Section2Content';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'rgba(144,179,25,255)',
    width: '90%', 
    height: '60%',
    margin: '0 auto',
    color: '#fff',
    fontSize: '20px',
    '& .image-gallery-slide img': {
      width: '70%',
      height: '60%',
      objectFit: 'cover',
      paddingTop: '2%'
    },
  },
});

function SlideShow() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <ImageGallery items={images} />
    </div>
  );
}

export default SlideShow;

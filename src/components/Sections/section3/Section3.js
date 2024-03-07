import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import images from './Section3Content';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

const useStyles = makeStyles({
    root: {
    boxShadow: '0 3px 5px 2px rgba(144, 238, 154, 3)',
      paddingTop: '20px',
      borderRadius: '15px',
      backgroundColor: '#fff',
      width: '85%',
      margin: '0 auto',
    },
    actionArea: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    media: {
      height: '250px',
      width: '100%',
      objectFit: 'cover',
      borderRadius: '10px',
    },
    content: {
      marginTop: '10px',
    },
    title: {
        fontSize: '20px',
        fontWeight: 'bold',
      },
      description: {
        marginTop: '10px',
        fontSize: '16px',
      },
      button: {
        margin: '10px',
        padding: '10px 20px',
        backgroundColor: '#3f51b5',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: '#303f9f',
        },
      },
    });

export default function MediaCard() {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:600px)');
  const [showMore, setShowMore] = useState(Array(images.length).fill(false));

  const toggleShowMore = index => {
    setShowMore(prevShowMore => {
      const newShowMore = [...prevShowMore];
      newShowMore[index] = !newShowMore[index];
      return newShowMore;
    });
  };

  return (
    <Box p={3}>
        <Typography 
        variant="h2" 
        align="center"
         gutterBottom>
            Eksploro vendet me te bukura te Kelcyres
        </Typography>
        <Grid container  spacing={3}>
        {images.slice(0, matches ? 6 : 6).map((image, index) => (
            <Grid item xs={12} sm={4} key={index}>
            <div className={classes.root}>
                <div className={classes.actionArea}>
                    <img className={classes.media} src={image.image} alt={image.title} />
                    <div className={classes.content}>
                    <h2 className={classes.title}>{image.title}</h2>
                    <p className={classes.description}>
                        {showMore[index] ? image.description : `${image.description.substring(0, 100)}...`}
                    </p>
                    </div>
                </div>
                <button className={classes.button} onClick={() => toggleShowMore(index)}>
                    {showMore[index] ? 'Show Less' : 'Show More'}
                </button>
                </div>
            </Grid>
        ))}
        </Grid>
    </Box>
  );
}
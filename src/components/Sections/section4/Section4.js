import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import {data} from './Section4Content';

const useStyles = makeStyles({
  image: {
    width: '80%',
    height: '70%',
  },
});

const Section4 = () => {
  const classes = useStyles();

  return (
    <div>
      {data.map((item, index) => (
        <Grid container spacing={3} key={index}>
          <Grid item xs={12} sm={6}>
            <img src={item.image} alt={item.title} className={classes.image} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4">{item.title}</Typography>
            <Typography variant="body1">{item.description}</Typography>
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

export default Section4;
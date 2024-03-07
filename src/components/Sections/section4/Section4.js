import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import {data} from './Section4Content';

const useStyles = makeStyles({
  root: { 

    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2% auto',
    border: '5px solid rgba(144,179,25,255)',
  },
  image: {
    width: '80%',
    height: '70%',
    borderRadius: '16px',
    alignItems: 'center',
    margin: '2% auto',
    paddingTop: '5%',
  
  },
  background: {
    backgroundColor: 'rgba(144,179,25,255)'},
});

const Section4 = () => {
  const classes = useStyles();

  return (
    <div>
      {data.map((item, index) => (
        <Grid container spacing={3} key={index} className={classes.root}>
          <Grid item xs={12} sm={6}>
            <img src={item.image} alt={item.title} className={classes.image} />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.background}>
            <Typography variant="h4">{item.title}</Typography>
            <Typography variant="body1">{item.description}</Typography>
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

export default Section4;
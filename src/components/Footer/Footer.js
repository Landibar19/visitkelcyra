import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Box, makeStyles } from '@material-ui/core';
import {footerData} from './FooterContent';
const useStyles = makeStyles((theme) => ({
  gridContainer: {
    position: 'relative',
    backgroundColor: 'rgba(144,179,25,200)',
    color: 'white',
  },
  gridItem: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: '0 auto',
    width: '90%'
  },
  typographyItem:{
    display: 'flex',
    justifyContent: 'left',
    textAlign: "left",
    paddingTop: '5%'
  },
  typographySubItem: {
   display: 'flex',
   justifyContent:"flex-start",
   textAlign: 'left',
   alignItems: 'center'
  },
  imageActive: {
    opacity: 1,
  }
}));

function Footer() {

  const classes = useStyles();
  return (
    <footer>
      <Box p={5}>
       <Grid container spacing={3} className={classes.gridContainer}>
        {Object.values(footerData).map((columnData, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <Typography variant="h6" className={classes.typographyItem}>{columnData.title}</Typography>
            {columnData.description && (
              <Typography variant="body2" className={classes.typographyItem}>
                <div dangerouslySetInnerHTML={{ __html: columnData.description.replace(/\n/g, '<br />') }} />
              </Typography>
            )}
            {columnData.subtitles && columnData.subtitles.map((subtitle, index) => (
              <Typography variant="subtitle1" key={index} pt={2} className={classes.typographySubItem}>{subtitle}</Typography>
            ))}
          </Grid>
        ))}
      </Grid> 
      </Box>
      
    </footer>
  );
}

export default Footer;